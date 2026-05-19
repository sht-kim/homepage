import { Container } from "./Container";
import { Badge } from "./Badge";

export function WhyPanel() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-32"
    >
      {/* Top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(6,182,212,0.08), transparent 70%), radial-gradient(50% 60% at 10% 80%, rgba(30,42,82,0.06), transparent 70%)",
        }}
      />

      <Container>
        {/* Heading */}
        <div className="max-w-3xl">
          <Badge>WHY EG-ICON</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
            단순한 수집을 넘어,
            <br />
            <span className="text-primary">
              센서가 <em className="not-italic text-accent-deep">왜 그런지</em>까지 압니다.
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed">
            대부분의 산업용 IoT는 “어디가 이상한가”까지만 알려줍니다.
            EG-Icon은 한 단계 더 나아가, 그 이상이
            <span className="text-foreground font-semibold"> 왜 일어났는지</span>를
            현장 작업자에게 설명합니다.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Before */}
          <article className="relative rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate-400">
                Before
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-700 leading-snug">
              데이터를 <span className="text-slate-500">모으기만</span> 하는 박스
            </h3>
            <p className="mt-3 text-base md:text-lg text-slate-500 leading-relaxed">
              알람은 울리지만, 왜 그런지는 엔지니어가 직접 추적해야 합니다.
              수치는 많은데 의사결정은 여전히 사람의 경험에 의존합니다.
            </p>
            <ul className="mt-6 space-y-2.5 text-base text-slate-500">
              {[
                "센서값만 표시",
                "이상 위치만 통보",
                "원인 추적은 사람의 몫",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* After */}
          <article className="relative rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-white via-white to-accent-soft/50 p-7 md:p-8 shadow-[0_24px_48px_-24px_rgba(6,182,212,0.25)]">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm uppercase tracking-[0.12em] text-accent-deep">
                With EG-Icon
              </span>
              <span className="h-px flex-1 bg-accent/30" />
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground leading-snug">
              데이터의 <span className="text-accent-deep">의미</span>를 아는 박스
            </h3>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
              설비·공정·품질이 어떻게 연결되는지 박스 안에 들어있어,
              이상이 생기면 <span className="font-semibold text-foreground">원인 경로</span>까지
              함께 보여줍니다.
            </p>
            <ul className="mt-6 space-y-2.5 text-base text-slate-700">
              {[
                "이상의 위치 + 원인 경로",
                "작업자가 1초에 이해하는 설명",
                "AI 판단의 근거가 보임",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-1 shrink-0"
                  >
                    <path
                      d="M13.5 4.5L6 12L2.5 8.5"
                      stroke="#06b6d4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Why Panel demo card */}
        <div className="mt-12 md:mt-14 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            {/* Left — alarm + reasoning */}
            <div className="p-7 md:p-9 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-rose-500 pulse-soft" />
                <span className="font-mono text-sm uppercase tracking-[0.1em] text-slate-500">
                  Why Panel · Live Reasoning
                </span>
              </div>
              <p className="mt-5 text-xl md:text-2xl font-bold text-foreground leading-snug">
                알람: <span className="text-rose-600">권선기 #3 인덕턴스 편차 ↑</span>
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { tag: "원인 ①", text: "함침 공정 온도가 평소보다 4.2°C 높음" },
                  { tag: "원인 ②", text: "→ 건조 수율이 12% 저하" },
                  { tag: "결과", text: "→ 최종 인덕턴스 편차 확률 ↑" },
                ].map((row, i) => (
                  <div
                    key={row.tag}
                    className="flex items-start gap-3 rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span
                      className={
                        "shrink-0 rounded-md px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-wider " +
                        (i === 2
                          ? "bg-accent text-white"
                          : "bg-white text-slate-600 border border-slate-200")
                      }
                    >
                      {row.tag}
                    </span>
                    <span className="text-base md:text-lg text-slate-700 leading-relaxed">
                      {row.text}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm md:text-base text-slate-500 leading-relaxed">
                기존에는 엔지니어가 로그를 뒤져야 알 수 있었던 인과 경로를,
                EG-Icon이 알람과 함께 즉시 제시합니다.
              </p>
            </div>

            {/* Right — mini knowledge graph */}
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-accent-soft/40 p-6 md:p-8 flex flex-col">
              <span className="font-mono text-sm uppercase tracking-[0.1em] text-accent-deep">
                Knowledge Path
              </span>

              <div className="mt-4 flex-1 flex items-center justify-center">
                <svg
                  viewBox="0 0 360 240"
                  className="w-full h-auto max-w-[420px]"
                  role="img"
                  aria-label="원인 경로 그래프"
                >
                  <defs>
                    <marker
                      id="wp-arr"
                      markerWidth="8"
                      markerHeight="8"
                      refX="7"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8 Z" fill="#06b6d4" />
                    </marker>
                  </defs>

                  {/* Edges */}
                  <g
                    stroke="#06b6d4"
                    strokeWidth="1.6"
                    fill="none"
                    markerEnd="url(#wp-arr)"
                  >
                    <line x1="78" y1="60" x2="160" y2="115" />
                    <line x1="200" y1="120" x2="282" y2="60" />
                    <line x1="180" y1="138" x2="180" y2="188" />
                  </g>

                  {/* Edge labels */}
                  <g
                    fontFamily="Geist Mono, ui-monospace, monospace"
                    fontSize="10"
                    fill="#0e7490"
                  >
                    <text x="100" y="100">affects</text>
                    <text x="226" y="100">reduces</text>
                    <text x="188" y="168">causes</text>
                  </g>

                  {/* Nodes */}
                  <g fontFamily="Pretendard Variable, sans-serif" textAnchor="middle">
                    <g>
                      <circle
                        cx="60"
                        cy="50"
                        r="34"
                        fill="#ffffff"
                        stroke="#1e2a52"
                        strokeWidth="1.6"
                      />
                      <text x="60" y="48" fontSize="11" fontWeight="700" fill="#0f172a">
                        함침 온도
                      </text>
                      <text x="60" y="62" fontSize="9" fill="#64748b">
                        Process
                      </text>
                    </g>
                    <g>
                      <circle
                        cx="180"
                        cy="125"
                        r="38"
                        fill="#ffffff"
                        stroke="#06b6d4"
                        strokeWidth="2"
                      />
                      <text x="180" y="123" fontSize="11" fontWeight="700" fill="#0f172a">
                        건조 수율
                      </text>
                      <text x="180" y="137" fontSize="9" fill="#0e7490">
                        Quality
                      </text>
                    </g>
                    <g>
                      <circle
                        cx="300"
                        cy="50"
                        r="34"
                        fill="#ffffff"
                        stroke="#1e2a52"
                        strokeWidth="1.6"
                      />
                      <text x="300" y="48" fontSize="11" fontWeight="700" fill="#0f172a">
                        설비
                      </text>
                      <text x="300" y="62" fontSize="9" fill="#64748b">
                        Equipment
                      </text>
                    </g>
                    <g>
                      <circle
                        cx="180"
                        cy="205"
                        r="32"
                        fill="#e0f2fe"
                        stroke="#06b6d4"
                        strokeWidth="2"
                      />
                      <text x="180" y="203" fontSize="11" fontWeight="700" fill="#0f172a">
                        인덕턴스
                      </text>
                      <text x="180" y="217" fontSize="9" fill="#0e7490">
                        KPI
                      </text>
                    </g>
                  </g>
                </svg>
              </div>

              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                설비·공정·품질이 박스 안에서 연결되어, 이상의 원인을 추론합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Trust footer line */}
        <div className="mt-10 md:mt-12 rounded-xl border border-slate-200 bg-surface px-6 py-5 md:px-8 md:py-6">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            <span className="font-mono text-sm uppercase tracking-wider text-accent-deep">
              Why this matters
            </span>
            <span className="mx-3 text-slate-300">·</span>
            글로벌 대기업이 “부서·시스템을 한 의미로 묶기 위해” 도입하는 데이터 구조를,
            중소·중견 제조 현장이 <span className="font-semibold text-foreground">박스 한 대</span>로
            바로 쓸 수 있게 한 것이 EG-Icon의 다음 세대 방향입니다.
          </p>
        </div>
      </Container>
    </section>
  );
}
