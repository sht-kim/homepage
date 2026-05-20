import { Container } from "./Container";

const stats = [
  { value: "150+", unit: "UNITS", label: "삼성디스플레이 양산 납품" },
  { value: "5~10%", unit: "TRANSFER", label: "원본 대비 데이터 전송량" },
  { value: "<100ms", unit: "LATENCY", label: "엣지 실시간 추론" },
  { value: "7+", unit: "SENSORS", label: "오감 통합 모니터링" },
];

export function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-[#0b1226]">
      {/* Decorative gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 0%, rgba(6,182,212,0.18), transparent 70%), radial-gradient(60% 80% at 90% 100%, rgba(74,110,163,0.22), transparent 70%)",
        }}
      />
      {/* Diagonal accent line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <Container className="relative py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 sm:gap-y-8 gap-x-5 sm:gap-x-8 lg:gap-x-10">
          {stats.map((s) => (
            <div key={s.label} className="text-left">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                  {s.value}
                </span>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.1em] text-accent">
                  {s.unit}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
