import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // 1) Try normal window scroll
    window.scrollTo(0, 0);

    // 2) Extra safety for some browsers/layouts
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3) If your app scrolls inside a container (common in layouts),
    // scroll that container too.
    const main = document.querySelector(".main");
    if (main) main.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
}
