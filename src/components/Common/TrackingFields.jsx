"use client";
import React, { useState, useEffect } from "react";

export default function TrackingFields() {
  const [fields, setFields] = useState({
    first_landing_url: "",
    lead_source: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    gclid: "",
    original_referrer: "",
    form_submission_url: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFields({
        first_landing_url: localStorage.getItem("first_landing_url") || "",
        lead_source: localStorage.getItem("lead_source") || "Organic",
        utm_source: localStorage.getItem("utm_source") || "",
        utm_medium: localStorage.getItem("utm_medium") || "",
        utm_campaign: localStorage.getItem("utm_campaign") || "",
        gclid: localStorage.getItem("gclid") || "",
        original_referrer: localStorage.getItem("original_referrer") || "",
        form_submission_url: window.location.pathname || ""
      });
    }
  }, []);

  return (
    <>
      <input type="hidden" name="first_landing_url" value={fields.first_landing_url} />
      <input type="hidden" name="lead_source" value={fields.lead_source} />
      <input type="hidden" name="utm_source" value={fields.utm_source} />
      <input type="hidden" name="utm_medium" value={fields.utm_medium} />
      <input type="hidden" name="utm_campaign" value={fields.utm_campaign} />
      <input type="hidden" name="gclid" value={fields.gclid} />
      <input type="hidden" name="original_referrer" value={fields.original_referrer} />
      <input type="hidden" name="form_submission_url" value={fields.form_submission_url} />
    </>
  );
}
