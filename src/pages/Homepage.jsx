


import { useEffect, useRef, useState } from "react";

import HeroSection from "../components/homepage/HeroSection";
import EarnCertificate from "../components/homepage/EarnCertificate";
import HireSection from "../components/homepage/HireSection";
import IndustryProsSection from "../components/homepage/IndustryProsSection";
import LearningPathSection from "../components/homepage/LearningPathSection";
import OtherServicesSection from "../components/homepage/OtherServicesSection";
import OurFounderSection from "../components/homepage/OurFounderSection";
import OurTalentsSection from "../components/homepage/OurTalentsSection";
import PartnerWithUsSection from "../components/homepage/PartnerWithUsSection";
import WhatMakesUsUniqueSection from "../components/homepage/WhatMakesUsUniqueSection";
import WhoWeAreSection from "../components/homepage/WhoWeAreSection";
import FaqSection from "../components/homepage/FaqSection";
// import SubscribeToOurNewsletter from "../components/homepage/SubscribeToOurNewsletter";

import ScrumPopUp from "../components/ScrumPopUp";

export default function Homepage() {
  const [showPopup, setShowPopup] = useState(false);
  const uniqueRef = useRef(null);

  /** --- Session storage helpers --- */
  const safeGet = (key) => {
    try {
      return window.sessionStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const safeSet = (key, val) => {
    try {
      window.sessionStorage.setItem(key, val);
    } catch {
      // ignore storage errors
    }
  };

  /** --- Scroll-safe modal handler --- */
  const openModal = () => setShowPopup(true);
  const closeModal = () => setShowPopup(false);

  useEffect(() => {
    // Only show once per session
    if (safeGet("scrumPopupShown") === "true") return;

    const el = uniqueRef.current;
    if (!el || typeof window === "undefined") return;

    let hasShownThisLoad = false;

    const onIntersect = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasShownThisLoad) {
        hasShownThisLoad = true;
        openModal();
        safeSet("scrumPopupShown", "true");
        observer.disconnect();
      }
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(onIntersect, {
        threshold: 0.2,
        root: null,
        rootMargin: "-120px 0px -10% 0px", // account for pt-[120px] header
      });
      observer.observe(el);
      return () => observer.disconnect();
    }

    // Fallback scroll listener
    const onScrollFallback = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.8 && rect.bottom > vh * 0.2 && !hasShownThisLoad) {
        hasShownThisLoad = true;
        openModal();
        safeSet("scrumPopupShown", "true");
        window.removeEventListener("scroll", onScrollFallback);
      }
    };

    window.addEventListener("scroll", onScrollFallback, { passive: true });
    onScrollFallback(); // immediate check
    return () => window.removeEventListener("scroll", onScrollFallback);
  }, []);

  return (
    <div className="pt-[120px]">
      <HeroSection />
      <WhoWeAreSection />
      <LearningPathSection />

      {/* Attach ref for intersection observer */}
      <WhatMakesUsUniqueSection ref={uniqueRef} />

      <EarnCertificate />
      {/* <IndustryProsSection /> */}
      <OurTalentsSection />
      <OurFounderSection />
      <PartnerWithUsSection />
      <HireSection />
      <OtherServicesSection />
      <FaqSection />
      {/* <SubscribeToOurNewsletter /> */}

      {/* Scroll-safe Scrum popup */}
      <ScrumPopUp isOpen={showPopup} onClose={closeModal} />
    </div>
  );
}
