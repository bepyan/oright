interface IconProps {
  className?: string;
}

export default function ArrowBack({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.0001 22.1564L0.350098 12.4331L10.0001 2.70975L11.1501 3.86848L2.6501 12.4331L11.1501 20.9976L10.0001 22.1564Z"
        fill="#1C1B1F"
      />
    </svg>
  );
}
