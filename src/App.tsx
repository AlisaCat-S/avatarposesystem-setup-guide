import React, { useState, useRef, useEffect } from 'react';
import { 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  Camera, 
  Workflow, 
  RefreshCw, 
  Play, 
  Check, 
  Plus, 
  X, 
  FileText, 
  ChevronRight, 
  Info, 
  User, 
  Eye, 
  Sparkles,
  HelpCircle,
  Undo,
  UploadCloud,
  Image as ImageIcon,
  Trash2,
  Sliders,
  Languages
} from 'lucide-react';
import ScreenshotCompare from './components/ScreenshotCompare';
import { locales, stepsList, Language } from './locales';

// Define Step interface
interface Step {
  id: number;
  num: string;
  title: string;
  subTitle: string;
  category: string;
}

export default function App() {
  // Localization setup
  const [lang, setLang] = useState<Language>('zh');

  // Detect language automatically on mount
  useEffect(() => {
    const userLang = navigator.language || (navigator as any).userLanguage || 'zh';
    const lowerLang = userLang.toLowerCase();
    if (lowerLang.includes('ja') || lowerLang.includes('jp')) {
      setLang('ja');
    } else if (lowerLang.includes('en')) {
      setLang('en');
    } else {
      setLang('zh');
    }
  }, []);

  // Navigation & step management
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  
  // High-fidelity View Toggles
  const [simulatorMode, setSimulatorMode] = useState<'interactive' | 'screenshot'>('interactive');
  const [stepImages, setStepImages] = useState<Record<number, string>>({});
  const [dragOver, setDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [compareMode, setCompareMode] = useState<'sideBySide' | 'overlay'>('sideBySide');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(50);

  // STEP 1 Simulator State (CircularGauge Import)
  const [s1ShaderChecked, setS1ShaderChecked] = useState<boolean>(true);
  const [s1MaterialChecked, setS1MaterialChecked] = useState<boolean>(false);
  const [s1ScriptChecked, setS1ScriptChecked] = useState<boolean>(false);
  const s1AllChecked = s1MaterialChecked && s1ScriptChecked && s1ShaderChecked;
  const [s1Imported, setS1Imported] = useState<boolean>(false);
  const [s1SuccessMessage, setS1SuccessMessage] = useState<string>('');

  // STEP 2 Simulator State (AvatarPoseSystem Component)
  const [unfixBones, setUnfixBones] = useState<string[]>([]);
  const [newBone, setNewBone] = useState<string>('');
  const [unfixObjects, setUnfixObjects] = useState<string[]>([]);
  const [newObj, setNewObj] = useState<string>('');
  const [unhandleEyes, setUnhandleEyes] = useState<boolean>(false);

  // STEP 3 Simulator State (Camera Adaptation)
  const [cameraTab, setCameraTab] = useState<'vl2' | 'vrclens'>('vl2');
  // VL2 State
  const [vl2Unfixed, setVl2Unfixed] = useState<boolean>(false);
  const [vl2Path, setVl2Path] = useState<string>('');
  const [vl2AutoClicked, setVl2AutoClicked] = useState<boolean>(false);
  // VRCLens State
  const [vrcLensUnfixed, setVrcLensUnfixed] = useState<boolean>(false);
  const [vrcPickupA, setVrcPickupA] = useState<boolean>(false);
  const [vrcPickupB, setVrcPickupB] = useState<boolean>(false);
  const [vrcPickupC, setVrcPickupC] = useState<boolean>(false);

  // STEP 4 Simulator State (Bone Merging / 换头)
  const [headMerged, setHeadMerged] = useState<boolean>(false);
  const [oldEyesRenamed, setOldEyesRenamed] = useState<boolean>(false);
  const [newEyesMoved, setNewEyesMoved] = useState<boolean>(false);
  const [newEyesRenamed, setNewEyesRenamed] = useState<boolean>(false);

  // STEP 5 Simulator State (Rig Calibration / 疑难解答)
  const [leftEyeBone, setLeftEyeBone] = useState<string>('hair_S_Root.L.003');
  const [rightEyeBone, setRightEyeBone] = useState<string>('hair_S_Root.R.003');
  const [jawBone, setJawBone] = useState<string>('hair_F_Root.001');
  const [rigStatus, setRigStatus] = useState<'error' | 'success'>('error');
  const [faceFixed, setFaceFixed] = useState<boolean>(false);

  const fixRigMapping = () => {
    setLeftEyeBone('LeftEye');
    setRightEyeBone('RightEye');
    setJawBone('None');
    setRigStatus('success');
    setFaceFixed(true);
    markStepComplete(4);
  };

  // Reset function to practice again
  const resetSimulators = () => {
    if (activeStep === 0) {
      setS1ShaderChecked(true);
      setS1MaterialChecked(false);
      setS1ScriptChecked(false);
      setS1Imported(false);
      setS1SuccessMessage('');
    } else if (activeStep === 1) {
      setUnfixBones([]);
      setUnfixObjects([]);
      setUnhandleEyes(false);
    } else if (activeStep === 2) {
      setVl2Unfixed(false);
      setVl2Path('');
      setVl2AutoClicked(false);
      setVrcLensUnfixed(false);
      setVrcPickupA(false);
      setVrcPickupB(false);
      setVrcPickupC(false);
    } else if (activeStep === 3) {
      setHeadMerged(false);
      setOldEyesRenamed(false);
      setNewEyesMoved(false);
      setNewEyesRenamed(false);
    } else if (activeStep === 4) {
      setLeftEyeBone('hair_S_Root.L.003');
      setRightEyeBone('hair_S_Root.R.003');
      setJawBone('hair_F_Root.001');
      setFaceFixed(false);
    }
  };

  const markStepComplete = (stepId: number) => {
    setCompletedSteps(prev => ({ ...prev, [stepId]: true }));
  };

  // Image Upload / Drag and Drop / Clipboard paste handlers
  const handleImageUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setStepImages(prev => ({ ...prev, [activeStep]: url }));
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          handleImageUpload(blob);
          e.preventDefault();
        }
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const removeUploadedImage = () => {
    const currentUrl = stepImages[activeStep];
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }
    setStepImages(prev => {
      const updated = { ...prev };
      delete updated[activeStep];
      return updated;
    });
  };

  const steps: Step[] = stepsList[lang];
  const t = locales[lang];

  // Logic to calculate progress
  const totalSteps = steps.length;
  const completedCount = Object.keys(completedSteps).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  // Quick Action triggers for interactive panels
  const s1ClickNone = () => {
    setS1MaterialChecked(false);
    setS1ScriptChecked(false);
    setS1ShaderChecked(false);
  };

  const s1ClickAll = () => {
    setS1MaterialChecked(true);
    setS1ScriptChecked(true);
    setS1ShaderChecked(true);
  };

  const s1CheckImport = () => {
    if (!s1MaterialChecked && !s1ScriptChecked && s1ShaderChecked) {
      setS1Imported(true);
      if (lang === 'ja') {
        setS1SuccessMessage('🎉 インポート成功！Shaderフォルダのみ正常にロードされ、コンパイルエラーを完全に回避しました！');
      } else if (lang === 'en') {
        setS1SuccessMessage('🎉 Import Successful! Imported only the Shader folder, safely avoiding script compilation conflicts!');
      } else {
        setS1SuccessMessage('🎉 导入成功！只导入了 Shader，安全避开全部导入的报错坑！');
      }
      markStepComplete(0);
    } else if (s1MaterialChecked || s1ScriptChecked) {
      setS1Imported(false);
      if (lang === 'ja') {
        setS1SuccessMessage('❌ インポートエラー：Shader以外のフォルダが選択されています！すべてインポートすると、Udonスクリプトの重複によりUnityプロジェクト全体が破壊されます。左上の「None」をクリックしてチェックを解除し、「Shader」フォルダのみを選択してください！');
      } else if (lang === 'en') {
        setS1SuccessMessage('❌ Import Error: Folders other than Shader are checked! If you import all, Unity will experience namespace collisions and lock the project. Click "None" to clear all, then select ONLY the "Shader" folder!');
      } else {
        setS1SuccessMessage('❌ 导入错误：您勾选了 Shader 以外的文件夹！如果全部导入，Unity 将会编译报错导致工程瘫痪。请仔细阅读说明，点击左上角的 "None" 取消全选，然后仅仅勾选底部的 "Shader" 文件夹！');
      }
    } else {
      setS1Imported(false);
      if (lang === 'ja') {
        setS1SuccessMessage('⚠️ Shaderフォルダが選択されていません。少なくとも一番下の「Shader」フォルダにチェックを入れてください！');
      } else if (lang === 'en') {
        setS1SuccessMessage('⚠️ Shader folder is not selected. You must check at least the bottom "Shader" folder to proceed!');
      } else {
        setS1SuccessMessage('⚠️ 您没有勾选 Shader 文件夹，无法工作。请至少勾选最下方的 Shader 文件夹！');
      }
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] font-sans text-[#1E293B] overflow-hidden">
      {/* 1. LEFT SIDEBAR: Minimalist white Navigation & Progress checklist */}
      <nav className="w-80 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 select-none shadow-sm z-10">
        <div className="overflow-y-auto max-h-[calc(100vh-140px)]">
          {/* Brand header */}
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-black shadow-md shadow-blue-200 shrink-0">
                APS
              </div>
              <div>
                <h1 className="font-bold text-base tracking-tight">{t.navTitle}</h1>
                <p className="text-xs text-slate-400 font-medium tracking-wide">{t.navSubTitle}</p>
              </div>
            </div>

            {/* Elegant Language Switcher Row */}
            <div className="mt-4 flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setLang('zh')}
                className={`flex-1 py-1 px-2 rounded-md transition-all text-center cursor-pointer ${
                  lang === 'zh'
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                简体中文
              </button>
              <button
                onClick={() => setLang('en')}
                className={`flex-1 py-1 px-2 rounded-md transition-all text-center cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('ja')}
                className={`flex-1 py-1 px-2 rounded-md transition-all text-center cursor-pointer ${
                  lang === 'ja'
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                日本語
              </button>
            </div>
            
            {/* Overall progress indicator */}
            <div className="mt-5 p-3.5 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-500">{t.progressTitle}</span>
                <span className="text-blue-600">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1 leading-normal">
                <Sparkles className="w-3 h-3 text-amber-500" />
                {t.sparkleHint}
              </p>
            </div>
          </div>

          {/* Navigation Step Lists */}
          <div className="p-4 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 px-3 uppercase tracking-wider block mb-2">
              {t.navOutline}
            </span>
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isCompleted = completedSteps[step.id];
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  id={`nav-step-${step.id}`}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 shadow-sm shadow-blue-50 border-l-4 border-blue-600 pl-2.5' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all ${
                    isCompleted 
                      ? 'bg-emerald-500 text-white'
                      : isActive 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3px]" /> : step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold tracking-tight block truncate">{step.title}</span>
                      {step.id === 2 && (
                        <span className="bg-amber-100 text-amber-700 text-[9px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wide">
                          {t.importantTag}
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] block truncate font-medium ${isActive ? 'text-blue-500/90' : 'text-slate-400'}`}>
                      {step.subTitle}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'translate-x-0.5 text-blue-500' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-500">{t.footerTitle}</span>
            <span className="text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.5 rounded font-mono font-bold">{t.footerVersion}</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
            {t.footerDesc}
          </p>
        </div>
      </nav>

      {/* 2. MIDDLE AREA: Scrollable structured tutorial content */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden border-r border-slate-100">
        {/* Header bar */}
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-slate-900 text-white px-2 py-0.5 rounded uppercase tracking-widest font-mono">
              {t.stepTag} {steps[activeStep].num}
            </span>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              {steps[activeStep].title} — <span className="text-slate-500 text-sm font-medium">{steps[activeStep].subTitle}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={resetSimulators}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer"
              title="重置当前实战模拟器"
            >
              <Undo className="w-3.5 h-3.5" />
              {t.resetBtn}
            </button>
            <button
              onClick={() => {
                markStepComplete(activeStep);
                if (activeStep < steps.length - 1) {
                  setActiveStep(prev => prev + 1);
                }
              }}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-xs font-bold hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-200 transition-all flex items-center gap-1 cursor-pointer"
            >
              {t.nextBtn}
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 select-text">
          {/* Step 1 Content: Preparation */}
          {activeStep === 0 && (
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2 mb-1">
                  <Info className="w-4 h-4 text-blue-600 shrink-0" />
                  {t.s1PreTitle}
                </h3>
                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                  {t.s1PreDesc}
                </p>
              </div>

              {/* Requirement Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm mb-3">1</div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{t.s1Card1Title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {t.s1Card1Desc}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-sm mb-3">2</div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{t.s1Card2Title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {t.s1Card2Desc}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all border-amber-200 bg-amber-50/20">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-3">3</div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">{t.s1Card3Title}</h4>
                  <p className="text-xs text-amber-700/90 leading-relaxed font-medium">
                    {t.s1Card3Desc}
                  </p>
                </div>
              </div>

              {/* Red warning card */}
              <div className="p-5 bg-red-50 border-l-4 border-rose-500 rounded-r-lg space-y-2">
                <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 animate-pulse" />
                  {t.s1WarnTitle}
                </h3>
                <p className="text-xs text-rose-800 leading-relaxed font-medium pl-6">
                  {t.s1WarnDesc}
                </p>
                <div className="pl-6 pt-1">
                  <h4 className="text-xs font-bold text-rose-900 mb-1">{t.s1WarnMethodTitle}</h4>
                  <p className="text-xs text-rose-800/90 leading-relaxed font-medium">
                    {t.s1WarnMethodDesc}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-600 space-y-1.5 font-medium leading-normal">
                <p className="font-bold text-slate-700 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t.s1TipTitle}
                </p>
                <p>{t.s1TipDesc}</p>
              </div>
            </div>
          )}

          {/* Step 2 Content: Basic Import */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">{t.s2Title1}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {t.s2Desc1}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">{t.s2Title2}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                  {t.s2Desc2}
                </p>

                {/* Grid layout of properties */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all">
                    <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-2 pb-1.5 border-b border-slate-100">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {t.s2Card1Title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      {t.s2Card1Desc}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all">
                    <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-2 pb-1.5 border-b border-slate-100">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {t.s2Card2Title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      {t.s2Card2Desc}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all">
                    <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-2 pb-1.5 border-b border-slate-100">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {t.s2Card3Title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      {t.s2Card3Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Checkbox Warning */}
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <div className="flex gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-900 mb-0.5">{t.s2ExtraTitle}</h4>
                    <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                      {t.s2ExtraDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 leading-relaxed font-medium">
                <span className="font-bold text-slate-700">{t.s2TipTitle}</span>
                {t.s2TipDesc}
              </div>
            </div>
          )}

          {/* Step 3 Content: Cameras */}
          {activeStep === 2 && (
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2 mb-1">
                  <Camera className="w-4 h-4 text-blue-600 shrink-0" />
                  {t.s3PreTitle}
                </h3>
                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                  {t.s3PreDesc}
                </p>
              </div>

              {/* Sub tabs for VL2 vs VRCLens in manual */}
              <div className="flex border-b border-slate-200">
                <button 
                  onClick={() => setCameraTab('vl2')}
                  className={`px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${cameraTab === 'vl2' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                >
                  {t.s3TabVL2}
                </button>
                <button 
                  onClick={() => setCameraTab('vrclens')}
                  className={`px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${cameraTab === 'vrclens' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                >
                  {t.s3TabVRCLens}
                </button>
              </div>

              {cameraTab === 'vl2' ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900">{t.s3VL2Title}</h4>
                    <ul className="text-xs text-slate-600 space-y-2.5 font-medium leading-normal pl-4 list-disc">
                      <li>
                        {t.s3VL2Step1}
                      </li>
                      <li>
                        {t.s3VL2Step2}
                        <div className="my-1.5 p-2 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded border border-slate-800 select-all font-bold">
                          _VirtualLens_Root
                        </div>
                        <span className="text-slate-400 text-[10px]">{t.s3VL2Step2Desc}</span>
                      </li>
                      <li className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400 text-amber-900 font-medium list-none">
                        <strong>{t.s3VL2WarnTitle}</strong>
                        <p className="mt-1">
                          {t.s3VL2WarnDesc}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900">{t.s3VRCLensTitle}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                      {t.s3VRCLensDesc}
                    </p>
                    <ul className="text-xs text-slate-600 space-y-2.5 font-medium leading-normal pl-4 list-disc">
                      <li>
                        {t.s3VRCLensStep1}
                      </li>
                      <li>
                        {t.s3VRCLensStep2}
                        <ul className="mt-1.5 pl-4 space-y-1 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-100 list-none">
                          <li className="flex items-center gap-1.5 text-slate-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            {t.s3VRCLensHandL} <code className="bg-slate-200 text-slate-800 font-mono px-1 py-0.2 rounded font-bold">PickupA</code>
                          </li>
                          <li className="flex items-center gap-1.5 text-slate-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            {t.s3VRCLensHandR} <code className="bg-slate-200 text-slate-800 font-mono px-1 py-0.2 rounded font-bold">PickupB</code>
                          </li>
                          <li className="flex items-center gap-1.5 text-slate-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            {t.s3VRCLensHead} <code className="bg-slate-200 text-slate-800 font-mono px-1 py-0.2 rounded font-bold">PickupC</code>
                          </li>
                        </ul>
                      </li>
                      <li className="bg-emerald-50 p-2.5 rounded border border-emerald-100 text-emerald-800 font-medium text-[11px] list-none">
                        <strong>{t.s3VRCLensCheckTitle}</strong> {t.s3VRCLensCheckDesc}
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-600 space-y-1 font-medium">
                <p className="font-bold text-slate-700">{t.s3TipTitle}</p>
                <p>{t.s3TipDesc}</p>
              </div>
            </div>
          )}

          {/* Step 4 Content: Bone Merging */}
          {activeStep === 3 && (
            <div className="space-y-6">
              <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                <h3 className="text-sm font-bold text-orange-900 flex items-center gap-2 mb-1">
                  <Workflow className="w-4 h-4 text-orange-600 shrink-0" />
                  {t.s4PreTitle}
                </h3>
                <p className="text-xs text-orange-800 leading-relaxed font-medium">
                  {t.s4PreDesc}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">{t.s4SubTitle1}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {t.s4Desc1}
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900">{t.s4Step1Title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {t.s4Step1Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900">{t.s4Step2Title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {t.s4Step2Desc}
                      </p>
                      <ul className="text-xs text-slate-500 space-y-1 pl-4 list-decimal leading-relaxed font-medium">
                        <li>{t.s4Step2Bullet1}</li>
                        <li>{t.s4Step2Bullet2}</li>
                        <li>{t.s4Step2Bullet3}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 leading-relaxed font-medium">
                <span className="font-bold text-slate-700">{t.s4TipTitle}</span>
                {t.s4TipDesc}
              </div>
            </div>
          )}

          {/* Step 5 Content: Troubleshooting */}
          {activeStep === 4 && (
            <div className="space-y-6">
              <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg">
                <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  {t.s5PreTitle}
                </h3>
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  {t.s5PreDesc}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">{t.s5SubTitle1}</h3>
                
                <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-medium">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2.5">
                    <span className="bg-slate-200 text-slate-800 rounded font-bold px-1.5 py-0.5 font-mono text-[10px] shrink-0">{t.s5Step1Title}</span>
                    <p>
                      {t.s5Step1Desc}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2.5">
                    <span className="bg-slate-200 text-slate-800 rounded font-bold px-1.5 py-0.5 font-mono text-[10px] shrink-0">{t.s5Step2Title}</span>
                    <p>
                      {t.s5Step2Desc}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border-rose-200 bg-rose-50/20 flex items-start gap-2.5">
                    <span className="bg-rose-100 text-rose-800 rounded font-bold px-1.5 py-0.5 font-mono text-[10px] shrink-0">{t.s5Step3Title}</span>
                    <div>
                      <p className="font-bold text-rose-950 mb-1">
                        {t.s5Step3Desc1}
                      </p>
                      <p className="text-rose-900">
                        {t.s5Step3Desc2}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border-emerald-200 bg-emerald-50/20 flex items-start gap-2.5">
                    <span className="bg-emerald-100 text-emerald-800 rounded font-bold px-1.5 py-0.5 font-mono text-[10px] shrink-0">{t.s5Step4Title}</span>
                    <div>
                      <p className="font-bold text-emerald-950 mb-0.5">{t.s5Step4Desc1}</p>
                      <p className="text-emerald-900">
                        {t.s5Step4Desc2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-xs text-blue-900 leading-normal font-medium">
                  <strong>💡 {t.s5TipTitle}</strong> <br />
                  {t.s5TipDesc}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 3. RIGHT SIDEBAR: Immersive interactive Unity Simulator Workshop */}
      <section className="w-105 bg-[#1C1C1C] text-slate-300 flex flex-col shrink-0 overflow-hidden border-l border-neutral-900">
        {/* Simulator tab header */}
        <div className="bg-[#2D2D2D] border-b border-black select-none shrink-0">
          <div className="h-12 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20 shadow-sm"></div>
              </div>
              <span className="text-[11px] font-bold text-neutral-400 font-mono uppercase tracking-wider ml-2">
                Unity 2022.3 LTS
              </span>
            </div>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
              simulatorMode === 'interactive' 
                ? 'text-blue-400 bg-blue-950/80 border-blue-900/50' 
                : 'text-emerald-400 bg-emerald-950/80 border-emerald-900/50'
            }`}>
              {simulatorMode === 'interactive' ? 'Interactive' : 'Reference Mode'}
            </span>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex border-t border-black/40 bg-[#252525] text-xs">
            <button
              onClick={() => setSimulatorMode('interactive')}
              className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 font-bold transition-all border-r border-black/30 cursor-pointer ${
                simulatorMode === 'interactive'
                  ? 'bg-[#1C1C1C] text-blue-400 border-b-2 border-b-blue-500'
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-[#2A2A2A]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 animate-pulse" />
              🎮 交互仿真
            </button>
            <button
              onClick={() => setSimulatorMode('screenshot')}
              className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 font-bold transition-all cursor-pointer ${
                simulatorMode === 'screenshot'
                  ? 'bg-[#1C1C1C] text-emerald-400 border-b-2 border-b-emerald-500'
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-[#2A2A2A]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              📸 标准配置蓝图
            </button>
          </div>
        </div>

        {/* Dynamic Simulator content based on step */}
        <div className="flex-1 flex flex-col overflow-y-auto p-5 space-y-5 font-mono text-[11px]">
          
          {simulatorMode === 'interactive' ? (
            <>
              {/* STEP 1 SIMULATOR (CircularGauge Import Package Window) */}
              {activeStep === 0 && (
            <div className="flex-col flex-1 flex justify-between">
              <div className="space-y-4">
                <div className="bg-[#2D2D2D] rounded-lg border border-neutral-800 overflow-hidden shadow-lg">
                  <div className="bg-[#383838] px-4 py-2 border-b border-neutral-900 flex justify-between items-center">
                    <span className="font-sans font-bold text-white text-xs">Import Unity Package</span>
                    <span className="text-neutral-500 font-sans text-[10px]">CircularGauge</span>
                  </div>
                  
                  {/* Safe Hint Banner matching user requirement */}
                  <div className="bg-amber-950/40 text-amber-300 p-2.5 px-3 border-b border-neutral-900 text-[10px] leading-normal flex items-start gap-1.5 font-sans">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>⚠️ 安全避坑提示：</strong> 导入 CircularGauge 时，<strong>你应该只勾选最后一个 (Shader) 文件夹</strong>，其它的 Material 和 Script 绝对不要勾选，以免工程报错锁死！
                    </span>
                  </div>
                  
                  {/* Package tree contents */}
                  <div className="p-4 bg-[#232323] space-y-3">
                    <div className="flex gap-2 mb-2 pb-2 border-b border-neutral-800">
                      <button 
                        onClick={s1ClickAll}
                        className="px-2 py-1 bg-[#4A4A4A] text-white hover:bg-[#5A5A5A] rounded text-[10px] font-sans font-bold cursor-pointer"
                      >
                        All (全选)
                      </button>
                      <button 
                        onClick={s1ClickNone}
                        className="px-2 py-1 bg-[#4A4A4A] text-white hover:bg-[#5A5A5A] rounded text-[10px] font-sans font-bold cursor-pointer"
                      >
                        None (清空)
                      </button>
                    </div>

                    <div className="space-y-2 select-none">
                      {/* jp folder */}
                      <div className="flex items-center gap-2 text-neutral-300 cursor-pointer" onClick={() => {
                        if (s1MaterialChecked || s1ScriptChecked || s1ShaderChecked) {
                          s1ClickNone();
                        } else {
                          s1ClickAll();
                        }
                      }}>
                        <div className="w-3.5 h-3.5 rounded bg-[#383838] border border-neutral-600 flex items-center justify-center shrink-0">
                          {s1MaterialChecked && s1ScriptChecked && s1ShaderChecked ? (
                            <Check className="w-2.5 h-2.5 text-blue-400 stroke-[3.5px]" />
                          ) : (s1MaterialChecked || s1ScriptChecked || s1ShaderChecked) ? (
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                          ) : null}
                        </div>
                        <span className="font-bold">📂 jp</span>
                      </div>

                      <div className="pl-4 space-y-2 border-l border-neutral-800 ml-1.5">
                        {/* toh folder */}
                        <div className="flex items-center gap-2 text-neutral-300 cursor-pointer" onClick={() => {
                          if (s1MaterialChecked || s1ScriptChecked || s1ShaderChecked) {
                            s1ClickNone();
                          } else {
                            s1ClickAll();
                          }
                        }}>
                          <div className="w-3.5 h-3.5 rounded bg-[#383838] border border-neutral-600 flex items-center justify-center shrink-0">
                            {s1MaterialChecked && s1ScriptChecked && s1ShaderChecked ? (
                              <Check className="w-2.5 h-2.5 text-blue-400 stroke-[3.5px]" />
                            ) : (s1MaterialChecked || s1ScriptChecked || s1ShaderChecked) ? (
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                            ) : null}
                          </div>
                          <span>📂 toh</span>
                        </div>

                        <div className="pl-4 space-y-2 border-l border-neutral-800 ml-1.5">
                          {/* CircularGauge folder */}
                          <div className="flex items-center gap-2 text-neutral-300 cursor-pointer" onClick={() => {
                            if (s1MaterialChecked || s1ScriptChecked || s1ShaderChecked) {
                              s1ClickNone();
                            } else {
                              s1ClickAll();
                            }
                          }}>
                            <div className="w-3.5 h-3.5 rounded bg-[#383838] border border-neutral-600 flex items-center justify-center shrink-0">
                              {s1MaterialChecked && s1ScriptChecked && s1ShaderChecked ? (
                                <Check className="w-2.5 h-2.5 text-blue-400 stroke-[3.5px]" />
                              ) : (s1MaterialChecked || s1ScriptChecked || s1ShaderChecked) ? (
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                              ) : null}
                            </div>
                            <span className="text-amber-400 font-bold">📂 CircularGauge</span>
                          </div>

                          <div className="pl-4 space-y-1.5 border-l border-neutral-800 ml-1.5">
                            <label className="flex items-center gap-2 text-neutral-400 cursor-pointer">
                              <input 
                                type="checkbox" 
                                checked={s1MaterialChecked} 
                                onChange={(e) => setS1MaterialChecked(e.target.checked)}
                                className="accent-blue-500"
                              />
                              <span>📂 Material (材质)</span>
                            </label>
                            <label className="flex items-center gap-2 text-neutral-400 cursor-pointer">
                              <input 
                                type="checkbox" 
                                checked={s1ScriptChecked} 
                                onChange={(e) => setS1ScriptChecked(e.target.checked)}
                                className="accent-blue-500"
                              />
                              <span>📂 Script (旧Udon脚本)</span>
                            </label>
                            <label className="flex items-center gap-2 text-neutral-200 cursor-pointer font-bold bg-emerald-950/20 p-0.5 rounded border border-emerald-900/30">
                              <input 
                                type="checkbox" 
                                checked={s1ShaderChecked} 
                                onChange={(e) => setS1ShaderChecked(e.target.checked)}
                                className="accent-emerald-500 h-3.5 w-3.5"
                              />
                              <span className="text-emerald-400">📂 Shader (唯一安全项)</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#2A2A2A] p-3 border-t border-neutral-900 flex justify-end gap-2 font-sans">
                    <button className="px-3 py-1 text-xs text-neutral-400 bg-transparent hover:bg-neutral-800 rounded font-semibold">Cancel</button>
                    <button 
                      onClick={s1CheckImport}
                      className="px-4 py-1 text-xs text-white bg-[#005BFF] hover:bg-[#2070FF] rounded font-semibold shadow-sm cursor-pointer"
                    >
                      Import
                    </button>
                  </div>
                </div>

                {/* Simulated result log */}
                {s1SuccessMessage && (
                  <div className={`p-4 rounded-lg font-sans text-xs border leading-relaxed ${
                    s1Imported 
                      ? 'bg-emerald-950/80 border-emerald-800/80 text-emerald-300' 
                      : 'bg-rose-950/80 border-rose-800/80 text-rose-300'
                  }`}>
                    {s1SuccessMessage}
                  </div>
                )}
              </div>

              {/* Tips for Unity novices */}
              <div className="p-4 bg-[#262626] rounded-lg border border-neutral-800 space-y-1.5 font-sans">
                <span className="text-amber-500 text-xs font-bold flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  避坑逻辑讲解：
                </span>
                <p className="text-[10px] text-neutral-400 leading-normal font-medium">
                  CircularGauge 自带了 Udon 示例文件，在缺少旧包或版本冲突时，会让整个 Unity 编译器锁死报错。因此“只勾选最底部的 Shader 文件夹”是 VRChat 圈子里的通用黄金法则。
                </p>
              </div>
            </div>
          )}

          {/* STEP 2 SIMULATOR (Inspector Customizer) */}
          {activeStep === 1 && (
            <div className="space-y-4">
              <span className="text-neutral-500 uppercase tracking-widest text-[9px] font-sans">VRChat Avatar Inspector</span>
              
              <div className="bg-[#2D2D2D] rounded-lg border border-neutral-800 overflow-hidden shadow-lg">
                <div className="bg-[#383838] px-4 py-2 border-b border-neutral-900 flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full"></div>
                  <span className="font-sans font-bold text-white text-xs">AvatarPoseSystem (Script)</span>
                </div>

                <div className="p-4 space-y-4">
                  {/* Unfix Phys Bones */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400 text-xs">Unfix Phys Bones (豁免骨骼)</span>
                      <span className="text-[10px] text-neutral-600 bg-neutral-900 px-1 py-0.5 rounded font-mono">
                        {unfixBones.length} items
                      </span>
                    </div>
                    <div className="space-y-1 ml-3 pl-3 border-l border-neutral-800">
                      {unfixBones.map((bone, index) => (
                        <div key={index} className="flex justify-between items-center bg-[#232323] p-1 px-2 rounded group">
                          <span className="text-[#A2C4FF]">Element {index}</span>
                          <span className="text-white text-[10px]">{bone}</span>
                          <button 
                            onClick={() => setUnfixBones(prev => prev.filter((_, i) => i !== index))}
                            className="text-rose-400 hover:text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      
                      <div className="flex gap-1.5 mt-1">
                        <input 
                          type="text" 
                          placeholder="例如: Hair_Back, Skirt" 
                          value={newBone}
                          onChange={(e) => setNewBone(e.target.value)}
                          className="bg-[#232323] text-white p-1 px-1.5 rounded border border-neutral-700 flex-1 text-[10px] outline-none"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && newBone) {
                              setUnfixBones(prev => [...prev, newBone]);
                              setNewBone('');
                            }
                          }}
                        />
                        <button 
                          onClick={() => {
                            if (newBone) {
                              setUnfixBones(prev => [...prev, newBone]);
                              setNewBone('');
                            }
                          }}
                          className="p-1 bg-neutral-700 hover:bg-neutral-600 rounded text-white cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Unfix Objects */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400 text-xs">Unfix Objects (豁免物体)</span>
                      <span className="text-[10px] text-neutral-600 bg-neutral-900 px-1 py-0.5 rounded font-mono">
                        {unfixObjects.length} items
                      </span>
                    </div>
                    <div className="space-y-1 ml-3 pl-3 border-l border-neutral-800">
                      {unfixObjects.map((obj, index) => (
                        <div key={index} className="flex justify-between items-center bg-[#232323] p-1 px-2 rounded group">
                          <span className="text-[#C0A2FF]">Element {index}</span>
                          <span className="text-white text-[10px]">{obj}</span>
                          <button 
                            onClick={() => setUnfixObjects(prev => prev.filter((_, i) => i !== index))}
                            className="text-rose-400 hover:text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      
                      <div className="flex gap-1.5 mt-1">
                        <input 
                          type="text" 
                          placeholder="例如: Drone, PetObject" 
                          value={newObj}
                          onChange={(e) => setNewObj(e.target.value)}
                          className="bg-[#232323] text-white p-1 px-1.5 rounded border border-neutral-700 flex-1 text-[10px] outline-none"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && newObj) {
                              setUnfixObjects(prev => [...prev, newObj]);
                              setNewObj('');
                            }
                          }}
                        />
                        <button 
                          onClick={() => {
                            if (newObj) {
                              setUnfixObjects(prev => [...prev, newObj]);
                              setNewObj('');
                            }
                          }}
                          className="p-1 bg-neutral-700 hover:bg-neutral-600 rounded text-white cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Unhandle Eyes Checkbox */}
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id="unhandleEyes"
                        checked={unhandleEyes}
                        onChange={(e) => {
                          setUnhandleEyes(e.target.checked);
                          if (e.target.checked) {
                            markStepComplete(1);
                          }
                        }}
                        className="accent-blue-500 h-3.5 w-3.5 rounded cursor-pointer"
                      />
                      <label htmlFor="unhandleEyes" className="text-neutral-200 text-xs cursor-pointer select-none">
                        Unhandle Eyes (面捕眼球豁免)
                      </label>
                    </div>
                    <span className="text-[9px] bg-blue-950/60 border border-blue-900/30 text-blue-400 px-1.5 rounded font-sans font-bold">
                      推荐
                    </span>
                  </div>
                </div>
              </div>

              {/* Status message */}
              <div className="p-4 bg-[#232323] border border-neutral-800 rounded-lg text-[10px] text-neutral-400 leading-normal font-sans">
                {unhandleEyes ? (
                  <p className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    [状态] Unhandle Eyes 已勾选！面部及眼动追踪功能已被完美保护，固定状态下眼球可以正常活动转运。
                  </p>
                ) : (
                  <p className="text-amber-400 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    [提示] 面捕模型务必勾选 Unhandle Eyes，否则固定后双眼会变为空洞无神的直视状态。尝试勾选它！
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3 SIMULATOR (Camera settings adapter) */}
          {activeStep === 2 && (
            <div className="space-y-4">
              <div className="flex bg-[#232323] p-1 rounded border border-neutral-800">
                <button 
                  onClick={() => setCameraTab('vl2')}
                  className={`flex-1 py-1 text-center font-sans font-bold text-[10px] rounded cursor-pointer transition-colors ${cameraTab === 'vl2' ? 'bg-[#383838] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  VirtualLens2 调试
                </button>
                <button 
                  onClick={() => setCameraTab('vrclens')}
                  className={`flex-1 py-1 text-center font-sans font-bold text-[10px] rounded cursor-pointer transition-colors ${cameraTab === 'vrclens' ? 'bg-[#383838] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  VRCLens 调试
                </button>
              </div>

              {cameraTab === 'vl2' ? (
                <div className="space-y-4">
                  <div className="bg-[#2D2D2D] rounded-lg border border-neutral-800 overflow-hidden shadow-lg">
                    <div className="bg-[#383838] px-4 py-2 border-b border-neutral-900 flex justify-between items-center">
                      <span className="font-sans font-bold text-white text-xs">APS - VirtualLens2 Adapter</span>
                    </div>

                    <div className="p-4 space-y-4">
                      {/* Step 1: Drag VL2 */}
                      <div className="space-y-2">
                        <span className="text-neutral-400 block">1. Unfix Objects (拖入VL2本体)</span>
                        <button 
                          onClick={() => setVl2Unfixed(true)}
                          className={`w-full p-2 rounded border border-dashed flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            vl2Unfixed 
                              ? 'bg-emerald-950/20 border-emerald-800 text-emerald-400 font-bold' 
                              : 'bg-[#232323] border-neutral-700 hover:border-neutral-500 text-neutral-400'
                          }`}
                        >
                          {vl2Unfixed ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Element 0: VirtualLens2 (已拖入)
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              点击拖入「VirtualLens2」本体
                            </>
                          )}
                        </button>
                      </div>

                      {/* Step 2: Input path */}
                      <div className="space-y-2">
                        <span className="text-neutral-400 block">2. Unfix Object Paths (路径指定)</span>
                        <div className="flex gap-1.5">
                          <input 
                            type="text" 
                            placeholder="输入路径: _VirtualLens_Root" 
                            value={vl2Path}
                            onChange={(e) => setVl2Path(e.target.value)}
                            className={`bg-[#232323] text-white p-2 rounded border flex-1 text-[11px] outline-none font-mono ${
                              vl2Path === '_VirtualLens_Root' ? 'border-emerald-800 text-emerald-400' : 'border-neutral-700'
                            }`}
                          />
                          <button 
                            onClick={() => setVl2Path('_VirtualLens_Root')}
                            className="px-2 py-1 bg-neutral-700 text-white rounded hover:bg-neutral-600 text-[10px] font-sans font-bold cursor-pointer"
                          >
                            一键输入
                          </button>
                        </div>
                      </div>

                      {/* Step 3: Click Auto */}
                      <div className="space-y-2 pt-2 border-t border-neutral-800">
                        <span className="text-neutral-400 block">3. VL2 Setup - Marker Objects</span>
                        <button 
                          onClick={() => {
                            if (vl2Unfixed && vl2Path === '_VirtualLens_Root') {
                              setVl2AutoClicked(true);
                              markStepComplete(2);
                            } else {
                              alert("请先完成前两步，将 VL2 拖入豁免列表并设定正确的豁免路径！");
                            }
                          }}
                          className={`w-full p-2.5 rounded flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            vl2AutoClicked 
                              ? 'bg-emerald-600 text-white font-bold' 
                              : 'bg-[#FF9B00] text-black hover:bg-[#FFAE2B] font-bold'
                          }`}
                        >
                          {vl2AutoClicked ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[3px]" />
                              Marker Objects 已成功点击 Auto 生成！
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-black" />
                              点击 VL2 Marker Objects "Auto" 按钮
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* VL2 Status Box */}
                  <div className="p-3.5 bg-[#232323] border border-neutral-800 rounded-lg text-[10px] leading-normal font-sans">
                    {vl2Unfixed && vl2Path === '_VirtualLens_Root' && vl2AutoClicked ? (
                      <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        【完美兼容】VirtualLens2 适配大功告成！无人机功能即使身体飞天固定依然运转自如！
                      </p>
                    ) : (
                      <p className="text-amber-400 font-medium leading-relaxed">
                        ⚠️ 状态检测：VL2 适配不完整。请确保：<br />
                        1. 拖入 VL2 本体；2. 路径指定为 <code className="bg-[#1C1C1C] px-1 py-0.2 rounded text-[#FF9B00]">_VirtualLens_Root</code>；3. 在 VL2 设置面板中点击了 Auto 按钮。
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#2D2D2D] rounded-lg border border-neutral-800 overflow-hidden shadow-lg">
                    <div className="bg-[#383838] px-4 py-2 border-b border-neutral-900 flex justify-between items-center">
                      <span className="font-sans font-bold text-white text-xs">APS - VRCLens Adapter</span>
                    </div>

                    <div className="p-4 space-y-3.5">
                      <span className="text-neutral-400 block pb-1 border-b border-neutral-800">VRChat hierarchy 拖拽配对 (Unfix Objects)：</span>
                      
                      {/* VRCLens main */}
                      <button 
                        onClick={() => setVrcLensUnfixed(true)}
                        className={`w-full p-2 rounded border flex items-center justify-between text-[10px] cursor-pointer ${
                          vrcLensUnfixed ? 'bg-[#2D3F2D] border-emerald-800 text-emerald-400 font-bold' : 'bg-[#232323] border-neutral-700 text-neutral-400'
                        }`}
                      >
                        <span>Hierarchy 根目录: 「VRCLens」本体</span>
                        {vrcLensUnfixed ? <Check className="w-3.5 h-3.5" /> : <span className="text-blue-400 hover:underline">点击拖入</span>}
                      </button>

                      {/* Pickup A */}
                      <button 
                        onClick={() => setVrcPickupA(true)}
                        className={`w-full p-2 rounded border flex items-center justify-between text-[10px] cursor-pointer ${
                          vrcPickupA ? 'bg-[#2D3F2D] border-emerald-800 text-emerald-400 font-bold' : 'bg-[#232323] border-neutral-700 text-neutral-400'
                        }`}
                      >
                        <span>Left Hand 骨骼下: 「PickupA」</span>
                        {vrcPickupA ? <Check className="w-3.5 h-3.5" /> : <span className="text-blue-400 hover:underline">点击拖入</span>}
                      </button>

                      {/* Pickup B */}
                      <button 
                        onClick={() => setVrcPickupB(true)}
                        className={`w-full p-2 rounded border flex items-center justify-between text-[10px] cursor-pointer ${
                          vrcPickupB ? 'bg-[#2D3F2D] border-emerald-800 text-emerald-400 font-bold' : 'bg-[#232323] border-neutral-700 text-neutral-400'
                        }`}
                      >
                        <span>Right Hand 骨骼下: 「PickupB」</span>
                        {vrcPickupB ? <Check className="w-3.5 h-3.5" /> : <span className="text-blue-400 hover:underline">点击拖入</span>}
                      </button>

                      {/* Pickup C */}
                      <button 
                        onClick={() => {
                          if (vrcLensUnfixed && vrcPickupA && vrcPickupB) {
                            setVrcPickupC(true);
                            markStepComplete(2);
                          } else {
                            alert("请按顺序拖入 VRCLens 及其手部的 A, B 两个 Pickup 节点！");
                          }
                        }}
                        className={`w-full p-2 rounded border flex items-center justify-between text-[10px] cursor-pointer ${
                          vrcPickupC ? 'bg-[#2D3F2D] border-emerald-800 text-emerald-400 font-bold' : 'bg-[#232323] border-neutral-700 text-neutral-400'
                        }`}
                      >
                        <span>Head 头部骨骼下: 「PickupC」</span>
                        {vrcPickupC ? <Check className="w-3.5 h-3.5" /> : <span className="text-blue-400 hover:underline">点击拖入</span>}
                      </button>
                    </div>
                  </div>

                  {/* VRCLens Status Box */}
                  <div className="p-3.5 bg-[#232323] border border-neutral-800 rounded-lg text-[10px] leading-normal font-sans">
                    {vrcLensUnfixed && vrcPickupA && vrcPickupB && vrcPickupC ? (
                      <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        【完美兼容】VRCLens 的 4 个核心豁免节点全数到位！相机画面、手持拾取在身体固定时依然保持独立坐标计算！
                      </p>
                    ) : (
                      <p className="text-amber-400 font-medium leading-relaxed">
                        ⚠️ 状态检测：VRCLens 节点丢失。Unfix Objects 必须收集齐这 4 个对象（如图5右下角红框所示），否则 VRChat 中拿取、放置相机时会出现肢体诡异僵死或相机丢失。
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4 SIMULATOR (Bone merger) */}
          {activeStep === 3 && (
            <div className="space-y-4">
              <span className="text-neutral-500 uppercase tracking-widest text-[9px] font-sans">Hierarchy Bone Merger</span>
              
              <div className="bg-[#2D2D2D] rounded-lg border border-neutral-800 overflow-hidden shadow-lg">
                <div className="bg-[#383838] px-4 py-2 border-b border-neutral-900 flex justify-between items-center">
                  <span className="font-sans font-bold text-white text-xs">Hierarchy 骨骼节点映射</span>
                </div>

                <div className="p-4 space-y-4 text-xs font-mono">
                  {/* Bone tree illustration */}
                  <div className="bg-[#1E1E1E] p-3.5 rounded-lg border border-neutral-800 space-y-2 text-[#cccccc] leading-relaxed">
                    <p className="text-neutral-500 text-[10px] border-b border-neutral-800 pb-1 flex items-center gap-1">
                      <Workflow className="w-3.5 h-3.5" />
                      模型拼合骨骼树仿真：
                    </p>
                    <div className="space-y-1.5 pl-2">
                      <div>📁 Armature (身体骨架)</div>
                      <div className="pl-3">└─ 📁 Hips</div>
                      <div className="pl-6">└─ 📁 Spine</div>
                      <div className="pl-9">└─ 📁 Chest</div>
                      <div className="pl-12">└─ 📁 Neck</div>
                      
                      {/* Body Head Bone */}
                      <div className="pl-15 text-blue-300 font-bold bg-blue-950/20 py-0.5 rounded px-1 flex items-center justify-between border border-blue-900/30">
                        <span>└─ 📁 Head (原身体骨架)</span>
                        <span className="text-[9px] text-blue-400 bg-blue-950 px-1 rounded">Target</span>
                      </div>

                      {/* Head hierarchy merge action */}
                      {headMerged ? (
                        <div className="pl-18 text-emerald-300 font-bold bg-emerald-950/20 py-0.5 rounded px-1 flex items-center justify-between border border-emerald-900/30">
                          <span>└─ 📁 Head (新头部拼合入)</span>
                          <span className="text-[9px] text-emerald-400 bg-emerald-950 px-1 rounded">Merged</span>
                        </div>
                      ) : (
                        <div className="my-2 p-2 bg-[#2D2D2D] rounded border border-dashed border-amber-600/60 text-amber-500 text-[10px] font-sans flex items-center justify-between">
                          <span>新头部的 Head 独立在外面</span>
                          <button 
                            onClick={() => setHeadMerged(true)}
                            className="bg-[#D37C00] hover:bg-[#F38C00] text-black px-2 py-0.5 rounded font-bold cursor-pointer text-[9px]"
                          >
                            拖入合并
                          </button>
                        </div>
                      )}

                      {/* Eyes bones renaming area */}
                      {headMerged && (
                        <div className="pl-18 space-y-1.5 pt-2 border-t border-neutral-800 mt-2">
                          <p className="text-neutral-500 text-[10px]">眼球替换树 (Head下部):</p>
                          
                          {/* Old eyes */}
                          <div className="flex justify-between items-center bg-[#282828] p-1 rounded">
                            <span className={oldEyesRenamed ? 'text-neutral-500 line-through' : 'text-amber-400 font-bold'}>
                              {oldEyesRenamed ? 'LeftEye_' : 'LeftEye'} (身体原眼球)
                            </span>
                            {!oldEyesRenamed && (
                              <button 
                                onClick={() => setOldEyesRenamed(true)}
                                className="bg-neutral-700 text-[9px] px-1.5 py-0.2 rounded hover:bg-neutral-600 text-white cursor-pointer"
                              >
                                改名废弃(_)
                              </button>
                            )}
                          </div>

                          {/* New eyes */}
                          {oldEyesRenamed && (
                            <div className="space-y-1.5">
                              {/* Move Action */}
                              {!newEyesMoved ? (
                                <button 
                                  onClick={() => setNewEyesMoved(true)}
                                  className="w-full bg-[#3B82F6] text-white p-1 rounded font-bold text-[9px] cursor-pointer"
                                >
                                  将新头部的 [Eye_L / Eye_R] 移动到 Head 骨骼下
                                </button>
                              ) : (
                                <div className="space-y-1 bg-emerald-950/10 p-1.5 rounded border border-emerald-900/20">
                                  <span className="text-neutral-500 text-[9px] block">移动成功！下面需要进行名字修改使其生效：</span>
                                  <div className="flex justify-between items-center bg-[#232323] p-1 rounded">
                                    <span className={newEyesRenamed ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                                      {newEyesRenamed ? 'LeftEye' : 'Eye_L'} (新)
                                    </span>
                                    {!newEyesRenamed && (
                                      <button 
                                        onClick={() => {
                                          setNewEyesRenamed(true);
                                          markStepComplete(3);
                                        }}
                                        className="bg-emerald-600 text-[9px] px-1.5 py-0.2 rounded hover:bg-emerald-500 text-white font-bold cursor-pointer"
                                      >
                                        改回 LeftEye 名字
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status block */}
              <div className="p-3.5 bg-[#232323] border border-neutral-800 rounded-lg text-[10px] leading-normal font-sans">
                {headMerged && oldEyesRenamed && newEyesMoved && newEyesRenamed ? (
                  <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    【骨骼层级完美通关】头层和眼球骨骼均符合 APS 识别规范，在固定身体时不会因为丢失目标导致 Unity 闪退或眼球变形！
                  </p>
                ) : (
                  <p className="text-neutral-400 leading-relaxed font-medium">
                    ⚠️ 状态：骨骼树检测中。新模型合并时，原骨骼的眼球必须改名字并保留（通常加后缀 <code className="bg-neutral-800 px-1 text-amber-500">_</code>），新头部的眼球必须继承原骨骼原本的准确拼写名字，方能被 Udon 精确抓取。
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 5 SIMULATOR (Avatar Calibration troubleshooting) */}
          {activeStep === 4 && (
            <div className="space-y-4">
              <span className="text-neutral-500 uppercase tracking-widest text-[9px] font-sans">FBX Humanoid Importer Mapping</span>
              
              <div className="bg-[#2D2D2D] rounded-lg border border-neutral-800 overflow-hidden shadow-lg">
                <div className="bg-[#383838] px-4 py-2 border-b border-neutral-900 flex justify-between items-center">
                  <span className="font-sans font-bold text-white text-xs">Humanoid Avatar Mapping</span>
                  <span className="text-xs text-neutral-400 font-sans font-bold">Configure Mode</span>
                </div>

                <div className="p-4 space-y-3.5 text-xs">
                  <div className="bg-[#1E1E1E] p-3 rounded-lg border border-neutral-800 space-y-2">
                    <span className="text-neutral-500 font-bold block text-[10px]">Head (Optional Bone) 映射列表：</span>
                    
                    {/* Neck */}
                    <div className="flex justify-between items-center bg-[#282828] p-1.5 rounded">
                      <span className="text-neutral-400">Neck (脖子)</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/50 px-1 rounded border border-emerald-900/40">Neck (Transform)</span>
                    </div>

                    {/* Head */}
                    <div className="flex justify-between items-center bg-[#282828] p-1.5 rounded">
                      <span className="text-neutral-400">Head (头部)</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/50 px-1 rounded border border-emerald-900/40">Head (Transform)</span>
                    </div>

                    {/* Left Eye */}
                    <div className="flex justify-between items-center bg-[#282828] p-1.5 rounded">
                      <span className="text-neutral-400">Left Eye (左眼)</span>
                      {leftEyeBone === 'hair_S_Root.L.003' ? (
                        <span className="text-rose-400 font-bold bg-rose-950/50 px-1 rounded border border-rose-900/40 animate-pulse">
                          hair_S_Root.L.003 (错误)
                        </span>
                      ) : (
                        <span className="text-emerald-400 font-bold bg-emerald-950/50 px-1 rounded border border-emerald-900/40">
                          LeftEye (正确)
                        </span>
                      )}
                    </div>

                    {/* Right Eye */}
                    <div className="flex justify-between items-center bg-[#282828] p-1.5 rounded">
                      <span className="text-neutral-400">Right Eye (右眼)</span>
                      {rightEyeBone === 'hair_S_Root.R.003' ? (
                        <span className="text-rose-400 font-bold bg-rose-950/50 px-1 rounded border border-rose-900/40 animate-pulse">
                          hair_S_Root.R.003 (错误)
                        </span>
                      ) : (
                        <span className="text-emerald-400 font-bold bg-emerald-950/50 px-1 rounded border border-emerald-900/40">
                          RightEye (正确)
                        </span>
                      )}
                    </div>

                    {/* Jaw */}
                    <div className="flex justify-between items-center bg-[#282828] p-1.5 rounded">
                      <span className="text-neutral-400">Jaw (下巴)</span>
                      {jawBone === 'hair_F_Root.001' ? (
                        <span className="text-rose-400 font-bold bg-rose-950/50 px-1 rounded border border-rose-900/40 animate-pulse">
                          hair_F_Root.001 (错误)
                        </span>
                      ) : (
                        <span className="text-neutral-400 font-bold bg-neutral-900/80 px-1 rounded">
                          None (空/正确)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions to fix */}
                  {!faceFixed ? (
                    <button 
                      onClick={fixRigMapping}
                      className="w-full py-2 bg-[#D32F2F] hover:bg-[#E53935] text-white font-bold rounded shadow-md text-xs font-sans transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      一键修正错误分配的骨骼 (至 None / Eye)
                    </button>
                  ) : (
                    <div className="p-2.5 bg-emerald-950/50 border border-emerald-800 rounded text-center text-emerald-400 font-sans font-bold text-xs flex items-center justify-center gap-1">
                      <Check className="w-4 h-4 stroke-[3px]" />
                      骨骼配置成功！点击右侧 Apply 退出！
                    </div>
                  )}
                </div>
              </div>

              {/* Avatar Mesh Face visualization */}
              <div className="bg-[#1E1E1E] p-4 rounded-lg border border-neutral-800 flex flex-col items-center justify-center space-y-2 text-center">
                <span className="text-[10px] text-neutral-500 self-start">模型面部预览：</span>
                
                <div className="relative w-20 h-20 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center overflow-hidden">
                  {/* Eyes */}
                  <div className="absolute top-7 flex justify-between w-10">
                    <div className={`w-3.5 h-3.5 rounded-full bg-blue-400 border border-black transition-all duration-500 ${
                      !faceFixed ? 'translate-y-5 scale-y-10 border-rose-500 bg-rose-500 animate-bounce' : ''
                    }`}></div>
                    <div className={`w-3.5 h-3.5 rounded-full bg-emerald-400 border border-black transition-all duration-500 ${
                      !faceFixed ? 'translate-y-5 scale-y-10 border-rose-500 bg-rose-500 animate-bounce' : ''
                    }`}></div>
                  </div>

                  {/* Mouth/Jaw */}
                  <div className={`w-6 h-1 bg-rose-400 transition-all duration-500 rounded-full absolute ${
                    !faceFixed ? 'top-16 w-8 h-4 bg-rose-600 animate-pulse border border-rose-500 rounded-none' : 'top-13'
                  }`}></div>
                </div>

                <div className="font-sans text-[10px] font-bold">
                  {!faceFixed ? (
                    <span className="text-rose-500">⚠️ 模型脸部因头发骨骼误导产生严重的撕裂拉扯！</span>
                  ) : (
                    <span className="text-emerald-400">✨ 模型完美闭合，表情和眼球恢复可爱圆润！</span>
                  )}
                </div>
              </div>
            </div>
          )}
            </>
          ) : (
            <ScreenshotCompare 
              activeStep={activeStep}
              lang={lang}
            />
          )}

        </div>
      </section>
    </div>
  );
}
