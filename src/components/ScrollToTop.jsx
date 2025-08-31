import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on every route change.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    //   behavior: "instant", // Use "smooth" if you want animation
    });
  }, [pathname]);

  return null;
}