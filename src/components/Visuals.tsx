import type { VisualKind } from "../types";
import type React from "react";

interface VisualProps {
  kind: VisualKind;
}

export function LessonVisual({ kind }: VisualProps) {
  switch (kind) {
    case "vscode":
      return <VsCodeVisual />;
    case "python":
      return <PythonVisual />;
    case "notebook":
      return <NotebookVisual />;
    case "venv":
      return <VenvVisual />;
    case "annotation":
      return <AnnotationVisual />;
    case "ml":
      return <MlVisual />;
    case "gan":
      return <GanVisual />;
    case "segmentation":
      return <SegmentationVisual />;
    case "hpc":
      return <HpcVisual />;
    case "network":
    default:
      return <NetworkVisual />;
  }
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg className="lesson-visual" viewBox="0 0 760 360" role="img" aria-hidden="true">
      <rect x="0" y="0" width="760" height="360" rx="8" fill="#f8faf9" />
      <rect x="20" y="20" width="720" height="320" rx="8" fill="#ffffff" stroke="#d8e2de" />
      {children}
    </svg>
  );
}

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} className="svg-label">
      {children}
    </text>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2f6f73" strokeWidth="3" />
      <path d={`M ${x2} ${y2} l -10 -6 l 3 10 l 7 -4`} fill="#2f6f73" />
    </g>
  );
}

function NetworkVisual() {
  return (
    <Frame>
      <rect x="60" y="80" width="160" height="90" rx="8" fill="#e5f3f1" stroke="#2f6f73" />
      <rect x="300" y="70" width="170" height="110" rx="8" fill="#fff3dd" stroke="#b05c2a" />
      <rect x="550" y="85" width="130" height="80" rx="8" fill="#ece9fb" stroke="#6956b5" />
      <Label x={86} y={128}>Student PC</Label>
      <Label x={337} y={121}>Intranet</Label>
      <Label x={574} y={128}>Air gap</Label>
      <Arrow x1={220} y1={125} x2={300} y2={125} />
      <Arrow x1={470} y1={125} x2={550} y2={125} />
      <circle cx="141" cy="235" r="34" fill="#f3f7f5" stroke="#73827d" />
      <circle cx="385" cy="235" r="34" fill="#f3f7f5" stroke="#73827d" />
      <circle cx="615" cy="235" r="34" fill="#f3f7f5" stroke="#73827d" />
      <Label x={110} y={242}>docs</Label>
      <Label x={356} y={242}>tools</Label>
      <Label x={586} y={242}>data</Label>
    </Frame>
  );
}

function VsCodeVisual() {
  return (
    <Frame>
      <rect x="55" y="55" width="650" height="250" rx="8" fill="#1f2933" />
      <rect x="55" y="55" width="48" height="250" fill="#263643" />
      <rect x="103" y="55" width="150" height="250" fill="#eef4f1" />
      <rect x="253" y="55" width="452" height="172" fill="#fbfcfb" />
      <rect x="253" y="227" width="452" height="78" fill="#111827" />
      <Label x={122} y={98}>Explorer</Label>
      <Label x={386} y={122}>Editor</Label>
      <text x="282" y="263" className="svg-code">.venv&gt; python script.py</text>
      <circle cx="82" cy="86" r="9" fill="#8fb7ff" />
      <circle cx="82" cy="121" r="9" fill="#83d6b4" />
      <circle cx="82" cy="156" r="9" fill="#f2b46d" />
      <path d="M 285 95 h 210 M 285 125 h 270 M 285 155 h 185" stroke="#6b7280" strokeWidth="9" strokeLinecap="round" />
      <Arrow x1={210} y1={105} x2={280} y2={105} />
      <Arrow x1={420} y1={218} x2={420} y2={235} />
    </Frame>
  );
}

