// Decorations.tsx — shared, purely visual background elements for the About page.
// All three components are aria-hidden so screen readers skip them entirely.
// They are kept in a dedicated file so section components stay focused on content
// and decorative pieces can be reused or swapped without touching business logic.

// Props for the configurable dot matrix.
type DotGridProps = {
  className?: string;
  color?: string;  // dot fill colour; defaults to the dark navy brand colour
  rows?: number;
  cols?: number;
};

// DotGrid renders a rows×cols matrix of small filled circles using CSS grid.
// The grid column count is driven by an inline style rather than a Tailwind
// class because the column count is dynamic — Tailwind cannot generate arbitrary
// `grid-cols-N` values at runtime with JIT unless they're in a safelist.
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
  size?: number;   // width and height in px; viewBox stays fixed at 150×150
};

// Rings draws four concentric circles sharing a common centre (75, 75).
// Radii [67, 53, 39, 25] are hand-tuned so consecutive rings are 14 px apart,
// giving an even "ripple" spacing that reads as a sonar/pulse motif — appropriate
// for a medical imaging brand. The SVG viewBox stays 150×150 while `size` scales
// the rendered element, so callers can resize without distorting the proportions.
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

// SoftCircle is a plain filled circle used as a floating blob accent.
// bg-[#7ab8d4]/45 (45 % opacity sky-blue) keeps it subtle enough to sit
// behind text without distracting. Size and position are set by the caller
// via className (e.g. "h-16 w-16 absolute top-72 -right-7").
export const SoftCircle = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full bg-[#7ab8d4]/45 ${className}`} aria-hidden="true" />
);
