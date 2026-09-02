"use client";

import { useEffect } from "react";

const GOOGLE_ADS_ID = "AW-17029360199";
const GOOGLE_ANALYTICS_ID = "G-TDJP607ZP4";
const GTM_ID = "GTM-KMBNQ2D8";
const ZENDESK_SRC = "https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10";

function appendScript(id, src, onLoad) {
  const existingScript = document.getElementById(id);
  if (existingScript) {
    if (existingScript.dataset.loaded === "true") onLoad?.();
    else if (onLoad) existingScript.addEventListener("load", onLoad, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  script.addEventListener("load", () => {
    script.dataset.loaded = "true";
    onLoad?.();
  }, { once: true });
  document.head.appendChild(script);
}

function activateVisibleEmbeds() {
  const embeds = Array.from(document.querySelectorAll("iframe[data-deferred-src]"));
  const activateEmbed = (embed) => {
    const src = embed.dataset.deferredSrc;
    if (!src) return;
    embed.src = src;
    delete embed.dataset.deferredSrc;
  };

  if (!("IntersectionObserver" in window)) {
    embeds.forEach(activateEmbed);
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      activateEmbed(entry.target);
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: "300px 0px" });

  embeds.forEach((embed) => observer.observe(embed));
}

export default function DeferredThirdParties() {
  useEffect(() => {
    let hasLoadedAnalytics = false;

    const loadAnalytics = () => {
      if (hasLoadedAnalytics) return;
      hasLoadedAnalytics = true;

      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GOOGLE_ADS_ID);
      window.gtag("config", GOOGLE_ANALYTICS_ID);

      appendScript("google-tag", `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`);
      appendScript("gtm", `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
    };

    const loadZendesk = (openChat = false) => {
      appendScript("ze-snippet", ZENDESK_SRC, () => {
        if (openChat && window.zE) window.zE("webWidget", "toggle");
      });
    };

    window.toggleChat = () => loadZendesk(true);

    const loadOnIntent = () => {
      loadAnalytics();
      activateVisibleEmbeds();
      removeIntentListeners();
    };
    const removeIntentListeners = () => {
      ["pointerdown", "keydown", "touchstart", "scroll"].forEach((eventName) => {
        window.removeEventListener(eventName, loadOnIntent);
      });
    };

    ["pointerdown", "keydown", "touchstart", "scroll"].forEach((eventName) => {
      window.addEventListener(eventName, loadOnIntent, { once: true, passive: true });
    });
    window.addEventListener("third-party-consent-granted", loadOnIntent, { once: true });

    return () => {
      removeIntentListeners();
      window.removeEventListener("third-party-consent-granted", loadOnIntent);
      delete window.toggleChat;
    };
  }, []);

  return null;
}
