export type Language = 'zh' | 'en' | 'ja';

export interface TranslationSet {
  // Navigation
  navTitle: string;
  navSubTitle: string;
  progressTitle: string;
  sparkleHint: string;
  navOutline: string;
  importantTag: string;
  footerTitle: string;
  footerVersion: string;
  footerDesc: string;

  // Header
  stepTag: string;
  resetBtn: string;
  nextBtn: string;

  // Common Simulator elements
  simTitleImport: string;
  simSelectAll: string;
  simSelectNone: string;
  simFolderMaterial: string;
  simFolderScript: string;
  simFolderShader: string;
  simImportBtn: string;

  // Step 1: Preparation
  s1PreTitle: string;
  s1PreDesc: string;
  s1Card1Title: string;
  s1Card1Desc: string;
  s1Card2Title: string;
  s1Card2Desc: string;
  s1Card3Title: string;
  s1Card3Desc: string;
  s1WarnTitle: string;
  s1WarnDesc: string;
  s1WarnMethodTitle: string;
  s1WarnMethodDesc: string;
  s1TipTitle: string;
  s1TipDesc: string;
  s1SimWarnBanner: string;

  // Step 2: Basic Import
  s2Title1: string;
  s2Desc1: string;
  s2Title2: string;
  s2Desc2: string;
  s2Card1Title: string;
  s2Card1Desc: string;
  s2Card2Title: string;
  s2Card2Desc: string;
  s2Card3Title: string;
  s2Card3Desc: string;
  s2ExtraTitle: string;
  s2ExtraDesc: string;
  s2TipTitle: string;
  s2TipDesc: string;

  // Step 2 Simulator
  s2SimTitle: string;
  s2SimPlaceholderBone: string;
  s2SimPlaceholderObj: string;
  s2SimAddBtn: string;
  s2SimUnfixBones: string;
  s2SimUnfixBonesDesc: string;
  s2SimWithChildren: string;
  s2SimWithChildrenDesc: string;
  s2SimUnfixObjects: string;
  s2SimUnfixObjectsDesc: string;
  s2SimUnhandleEyes: string;
  s2SimUnhandleEyesDesc: string;
  s2SimDragHint: string;
  s2SimCompleteBtn: string;

  // Step 3: Camera Setup
  s3PreTitle: string;
  s3PreDesc: string;
  s3TabVL2: string;
  s3TabVRCLens: string;
  s3VL2Title: string;
  s3VL2Step1: string;
  s3VL2Step2: string;
  s3VL2Step2Desc: string;
  s3VL2WarnTitle: string;
  s3VL2WarnDesc: string;
  s3VRCLensTitle: string;
  s3VRCLensDesc: string;
  s3VRCLensStep1: string;
  s3VRCLensStep2: string;
  s3VRCLensHandL: string;
  s3VRCLensHandR: string;
  s3VRCLensHead: string;
  s3VRCLensCheckTitle: string;
  s3VRCLensCheckDesc: string;
  s3TipTitle: string;
  s3TipDesc: string;

  // Step 3 Simulator
  s3SimTitleVL2: string;
  s3SimTitleVRCLens: string;
  s3SimDragDropArea: string;
  s3SimDragDropSucceed: string;
  s3SimVl2PathLabel: string;
  s3SimVl2PathPlaceholder: string;
  s3SimVl2AutoBtn: string;
  s3SimVl2AutoDone: string;
  s3SimStatusPending: string;
  s3SimStatusVl2Ok: string;
  s3SimStatusVrcLensOk: string;
  s3SimSetupInstruction: string;

  // Step 4: Bone Merging
  s4PreTitle: string;
  s4PreDesc: string;
  s4SubTitle1: string;
  s4Desc1: string;
  s4Step1Title: string;
  s4Step1Desc: string;
  s4Step2Title: string;
  s4Step2Desc: string;
  s4Step2Bullet1: string;
  s4Step2Bullet2: string;
  s4Step2Bullet3: string;
  s4TipTitle: string;
  s4TipDesc: string;

  // Step 4 Simulator
  s4SimTitle: string;
  s4SimCurrentStatus: string;
  s4SimActionMerge: string;
  s4SimActionRename: string;
  s4SimActionSucceed: string;
  s4SimMergeBtn: string;
  s4SimRenameBtn: string;

  // Step 5: Troubleshooting
  s5PreTitle: string;
  s5PreDesc: string;
  s5SubTitle1: string;
  s5Step1Title: string;
  s5Step1Desc: string;
  s5Step2Title: string;
  s5Step2Desc: string;
  s5Step3Title: string;
  s5Step3Desc1: string;
  s5Step3Desc2: string;
  s5Step4Title: string;
  s5Step4Desc1: string;
  s5Step4Desc2: string;
  s5TipTitle: string;
  s5TipDesc: string;

  // Step 5 Simulator
  s5SimTitle: string;
  s5SimRigCalibrate: string;
  s5SimErrorTitle: string;
  s5SimErrorDesc: string;
  s5SimCorrectTitle: string;
  s5SimCorrectDesc: string;
  s5SimFixBtn: string;
  s5SimApplyBtn: string;

  // ScreenshotCompare component translation keys
  compareTitle: string;
  compareSubTitle: string;
  compareFooter: string;
}

export const stepsList = {
  zh: [
    { id: 0, num: "01", title: "前置准备", subTitle: "插件依赖 & 警告", category: "Preparation" },
    { id: 1, num: "02", title: "基础导入", subTitle: "组件与面板认识", category: "Basic Import" },
    { id: 2, num: "03", title: "相机适配", subTitle: "VL2 & VRCLens", category: "Camera Setup" },
    { id: 3, num: "04", title: "换头骨骼处理", subTitle: "拼合模型节点重组", category: "Bone Merging" },
    { id: 4, num: "05", title: "疑难解答", subTitle: "面部破面 & 骨骼修正", category: "Troubleshooting" },
  ],
  en: [
    { id: 0, num: "01", title: "Preparation", subTitle: "Dependencies & Warnings", category: "Preparation" },
    { id: 1, num: "02", title: "Basic Import", subTitle: "Components & Inspector", category: "Basic Import" },
    { id: 2, num: "03", title: "Camera Setup", subTitle: "VL2 & VRCLens Adapters", category: "Camera Setup" },
    { id: 3, num: "04", title: "Bone Merging", subTitle: "Headdress Bone Structuring", category: "Bone Merging" },
    { id: 4, num: "05", title: "Troubleshooting", subTitle: "Facial Glitches & Rig Fix", category: "Troubleshooting" },
  ],
  ja: [
    { id: 0, num: "01", title: "事前準備", subTitle: "依存パッケージと警告", category: "Preparation" },
    { id: 1, num: "02", title: "インポート", subTitle: "コンポーネントと基本設定", category: "Basic Import" },
    { id: 2, num: "03", title: "カメラ調整", subTitle: "VL2 & VRCLensの設定", category: "Camera Setup" },
    { id: 3, num: "04", title: "頭部合体処理", subTitle: "骨格再構成と位置合わせ", category: "Bone Merging" },
    { id: 4, num: "05", title: "不具合対策", subTitle: "顔のメッシュ歪みと骨格修正", category: "Troubleshooting" },
  ]
};

