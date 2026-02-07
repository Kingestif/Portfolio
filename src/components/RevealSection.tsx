import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealSectionProps {
  id?: string;
  children: ReactNode;
}

export function RevealSection({ id, children }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [visible]);

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}
