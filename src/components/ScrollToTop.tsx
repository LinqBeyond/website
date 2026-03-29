import { useCallback, useEffect, useState } from "react";

const SHOW_AFTER = 320;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? " scroll-to-top--visible" : ""}`}
      onClick={goTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span aria-hidden className="scroll-to-top__icon">
        ↑
      </span>
    </button>
  );
}
