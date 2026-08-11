"use client";
import { useEffect } from "react";

export default function LeadTracker() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("lead_tracking_initialized")) {
        // 1. First Landing URL (relative path, e.g. /3d-animation-services)
        const firstLandingUrl = window.location.pathname;

        // 2. Original Referrer
        const referrer = document.referrer || "Direct";

        // Parse UTM parameters
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get("gclid") || "";
        const utmSource = urlParams.get("utm_source") || "";
        const utmMedium = urlParams.get("utm_medium") || "";
        const utmCampaign = urlParams.get("utm_campaign") || "";

        // PPC vs Organic classification
        const ppcMediums = ["cpc", "ppc", "paid", "paidsearch"];
        const isPPC = gclid !== "" || ppcMediums.includes(utmMedium.toLowerCase());
        const leadSource = isPPC ? "PPC" : "Organic";

        localStorage.setItem("first_landing_url", firstLandingUrl);
        localStorage.setItem("lead_source", leadSource);
        localStorage.setItem("utm_source", utmSource);
        localStorage.setItem("utm_medium", utmMedium);
        localStorage.setItem("utm_campaign", utmCampaign);
        localStorage.setItem("gclid", gclid);
        localStorage.setItem("original_referrer", referrer);

        localStorage.setItem("lead_tracking_initialized", "true");
      }
    }
  }, []);

  return null;
}
