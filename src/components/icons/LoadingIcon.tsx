import { $ } from '@/utils/core';

export default function LoadingIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="status"
      fill="currentColor"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={$('animate inline h-5 w-5', props.className)}
    >
      <circle cx="84" cy="50" r="10">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.6756756756756757s"
          calcMode="spline"
          keyTimes="0;1"
          values="12;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;12;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;12;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.6756756756756757s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.6756756756756757s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;12;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.3513513513513513s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.3513513513513513s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;12;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.027027027027027s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.7027027027027026s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.027027027027027s"
        ></animate>
      </circle>
    </svg>
  );
}
