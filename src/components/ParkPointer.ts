import { $ } from '@/utils/core';

type TParkPointerStatus = 'hightlight' | 'nomal' | 'full';

interface ParkPointerProps {
  item: any;
  onClick: () => void;
}

export default function ParkPointer({ item, onClick }: ParkPointerProps) {
  const title = item.meta ? `${item.meta.remain}대 여유` : 'P';
  const status = !item.meta
    ? 'nomal'
    : item.meta.remain === 0
    ? 'full'
    : item.meta.remain > 100
    ? 'hightlight'
    : 'nomal';

  const colors: {
    [key in TParkPointerStatus]: {
      border: string;
      bg: string;
      text: string;
    };
  } = {
    hightlight: {
      border: '#0C79FE',
      bg: '#0C79FE',
      text: '#ffffff',
    },
    nomal: {
      border: '#66707C',
      bg: '#ffffff',
      text: '#000000',
    },
    full: {
      border: '#999999',
      bg: '#dcdcdc',
      text: '#777777',
    },
  };

  const $root = document.createElement('div');
  $root.className = 'flex flex-col items-center';
  $root.innerHTML = `
        <div
            class="${$(
              'cursor-pointer rounded-lg border-2 px-3 py-2 text-center font-bold select-none',
              'transition-all active:opacity-70',
            )}"
            style="
                border-color:${colors[status].border};
                background-color:${colors[status].bg};
                color:${colors[status].text}
            "
        >
            ${title}
        </div>
        <svg
            width="6"
            height="20"
            viewBox="0 0 6 20"
            fill="${colors[status].border}"
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