function PythonVisual() {
  return (
    <Frame>
      <rect x="70" y="74" width="275" height="210" rx="8" fill="#f3f7f5" stroke="#d1ddd8" />
      <rect x="410" y="74" width="280" height="210" rx="8" fill="#f8f1e8" stroke="#dfc8aa" />
      <text x="94" y="116" className="svg-code dark">image_dir = Path("data")</text>
      <text x="94" y="153" className="svg-code dark">for image in images:</text>
      <text x="118" y="190" className="svg-code dark">process(image)</text>
      <Label x={128} y={249}>script</Label>
      <circle cx="482" cy="135" r="32" fill="#e5f3f1" stroke="#2f6f73" />
      <circle cx="607" cy="135" r="32" fill="#fff3dd" stroke="#b05c2a" />
      <circle cx="545" cy="225" r="32" fill="#ece9fb" stroke="#6956b5" />
      <Label x={462} y={142}>files</Label>
      <Label x={582} y={142}>arrays</Label>
      <Label x={518} y={232}>errors</Label>
      <Arrow x1={345} y1={180} x2={410} y2={180} />
    </Frame>
  );
}

function VenvVisual() {
  return (
    <Frame>
      <rect x="70" y="75" width="180" height="210" rx="8" fill="#f3f7f5" stroke="#d1ddd8" />
      <rect x="290" y="75" width="180" height="210" rx="8" fill="#e5f3f1" stroke="#2f6f73" />
      <rect x="510" y="75" width="180" height="210" rx="8" fill="#fff3dd" stroke="#b05c2a" />
      <Label x={108} y={115}>project A</Label>
      <Label x={327} y={115}>.venv</Label>
      <Label x={548} y={115}>packages</Label>
      <text x="110" y="164" className="svg-code dark">scripts</text>
      <text x="110" y="196" className="svg-code dark">data</text>
      <text x="323" y="164" className="svg-code dark">python.exe</text>
      <text x="323" y="196" className="svg-code dark">pip</text>
      <text x="545" y="164" className="svg-code dark">numpy</text>
      <text x="545" y="196" className="svg-code dark">torch</text>
      <Arrow x1={250} y1={180} x2={290} y2={180} />
      <Arrow x1={470} y1={180} x2={510} y2={180} />
    </Frame>
  );
}

function NotebookVisual() {
  return (
    <Frame>
      <rect x="70" y="58" width="620" height="244" rx="10" fill="#f8faf9" stroke="#d8e2de" />
      <rect x="70" y="58" width="620" height="40" rx="10" fill="#2d2d30" />
      <Label x={94} y={84}>analysis.ipynb</Label>
      <rect x="104" y="130" width="540" height="55" rx="8" fill="#ffffff" stroke="#d8e2de" />
      <circle cx="130" cy="158" r="13" fill="#2f6f73" />
      <path d="M 127 151 L 127 165 L 138 158 Z" fill="#ffffff" />
      <text x="160" y="165" className="svg-code dark">image_count = len(images)</text>
      <rect x="104" y="212" width="540" height="55" rx="8" fill="#fff8ed" stroke="#dfc8aa" />
      <text x="128" y="247" className="svg-code dark">Markdown: record what you tried</text>
      <rect x="455" y="69" width="180" height="22" rx="5" fill="#e5f3f1" />
      <text x="473" y="85" className="svg-code dark">Kernel: .venv</text>
      <Arrow x1={360} y1={110} x2={500} y2={92} />
    </Frame>
  );
}

function AnnotationVisual() {
  return (
    <Frame>
      <rect x="65" y="80" width="190" height="170" rx="8" fill="#dbe7e2" />
      <path d="M 85 220 C 115 145, 165 190, 240 110" stroke="#6a7a72" strokeWidth="18" fill="none" opacity="0.65" />
      <rect x="485" y="80" width="190" height="170" rx="8" fill="#17201c" />
      <path d="M 512 220 C 544 146, 590 192, 658 112" stroke="#78d28a" strokeWidth="20" fill="none" />
      <rect x="314" y="130" width="120" height="70" rx="8" fill="#fff3dd" stroke="#b05c2a" />
      <Label x={99} y={286}>image</Label>
      <Label x={338} y={173}>annotate</Label>
      <Label x={538} y={286}>mask</Label>
      <Arrow x1={255} y1={165} x2={314} y2={165} />
      <Arrow x1={434} y1={165} x2={485} y2={165} />
    </Frame>
  );
}

