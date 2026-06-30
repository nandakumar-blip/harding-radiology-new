type DotGridProps = {
  className?: string;
  color?: string;
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

type RingsProps = {
  className?: string;
  color?: string;
  size?: number;
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

export const SoftCircle = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full bg-[#7ab8d4]/45 ${className}`} aria-hidden="true" />
);
