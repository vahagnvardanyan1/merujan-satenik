export type EventIconType = "house" | "house-heart" | "church" | "cake";

const ICONS: Record<EventIconType, React.ReactNode> = {
  // groom's home — simple house with a door
  house: (
    <>
      <path pathLength={1} d="M8 24 L24 9 L40 24" />
      <path pathLength={1} d="M12 21.5 V38 H36 V21.5" />
      <path pathLength={1} d="M20.5 38 V30 a3.5 3.5 0 0 1 7 0 V38" />
    </>
  ),
  // bride's home — house with a heart inside
  "house-heart": (
    <>
      <path pathLength={1} d="M8 24 L24 9 L40 24" />
      <path pathLength={1} d="M12 21.5 V38 H36 V21.5" />
      <path
        pathLength={1}
        d="M24 34.5 c-2.8-2.4 -5.4-4.1 -5.4-6.8 a3.1 3.1 0 0 1 5.4-2.1 a3.1 3.1 0 0 1 5.4 2.1 c0 2.7-2.6 4.4-5.4 6.8 Z"
      />
    </>
  ),
  // church — chapel with a cross
  church: (
    <>
      <path pathLength={1} d="M24 5 V13 M20.5 8.5 H27.5" />
      <path pathLength={1} d="M15 27 L24 16 L33 27" />
      <path pathLength={1} d="M16 27 V40 H32 V27" />
      <path pathLength={1} d="M21 40 V33.5 a3 3 0 0 1 6 0 V40" />
    </>
  ),
  // celebration hall — tiered wedding cake with a heart topper
  cake: (
    <>
      <path pathLength={1} d="M13 39 V31.5 H35 V39" />
      <path pathLength={1} d="M16 31.5 V24.5 H32 V31.5" />
      <path pathLength={1} d="M19.5 24.5 V18 H28.5 V24.5" />
      <path
        pathLength={1}
        d="M24 14.5 c-1.4-1.2 -2.7-2 -2.7-3.4 a1.55 1.55 0 0 1 2.7-1.05 a1.55 1.55 0 0 1 2.7 1.05 c0 1.4-1.3 2.2-2.7 3.4 Z"
      />
      <path pathLength={1} d="M10.5 39 H37.5" />
    </>
  ),
};

export default function EventIcon({
  type,
  className,
}: {
  type: EventIconType;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {ICONS[type]}
    </svg>
  );
}
