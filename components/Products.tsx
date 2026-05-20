import Image from "next/image";
import { Container } from "./Container";
import { Badge } from "./Badge";

type Product = {
  id: string;
  version: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  specs: { label: string; value: string }[];
};

const products: Product[] = [
  {
    id: "v1-3",
    version: "V1.3",
    name: "EG-Icon",
    tagline: "아날로그 센서 데이터 수집",
    description:
      "아날로그 16채널 입력을 갖춘 1세대 엣지 컴퓨터. 산업용 센서 신호를 안정적으로 수집하는 데이터 획득 장비.",
    image: "/products/eg-icon-v1-3.png",
    specs: [
      { label: "ANALOG IN", value: "16 CH (12-bit / 500 Ksps)" },
      { label: "CPU", value: "Cortex-A72 Quad-core" },
      { label: "MEMORY", value: "4GB DDR4 / 16GB Flash" },
      { label: "통신", value: "Ethernet · Wi-Fi · USB" },
    ],
  },
  {
    id: "v2-0",
    version: "V2.0",
    name: "EG-Icon",
    tagline: "디지털 센서 통합",
    description:
      "I2C·UART·SPI 디지털 인터페이스 및 RJ45 듀얼 포트 확장. 삼성디스플레이 베트남 양산 라인 150대 납품 모델.",
    image: "/products/eg-icon-v2-0.png",
    badge: "150+ 양산 납품",
    specs: [
      { label: "DIGITAL", value: "I2C · UART · SPI · DI" },
      { label: "RJ45", value: "2 Port (CH1 / CH2)" },
      { label: "POWER", value: "DC 24V / 5V / 3.3V Out" },
      { label: "I2C 거리", value: "Long Distance 10m+" },
    ],
  },
  {
    id: "v3-0",
    version: "V3.0",
    name: "EG-Icon",
    tagline: "아날로그 + 디지털 통합 + AI 추론",
    description:
      "오감 센서 퓨전 + Hailo NPU 엣지 AI 추론. 현재 라인업의 최상위 모델로, WDAQ-X 플랫폼의 표준 노드.",
    image: "/products/eg-icon-v3-0.png",
    badge: "현행 플래그십",
    specs: [
      { label: "ANALOG IN", value: "8 CH (12-bit / 500 Ksps)" },
      { label: "DIGITAL", value: "I2C · SPI · UART · DI" },
      { label: "MEMORY", value: "8GB DDR4 / 256GB Flash" },
      { label: "AI", value: "NPU 엣지 추론" },
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-surface py-16 sm:py-20 md:py-24">
      {/* Top divider accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-slate-200"
      />

      <Container>
        <div className="max-w-3xl">
          <Badge>PRODUCT LINEUP</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-foreground">
            현장에서 검증된
            <br />
            <span className="text-primary">엣지 컴퓨터 라인업</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            2018년 V1.3을 시작으로 3세대에 걸쳐 진화한
            EG-Icon은 삼성디스플레이 양산 라인을 비롯한 산업 현장에서
            150대 이상 가동 중입니다.
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p, idx) => (
            <article
              key={p.id}
              className="group relative flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-accent hover:shadow-[0_8px_24px_-12px_rgba(30,42,82,0.12)]"
            >
              {/* Image area */}
              <div className="relative aspect-[16/11] bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} ${p.version} — ${p.tagline}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {/* Version chip */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="rounded bg-foreground/90 px-2 py-0.5 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                    {p.version}
                  </span>
                  {p.badge && (
                    <span className="rounded bg-accent px-2 py-0.5 text-xs font-semibold text-white">
                      {p.badge}
                    </span>
                  )}
                </div>
                {/* Generation indicator */}
                <div className="absolute bottom-3 right-3 font-mono text-xs text-slate-400">
                  Gen.{idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-6 flex flex-col">
                <h3 className="text-xl font-bold text-foreground">
                  {p.name}{" "}
                  <span className="font-mono text-accent-deep">{p.version}</span>
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent-deep">
                  {p.tagline}
                </p>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* Specs */}
                <dl className="mt-5 grid grid-cols-1 gap-2 border-t border-slate-100 pt-4">
                  {p.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <dt className="text-xs font-mono uppercase tracking-[0.08em] text-slate-400 shrink-0">
                        {s.label}
                      </dt>
                      <dd className="text-xs font-medium text-foreground text-right">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        {/* Companion lineup hint */}
        <div className="mt-10 md:mt-12 rounded-xl border border-slate-200 bg-white p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.08em] text-accent-deep font-semibold">
                Companion Lineup
              </p>
              <h3 className="mt-1.5 text-lg md:text-xl font-bold text-foreground">
                Eddy-IOT 센서 시리즈 · Eddy iMSS 통합 모니터링
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                조도 · 온습도 · 차압 · 환경(가스/CO₂/기압) · I2C 확장 허브 ·
                통합 웹 대시보드까지 모두 자체 개발.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Eddy-IOT-ILLU",
                "Eddy-IOT-ENV",
                "Eddy-IOT-TH",
                "Eddy-IOT-DPS",
                "I2C HUB",
                "iMSS",
              ].map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
