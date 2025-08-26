import { useRef } from "react";
import { experiences } from "../utils/experience";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const cards = containerRef.current?.querySelectorAll<HTMLDivElement>(".card");
    cards?.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  };

  return (
    <div
      className="text-white flex flex-col items-center pt-30 gap-5 max-sm:hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="title">
        <h1 className="font-bold text-3xl underline underline-offset-5 decoration-purple-600 text-white/90">
          EXPERIENCE
        </h1>
      </div>

      <div className="timeline flex flex-col gap-5">
        {experiences.map(exp => (
          <div className="checkpoints text-white/80 hover:text-white/90" key={exp.id}>
            <div className="card p-6 900 rounded-lg relative border-1 border-white/15">
              <h1 className="text-center text-[color:#6C63FF] hover:text-[color:#6C63FF]">{exp.duration}</h1>
              <div className="flex items-center gap-6">
                <svg
                  className="w-40 h-40 text-[color:#6C63FF]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
                </svg>
                <div>
                  <h1 className="role font-bold">{exp.title}</h1>
                  <h1 className="company italic text-[color:#6C63FF]">{exp.company}</h1>
                  <p>{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
