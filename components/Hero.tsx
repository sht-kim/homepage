import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { FlowDiagram } from "./FlowDiagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle ambient backdrop — daouoffice-style restraint */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f8fc] via-[#fafcfe] to-white" />
        <div className="absolute -top-32 -right-24 h-[420px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.10),transparent_70%)] blur-2xl" />
      </div>

      <Container className="pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-[32px] leading-[1.2] tracking-[-0.022em] font-bold text-foreground sm:text-[40px] sm:leading-[1.18] md:text-[48px] md:leading-[1.15] lg:text-[56px] lg:leading-[1.12]">
            공장 엣지 AX 도입을 위한
            <br />
            <span className="text-primary">최고의 가성비 솔루션,</span>
            <br />
            <span className="text-accent-deep">WDAQ-X</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            WDAQ-X는{" "}
            <span className="text-foreground font-semibold">센서부터 대시보드까지</span>
            , 함께 제공하는 솔루션입니다.
            <br className="hidden md:block" />
            <span className="text-slate-500">
              별도 서버 구축이나 SI 없이, 공장에 바로 도입하세요.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <ButtonLink href="#products" variant="primary" size="lg">
              제품 보기
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              도입 문의
              <svg
                width="14"
                height="14"
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
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "SAMSUNG DISPLAY 양산 검증", emphasis: true },
              { label: "150+ UNITS DEPLOYED" },
              { label: "AX 데이터 수집" },
            ].map((item) => (
              <span
                key={item.label}
                className={
                  item.emphasis
                    ? "inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.02em] text-white font-mono uppercase"
                    : "inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.02em] text-slate-600 font-mono uppercase"
                }
              >
                {item.emphasis && (
                  <svg
                    width="12"
                    height="12"
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

        {/* Diagram card — softer surface, smaller radius, lighter shadow */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="relative rounded-xl border border-slate-200 bg-white p-5 sm:p-8 md:p-10 shadow-[0_2px_8px_rgba(15,23,42,0.04),0_16px_32px_-16px_rgba(30,42,82,0.10)]">
            <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-accent pulse-soft" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.08em] text-primary font-semibold">
                  Integrated Data Flow
                </span>
              </div>
              <span className="text-xs sm:text-sm font-mono text-slate-500">
                WDAQ-X.architecture
              </span>
            </div>

            <FlowDiagram />

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-[900px] mx-auto">
                {[
                  { k: "수집", v: "오감 센서 7종+" },
                  { k: "추론", v: "NPU 엣지 AI" },
                  { k: "전송", v: "5% 핵심 증류" },
                  { k: "확인", v: "웹 대시보드" },
                ].map((item) => (
                  <div key={item.k} className="text-center">
                    <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.08em] text-accent-deep font-semibold mb-1.5 sm:mb-2">
                      {item.k}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-foreground leading-tight tracking-[-0.01em]">
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
