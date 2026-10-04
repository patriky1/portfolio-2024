import { useEffect, useRef, useState } from "react";

const hasWindow = typeof window !== "undefined";

/** Acompanha uma media query (ex.: "(min-width: 768px)"). */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    hasWindow && window.matchMedia ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!hasWindow || !window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Informa quando o elemento entra na viewport.
 * once=true desconecta o observer após a primeira entrada (animações de entrada).
 */
export function useInView({
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, inView];
}

/** Scrollspy: devolve o id da seção que cruza o centro da viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);

  return active;
}
