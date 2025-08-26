import React from "react";

export default function MarqueeChips({ items, title = "Relevant Coursework", speed = 25 }) {
  // We’ll render two identical copies for the seamless effect
  const doubled = [...items, ...items];

  return (
    <section aria-labelledby="coursework-title" className="w-full">
      <h3 id="coursework-title" className="mb-2 text-sm font-medium text-gray-500 tracking-wide">
        {title}
      </h3>

      <div
        className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur"
        style={{ "--marquee-speed": `${speed}s` }}
      >
        {/* fade edges for style */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

        {/* the scrolling track */}
        <div
          className="
            flex w-[200%] gap-4 whitespace-nowrap
            animate-chips-marquee
            hover:[animation-play-state:paused]
          "
        >
          {doubled.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="mx-1 my-3 inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-800 shadow-sm select-none cursor-default"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
