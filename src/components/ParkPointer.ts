import { $ } from '@/utils/core';

type TParkPointerStatus = 'hightlight' | 'nomal' | 'full';

interface ParkPointerProps {
  item: any;
  onClick: () => void;
}

export default function ParkPointer({ item, onClick }: ParkPointerProps) {
  const title = item.meta ? `${item.meta.remain}대 여유` : 'P';

  const $root = document.createElement('div');
  $root.id = `park-pointer-${item.id}`;
  $root.className = $('park-pointer flex flex-col items-center', item.meta?.remain === 0 && 'full');
  $root.innerHTML = `
        <div
            class="${$(
              'cursor-pointer rounded-lg border-2 px-3 py-2 text-center font-bold select-none',
              'transition-all active:opacity-70',
            )}"
        >
            ${title}
        </div>
        <svg
            width="6"
            height="20"
            viewBox="0 0 6 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="2" width="2" height="16" />
            <circle cx="3" cy="17" r="3" />
        </svg>
    `;

  $root.addEventListener('click', () => {
    onClick();
  });

  return $root;
}
