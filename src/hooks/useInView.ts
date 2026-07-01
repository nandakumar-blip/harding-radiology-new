// Scroll-triggered visibility hook used to gate CSS entrance animations.
// Returns a ref to attach to a DOM element and a boolean that flips to true
// once that element has entered the viewport.

import { useEffect, useRef, useState } from "react";

// threshold = 0.18 means the animation fires when 18 % of the element is
// visible. Lower values (e.g. 0.01) would trigger too early — the element
// starts animating while still mostly off-screen. Higher values (e.g. 0.5)
// would require the user to scroll further before the reveal, which feels
// sluggish on tall sections. 0.18 is the sweet spot for typical section heights.
export const useInView = (threshold = 0.18) => {
    const ref = useRef<HTMLDivElement>(null);

    // Start as false so animated elements begin in their hidden/offscreen state.
    // If initialised to true the animation would never play — the element would
    // just render in its final position immediately.
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            // Only set inView when intersecting, never back to false — this is a
            // "fire once" trigger. Resetting on exit would cause the animation to
            // replay every time the user scrolls past, which is distracting for
            // content-reveal effects that are meant to feel like first impressions.
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        // Disconnect (not just unobserve) on cleanup so the observer is fully
        // torn down when the component unmounts, preventing memory leaks.
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
};
