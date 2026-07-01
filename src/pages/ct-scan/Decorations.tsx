// Shared decorative components for the CT Scan page.
// All components are purely visual and carry aria-hidden="true" so screen readers skip them.
// They are stateless and side-effect-free, making them safe to scatter across sections.

// DotGrid: renders a CSS Grid of small filled circles.
// gridTemplateColumns is set via inline style because Tailwind cannot generate
// dynamic repeat() values at build time from runtime props.
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
    // gridTemplateColumns must be inline — a dynamic repeat() won't survive Tailwind's purge.
    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    aria-hidden="true"
  >
    {/* Array.from generates exactly rows*cols dots; index is a safe key because
        the list is static and never reordered at runtime. */}
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
// Radii [67, 53, 39, 25] are 14px apart within the fixed "0 0 150 150" viewBox —
// the visual ring gap stays consistent regardless of the `size` prop because
// the SVG scales uniformly via width/height attributes.
type RingsProps = {
  className?: string;
  color?: string; // stroke color; defaults to the light steel-blue brand accent
  size?: number;  // rendered pixel dimensions of the SVG element
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

// SoftCircle: a plain div styled as a blurred circle accent.
// Size and position are fully controlled by the className prop (e.g. h-16 w-16).
// bg-[#7ab8d4]/45 gives 45% opacity — visible against the white hero background
// without competing with the primary content.
export const SoftCircle = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full bg-[#7ab8d4]/45 ${className}`} aria-hidden="true" />
);