function MlVisual() {
  return (
    <Frame>
      <rect x="60" y="90" width="150" height="85" rx="8" fill="#e5f3f1" stroke="#2f6f73" />
      <rect x="305" y="70" width="150" height="125" rx="8" fill="#f3f7f5" stroke="#73827d" />
      <rect x="550" y="90" width="150" height="85" rx="8" fill="#fff3dd" stroke="#b05c2a" />
      <Label x={105} y={137}>input</Label>
      <Label x={352} y={137}>model</Label>
      <Label x={579} y={137}>prediction</Label>
      <Arrow x1={210} y1={132} x2={305} y2={132} />
      <Arrow x1={455} y1={132} x2={550} y2={132} />
      <path d="M 625 188 C 598 250, 458 265, 390 205" stroke="#6956b5" strokeWidth="3" fill="none" />
      <path d="M 390 205 l 10 2 l -8 8 z" fill="#6956b5" />
      <Label x={468} y={271}>loss updates parameters</Label>
    </Frame>
  );
}

function GanVisual() {
  return (
    <Frame>
      <rect x="55" y="70" width="650" height="92" rx="8" fill="#e5f3f1" stroke="#2f6f73" />
      <rect x="55" y="205" width="650" height="92" rx="8" fill="#fff3dd" stroke="#b05c2a" />
      <Label x={82} y={118}>{"pix2pix: paired A -> B"}</Label>
      <Label x={82} y={253}>{"CycleGAN: unpaired A <-> B"}</Label>
      <circle cx="365" cy="116" r="25" fill="#ffffff" stroke="#2f6f73" />
      <circle cx="520" cy="116" r="25" fill="#ffffff" stroke="#2f6f73" />
      <Arrow x1={390} y1={116} x2={495} y2={116} />
      <circle cx="365" cy="251" r="25" fill="#ffffff" stroke="#b05c2a" />
      <circle cx="520" cy="251" r="25" fill="#ffffff" stroke="#b05c2a" />
      <Arrow x1={390} y1={251} x2={495} y2={251} />
      <Arrow x1={495} y1={269} x2={390} y2={269} />
    </Frame>
  );
}

function SegmentationVisual() {
  return (
    <Frame>
      {["train", "val", "test"].map((split, index) => {
        const y = 70 + index * 82;
        return (
          <g key={split}>
            <rect x="90" y={y} width="140" height="50" rx="8" fill="#f3f7f5" stroke="#73827d" />
            <rect x="330" y={y} width="130" height="50" rx="8" fill="#e5f3f1" stroke="#2f6f73" />
            <rect x="535" y={y} width="130" height="50" rx="8" fill="#17201c" stroke="#17201c" />
            <path d={`M 555 ${y + 38} C 580 ${y + 10}, 615 ${y + 42}, 650 ${y + 15}`} stroke="#78d28a" strokeWidth="8" fill="none" />
            <Label x={130} y={y + 32}>{split}</Label>
            <Label x={366} y={y + 32}>images</Label>
            <Label x={574} y={y + 32}>masks</Label>
            <Arrow x1={230} y1={y + 25} x2={330} y2={y + 25} />
            <Arrow x1={460} y1={y + 25} x2={535} y2={y + 25} />
          </g>
        );
      })}
    </Frame>
  );
}

function HpcVisual() {
  return (
    <Frame>
      <rect x="70" y="80" width="150" height="90" rx="8" fill="#e5f3f1" stroke="#2f6f73" />
      <rect x="305" y="70" width="150" height="110" rx="8" fill="#ece9fb" stroke="#6956b5" />
      <rect x="540" y="80" width="150" height="90" rx="8" fill="#fff3dd" stroke="#b05c2a" />
      <Label x={102} y={129}>bundle</Label>
      <Label x={347} y={129}>GPU job</Label>
      <Label x={570} y={129}>outputs</Label>
      <Arrow x1={220} y1={125} x2={305} y2={125} />
      <Arrow x1={455} y1={125} x2={540} y2={125} />
      <rect x="110" y="230" width="540" height="44" rx="8" fill="#111827" />
      <text x="135" y="258" className="svg-code">logs / checkpoints / metrics / review reports</text>
    </Frame>
  );
}
