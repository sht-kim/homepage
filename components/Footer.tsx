import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#0b1226] text-slate-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center bg-white rounded-md px-3 py-2">
              <Image
                src="/sht-logo.png"
                alt="신호테크놀로지"
                width={1160}
                height={224}
                className="h-6 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              엣지 AI와 산업용 IoT로 공장의 디지털 전환을 돕는
              엔지니어링 회사.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-3">제품</h4>
            <ul className="space-y-2 text-slate-400">
              <li>EG-Icon 엣지 컴퓨터</li>
              <li>Eddy-IOT 센서 시리즈</li>
              <li>Eddy iMSS 통합 모니터링</li>
              <li>WDAQ-X 플랫폼</li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-3">연락처</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="leading-relaxed">
                충남 천안시 서북구 직산읍 직산로 136
                <br />
                충남테크노파크 번영관 2104호
              </li>
              <li>
                <a
                  href="mailto:hobae.kim@shinho-tech.co.kr"
                  className="hover:text-white transition-colors break-all"
                >
                  hobae.kim@shinho-tech.co.kr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shinho Technology. All rights reserved.</p>
          <p className="font-mono">Excellent technology &amp; solutions</p>
        </div>
      </Container>
    </footer>
  );
}
