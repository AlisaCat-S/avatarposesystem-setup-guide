import React from 'react';
import { 
  Image as ImageIcon 
} from 'lucide-react';

interface ScreenshotCompareProps {
  activeStep: number;
}

export default function ScreenshotCompare({
  activeStep
}: ScreenshotCompareProps) {
  return (
    <div className="flex-col flex-1 flex gap-4 font-sans text-neutral-300">
      <div className="bg-[#2D2D2D] p-4 rounded-lg border border-neutral-800 space-y-3">
        <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            步骤 0{activeStep + 1} 官方配置标准对照图
          </span>
          <span className="text-[10px] text-neutral-500 font-mono">STEP 0{activeStep + 1} DIRECTIVE</span>
        </div>

        {/* Built-in high-fidelity Unity Inspector vector diagram */}
        <div className="bg-[#1C1C1C] rounded border border-neutral-900 overflow-hidden relative group">
          {/* Render step specific Unity UI mockup */}
          {activeStep === 0 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">Unity Import Package Window (jp/toh/CircularGauge)</div>
              <div className="space-y-1.5 py-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-rose-500 font-bold font-mono">[✖]</span>
                  <span>📂 jp</span>
                </div>
                <div className="pl-4 flex items-center gap-2 text-neutral-500">
                  <span className="text-rose-500 font-bold font-mono">[✖]</span>
                  <span>📂 toh</span>
                </div>
                <div className="pl-8 space-y-1.5 border-l border-neutral-800 ml-1.5">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <span className="text-rose-500 font-mono">[✖]</span>
                    <span>📂 Material (材质)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <span className="text-rose-500 font-mono">[✖]</span>
                    <span>📂 Script (旧Udon脚本)</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-950/20 p-1 rounded border border-emerald-900/30">
                    <span className="text-emerald-500 font-mono">[✔]</span>
                    <span>📂 Shader (唯一安全项)</span>
                    <span className="ml-auto text-[9px] bg-emerald-950 px-1.5 rounded text-emerald-400 border border-emerald-900/40">必须仅勾选</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">Inspector - AvatarPoseSystem (Script)</div>
              <div className="space-y-2 py-1.5 font-mono text-xs text-neutral-300">
                <div className="bg-[#2A2A2A] p-2 rounded border border-neutral-800">
                  <div className="text-[10px] text-neutral-400 font-bold pb-1 mb-1 border-b border-neutral-800">Unfix Phys Bones (豁免物理骨骼)</div>
                  <div className="text-[11px] text-neutral-400 space-y-1">
                    <div>• Element 0: <span className="text-blue-400">Hair_Back</span> (发后骨骼)</div>
                    <div>• Element 1: <span className="text-blue-400">Skirt</span> (裙子)</div>
                  </div>
                </div>
                <div className="bg-[#2A2A2A] p-2 rounded border border-neutral-800">
                  <div className="text-[10px] text-neutral-400 font-bold pb-1 mb-1 border-b border-neutral-800">Unfix Objects (豁免物理游戏物体)</div>
                  <div className="text-[11px] text-neutral-400 space-y-1">
                    <div>• Element 0: <span className="text-purple-400">Drone</span> (无人机)</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-amber-950/20 border border-amber-900/40 rounded text-amber-300">
                  <div className="w-4 h-4 rounded bg-[#383838] border border-neutral-600 flex items-center justify-center text-emerald-400 font-bold">[✔]</div>
                  <div className="text-[11px]">
                    <strong>Unhandle Eyes</strong> (面捕眼球豁免) — <span className="text-emerald-400 font-bold">必须开启</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">Camera Adapter Directives (VirtualLens2 & VRCLens)</div>
              <div className="space-y-3 py-1 font-mono text-xs">
                <div className="bg-[#252525] p-2 rounded border border-neutral-800">
                  <span className="text-[10px] text-blue-400 font-bold block mb-1">【方案 A】VirtualLens2 设定：</span>
                  <div className="space-y-1 text-[11px] text-neutral-400 pl-1.5">
                    <div>1. Unfix Objects 中拖入 <span className="text-white font-bold">_VirtualLens_Root</span> 节点</div>
                    <div>2. 在 VirtualLens2 面板中点击 <span className="text-amber-400 font-bold">"Auto"</span> 生成 Marker Objects</div>
                  </div>
                </div>
                <div className="bg-[#252525] p-2 rounded border border-neutral-800">
                  <span className="text-[10px] text-purple-400 font-bold block mb-1">【方案 B】VRCLens 4 个核心豁免节点：</span>
                  <div className="space-y-1 text-[11px] text-neutral-400 pl-1.5">
                    <div>1. <span className="text-[#C0A2FF]">VRCLens</span> (Hierarchy 根目录本体)</div>
                    <div>2. <span className="text-[#C0A2FF]">PickupA</span> (位于左手 Left Hand 下)</div>
                    <div>3. <span className="text-[#C0A2FF]">PickupB</span> (位于右手 Right Hand 下)</div>
                    <div>4. <span className="text-[#C0A2FF]">PickupC</span> (位于头部 Head 下)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">Hierarchy Hierarchy Bone Merge (换头骨骼整理)</div>
              <div className="space-y-2 py-1 font-mono text-[11px]">
                <div className="bg-[#2A2A2A] p-2.5 rounded border border-neutral-800 space-y-1">
                  <div className="text-amber-400 font-bold">1. 原身体骨骼下旧眼球改名废弃：</div>
                  <div className="text-neutral-400 pl-3 leading-relaxed">
                    └─ Head (头骨骼)<br />
                    &nbsp;&nbsp;&nbsp;└─ <span className="text-neutral-500 line-through">LeftEye</span> ➡️ <span className="text-emerald-400 font-bold">LeftEye_</span> (加下划线)<br />
                    &nbsp;&nbsp;&nbsp;└─ <span className="text-neutral-500 line-through">RightEye</span> ➡️ <span className="text-emerald-400 font-bold">RightEye_</span>
                  </div>
                </div>
                <div className="bg-[#2A2A2A] p-2.5 rounded border border-neutral-800 space-y-1">
                  <div className="text-blue-400 font-bold">2. 新头部眼球移入 Head 骨骼下并重命名：</div>
                  <div className="text-neutral-400 pl-3 leading-relaxed">
                    └─ Head (头骨骼)<br />
                    &nbsp;&nbsp;&nbsp;└─ <span className="text-neutral-400">Eye_L</span> ➡️ <span className="text-emerald-400 font-bold">LeftEye</span> (还原原本的准确拼写)<br />
                    &nbsp;&nbsp;&nbsp;└─ <span className="text-neutral-400">Eye_R</span> ➡️ <span className="text-emerald-400 font-bold">RightEye</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">FBX Humanoid Rig Calibration (骨骼配置界面)</div>
              <div className="space-y-2 py-1 font-mono text-xs">
                <div className="bg-[#1e3a1e]/40 p-2 border border-emerald-900/30 rounded text-emerald-400">
                  <div className="font-bold mb-1 flex items-center gap-1">✅ 正常眼动分配：</div>
                  <div className="pl-3 space-y-0.5 text-neutral-300 text-[11px]">
                    <div>• Left Eye: <strong>LeftEye</strong> (原眼球骨骼)</div>
                    <div>• Right Eye: <strong>RightEye</strong></div>
                  </div>
                </div>
                <div className="bg-[#3a1e1e]/40 p-2 border border-rose-900/30 rounded text-rose-400">
                  <div className="font-bold mb-1 flex items-center gap-1">❌ 绝不能有物理/毛发骨骼：</div>
                  <div className="pl-3 space-y-0.5 text-neutral-300 text-[11px]">
                    <div>• Left Eye: <span className="text-rose-400 line-through">hair_S_Root.L</span> (错误)</div>
                    <div>• Jaw (下巴): <span className="text-rose-400 line-through">hair_F_Root</span> ➡️ <span className="text-emerald-400 font-bold font-mono">None</span> (必须设为 None)</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="text-[10px] text-neutral-400 leading-normal">
          💡 以上是当前步骤对应的官方标准 Unity 规范设置与配置层级树。
        </p>
      </div>
    </div>
  );
}
