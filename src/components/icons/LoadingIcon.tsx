interface IconProps {
  className?: string;
}

export default function LoadingIcon({ className }: IconProps) {
  return (
    <svg
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={32}
      height={32}
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      className={className}
    >
      <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
}
