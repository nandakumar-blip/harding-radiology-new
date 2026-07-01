// Shared decorative components for the 3D Mammogram page.
// These are purely visual — all carry aria-hidden="true" so screen readers skip them.
// They are intentionally lightweight (no state, no effects) so they can be placed
// freely across sections without any performance cost.

// DotGrid: renders a grid of small filled circles using CSS Grid.
// The grid column count is set via inline style because Tailwind cannot generate
// arbitrary repeat() values dynamically at runtime from props.
type DotGridProps = {
  className?: string;
  color?: string; // dot fill color; defaults to the dark navy brand color
  rows?: number;
  cols?: number;
};

export const DotGrid = ({
  className = "",
  color = "#1a4d7a",
  rows = 4,
  cols = 4,
}: DotGridProps) => (
  <div
    className={`grid gap-3 ${className}`}
    // gridTemplateColumns must be inline because Tailwind purges classes it
    // can't statically analyse — a dynamic repeat() won't survive the build.
    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    aria-hidden="true"
  >
    {/* Array.from generates exactly rows*cols dot elements without needing a
        pre-allocated array; index is safe as key because the list is static. */}
    {Array.from({ length: rows * cols }).map((_, index) => (
      <span
        key={index}
        className="block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

// Rings: concentric SVG circles used as a background accent.
// The radii [67, 53, 39, 25] are evenly spaced (14px apart) to create
// uniform ring gaps regardless of the `size` prop, because the viewBox
// is always "0 0 150 150" and the SVG scales via width/height.
type RingsProps = {
  className?: string;
  color?: string; // stroke color; defaults to the light steel-blue brand accent
  size?: number;  // rendered pixel size of the SVG element
};

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

// SoftCircle: a simple blurred circle div used as a soft glow accent.
// Size and position are fully controlled by the className prop (e.g. h-16 w-16).
// The bg-[#7ab8d4]/45 gives a 45% opacity light blue — enough to be visible
// against the white hero background without competing with text.
export const SoftCircle = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full bg-[#7ab8d4]/45 ${className}`} aria-hidden="true" />
);
