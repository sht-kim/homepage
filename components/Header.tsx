"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

const nav = [
  { label: "제품", href: "#products" },
  { label: "작동 방식", href: "#how" },
  { label: "도입 사례", href: "#references" },
  { label: "회사 소개", href: "#company" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Esc handler when drawer is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Simple scroll-spy for drawer active indicator
  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const handler = () => {
      const offsets = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top;
          return { id, top };
        })
        .filter(Boolean) as { id: string; top: number }[];
      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];
      setActiveHash(current ? `#${current.id}` : "");
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-200 text-white",
          scrolled
            ? "bg-[#0b1226]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.4)]"
            : "bg-[#0b1226] border-b border-transparent"
        )}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />

        <Container className="relative flex h-14 lg:h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center bg-white rounded-md px-3 py-1.5 lg:px-4 lg:py-2 shadow-sm"
            aria-label="신호테크놀로지"
          >
            <Image
              src="/sht-logo.png"
              alt="신호테크놀로지 SHINHO TECHNOLOGY"
              width={1160}
              height={224}
              priority
              className="h-5 w-auto lg:h-7"
            />
          </Link>

          {/* Desktop nav (>= lg / 1024px) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium tracking-[-0.005em] text-slate-200 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md bg-accent text-white text-sm font-semibold transition-all duration-200 hover:bg-accent-deep active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1226]"
            >
              도입 문의
            </a>
          </div>

          {/* Mobile hamburger (< lg) — hansen-style brand-accent fill */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-md bg-accent text-white hover:bg-accent-deep transition-colors shadow-[0_6px_20px_-8px_rgba(6,182,212,0.6)]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Container>
      </header>

      {/* Mobile backdrop — navy-tinted (hansen uses brand-tinted) */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          "bg-[#0b1226]/80 backdrop-blur-sm",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile drawer — slides from right, fixed 320px width (hansen-style) */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
        className={cn(
          "lg:hidden fixed top-0 right-0 z-[70] h-dvh w-[320px] max-w-[90vw] bg-white text-foreground",
          "transition-transform duration-300 ease-out",
          "border-l border-slate-200 shadow-[0_0_60px_-10px_rgba(0,0,0,0.4)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Brand accent top bar */}
        <div className="h-1 bg-accent" />

        {/* Drawer header */}
        <div className="flex h-14 items-center justify-between px-5 border-b border-slate-200">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold">
            MENU
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
            className="inline-flex items-center justify-center size-10 rounded-md bg-accent text-white hover:bg-accent-deep transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav list */}
        <nav className="flex flex-col">
          {nav.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between px-5 h-[52px] border-b border-slate-200 transition-colors",
                  isActive
                    ? "border-l-[3px] border-l-accent bg-accent-soft/40 pl-[17px]"
                    : "border-l-[3px] border-l-transparent pl-[17px] hover:bg-slate-50"
                )}
              >
                <span
                  className={cn(
                    "text-base font-semibold tracking-[-0.005em] transition-colors",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.label}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className={cn(
                    "transition-colors",
                    isActive ? "text-accent" : "text-slate-400"
                  )}
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-5 mt-5">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full h-11 px-5 rounded-md bg-accent text-white text-sm font-semibold transition-all duration-200 hover:bg-accent-deep active:scale-[0.98]"
          >
            도입 문의
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3.33 8h9.34M12.67 8L8 3.33M12.67 8L8 12.67"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* CS info */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-slate-200 bg-slate-50">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-slate-500 font-semibold mb-1.5">
            CS CENTER
          </p>
          <a
            href="mailto:hobae.kim@shinho-tech.co.kr"
            className="block text-sm font-medium text-foreground hover:text-accent-deep transition-colors break-all"
          >
            hobae.kim@shinho-tech.co.kr
          </a>
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            충남 천안시 직산읍 직산로 136
          </p>
        </div>
      </aside>
    </>
  );
}
