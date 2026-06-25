import React from 'react';
import { 
  Image as ImageIcon 
} from 'lucide-react';
import { Language, locales } from '../locales';

interface ScreenshotCompareProps {
  activeStep: number;
  lang: Language;
}

export default function ScreenshotCompare({
  activeStep,
  lang
}: ScreenshotCompareProps) {
  const t = locales[lang];

  // Component-specific inline localized items to keep code neat and robust
  const inlineTexts = {
    zh: {
      stepLabel: "官方配置标准对照图",
      stepDirective: "步骤",
      builtInTips: "以上是当前步骤对应的官方标准 Unity 规范设置与配置层级树。",
      
      // Step 1
      s1Title: "Unity 导入包窗口 (jp/toh/CircularGauge)",
      s1ShaderBadge: "必须仅勾选",
      
      // Step 2
      s2Title: "属性属性面板 - AvatarPoseSystem (脚本)",
      s2Bones: "Unfix Phys Bones (豁免物理骨骼)",
      s2BonesSub1: "发后骨骼",
      s2BonesSub2: "裙子骨骼",
      s2Objects: "Unfix Objects (豁免物理游戏物体)",
      s2ObjectsSub1: "无人机跟拍器",
      s2Extra: "Unhandle Eyes (面捕眼球豁免) — 必须开启",

      // Step 3
      s3Title: "相机挂载适配指令 (VirtualLens2 和 VRCLens)",
      s3VL2Plan: "【方案 A】VirtualLens2 设定：",
      s3VL2Desc1: "1. Unfix Objects 中拖入 _VirtualLens_Root 节点",
      s3VL2Desc2: "2. 在 VirtualLens2 面板中点击 'Auto' 生成 Marker Objects",
      s3VRCLensPlan: "【方案 B】VRCLens 4 个核心豁免节点：",
      s3VRCLensDesc1: "1. VRCLens (Hierarchy 根目录本体)",
      s3VRCLensDesc2: "2. PickupA (位于左手 Left Hand 骨骼下)",
      s3VRCLensDesc3: "3. PickupB (位于右手 Right Hand 骨骼下)",
      s3VRCLensDesc4: "4. PickupC (位于头部 Head 骨骼下)",

      // Step 4
      s4Title: "骨骼树层级对齐 (换头骨骼整理)",
      s4BoneTitle1: "1. 原身体骨骼下旧眼球改名废弃：",
      s4BoneDesc1: "Head (头骨骼)\n └─ LeftEye ➡️ LeftEye_ (加下划线)\n └─ RightEye ➡️ RightEye_",
      s4BoneTitle2: "2. 新头部眼球移入 Head 骨骼下并重命名：",
      s4BoneDesc2: "Head (头骨骼)\n └─ Eye_L ➡️ LeftEye (还原原本的准确拼写)\n └─ Eye_R ➡️ RightEye",

      // Step 5
      s5Title: "FBX Humanoid Rig 骨骼配置界面",
      s5MatchOk: "✅ 正常眼动分配：",
      s5MatchOkDesc1: "Left Eye: LeftEye (原眼球骨骼)",
      s5MatchOkDesc2: "Right Eye: RightEye",
      s5MatchErr: "❌ 绝不能有物理/毛发骨骼：",
      s5MatchErrDesc1: "Left Eye: hair_S_Root.L (错误)",
      s5MatchErrDesc2: "Jaw (下巴): hair_F_Root ➡️ None (必须设为 None)"
    },
    en: {
      stepLabel: "Official Configuration Setup Guide",
      stepDirective: "Step",
      builtInTips: "The standard Unity configuration specs and hierarchical tree for the current step.",

      // Step 1
      s1Title: "Unity Import Package Window (jp/toh/CircularGauge)",
      s1ShaderBadge: "Must check ONLY",

      // Step 2
      s2Title: "Inspector - AvatarPoseSystem (Script Component)",
      s2Bones: "Unfix Phys Bones (Exempt Physics Bones)",
      s2BonesSub1: "Back Hair Bone",
      s2BonesSub2: "Skirt Bone",
      s2Objects: "Unfix Objects (Exempt GameObjects)",
      s2ObjectsSub1: "Tracking Drone",
      s2Extra: "Unhandle Eyes (Exempt Eye Tracking) — MUST BE CHECKED",

      // Step 3
      s3Title: "Camera Adapter Instructions (VirtualLens2 & VRCLens)",
      s3VL2Plan: "[Option A] VirtualLens2 Requirements:",
      s3VL2Desc1: "1. Drag _VirtualLens_Root node into Unfix Objects list",
      s3VL2Desc2: "2. Click 'Auto' in the VirtualLens2 panel to create Markers",
      s3VRCLensPlan: "[Option B] VRCLens 4 Crucial Exemption Nodes:",
      s3VRCLensDesc1: "1. VRCLens (The main root GameObject in Hierarchy)",
      s3VRCLensDesc2: "2. PickupA (Located under Left Hand bone)",
      s3VRCLensDesc3: "3. PickupB (Located under Right Hand bone)",
      s3VRCLensDesc4: "4. PickupC (Located under Head bone)",

      // Step 4
      s4Title: "Hierarchy Bone Alignment (Head-Swap Skeleton Rearranging)",
      s4BoneTitle1: "1. Retire old body eye bone nodes under Head:",
      s4BoneDesc1: "Head (Bone)\n └─ LeftEye ➡️ LeftEye_ (Rename to ignore)\n └─ RightEye ➡️ RightEye_",
      s4BoneTitle2: "2. Move new head eye bones under Head and rename:",
      s4BoneDesc2: "Head (Bone)\n └─ Eye_L ➡️ LeftEye (Revert to standard spelling)\n └─ Eye_R ➡️ RightEye",

      // Step 5
      s5Title: "FBX Humanoid Rig Calibration Panel",
      s5MatchOk: "✅ Correct Eye Look Allocation:",
      s5MatchOkDesc1: "Left Eye: LeftEye (Genuine eye bone)",
      s5MatchOkDesc2: "Right Eye: RightEye",
      s5MatchErr: "❌ NEVER assign physical hair bones:",
      s5MatchErrDesc1: "Left Eye: hair_S_Root.L (WRONG)",
      s5MatchErrDesc2: "Jaw: hair_F_Root ➡️ None (Must be None)"
    },
    ja: {
      stepLabel: "標準構成対照図",
      stepDirective: "ステップ",
      builtInTips: "現在のステップにおける公式推奨の Unity 設定およびボーン構造ツリーです。",

      // Step 1
      s1Title: "Unity インポートパッケージ画面 (jp/toh/CircularGauge)",
      s1ShaderBadge: "これのみ必須選択",

      // Step 2
      s2Title: "Inspector - AvatarPoseSystem (スクリプト)",
      s2Bones: "Unfix Phys Bones (物理ボーン除外リスト)",
      s2BonesSub1: "後頭部髪の毛ボーン",
      s2BonesSub2: "スカートボーン",
      s2Objects: "Unfix Objects (解凍対象オブジェクト)",
      s2ObjectsSub1: "ドローンカメラ本体",
      s2Extra: "Unhandle Eyes (アイトラッキング除外) — 必須チェック",

      // Step 3
      s3Title: "カメラ適合仕様書 (VirtualLens2 & VRCLens)",
      s3VL2Plan: "【設定 A】VirtualLens2 の場合：",
      s3VL2Desc1: "1. Unfix Objects に _VirtualLens_Root ノードを追加する",
      s3VL2Desc2: "2. VirtualLens2の管理パネルで 'Auto' をクリックしMarkerを自動生成",
      s3VRCLensPlan: "【設定 B】VRCLens 除外必須の4点ノード：",
      s3VRCLensDesc1: "1. VRCLens (Hierarchy内のルートオブジェクト)",
      s3VRCLensDesc2: "2. PickupA (左手 Left Hand ボーンの配下)",
      s3VRCLensDesc3: "3. PickupB (右手 Right Hand ボーンの配下)",
      s3VRCLensDesc4: "4. PickupC (頭部 Head ボーンの配下)",

      // Step 4
      s4Title: "骨格ツリー階層構造の結合 (アバター換頭時の配置)",
      s4BoneTitle1: "1. 元アバターの古い眼球ボーンをリネームして廃止：",
      s4BoneDesc1: "Head (頭ボーン)\n └─ LeftEye ➡️ LeftEye_ (アンダーバー追加)\n └─ RightEye ➡️ RightEye_",
      s4BoneTitle2: "2. 新頭部メッシュの目をHead配下に移動しリネーム：",
      s4BoneDesc2: "Head (頭ボーン)\n └─ Eye_L ➡️ LeftEye (本来の名称に完全一致させる)\n └─ Eye_R ➡️ RightEye",

      // Step 5
      s5Title: "FBX Humanoid Rig 骨格マッピング設定",
      s5MatchOk: "✅ 正しい目のマッピング状態：",
      s5MatchOkDesc1: "Left Eye: LeftEye (本物の瞳ボーン)",
      s5MatchOkDesc2: "Right Eye: RightEye",
      s5MatchErr: "❌ 髪の毛などの物理ボーンの混入不可：",
      s5MatchErrDesc1: "Left Eye: hair_S_Root.L (誤認識エラー)",
      s5MatchErrDesc2: "Jaw (下顎): hair_F_Root ➡️ None (必ずNoneにする)"
    }
  };

  const localText = inlineTexts[lang] || inlineTexts.zh;

  return (
    <div className="flex-col flex-1 flex gap-4 font-sans text-neutral-300">
      <div className="bg-[#2D2D2D] p-4 rounded-lg border border-neutral-800 space-y-3">
        <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            {localText.stepDirective} 0{activeStep + 1} {localText.stepLabel}
          </span>
          <span className="text-[10px] text-neutral-500 font-mono">STEP 0{activeStep + 1} DIRECTIVE</span>
        </div>

        {/* Built-in high-fidelity Unity Inspector vector diagram */}
        <div className="bg-[#1C1C1C] rounded border border-neutral-900 overflow-hidden relative group">
          {/* Render step specific Unity UI mockup */}
          {activeStep === 0 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">{localText.s1Title}</div>
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
                    <span>{t.simFolderMaterial}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <span className="text-rose-500 font-mono">[✖]</span>
                    <span>{t.simFolderScript}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-950/20 p-1 rounded border border-emerald-900/30">
                    <span className="text-emerald-500 font-mono">[✔]</span>
                    <span>{t.simFolderShader}</span>
                    <span className="ml-auto text-[9px] bg-emerald-950 px-1.5 rounded text-emerald-400 border border-emerald-900/40">{localText.s1ShaderBadge}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">{localText.s2Title}</div>
              <div className="space-y-2 py-1.5 font-mono text-xs text-neutral-300">
                <div className="bg-[#2A2A2A] p-2 rounded border border-neutral-800">
                  <div className="text-[10px] text-neutral-400 font-bold pb-1 mb-1 border-b border-neutral-800">{localText.s2Bones}</div>
                  <div className="text-[11px] text-neutral-400 space-y-1">
                    <div>• Element 0: <span className="text-blue-400">Hair_Back</span> ({localText.s2BonesSub1})</div>
                    <div>• Element 1: <span className="text-blue-400">Skirt</span> ({localText.s2BonesSub2})</div>
                  </div>
                </div>
                <div className="bg-[#2A2A2A] p-2 rounded border border-neutral-800">
                  <div className="text-[10px] text-neutral-400 font-bold pb-1 mb-1 border-b border-neutral-800">{localText.s2Objects}</div>
                  <div className="text-[11px] text-neutral-400 space-y-1">
                    <div>• Element 0: <span className="text-purple-400">Drone</span> ({localText.s2ObjectsSub1})</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-amber-950/20 border border-amber-900/40 rounded text-amber-300">
                  <div className="w-4 h-4 rounded bg-[#383838] border border-neutral-600 flex items-center justify-center text-emerald-400 font-bold">[✔]</div>
                  <div className="text-[11px] font-bold">
                    {localText.s2Extra}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">{localText.s3Title}</div>
              <div className="space-y-3 py-1 font-mono text-xs">
                <div className="bg-[#252525] p-2 rounded border border-neutral-800">
                  <span className="text-[10px] text-blue-400 font-bold block mb-1">{localText.s3VL2Plan}</span>
                  <div className="space-y-1 text-[11px] text-neutral-400 pl-1.5 leading-normal">
                    <div>{localText.s3VL2Desc1}</div>
                    <div>{localText.s3VL2Desc2}</div>
                  </div>
                </div>
                <div className="bg-[#252525] p-2 rounded border border-neutral-800">
                  <span className="text-[10px] text-purple-400 font-bold block mb-1">{localText.s3VRCLensPlan}</span>
                  <div className="space-y-1 text-[11px] text-neutral-400 pl-1.5 leading-normal">
                    <div>{localText.s3VRCLensDesc1}</div>
                    <div>{localText.s3VRCLensDesc2}</div>
                    <div>{localText.s3VRCLensDesc3}</div>
                    <div>{localText.s3VRCLensDesc4}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">{localText.s4Title}</div>
              <div className="space-y-2 py-1 font-mono text-[11px] leading-relaxed">
                <div className="bg-[#2A2A2A] p-2.5 rounded border border-neutral-800 space-y-1">
                  <div className="text-amber-400 font-bold">{localText.s4BoneTitle1}</div>
                  <pre className="text-neutral-400 pl-3 leading-relaxed whitespace-pre-wrap font-mono text-[11px]">
                    {localText.s4BoneDesc1}
                  </pre>
                </div>
                <div className="bg-[#2A2A2A] p-2.5 rounded border border-neutral-800 space-y-1">
                  <div className="text-blue-400 font-bold">{localText.s4BoneTitle2}</div>
                  <pre className="text-neutral-400 pl-3 leading-relaxed whitespace-pre-wrap font-mono text-[11px]">
                    {localText.s4BoneDesc2}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="p-4 flex flex-col gap-2 select-none">
              <div className="text-[10px] font-mono text-neutral-500 pb-1 border-b border-neutral-800">{localText.s5Title}</div>
              <div className="space-y-2 py-1 font-mono text-xs leading-normal">
                <div className="bg-[#1e3a1e]/40 p-2 border border-emerald-900/30 rounded text-emerald-400">
                  <div className="font-bold mb-1 flex items-center gap-1">{localText.s5MatchOk}</div>
                  <div className="pl-3 space-y-0.5 text-neutral-300 text-[11px]">
                    <div>{localText.s5MatchOkDesc1}</div>
                    <div>{localText.s5MatchOkDesc2}</div>
                  </div>
                </div>
                <div className="bg-[#3a1e1e]/40 p-2 border border-rose-900/30 rounded text-rose-400">
                  <div className="font-bold mb-1 flex items-center gap-1">{localText.s5MatchErr}</div>
                  <div className="pl-3 space-y-0.5 text-neutral-300 text-[11px]">
                    <div>{localText.s5MatchErrDesc1}</div>
                    <div>{localText.s5MatchErrDesc2}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="text-[10px] text-neutral-400 leading-normal">
          💡 {localText.builtInTips}
        </p>
      </div>
    </div>
  );
}
