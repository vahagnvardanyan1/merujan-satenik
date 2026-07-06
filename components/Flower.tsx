export default function Flower({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path
        pathLength={1}
        d="M55 8 C42 2 30 10 32 26 C34 42 46 54 56 58 C66 52 74 40 74 26 C74 12 64 4 55 8 Z"
      />
      <path pathLength={1} d="M53 18 C52 27 53 36 56 45" />
      <path pathLength={1} d="M56 58 C54 78 46 96 30 112" />
      <path
        pathLength={1}
        d="M30 112 C48 100 68 96 84 100 C72 112 48 118 30 112 Z"
      />
      <path pathLength={1} d="M38 109 C52 103 66 101 76 102" />
    </svg>
  );
}
