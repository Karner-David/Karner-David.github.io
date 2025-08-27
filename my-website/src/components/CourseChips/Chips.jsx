import React from "react";

export default function Chip({course, inView, delay }) {

  const map = {

    "Algorithms": "🧩",
    "Computer Architecture": "🛠️",
    "Operating Systems": "⚙️",
    "Data Structures": "🔗",
    "Data Management": "🗂️",
    "Software Engineering": "💻",
    "Discrete Math": "✏️",
    "Linear Algebra": "🧮",
    "Machine Learning": "🤖",
  }

  const icon = map[course];
  // inline-flex flex-none items-center whitespace-nowrap bg-gray-100 rounded-lg px-5 py-1

  return (
    <>
      <h1 className={[
        // base chip styling
        "inline-flex flex-none items-center whitespace-nowrap bg-gray-100 rounded-lg px-5 py-1",
        inView ? "animate-[chip-fade-up_150ms_ease-out_forwards]" : ""
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
        >
        {icon} {course}
      </h1>
    </>
  );
}
