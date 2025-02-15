import gsap from 'gsap';

export default function changePointToZPosition({
  point,
  direction,
}: {
  point: HTMLDivElement | string;
  direction: 'up' | 'down';
}) {
  if (direction === 'up') {
    gsap.set(point, {
      zIndex: 3,
    });
  } else {
    gsap.set(point, {
      zIndex: 2,
    });
  }
}