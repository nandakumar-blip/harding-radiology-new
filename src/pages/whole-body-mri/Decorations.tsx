// Decorations.tsx — shared purely visual background elements for the Whole-Body MRI page.
// Identical in structure to about/Decorations.tsx; kept as a separate copy so each
// page's decorations can diverge (different default colours, sizes) without coupling
// the two page trees. All components are aria-hidden — screen readers skip them.

// Props for the configurable dot matrix.
type DotGridProps = {
  className?: string;
  color?: string;  // dot fill colour; defaults to the dark navy brand colour
  rows?: number;
  cols?: number;
};

// DotGrid renders a rows×cols matrix of small filled circles using CSS grid.
// Column count is set via inline style rather than a Tailwind class because
// Tailwind JIT cannot generate arbitrary `grid-cols-N` values at runtime
// without an explicit safelist entry.
export const DotGrid = ({
  className = "",
  color = "#1a4d7a",
  rows = 4,
  cols = 4,
}: DotGridProps) => (
  <div
    className={`grid gap-3 ${className}`}
    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    aria-hidden="true"
  >
    {Array.from({ length: rows * cols }).map((_, index) => (
      <span
        key={index}
        className="block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

// Props for the concentric rings SVG.
type RingsProps = {
  className?: string;
  color?: string;  // stroke colour; defaults to the mid-tone sky-blue brand accent
  size?: number;   // rendered width/height in px; viewBox stays fixed at 150×150
};

// Rings draws four concentric circles sharing a common centre (75, 75).
// Radii [67, 53, 39, 25] are spaced 14 px apart, producing an even "ripple"
// / sonar-pulse motif appropriate for a medical imaging brand.
// The fixed viewBox means `size` scales the element uniformly without distortion.
export const Rings = ({
  className = "",
  color = "#7ab8d4",
  size = 150,
}: RingsProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 150 150"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    {[67, 53, 39, 25].map((radius) => (
      <circle
        key={radius}
        cx="75"
        cy="75"
        r={radius}
        stroke={color}
        strokeWidth="2"
      />
    ))}
  </svg>
);

// SoftCircle is a plain filled circle used as a small floating blob accent.
// bg-[#7ab8d4]/45 (45% opacity sky-blue) keeps it subtle behind text.
// Callers control size and position entirely through className
// (e.g. "absolute -right-7 top-72 h-16 w-16").
export const SoftCircle = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full bg-[#7ab8d4]/45 ${className}`} aria-hidden="true" />
);
