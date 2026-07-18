import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, find the element and scroll to it
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to allow the DOM to render if navigating from another page
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Otherwise, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
