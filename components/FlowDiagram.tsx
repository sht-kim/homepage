/**
 * Horizontal flow diagram: 센서 → 엣지컴퓨터 → 클라우드 → 대시보드
 * Color-coded nodes, gradient connections, pure SVG.
 */

type NodeData = {
  key: string;
  label: string;
  sub: string;
  tint: string;
  ring: string;
  icon: React.ReactNode;
};

const NODE_SIZE = 128;
const GAP = 96;

const SensorIcon = (
  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="0" cy="0" r="14" />
    <circle cx="0" cy="0" r="6" />
    <path d="M -22 -22 L -16 -16 M 22 -22 L 16 -16 M -22 22 L -16 16 M 22 22 L 16 16" />
  </g>
);

const EdgeIcon = (
  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="-18" y="-12" width="36" height="24" rx="3" />
    <path d="M -10 -4 L 10 -4 M -10 0 L 10 0 M -10 4 L 4 4" />
    <circle cx="14" cy="-8" r="1.5" fill="currentColor" />
  </g>
);

const CloudIcon = (
  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M -16 6 a 8 8 0 0 1 1 -15.8 a 11 11 0 0 1 21 3 a 7 7 0 0 1 -2 13.8 z" />
  </g>
);

const DashboardIcon = (
  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="-20" y="-14" width="40" height="28" rx="3" />
    <path d="M -20 -6 L 20 -6" />
    <path d="M -14 8 L -10 2 L -4 6 L 4 -4 L 12 2" />
    <circle cx="-16" cy="-10" r="1" fill="currentColor" />
    <circle cx="-12" cy="-10" r="1" fill="currentColor" />
  </g>
);

const nodes: NodeData[] = [
  { key: "sensor", label: "센서", sub: "Eddy-IOT 시리즈", tint: "#ecfeff", ring: "#a5f3fc", icon: SensorIcon },
  { key: "edge", label: "엣지 컴퓨터", sub: "EG-Icon V3.0", tint: "#eff6ff", ring: "#bfdbfe", icon: EdgeIcon },
  { key: "cloud", label: "클라우드", sub: "WDAQ-X Hub", tint: "#eef2ff", ring: "#c7d2fe", icon: CloudIcon },
  { key: "dashboard", label: "대시보드", sub: "웹 모니터링", tint: "#f0fdfa", ring: "#99f6e4", icon: DashboardIcon },
];

export function FlowDiagram() {
  const totalWidth = nodes.length * NODE_SIZE + (nodes.length - 1) * GAP;
  const height = 300;
  const centerY = 110;

  const positions = nodes.map((_, i) => i * (NODE_SIZE + GAP) + NODE_SIZE / 2);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${totalWidth} ${height}`}
        className="w-full max-w-[900px] mx-auto h-auto"
        role="img"
        aria-label="센서에서 대시보드까지의 데이터 플로우 다이어그램"
      >
        <defs>
          <linearGradient id="connectGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#1e2a52"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        {/* Connection lines */}
        {positions.slice(0, -1).map((x, i) => {
          const x2 = positions[i + 1];
          return (
            <g key={`line-${i}`}>
              <line
                x1={x + NODE_SIZE / 2 - 2}
                y1={centerY}
                x2={x2 - NODE_SIZE / 2 + 2}
                y2={centerY}
                stroke="url(#connectGrad)"
                strokeWidth="3.5"
                className="flow-line"
              />
              <path
                d={`M ${x2 - NODE_SIZE / 2 + 2} ${centerY} l -10 -7 l 0 14 z`}
                fill="#06b6d4"
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const cx = positions[i];
          return (
            <g key={node.key} filter="url(#nodeShadow)">
              {/* Outer ring (colored) */}
              <circle
                cx={cx}
                cy={centerY}
                r={NODE_SIZE / 2}
                fill="white"
                stroke={node.ring}
                strokeWidth="3"
              />
              {/* Inner tinted disc */}
              <circle
                cx={cx}
                cy={centerY}
                r={NODE_SIZE / 2 - 10}
                fill={node.tint}
              />
              {/* Icon */}
              <g transform={`translate(${cx}, ${centerY}) scale(1.4)`} color="#1e2a52">
                {node.icon}
              </g>
            </g>
          );
        })}

        {/* Labels */}
        {nodes.map((node, i) => {
          const cx = positions[i];
          return (
            <g key={`label-${node.key}`}>
              <text
                x={cx}
                y={centerY + NODE_SIZE / 2 + 32}
                textAnchor="middle"
                fontSize="18"
                fontWeight="700"
                fill="#0f172a"
                style={{ letterSpacing: "-0.02em" }}
              >
                {node.label}
              </text>
              <text
                x={cx}
                y={centerY + NODE_SIZE / 2 + 54}
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-mono)"
                fontWeight="500"
                fill="#0e7490"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
