import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { FlowDiagram } from "./FlowDiagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {/* Base tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef4fb] via-[#f5f9fd] to-white" />
        {/* Cyan glow top-left */}
        <div className="absolute -top-40 -left-32 h-[520px] w-[680px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.28),transparent_70%)] blur-2xl" />
        {/* Indigo glow top-right */}
        <div className="absolute -top-20 -right-32 h-[560px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(30,42,82,0.18),transparent_70%)] blur-2xl" />
        {/* Mid soft sky */}
        <div className="absolute top-1/3 left-1/3 h-[420px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.10),transparent_70%)] blur-3xl" />
      </div>

      {/* Visible grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,42,82,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,42,82,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      <Container className="pt-14 pb-20 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-[32px] leading-[1.15] tracking-[-0.025em] font-bold text-foreground sm:text-[44px] sm:leading-[1.1] md:text-[64px] md:leading-[1.06] lg:text-[88px] lg:leading-[1.04]">
            공장 엣지 AX 도입을 위한
            <br />
            <span className="text-primary">최고의 가성비 솔루션,</span>
            <br />
            <span className="bg-gradient-to-br from-[#1e2a52] via-[#1e5fa3] to-[#06b6d4] bg-clip-text text-transparent">
              WDAQ-X
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            WDAQ-X는{" "}
            <span className="text-foreground font-semibold">센서부터 대시보드까지</span>
            , 함께 제공하는 솔루션입니다.
            <br className="hidden md:block" />
            <span className="text-slate-500">
              별도 서버 구축이나 SI 없이, 공장에 바로 도입하세요.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="#products" variant="primary" size="lg">
              제품 보기
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              도입 문의
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonLink>
          </div>

          {/* Trust strip */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            {[
              { label: "SAMSUNG DISPLAY 양산 검증", emphasis: true },
              { label: "150+ UNITS DEPLOYED" },
              { label: "AX 데이터 수집" },
            ].map((item) => (
              <span
                key={item.label}
                className={
                  item.emphasis
                    ? "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base md:text-lg font-bold tracking-[-0.005em] text-white font-mono uppercase shadow-[0_8px_24px_-12px_rgba(30,42,82,0.5)]"
                    : "inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white/70 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base md:text-lg font-bold tracking-[-0.005em] text-slate-700 font-mono uppercase"
                }
              >
                {item.emphasis && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M13.5 4.5L6 12L2.5 8.5"
                      stroke="#06b6d4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Diagram card with stronger surface */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <div className="relative rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white via-[#fbfdff] to-[#eef4fb] p-5 sm:p-8 md:p-14 shadow-[0_2px_4px_0_rgba(15,23,42,0.06),0_32px_64px_-24px_rgba(30,42,82,0.22)]">
            <div className="absolute left-6 sm:left-8 right-6 sm:right-8 -top-px h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div className="flex items-center justify-between mb-6 sm:mb-10 md:mb-12 flex-wrap gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="size-2.5 sm:size-3 rounded-full bg-accent pulse-soft shadow-[0_0_0_4px_rgba(6,182,212,0.18)]" />
                <span className="text-base sm:text-xl md:text-2xl font-mono uppercase tracking-[0.04em] text-primary font-bold">
                  Integrated Data Flow
                </span>
              </div>
              <span className="text-sm sm:text-lg md:text-xl font-mono font-semibold text-slate-500">
                WDAQ-X.architecture
              </span>
            </div>

            <FlowDiagram />

            <div className="mt-10 sm:mt-14 md:mt-16 pt-8 sm:pt-10 border-t-2 border-slate-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-[900px] mx-auto">
                {[
                  { k: "수집", v: "오감 센서 7종+" },
                  { k: "추론", v: "NPU 엣지 AI" },
                  { k: "전송", v: "5% 핵심 증류" },
                  { k: "확인", v: "웹 대시보드" },
                ].map((item) => (
                  <div key={item.k} className="text-center">
                    <p className="text-base sm:text-lg md:text-xl font-mono uppercase tracking-[0.05em] text-accent-deep font-bold mb-2 sm:mb-3">
                      {item.k}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight tracking-[-0.01em]">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
