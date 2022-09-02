interface SeparatorProps {
  height?: number;
  className?: string;
}

export default function Separator({ height = 12, className }: SeparatorProps) {
  return (
    <svg
      width="1"
      height={height}
      viewBox={`0 0 1 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="1" height={height} fill="#C7CFD9" />
    </svg>
  );
}
