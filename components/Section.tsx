import { cn } from "@/lib/cn";

type Tone = "default" | "surface" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-background",
  surface: "bg-surface",
  dark: "bg-[#0b1226] text-white",
};

export function Section({
  id,
  tone = "default",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-32",
        tones[tone],
        className
      )}
    >
      {children}
    </section>
  );
}
