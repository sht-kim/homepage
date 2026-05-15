import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-accent-deep",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-accent pulse-soft" />
      {children}
    </span>
  );
}
