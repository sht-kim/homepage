import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-[color:var(--color-primary-light)] active:scale-[0.98]",
  secondary:
    "bg-white text-foreground border border-slate-200 hover:border-accent hover:text-accent-deep active:scale-[0.98]",
  ghost:
    "text-foreground hover:text-accent-deep underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
}: LinkProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
