import { Container } from "./Container";

const CONTACT = {
  email: "hobae.kim@shinho-tech.co.kr",
  address: "충남 천안시 서북구 직산읍 직산로 136 충남테크노파크 번영관 2104호",
  addressShort: "충남 천안시 서북구 직산읍 직산로 136",
  addressDetail: "충남테크노파크 번영관 2104호",
  hours: "평일 09:00 ~ 18:00",
};

const useCases = [
  {
    title: "현장 데이터 수집 인프라가 필요한 경우",
    desc: "센서·엣지컴퓨터·웹 대시보드를 한 세트로 도입.",
  },
  {
    title: "설비 이상감지 / 산업안전 솔루션을 검토 중인 경우",
    desc: "오감 센서 + AI 추론으로 사고 사전 감지.",
  },
  {
    title: "삼성디스플레이 양산 검증 기술이 필요한 경우",
    desc: "베트남 공장 150대 납품 EG-Icon 플랫폼 동일 적용.",
  },
  {
    title: "가성비 좋은 엣지 AX 도입처를 찾는 경우",
    desc: "별도 서버·SI 없이 합리적 비용으로 즉시 시작.",
  },
];

const MAIL_SUBJECT = encodeURIComponent("WDAQ-X 도입 문의");
const MAIL_BODY = encodeURIComponent(
  [
    "WDAQ-X 도입을 검토하고 있어 연락드립니다.",
    "",
    "■ 회사명: ",
    "■ 담당자: ",
    "■ 연락처: ",
    "■ 도입 목적 / 현장 환경: ",
    "■ 희망 도입 시기: ",
    "",
    "감사합니다.",
  ].join("\n")
);

export function Contact() {
  const mailto = `mailto:${CONTACT.email}?subject=${MAIL_SUBJECT}&body=${MAIL_BODY}`;

  return (
    <section
      id="contact"
      className="relative bg-background py-16 sm:py-24 md:py-32"
    >
      {/* Subtle top accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />
      {/* Soft backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[1000px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.10),transparent_70%)] blur-2xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-bold uppercase tracking-[0.08em] text-accent-deep font-mono">
            <span className="size-1.5 rounded-full bg-accent pulse-soft" />
            GET IN TOUCH
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
            도입을 검토 중이시라면
            <br />
            <span className="text-primary">WDAQ-X 팀이 직접 상담</span>해드립니다.
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed">
            현장 환경과 도입 목적에 맞춰 맞춤 제안서를 작성해드립니다.
            <br className="hidden md:block" />
            <span className="text-slate-500">평균 영업일 1일 이내 회신.</span>
          </p>
        </div>

        {/* Body grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Use cases */}
          <div className="lg:col-span-7">
            <h3 className="text-base sm:text-lg font-mono uppercase tracking-[0.08em] text-accent-deep font-bold mb-6">
              이런 경우 문의주세요
            </h3>
            <ul className="space-y-4">
              {useCases.map((u) => (
                <li
                  key={u.title}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 transition-colors hover:border-accent"
                >
                  <span className="mt-0.5 flex-none inline-flex items-center justify-center size-8 rounded-md bg-accent-soft text-accent-deep">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M13.5 4.5L6 12L2.5 8.5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-foreground leading-snug tracking-[-0.01em]">
                      {u.title}
                    </p>
                    <p className="mt-1.5 text-base text-slate-600 leading-relaxed">
                      {u.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CS Center card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary bg-[#0b1226] text-white shadow-[0_24px_48px_-24px_rgba(11,18,38,0.5)]">
                {/* Accent top bar */}
                <div className="h-1 bg-accent" />
                {/* Decoration */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 100% 0%, rgba(6,182,212,0.18), transparent 70%)",
                  }}
                />

                <div className="relative p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="size-2 rounded-full bg-accent pulse-soft" />
                    <span className="text-sm font-mono uppercase tracking-[0.1em] text-accent font-bold">
                      CS CENTER
                    </span>
                  </div>

                  <dl className="space-y-5">
                    <div>
                      <dt className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                        EMAIL
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="text-lg sm:text-xl font-bold text-white hover:text-accent transition-colors break-all"
                        >
                          {CONTACT.email}
                        </a>
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                        ADDRESS
                      </dt>
                      <dd className="text-base sm:text-lg text-slate-200 leading-relaxed">
                        {CONTACT.addressShort}
                        <br />
                        <span className="text-slate-300">{CONTACT.addressDetail}</span>
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                        HOURS
                      </dt>
                      <dd className="text-base sm:text-lg text-slate-200">
                        {CONTACT.hours}
                      </dd>
                    </div>
                  </dl>

                  {/* Primary CTA */}
                  <a
                    href={mailto}
                    className="mt-8 flex items-center justify-center gap-2 w-full h-14 rounded-lg bg-accent text-white text-base font-bold transition-all duration-200 hover:bg-accent-deep active:scale-[0.99]"
                  >
                    이메일로 문의하기
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3.33 8h9.34M12.67 8L8 3.33M12.67 8L8 12.67"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <p className="mt-3 text-sm text-slate-400 text-center font-mono">
                    클릭 시 메일 앱이 열립니다.
                  </p>
                </div>
              </div>

              {/* Small map / location hint card */}
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-mono uppercase tracking-wider text-accent-deep font-bold mb-2">
                  LOCATION
                </p>
                <p className="text-base font-bold text-foreground">
                  충남테크노파크 번영관
                </p>
                <p className="text-base text-slate-600 leading-relaxed mt-1">
                  충남 천안시 서북구 직산읍 직산로 136
                </p>
                <a
                  href="https://map.naver.com/p/search/충남테크노파크%20번영관"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep hover:text-accent transition-colors"
                >
                  네이버 지도에서 보기
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 3h7v7M13 3L4 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
