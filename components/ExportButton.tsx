'use client'

export default function ExportButton() {
  return (
    <button
      onClick={() => window.print()}
      className="
        fixed top-7 right-7 z-50
        flex items-center gap-2
        font-mono text-[10px] tracking-[0.14em] uppercase
        text-accent
        bg-accent/[0.07] border border-accent/[0.18]
        px-4 py-2.5 rounded-sm
        backdrop-blur-md
        transition-all duration-200
        hover:bg-accent/[0.14] hover:border-accent/40 hover:text-accent-w
        print:hidden
      "
      aria-label="Export as PDF"
    >
      <svg
        className="w-3 h-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
      </svg>
      Export PDF
    </button>
  )
}