export const locales: Record<Language, TranslationSet> = {
  zh: {
    navTitle: "AvatarPoseSystem",
    navSubTitle: "交互式设置与避坑指南",
    progressTitle: "新手实操进度",
    sparkleHint: "在右侧Unity仿真面板中完成实操，自动解锁绿勾",
    navOutline: "指南大纲 & 避坑步骤",
    importantTag: "极重要",
    footerTitle: "AvatarPoseSystem",
    footerVersion: "v1.0.18+",
    footerDesc: "本工具专为 APS 模型固定系统深度适配制作，用于快速检测及修复 VR 虚拟相机(VL2/VRCLens)失效、模型面部拉伸破面、眼球转动卡死等疑难报错。",
    
    stepTag: "STEP",
    resetBtn: "重置",
    nextBtn: "已设置，下一步",

    simTitleImport: "Import Unity Package",
    simSelectAll: "All (全选)",
    simSelectNone: "None (清空)",
    simFolderMaterial: "📂 Material (材质)",
    simFolderScript: "📂 Script (旧Udon脚本)",
    simFolderShader: "📂 Shader (唯一安全项)",
    simImportBtn: "Import",

    s1PreTitle: "前置要求（极重要）",
    s1PreDesc: "在您正式导入 AvatarPoseSystem 之前，请确保 Unity 工程中已成功导入以下三个基础包。如果缺少它们，系统将直接引发严重的脚本编译错误！",
    s1Card1Title: "Modular Avatar (MA)",
    s1Card1Desc: "用于无损拼合衣服与骨骼系统，APS 系统完全基于 MA 架构进行底层事件驱动。",
    s1Card2Title: "lilToon Shader",
    s1Card2Desc: "VRChat 动漫模型最通用的渲染着色器。APS 组件的界面图标以及固定指示线均依赖此着色器。",
    s1Card3Title: "圆环进度条 (CircularGauge)",
    s1Card3Desc: "用于在您的右手圆盘菜单中渲染身体固定进度的百分比进度条特效。",
    s1WarnTitle: "⚠️【重要警告】圆环进度条（CircularGauge）导入必坑事项：",
    s1WarnDesc: "导入此 Unity Package 时，千万不要全部导入！如果全部导入，包内自带的旧版本 C# 脚本、示例场景会与 VRChat SDK 3.0 的 Udon 产生命名冲突，导致您的 Unity 项目彻底瘫痪报错。",
    s1WarnMethodTitle: "👉 正确操作方法：",
    s1WarnMethodDesc: "如右侧的 [Unity仿真导入窗口] 所示，在弹出的 Import Window 中，点击左上角的 None 取消全部勾选，然后滑动到最下方，只勾选 “Shader” 文件夹。之后点击右下角的 Import。",
    s1TipTitle: "实操步骤提醒：",
    s1TipDesc: "在右侧的 Unity 仿真面板中，点击 None 按钮取消多余勾选，然后单独勾选 Shader 文件夹，再点击 Import 完成此步演练。",
    s1SimWarnBanner: "⚠️ 安全避坑提示：导入 CircularGauge 时，你应该只勾选最后一个 (Shader) 文件夹，其它的 Material 和 Script 绝对不要勾选，以免工程报错锁死！",

    s2Title1: "1. 将 Prefab（预制体）拖入模型下",
    s2Desc1: "打开 Unity，将 AvatarPoseSystem 的预制体直接拖拽至您的 VRChat Avatar 的最顶层级（即包含 Avatar Descriptor 的根节点下），使其成为与 Armature 骨骼、Body 皮肤同一层级的子物体。",
    s2Title2: "2. 认识 AvatarPoseSystem 组件核心参数",
    s2Desc2: "选中该预制体后，右侧 Inspector 将会显示 AvatarPoseSystem 脚本组件。它包含三个红线标记的骨骼与道具豁免槽：",
    s2Card1Title: "Unfix Phys Bones",
    s2Card1Desc: "不希望被固定的物理骨骼（例如：长发、裙子、胸部、猫耳猫尾等）。当您的身体固定在空中时，这些骨骼仍然保持物理飘动，否则身体停住而头发不飘会显得极不自然。",
    s2Card2Title: "With Children",
    s2Card2Desc: "带有子节点的豁免物理骨骼。和上一个类似，但它会对您选中的那个骨骼节点及其所有的子级物理骨骼进行链式豁免，非常适合豁免复杂的长裙或者多段长尾巴。",
    s2Card3Title: "Unfix Objects",
    s2Card3Desc: "豁免的游戏对象。例如各种第三人称跟拍相机、挂在身上的小道具、浮空宠物等。放置在这里的游戏对象，在身体被锁死时，将保持世界空间的自由拖拽与交互运动。",
    s2ExtraTitle: "⚠️ 额外要点：眼球豁免 (Unhandle Eyes)",
    s2ExtraDesc: "如果您使用的是带面部追踪 (Face Tracking) 或眼动追踪 (Eye Tracking) 的模型，请务必勾选组件上的 Unhandle Eyes。如果不勾选此项，在身体进入固定姿态后，模型的眼球将被牢牢锁在默认朝前位置，无法进行眼球转动。",
    s2TipTitle: "💡 模拟互动提示：",
    s2TipDesc: "在右侧的 Unity 仿真面板中，尝试在 Unfix Phys Bones 下方添加并输入您的长发或裙子物理骨骼节点，以此加深对组件面板的理解。",

    s2SimTitle: "Inspector - AvatarPoseSystem (Script)",
    s2SimPlaceholderBone: "添加豁免骨骼名...",
    s2SimPlaceholderObj: "添加豁免物体名...",
    s2SimAddBtn: "添加",
    s2SimUnfixBones: "Unfix Phys Bones (豁免物理骨骼)",
    s2SimUnfixBonesDesc: "在此填入不被冻结的物理骨骼节点",
    s2SimWithChildren: "With Children (链式豁免子骨骼)",
    s2SimWithChildrenDesc: "在此填入多节骨骼根部（如长发根骨）",
    s2SimUnfixObjects: "Unfix Objects (豁免物理道具物体)",
    s2SimUnfixObjectsDesc: "在此放入免除冻结的小道具、跟拍相机等",
    s2SimUnhandleEyes: "Unhandle Eyes (豁免眼球眼动控制)",
    s2SimUnhandleEyesDesc: "面捕/眼动追踪模型必须开启！",
    s2SimDragHint: "（本面板为交互式 Unity Inspector，您可添加自定义骨骼进行演练）",
    s2SimCompleteBtn: "保存并生成设定",

    s3PreTitle: "相机适配：为什么这步至关重要？",
    s3PreDesc: "VRChat 模型相机的底层运镜逻辑依赖特定的骨骼约束（Constraint）或世界坐标转换。当 APS 系统将您的模型“全轴固定”时，Unity 会强制覆盖所有坐标变动。如果不进行此节设置，您的相机镜头会死死卡在脚底或由于坐标丢失而直接消失失效！",
    s3TabVL2: "适配 VirtualLens2 (VL2)",
    s3TabVRCLens: "适配 VRCLens",
    s3VL2Title: "📷 适配 VirtualLens2 (VL2) 核心步骤：",
    s3VL2Step1: "第一步：拖拽本体 — 在 Unity 的 Hierarchy 列表中找到 VirtualLens2 插件本体，将其拖入 APS 组件的 Unfix Objects 列表中（作为 Element 0）。",
    s3VL2Step2: "第二步：手动指定路径 — 在下方配套的 Unfix Object Paths 列表中，手动输入确切文本：",
    s3VL2Step2Desc: "（⚠️ 务必保证拼写大小写一模一样，不要有任何多余的空格！）",
    s3VL2WarnTitle: "⚠️ 极关键额外设置（无人机防死机）：",
    s3VL2WarnDesc: "在 Hierarchy 中选中您的 VirtualLens2 本体，然后在右侧 Inspector 展开的 VirtualLens Settings 面板中滑动，找到 Marker Objects 区域。查看下方各项参数。如果右边有显示为带有“Auto”图标的按钮，请务必点击 Auto 按钮让它自动生成具体的实体对象。若不进行此步，身体固定后 VL2 对应的 Drone 无人机控制将直接瘫痪，无法飞起运镜！",
    s3VRCLensTitle: "📷 适配 VRCLens 核心步骤：",
    s3VRCLensDesc: "VRCLens 相机由于其结构较为零散，除本体外，还有多个自动放置在骨骼上的拾取节点（Pickup）需要整体加入豁免列表。",
    s3VRCLensStep1: "第一步：添加相机根目录 — 将 Hierarchy 根目录下的 VRCLens 整个对象拖入 APS 的 Unfix Objects 列表中。",
    s3VRCLensStep2: "第二步：豁免手部和头部 pickup 节点 — 依次在您的模型骨骼 Armature 中展开，找到以下三个自动挂载的游戏对象，并全部拖入 APS 的 Unfix Objects 中：",
    s3VRCLensHandL: "手部骨骼 Hand_L 节点下的：",
    s3VRCLensHandR: "手部骨骼 Hand_R 节点下的：",
    s3VRCLensHead: "头部骨骼 Head 节点下的：",
    s3VRCLensCheckTitle: "💡 检查列表：",
    s3VRCLensCheckDesc: "配置完成后，您的 Unfix Objects 列表中应当包含整整 4 个对象（VRCLens, PickupA, PickupB, PickupC），如图5所示。",
    s3TipTitle: "💻 模拟操作指南：",
    s3TipDesc: "点击右侧 Unity 仿真面板上的相机切换按钮，完成对应的相机拖拽和点击 Auto 按钮的步骤，让其变成绿色成功状态！",

    s3SimTitleVL2: "Hierarchy - VirtualLens2 Adapter",
    s3SimTitleVRCLens: "Hierarchy - VRCLens Adapter",
    s3SimDragDropArea: "请将 Hierarchy 节点拖入此处或点击自动添加",
    s3SimDragDropSucceed: "🎉 适配成功：节点已正确装载！",
    s3SimVl2PathLabel: "Unfix Object Paths (路径指定)",
    s3SimVl2PathPlaceholder: "例如: _VirtualLens_Root",
    s3SimVl2AutoBtn: "点击 Inspector - [Auto] 按钮生成 Marker",
    s3SimVl2AutoDone: "Marker Object 已成功生成！",
    s3SimStatusPending: "当前相机适配状态：未匹配 / 未拖入 ❌",
    s3SimStatusVl2Ok: "已配置：VL2 根节点、Marker与解冻路径 ✅",
    s3SimStatusVrcLensOk: "已配置：VRCLens + Pickup A, B, C 完整4节点 ✅",
    s3SimSetupInstruction: "点击上方虚拟节点，模拟拖拽进 Unfix Objects 区域：",

    s4PreTitle: "拼合模型（换头 / 换装）的特殊骨骼处理",
    s4PreDesc: "当您的 VRChat Avatar 使用了“拼合模型”（即：使用了 A 模型的身体骨架，却换上了 B 模型的头部以追求完美长相）时，由于新头部的眼球和头部层级与原身体骨架脱节，APS 会无法定位您的面部并直接编译报错，导致面部完全无法活动。",
    s4SubTitle1: "统一头部与眼球骨骼排列法（两步走）",
    s4Desc1: "请严格遵循以下骨骼层级拖拽排布，否则会导致 Unity 无法正确获取双眼位置的视线方向：",
    s4Step1Title: "统一头部层级 (如图7)",
    s4Step1Desc: "在 Hierarchy 列表中，将您新换头部的 Head 骨骼节点，整体拖入并作为子物体放置在原身体骨骼的 Head 骨骼下方。",
    s4Step2Title: "替换并重命名眼球骨骼 (如图8)",
    s4Step2Desc: "眼球骨骼必须继承原本身体的骨骼坐标名字，执行以下动作：",
    s4Step2Bullet1: "将身体原有的旧眼球骨骼（如 LeftEye / RightEye）改名，在其后部增加下划线废弃（例如重命名为 LeftEye_ / RightEye_）。",
    s4Step2Bullet2: "将新头部自带的眼球骨骼（可能叫 Eye_L / Eye_R）移动到身体的 Head 骨骼下方。",
    s4Step2Bullet3: "非常关键：将移过来的新头部眼球骨骼名字，改回与原身体骨骼一模一样的名字（即改回 LeftEye 和 RightEye）。",
    s4TipTitle: "🎨 趣味模拟：",
    s4TipDesc: "您可以在右侧的 Unity 仿真骨骼树中，点击「合并骨骼」与「重命名」按钮，观察模型在拖拽重组后层级变绿通过的正确姿态。",

    s4SimTitle: "Unity Hierarchy Bone Merger",
    s4SimCurrentStatus: "Hierarchy 骨骼合并状态：",
    s4SimActionMerge: "【操作 1】点击将新头骨合并至原身体 Head 骨骼下",
    s4SimActionRename: "【操作 2】点击重命名旧眼球为 LeftEye_ / 新眼球为 LeftEye",
    s4SimActionSucceed: "🎉 骨骼层级整理成功！APS已能准确定位双眼视线。",
    s4SimMergeBtn: "第一步：合并头部骨骼",
    s4SimRenameBtn: "第二步：对齐并重命名眼球骨骼",

    s5PreTitle: "疑难解答：身体固定后脸部拉伸、眼睛不正常、破面？",
    s5PreDesc: "虽然 APS 最新版本修复了大部分显示破损问题，但由于导入部分 FBX 模型时，Unity 自动进行 Humanoid 骨骼识别会产生错乱。如果遇到身体停住、而整张脸部/下巴/眼球被莫名拉扯、扭曲到脖子后面的惨状，通常都是因为 FBX 骨骼重映射错误分配导致的！",
    s5SubTitle1: "🔧 FBX Humanoid 骨骼重构映射修复步骤",
    s5Step1Title: "第一步",
    s5Step1Desc: "在 Project 资源浏览器中找到模型原始的 FBX 文件。在右侧 Inspector 中切换到 Rig 标签，并点击 Configure... 按钮 (进入绿色的骨骼分配界面)。",
    s5Step2Title: "第二步",
    s5Step2Desc: "在骨骼映射小绿人界面中，点击绿人头部的圆圈，向下滚动到最底部的 Optional Bone（可选骨骼）折叠页。",
    s5Step3Title: "排错核心",
    s5Step3Desc1: "检查 Jaw (下巴)、Left Eye (左眼)、Right Eye (右眼) 的分配：",
    s5Step3Desc2: "由于 Unity 的自动算法缺陷，非常多的时候它会错误地将前发（Hair_Front）或者呆毛骨骼分配给 Jaw (下巴)，或者分配给左右眼 (Eyes)！当身体固定、物理飘动头发时，Unity 误以为在操作下巴和眼球，于是强行拉扯整张脸和头部，造成恐怖的破面！",
    s5Step4Title: "解决方法",
    s5Step4Desc1: "清空错误分配的骨骼：",
    s5Step4Desc2: "将无关的头发骨骼从 Left Eye、Right Eye 以及 Jaw 槽位中移除（点击其最右边的圆形靶心按钮，在弹出窗最上方选择 None，或者重新拖入正确的真实眼球骨骼），最后点击右下角的 Apply 并点击 Done 保存！",
    s5TipTitle: "破面实战演练：",
    s5TipDesc: "在右侧 Unity 小绿人模拟配置面板中，您能看到眼球(LeftEye/RightEye)和下巴(Jaw)中误分了 hair 物理骨骼。点击 “一键修复映射”，将其改成正确的 Real Eye / None，点击 Apply 即可完美恢复模型容貌！",

    s5SimTitle: "FBX Humanoid Rig Calibration",
    s5SimRigCalibrate: "小绿人头部骨骼映射",
    s5SimErrorTitle: "❌ 发生面部破面崩溃拉伸错误！",
    s5SimErrorDesc: "骨骼映射中错误地将发丝物理骨骼 hair_S_Root 识别成了眼球，导致物理头发飘动时，整张脸像破面拉扯卡住。请立即修复映射！",
    s5SimCorrectTitle: "✅ 人形映射重构修复完成！",
    s5SimCorrectDesc: "左右眼骨骼已重映射为 LeftEye/RightEye。无用的 Jaw(下巴)骨骼映射已完美移除(None)。模型动画一切恢复完美！",
    s5SimFixBtn: "一键修复 Humanoid 映射",
    s5SimApplyBtn: "Apply (保存应用配置)",

    compareTitle: "官方配置标准对照图",
    compareSubTitle: "官方标准 Unity 配置蓝图",
    compareFooter: "以上是当前步骤对应的官方标准 Unity 规范设置与配置层级树。"
  },
  en: {
    navTitle: "AvatarPoseSystem",
    navSubTitle: "Interactive Guide & Setup Checklists",
    progressTitle: "Hands-on Progress",
    sparkleHint: "Complete tasks in the interactive Unity panel to automatically unlock progress checkmarks",
    navOutline: "Setup Outline & Anti-Trap Steps",
    importantTag: "CRITICAL",
    footerTitle: "AvatarPoseSystem",
    footerVersion: "v1.0.18+",
    footerDesc: "This utility is tailormade for deep integration of the APS system, used to quickly detect and resolve Virtual Lens failures (VL2/VRCLens), model facial mesh distortion, or frozen eye rotation issues.",
    
    stepTag: "STEP",
    resetBtn: "Reset",
    nextBtn: "Next Step",

    simTitleImport: "Import Unity Package",
    simSelectAll: "All (Select All)",
    simSelectNone: "None (Clear All)",
    simFolderMaterial: "📂 Material (Materials)",
    simFolderScript: "📂 Script (Old Udon Scripts)",
    simFolderShader: "📂 Shader (Safe Option Only)",
    simImportBtn: "Import",

    s1PreTitle: "Prerequisites (Critical)",
    s1PreDesc: "Before importing AvatarPoseSystem, ensure the following three base packages are imported into your Unity project. Missing any of them will trigger severe script compilation errors!",
    s1Card1Title: "Modular Avatar (MA)",
    s1Card1Desc: "Enables non-destructive clothing and bone merging. The APS system relies entirely on Modular Avatar's event-driven architecture.",
    s1Card2Title: "lilToon Shader",
    s1Card2Desc: "The most popular cartoon shading renderer for anime models in VRChat. The APS icon UI and indicator lines depend on it.",
    s1Card3Title: "CircularGauge",
    s1Card3Desc: "Used to render the radial posture fixation progress bar percentages inside your sub-expression radial menu.",
    s1WarnTitle: "⚠️ [Warning] CircularGauge Import Pitfall:",
    s1WarnDesc: "Never import all files of this Unity Package! Doing so introduces legacy C# scripts and sample scenes that conflict with VRChat SDK 3.0 Udon, breaking your entire project.",
    s1WarnMethodTitle: "👉 Correct Import Method:",
    s1WarnMethodDesc: "As simulated in the [Unity Package Import Panel] on the right, click 'None' in the top-left to clear all options, then scroll to the bottom and check ONLY the 'Shader' folder. Then click 'Import'.",
    s1TipTitle: "Simulation Guide:",
    s1TipDesc: "In the right Unity simulator, click 'None' to clear selections, check ONLY the Shader folder, and click 'Import' to complete the rehearsal.",
    s1SimWarnBanner: "⚠️ Safety Tip: When importing CircularGauge, check ONLY the bottom-most 'Shader' folder. Materials and Scripts must remain unchecked to prevent compile-time locks!",

    s2Title1: "1. Drag Prefab Into the Avatar Hierarchy",
    s2Desc1: "In Unity, drag the AvatarPoseSystem prefab directly under the top-most root node of your VRChat avatar (where your Avatar Descriptor sits) as a child element alongside Armature and Body.",
    s2Title2: "2. Understanding Key Parameters of the APS Script",
    s2Desc2: "Select the prefab. The Inspector on the right will present the AvatarPoseSystem component. It contains three red-marked exclusion fields:",
    s2Card1Title: "Unfix Phys Bones",
    s2Card1Desc: "Physics bones that shouldn't freeze (e.g., long hair, skirts, chest, animal ears). Freezing hair along with the body posture looks highly unnatural; keeping them floating retains fluid lifelike motion.",
    s2Card2Title: "With Children",
    s2Card2Desc: "Excludes the selected physics bone along with all its children in a chained fashion. Ideal for complex long skirts or multi-segment tails.",
    s2Card3Title: "Unfix Objects",
    s2Card3Desc: "Exempted GameObjects (such as third-person tracking cameras, accessories, floating pets). These remain free to interact in world space when the body is anchored.",
    s2ExtraTitle: "⚠️ Extra Detail: Eye Tracking Exemption (Unhandle Eyes)",
    s2ExtraDesc: "If your avatar utilizes Face Tracking or Eye Tracking, ensure you check 'Unhandle Eyes'. Otherwise, the avatar eyes will lock in a forward-staring pose when the body is fixed, breaking eye expressions.",
    s2TipTitle: "💡 Simulation Tip:",
    s2TipDesc: "In the right Unity Inspector simulator, try adding and typing your hair/skirt physics bone nodes under Unfix Phys Bones to get familiar with the script inputs.",

    s2SimTitle: "Inspector - AvatarPoseSystem (Script)",
    s2SimPlaceholderBone: "Add bone node name...",
    s2SimPlaceholderObj: "Add GameObject name...",
    s2SimAddBtn: "Add",
    s2SimUnfixBones: "Unfix Phys Bones (Exempt Bones)",
    s2SimUnfixBonesDesc: "Input hair/skirt physics bone nodes here",
    s2SimWithChildren: "With Children (Exempt Bones + Children)",
    s2SimWithChildrenDesc: "Root bones (e.g. hair_root) for deep chained exemption",
    s2SimUnfixObjects: "Unfix Objects (Exempt GameObjects)",
    s2SimUnfixObjectsDesc: "For accessories, cameras, floating items, pets",
    s2SimUnhandleEyes: "Unhandle Eyes (Exempt Eyes Tracking)",
    s2SimUnhandleEyesDesc: "Must be checked for face tracking & eye look setups!",
    s2SimDragHint: "(This is an interactive Unity Inspector simulator. Feel free to try adding bone entries)",
    s2SimCompleteBtn: "Save and Generate Config",

    s3PreTitle: "Camera Setup: Why is this step critical?",
    s3PreDesc: "VRChat camera overlays depend on specific bone constraints and world-to-local coordinate mapping. When APS locks your model across all axes, Unity overrides all translation states. Failing to exempt the camera will lock it at your avatar's feet or cause the lens to disappear completely!",
    s3TabVL2: "VirtualLens2 (VL2) Setup",
    s3TabVRCLens: "VRCLens Setup",
    s3VL2Title: "📷 VirtualLens2 (VL2) Key Steps:",
    s3VL2Step1: "Step 1: Drag VR Lens — Locate VirtualLens2 in your Hierarchy, drag it into the 'Unfix Objects' array (as Element 0).",
    s3VL2Step2: "Step 2: Define Paths Manually — Under 'Unfix Object Paths' on the script, type the exact text string:",
    s3VL2Step2Desc: "(⚠️ Double-check matching letter cases exactly, avoid extra white spaces!)",
    s3VL2WarnTitle: "⚠️ Highly Critical Step (Drone Freeze Protection):",
    s3VL2WarnDesc: "Select the VirtualLens2 object in Hierarchy, scroll down the right Inspector panel under VirtualLens Settings, locate 'Marker Objects'. Look for the Auto buttons on the right side of the parameters. You MUST click 'Auto' to let VL2 generate the required tracker markers. If skipped, the drone control will break upon body fixation!",
    s3VRCLensTitle: "📷 VRCLens Key Steps:",
    s3VRCLensDesc: "VRCLens has a highly modular structure. Besides the root camera object, multiple pickup points on hands and head must also be exempted.",
    s3VRCLensStep1: "Step 1: Exempt Root Camera — Drag the entire VRCLens object from the Hierarchy root into the APS Unfix Objects list.",
    s3VRCLensStep2: "Step 2: Exempt Hand & Head Pickups — Expand your Armature bones, locate these three auto-generated items, and drag all of them into Unfix Objects:",
    s3VRCLensHandL: "Under left hand bone Hand_L:",
    s3VRCLensHandR: "Under right hand bone Hand_R:",
    s3VRCLensHead: "Under head bone Head:",
    s3VRCLensCheckTitle: "💡 Checklist Verification:",
    s3VRCLensCheckDesc: "Once configured, your Unfix Objects must contain exactly 4 objects: VRCLens, PickupA, PickupB, and PickupC, as shown in the diagram.",
    s3TipTitle: "💻 Simulation Rehearsal:",
    s3TipDesc: "Click the adapter toggle buttons in the right simulator, configure the virtual objects, and click Auto to transition to the green success status!",

    s3SimTitleVL2: "Hierarchy - VirtualLens2 Adapter",
    s3SimTitleVRCLens: "Hierarchy - VRCLens Adapter",
    s3SimDragDropArea: "Drag Hierarchy node here or click to auto-add",
    s3SimDragDropSucceed: "🎉 Adaption successful: Node correctly mounted!",
    s3SimVl2PathLabel: "Unfix Object Paths (Custom Paths)",
    s3SimVl2PathPlaceholder: "e.g., _VirtualLens_Root",
    s3SimVl2AutoBtn: "Click Inspector [Auto] button to generate Marker",
    s3SimVl2AutoDone: "Marker Object successfully generated!",
    s3SimStatusPending: "Current Camera Adaptation: Missing Nodes ❌",
    s3SimStatusVl2Ok: "Configured: VL2 root, marker, and exemption path ✅",
    s3SimStatusVrcLensOk: "Configured: VRCLens + hand/head Pickups (4 nodes) ✅",
    s3SimSetupInstruction: "Click the virtual node nodes above to simulate adding them to the Unfix list:",

    s4PreTitle: "Bone Merging / Head Swap Preparation",
    s4PreDesc: "If your VRChat avatar is a merged model (e.g., you combined Avatar A's body with Avatar B's cute head), the eyes and head hierarchies may become disconnected from the main Armature. This makes APS fail to locate the face, triggering script compiler errors and locking facial movements completely.",
    s4SubTitle1: "Aligning Head & Eye Bone Hierarchies",
    s4Desc1: "Follow these exact hierarchy steps to ensure Unity correctly computes look-at directions and eye states:",
    s4Step1Title: "1. Uniform Head Placement",
    s4Step1Desc: "In Hierarchy, drag the Head bone of your new head mesh inside and directly under the Head bone of the original body armature.",
    s4Step2Title: "2. Re-anchor and Rename Eye Bones",
    s4Step2Desc: "The eye bones must assume the original body bone naming format for VRChat to recognize them:",
    s4Step2Bullet1: "Rename the old body eye bones (e.g., LeftEye / RightEye) by adding an underscore to retire them (e.g., LeftEye_ / RightEye_).",
    s4Step2Bullet2: "Move the new head mesh eye bones (often named Eye_L / Eye_R) directly under the Head bone.",
    s4Step2Bullet3: "Crucial: Rename the new head eye bones back to the exact naming standard: LeftEye and RightEye.",
    s4TipTitle: "🎨 Rehearsal Playground:",
    s4TipDesc: "Click the 'Merge Bones' and 'Rename Eye Bones' buttons in the right interactive bone tree to practice proper structure alignment.",

    s4SimTitle: "Unity Hierarchy Bone Merger",
    s4SimCurrentStatus: "Hierarchy Merge Status:",
    s4SimActionMerge: "[Action 1] Click to merge head bone under Body's Head node",
    s4SimActionRename: "[Action 2] Click to rename Eye_L/R back to LeftEye/RightEye",
    s4SimActionSucceed: "🎉 Bone hierarchy successfully aligned! APS can now target eye sight.",
    s4SimMergeBtn: "Step 1: Merge Head Bones",
    s4SimRenameBtn: "Step 2: Align & Rename Eye Bones",

    s5PreTitle: "Troubleshooting: Mesh Stretching & Facial Glitches",
    s5PreDesc: "While the latest APS release remedies most distortion bugs, importing some models with auto-generated Humanoid mapping inside Unity causes confusion. If you notice your avatar's eyes, jaw, or entire face stretching behind its neck when posture is frozen, incorrect bone remapping is the culprit!",
    s5SubTitle1: "🔧 Repairing Humanoid Bone Mappings",
    s5Step1Title: "Step 1",
    s5Step1Desc: "Select your original model FBX file in the Project window. On the right Inspector, switch to the Rig tab, and click Configure... to enter the bone assignment view.",
    s5Step2Title: "Step 2",
    s5Step2Desc: "In the green humanoid mapping window, click the head circle on the skeleton graphic, and scroll to the bottom foldout: Optional Bones.",
    s5Step3Title: "The Root Cause",
    s5Step3Desc1: "Inspect Jaw, Left Eye, and Right Eye parameters:",
    s5Step3Desc2: "Due to Unity's automatic mapping flaws, it frequently misattributes hair roots (e.g., hair_front) to the Jaw, Left Eye, or Right Eye slot! When body posture is fixed while physical hair bones sway, Unity moves the face mesh violently, resulting in horrific facial distortion.",
    s5Step4Title: "Resolution",
    s5Step4Desc1: "Clear Wrong Bone Bindings:",
    s5Step4Desc2: "Clear wrong hair bones from Left Eye, Right Eye, and Jaw (click the circular target icon and select 'None' at the top, or drag actual eye bones into the slots). Click 'Apply' at the bottom-right, then click 'Done' to save.",
    s5TipTitle: "Deformation Practice:",
    s5TipDesc: "In the right skeleton simulator, hair physics bones are mistakenly bound to Eyes and Jaw. Click 'Auto Repair Mappings' to align them to Real Eye / None, then click 'Apply' to restore the avatar's face!",

    s5SimTitle: "FBX Humanoid Rig Calibration",
    s5SimRigCalibrate: "Humanoid Skeleton Head Mapping",
    s5SimErrorTitle: "❌ Facial mesh stretching error occurred!",
    s5SimErrorDesc: "Hair bones were misidentified as eyes and jaw, causing extreme distortion when the physical hair sways. Please fix bone mappings immediately!",
    s5SimCorrectTitle: "✅ Humanoid mapping rebuilt successfully!",
    s5SimCorrectDesc: "Eyes are mapped to LeftEye/RightEye, and the unused Jaw slot is cleared (None). All facial animations are fully restored!",
    s5SimFixBtn: "Auto Repair Humanoid Mappings",
    s5SimApplyBtn: "Apply (Save Config)",

    compareTitle: "Official Setup Diagram",
    compareSubTitle: "Official Standard Unity Blueprint",
    compareFooter: "The standard Unity configuration specs and hierarchical tree for the current step."
  },
  ja: {
    navTitle: "AvatarPoseSystem",
    navSubTitle: "対話型設定＆トラップ回避ガイド",
    progressTitle: "実習の進捗状況",
    sparkleHint: "右側のUnityシミュレータで実習を完了すると、自動的にチェックが付きます",
    navOutline: "ガイド構成とエラー回避ステップ",
    importantTag: "極めて重要",
    footerTitle: "AvatarPoseSystem",
    footerVersion: "v1.0.18+",
    footerDesc: "本ツールは、APSポーズ固定システムの導入に特化しており、VRカメラ（VL2/VRCLens）の機能不全、アバターの顔メッシュの歪み、眼球回転のフリーズといったトラブルを迅速に検出・修正できます。",
    
    stepTag: "ステップ",
    resetBtn: "リセット",
    nextBtn: "設定完了、次へ",

    simTitleImport: "Import Unity Package",
    simSelectAll: "All (すべて選択)",
    simSelectNone: "None (クリア)",
    simFolderMaterial: "📂 Material (マテリアル)",
    simFolderScript: "📂 Script (古いUdonスクリプト)",
    simFolderShader: "📂 Shader (唯一の安全な選択)",
    simImportBtn: "Import",

    s1PreTitle: "事前準備（非常に重要）",
    s1PreDesc: "AvatarPoseSystemをインポートする前に、必ずUnityプロジェクトに以下の3つのパッケージがインポートされていることを確認してください。不足している場合、深刻なスクリプトコンパイルエラーが発生します！",
    s1Card1Title: "Modular Avatar (MA)",
    s1Card1Desc: "衣装やギミックを非破壊的にアバターに統合します。APSシステムは完全にMAのアーキテクチャ上で動作します。",
    s1Card2Title: "lilToon Shader",
    s1Card2Desc: "VRChatのアニメアバターに広く使われるシェーダー。APSのアイコンやインジケータ表示の描画に必要です。",
    s1Card3Title: "円形進捗バー (CircularGauge)",
    s1Card3Desc: "右手のエクスプレッションメニュー内でアバター姿勢固定の進捗率を可視化するために使用します。",
    s1WarnTitle: "⚠️ 【重要警告】CircularGaugeの誤った導入エラー：",
    s1WarnDesc: "このUnity Packageをインポートする際、絶対に「すべてインポート（All）」しないでください！古いC#スクリプトやサンプルがVRChat SDK 3.0 Udonと競合し、プロジェクト全体がコンパイルエラーで破壊されます。",
    s1WarnMethodTitle: "👉 正しい操作方法：",
    s1WarnMethodDesc: "右側の [Unityインポートシミュレーション窓] に示すように、左上の「None」を押して全解除し、一番下までスクロールして「Shader」フォルダのみにチェックを入れます。その後、右下の「Import」を押します。",
    s1TipTitle: "シミュレーション手順：",
    s1TipDesc: "右側のUnityシミュレータパネルで、「None」をクリックして選択を解除し、「Shader」のみをチェックして「Import」をクリックし、実習を完了させてください。",
    s1SimWarnBanner: "⚠️ エラー回避のアドバイス：CircularGaugeのインポート時は、末尾の「Shader」フォルダのみを選択してください。プロジェクトが破壊されるのを防ぐため、MaterialとScriptはチェックしないでください。",

    s2Title1: "1. Prefab（プレハブ）をアバター階層に配置",
    s2Desc1: "Unityで、AvatarPoseSystemのプレハブをVRChatアバターの最上位（Avatar Descriptorがある階層）の直下にドラッグ＆ドロップし、ArmatureやBodyと並ぶ子オブジェクトとして配置します。",
    s2Title2: "2. APSスクリプトの主要パラメータ解説",
    s2Desc2: "プレハブを選択すると、右側のInspectorにAvatarPoseSystemのスクリプトコンポーネントが表示されます。ここには3つの赤い枠で示される除外設定用スロットがあります：",
    s2Card1Title: "Unfix Phys Bones",
    s2Card1Desc: "固定したくないPhys Bone（例：長い髪、スカート、胸、ケモ耳、尻尾など）。アバターが空中に固定された際、髪やスカートが物理的に揺れ動かないと非常に不自然に見えるため、揺らしたままにします。",
    s2Card2Title: "With Children",
    s2Card2Desc: "指定した骨格およびその配下の子ボーンすべてをチェーン状に除外します。長スカートや多段階の尻尾といった複雑な骨格を一括して除外するのに便利です。",
    s2Card3Title: "Unfix Objects",
    s2Card3Desc: "ポーズ固定時にも動きを凍結しないGameObject（例：三人称追従カメラ、身につけた小物、浮遊するペットなど）。身体が空中で固定されても、世界空間内で自由に動かせます。",
    s2ExtraTitle: "⚠️ 重要項目：視線コントロール除外 (Unhandle Eyes)",
    s2ExtraDesc: "フェイストラッキングやアイトラッキング対応のアバターを使用している場合は、必ず「Unhandle Eyes」にチェックを入れてください。ここを忘れると、姿勢固定中に瞳が正面を向いたままフリーズし、眼球が回らなくなります。",
    s2TipTitle: "💡 操作実習のアドバイス：",
    s2TipDesc: "右側のUnity Inspectorシミュレータの「Unfix Phys Bones」以下に、髪やスカートのボーン名を入力し、設定方法を確認してください。",

    s2SimTitle: "Inspector - AvatarPoseSystem (Script)",
    s2SimPlaceholderBone: "除外するボーン名を追加...",
    s2SimPlaceholderObj: "除外するオブジェクト名を追加...",
    s2SimAddBtn: "追加",
    s2SimUnfixBones: "Unfix Phys Bones (物理ボーン除外)",
    s2SimUnfixBonesDesc: "固定から除外する髪やスカートのPhysBoneボーン名",
    s2SimWithChildren: "With Children (子ボーンも含めて除外)",
    s2SimWithChildrenDesc: "ボーンの根本部分を指定し、配下の子階層を全除外します",
    s2SimUnfixObjects: "Unfix Objects (アイテム除外リスト)",
    s2SimUnfixObjectsDesc: "アバター固定時も揺れる小物やドローンカメラ等",
    s2SimUnhandleEyes: "Unhandle Eyes (アイトラッキング除外)",
    s2SimUnhandleEyesDesc: "フェイストラッキング・アイトラ対応モデルはチェック必須！",
    s2SimDragHint: "（これはインタラクティブUnity Inspectorシミュレータです。自由にボーン名を追加してみてください）",
    s2SimCompleteBtn: "設定を保存して構成を適用",

    s3PreTitle: "カメラ調整：なぜこの手順が必須なのか？",
    s3PreDesc: "VRChat用カメラの基本制御は、特定のボーン拘束（Constraint）やワールド座標変換に依存しています。APSシステムがアバター全体を「完全固定」すると、Unityはあらゆる座標移動を強制上書きするため、カメラが足元にフリーズするか、座標ロストによってレンズ自体が消失してしまいます！",
    s3TabVL2: "VirtualLens2 (VL2) の設定",
    s3TabVRCLens: "VRCLens の設定",
    s3VL2Title: "📷 VirtualLens2 (VL2) の設定手順：",
    s3VL2Step1: "ステップ 1: オブジェクトの登録 — UnityのHierarchyでVirtualLens2の本体オブジェクトを見つけ、APSコンポーネントの「Unfix Objects」リスト（Element 0）にドラッグします。",
    s3VL2Step2: "ステップ 2: 除外パスの手動指定 — その下の「Unfix Object Paths」に、以下のテキストを正確に入力します：",
    s3VL2Step2Desc: "（⚠️ アルファベットの大文字小文字、アンダースコアを完全に一致させ、余計な空白を入れないでください！）",
    s3VL2WarnTitle: "⚠️ 非常に重要なドローン対策設定：",
    s3VL2WarnDesc: "HierarchyでVirtualLens2オブジェクトを選択し、右側のInspectorをスクロールして「Marker Objects」設定エリアを探します。各項目の右側に「Auto」アイコンが表示されているボタンがある場合、必ず「Auto」ボタンをクリックして専用マーカーオブジェクトを生成してください。これを怠ると、ポーズ固定時にVL2のドローン追従機能が動作しなくなります！",
    s3VRCLensTitle: "📷 VRCLens の設定手順：",
    s3VRCLensDesc: "VRCLensカメラはコンポーネントが細分化されているため、ルートオブジェクトの他に、両手や頭に自動配置されるピックアップ（Pickup）ボーンもすべて除外リストに入れる必要があります。",
    s3VRCLensStep1: "ステップ 1: ルートカメラの登録 — Hierarchyにある「VRCLens」のルートオブジェクトをAPSの「Unfix Objects」にドラッグします。",
    s3VRCLensStep2: "ステップ 2: 手と頭のPickupオブジェクト除外 — アバターの骨格（Armature）を展開し、以下の3つの自動配置オブジェクトを見つけて「Unfix Objects」に追加します：",
    s3VRCLensHandL: "左手ボーン Hand_L 配下にある：",
    s3VRCLensHandR: "右手ボーン Hand_R 配下にある：",
    s3VRCLensHead: "頭部ボーン Head 配下にある：",
    s3VRCLensCheckTitle: "💡 設定チェックリスト：",
    s3VRCLensCheckDesc: "設定完了後、「Unfix Objects」には計4つのオブジェクト（VRCLens, PickupA, PickupB, PickupC）が含まれている必要があります（図5を参照）。",
    s3TipTitle: "💻 操作実習の方法：",
    s3TipDesc: "右側のUnityシミュレータパネルでカメラアダプターを切り替え、各カメラオブジェクトを登録し、「Auto」ボタン等を押して緑色の成功状態にしてください！",

    s3SimTitleVL2: "Hierarchy - VirtualLens2 Adapter",
    s3SimTitleVRCLens: "Hierarchy - VRCLens Adapter",
    s3SimDragDropArea: "Hierarchyノードをここにドラッグ、またはクリックして追加",
    s3SimDragDropSucceed: "🎉 適合成功: ノードが正しくマウントされました！",
    s3SimVl2PathLabel: "Unfix Object Paths (パスの指定)",
    s3SimVl2PathPlaceholder: "例: _VirtualLens_Root",
    s3SimVl2AutoBtn: "Inspectorの [Auto] ボタンをクリックしてMarkerを生成",
    s3SimVl2AutoDone: "Markerオブジェクトの自動生成が完了しました！",
    s3SimStatusPending: "カメラ適合ステータス: 未登録 / 適合ノード不足 ❌",
    s3SimStatusVl2Ok: "設定済: VL2ルート、マーカー生成、除外パス適用 ✅",
    s3SimStatusVrcLensOk: "設定済: VRCLens + ピックアップ A, B, C（計4ノード） ✅",
    s3SimSetupInstruction: "上の仮想ノードをクリックして、Unfix Objectsエリアへの登録を試してください：",

    s4PreTitle: "合体モデル（アバター換頭 / 着せ替え）の特殊なボーン処理",
    s4PreDesc: "アバターの「頭部移植」（アバターAの体に、お好みの顔を持つアバターBの頭部を移植する作業）を行った場合、新しい頭部と元の体ボーンとの親子階層が崩れるため、APSが顔や眼球の位置を特定できずエラーを出してフリーズしてしまいます。",
    s4SubTitle1: "頭部と眼球の階層統一手順（2つのステップ）",
    s4Desc1: "Unityが瞳の視線方向や眼動アニメーションを正しく認識できるよう、以下の階層構造を厳密に構築してください：",
    s4Step1Title: "1. 頭部ボーンの親子関係の統一（図7）",
    s4Step1Desc: "Hierarchyで、新しく乗せた頭部メッシュの「Head」ボーンを、元の体ボーンの「Head」の直下にドラッグして子オブジェクトにします。",
    s4Step2Title: "2. 眼球ボーンの配置と名前の統一（図8）",
    s4Step2Desc: "眼球がVRChatシステムに正しく認識されるよう、元のボーン名を継承します：",
    s4Step2Bullet1: "元アバターの古い眼球ボーン（例：LeftEye / RightEye）を、末尾にアンダースコア（_）等を付与してリネームして廃止扱いにします（例：LeftEye_ / RightEye_）。",
    s4Step2Bullet2: "新しい頭部に付いていた本来の眼球ボーン（例：Eye_L / Eye_R）をアバターの「Head」ボーンの直下に移動します。",
    s4Step2Bullet3: "極めて重要：新しい頭部の眼球ボーンの名前を、元のアバターの眼球ボーン名と完全に一致するよう「LeftEye」と「RightEye」に書き換えます。",
    s4TipTitle: "🎨 操作の練習場：",
    s4TipDesc: "右側の骨格ツリーで「頭部を結合」と「眼球のリネーム」ボタンをクリックして、再配置が通り緑色のパス状態になるか確認してください。",

    s4SimTitle: "Unity Hierarchy Bone Merger",
    s4SimCurrentStatus: "Hierarchy 骨格結合ステータス:",
    s4SimActionMerge: "【手順 1】クリックして新しい頭部ボーンをアバターのHead配下に統合します",
    s4SimActionRename: "【手順 2】旧眼球をLeftEye_に、新眼球をLeftEyeにリネームして配置を整えます",
    s4SimActionSucceed: "🎉 骨格階層の調整が完了しました！APSは眼球の位置特定に成功しました。",
    s4SimMergeBtn: "手順 1: 頭部ボーンをマージ",
    s4SimRenameBtn: "手順 2: 眼球ボーンの名前統一と配置",

    s5PreTitle: "不具合対策：アバター固定時に顔が引きちぎれる、メッシュの崩壊？",
    s5PreDesc: "最新のAPSシステムでは多くの描画バグを解消していますが、UnityでFBX形式のアバターモデルをインポートする際、Humanoidボーンの自動マッピング機能が暴走することがあります。姿勢を固定した瞬間に顔や下顎、目が引っ張られて首の後ろにめり込むような狂気的な破面（バグ）が発生した場合、原因はほぼ骨格マッピングのミスマッチです！",
    s5SubTitle1: "🔧 FBX Humanoidの骨格再マッピングと修正方法",
    s5Step1Title: "手順 1",
    s5Step1Desc: "Projectビューでアバターアセット内の「FBXファイル」を選択します。右側のInspectorで「Rig」タブを開き、「Configure...」ボタン（アバター骨格調整画面）をクリックします。",
    s5Step2Title: "手順 2",
    s5Step2Desc: "マッピング調整用の小緑人画面で、緑人の「頭（Head）」アイコンをクリックし、最下部にある「Optional Bones（オプションボーン）」フォルダーを開きます。",
    s5Step3Title: "エラーの引き金",
    s5Step3Desc1: "Jaw（顎）、Left Eye（左目）、Right Eye（右目）の設定値を確認：",
    s5Step3Desc2: "Unityの自動アライメントの仕様により、前髪（Hair_Front）やアホ毛のボーンを誤って「Jaw（下顎）」や「Left/Right Eye」に勝手に割り当ててしまうことが多々あります！身体がポーズ固定されている間に髪が揺れると、Unityは顎や目が激しく動いていると誤解し、メッシュをめちゃくちゃに歪ませます。",
    s5Step4Title: "解決方法",
    s5Step4Desc1: "誤ったアタッチボーンの削除：",
    s5Step4Desc2: "「Left Eye」「Right Eye」「Jaw」の各スロットに意図しない髪の毛のボーンが入っている場合、スロットを「None」（全解除）にするか、本物の眼球ボーンを指定し直します。最後に右下の「Apply」をクリックし、「Done」で設定を保存してください！",
    s5TipTitle: "破面バグの模擬修正：",
    s5TipDesc: "右側のスケルトンマッパー画面を見ると、眼球や下顎のスロットに誤って「hair」物理ボーンが設定されています。「自動修復（Auto Fix）」をクリックして本物の瞳、またはNoneに修正し、Applyで顔の形状を完璧に復元しましょう！",

    s5SimTitle: "FBX Humanoid Rig Calibration",
    s5SimRigCalibrate: "Humanoid 骨格マッピング (頭部)",
    s5SimErrorTitle: "❌ 顔のメッシュバグ・崩壊が発生しています！",
    s5SimErrorDesc: "髪ボーンが眼球ボーンとして誤判定されているため、髪の毛が揺れると同時に顔全体が首の後ろに引っ張られています。今すぐ修正を！",
    s5SimCorrectTitle: "✅ ボーンマッピングを正常に修復しました！",
    s5SimCorrectDesc: "左右の瞳が本物のLeftEye/RightEyeに設定され、無効な顎(Jaw)はNoneにクリアされました。アバターのフェイシャルアニメーションは正常です！",
    s5SimFixBtn: "一键修复 Humanoid 映射 (マッピング修復)",
    s5SimApplyBtn: "Apply (保存して設定を適用)",

    compareTitle: "標準構成対照図",
    compareSubTitle: "公式 Unity 標準設定階層ツリー",
    compareFooter: "現在のステップにおける公式推奨の Unity 設定およびボーン構造ツリーです。"
  }
};
