// ScrollToTop — utility component that resets the window scroll position to the
// top whenever the React Router pathname changes. Without this, navigating between
// routes preserves the previous page's scroll offset, which feels disorienting
// because the new page would open mid-way down rather than at the top.
// This component renders no UI; it exists purely for its side effect.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Re-runs on every route change. `behavior: "instant"` is used instead of
  // "smooth" because smooth scrolling on route transitions feels unnatural —
  // the user expects to land at the top immediately, not glide there.
  // "auto" would also work but defers to the browser default, which varies.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // or "auto"
    });
  }, [pathname]);

  // Returns null because this component exists only for its scroll side effect;
  // mounting it anywhere in the tree (typically just inside <Router>) is enough.
  return null;
};

export default ScrollToTop;