/** 小Q展示页 - 多语言系统 (zh/en) **/
const i18nDict = {
  zh: {
    title: '小Q - 桌面级情感陪伴机器人',
    nav: { logo: '小Q XiaoQ', features: '功能', specs: '规格', ai: 'AI' },
    hero: {
      title: '小 Q',
      subtitle: '桌面级情感陪伴机器人',
      tagline: '多模态感知 · 拟人交互 · 情感反馈',
      imagePlaceholder: '📷 产品外观图\n(稍后添加)'
    },
    features: {
      sectionTitle: '核心能力',
      f1Title: '多模态感知',
      f1Desc: '实时采集语音、图像、触觉多维度信息，构建对环境和用户的完整感知。',
      f2Title: '情感识别与反馈',
      f2Desc: '识别用户情绪状态，通过 LED 表情、语音语调、肢体动作给予个性化情感回应。',
      f3Title: '自然对话与记忆',
      f3Desc: '基于云端大模型的中英文自然对话，具备长期记忆能力，越用越懂你。',
      f4Title: '六自由度运动',
      f4Desc: '头部俯仰+左右旋转、双臂前后摆动、底盘360°旋转，支持路径规划与避障。'
    },
    ai: {
      sectionTitle: 'AI 技术架构',
      m1Title: '多模态感知模块',
      m1Desc: '实时采集语音、图像、触觉数据，融合理解用户意图与环境状态。',
      m2Title: '情感价值系统',
      m2Desc: '识别用户情绪（开心/难过/困倦），生成个性化情感回应策略。',
      m3Title: '对话与记忆系统',
      m3Desc: '云端大模型驱动自然对话，长期记忆用户偏好，持续优化交互体验。'
    },
    specs: {
      sectionTitle: '技术规格',
      labelChip: '芯片平台',
      labelDisplay: '显示屏',
      noteDisplay: '生物表情表达',
      labelMemory: '内存',
      labelBattery: '电池',
      labelSensors: '感知传感器组',
      valueSensors: '摄像头 · 动作传感器 · 触摸传感器\nNIR红外热成像 · 温度传感器',
      labelLED: 'LED 表情灯',
      valueLED: 'RGB灯：\n蓝呼吸=待机/思考 | 红闪烁=提醒/警告 | 绿常亮=开心/亲密',
      labelMotion: '运动系统',
      valueMotion: '6自由度机械结构\n头部俯仰+旋转 / 双臂摆动 / 底盘360°旋转 / 路径规划避障'
    },
    footer: {
      text: '小Q (XiaoQ) · 华勤技术 (Huaqin Technology)\nDesktop Emotional Companion Robot',
      author: '作者：'
    }
  },
  en: {
    title: 'XiaoQ - Desktop Emotional Companion Robot',
    nav: { logo: 'XiaoQ', features: 'Features', specs: 'Specs', ai: 'AI' },
    hero: {
      title: 'XiaoQ',
      subtitle: 'Desktop Emotional Companion Robot',
      tagline: 'Multi-modal Perception · Bionic Interaction · Emotional Feedback',
      imagePlaceholder: '📷 Product Image\n(Coming soon)'
    },
    features: {
      sectionTitle: 'Core Capabilities',
      f1Title: 'Multi-modal Perception',
      f1Desc: 'Real-time collection of voice, image, and tactile multi-dimensional information for complete environmental and user awareness.',
      f2Title: 'Emotional Recognition & Feedback',
      f2Desc: 'Identifies user emotional states and provides personalized responses through LED expressions, voice tone, and body movements.',
      f3Title: 'Natural Dialogue & Memory',
      f3Desc: 'Natural Chinese-English dialogue powered by cloud LLM with long-term memory that learns you over time.',
      f4Title: '6-DOF Movement System',
      f4Desc: 'Head pitch/yaw rotation, dual-arm swing, 360° base rotation, with path planning and obstacle avoidance.'
    },
    ai: {
      sectionTitle: 'AI Architecture',
      m1Title: 'Multi-modal Perception Module',
      m1Desc: 'Real-time collection of voice, image, and tactile data for fused understanding of user intent and environment.',
      m2Title: 'Emotional Value System',
      m2Desc: 'Identifies user emotions (happy/sad/sleepy) and generates personalized emotional response strategies.',
      m3Title: 'Dialogue & Memory System',
      m3Desc: 'Cloud LLM-driven natural dialogue with long-term memory of user preferences for continuous experience optimization.'
    },
    specs: {
      sectionTitle: 'Technical Specifications',
      labelChip: 'Chip Platform',
      labelDisplay: 'Display',
      noteDisplay: 'Biological emotion expression',
      labelMemory: 'Memory',
      labelBattery: 'Battery',
      labelSensors: 'Perception Sensor Group',
      valueSensors: 'Camera · Motion Sensor · Touch Sensor\nNIR Infrared Thermal Imaging · Temperature Sensor',
      labelLED: 'LED Expression Lights',
      valueLED: 'RGB lights:\nBlue breathing = Standby/Thinking | Red flashing = Reminder/Warning | Green constant = Happy/Intimacy',
      labelMotion: 'Movement System',
      valueMotion: '6-DOF mechanical structure\nHead pitch & rotation / Arm swing / 360° base rotation / Path planning & avoidance'
    },
    footer: {
      text: 'XiaoQ · Huaqin Technology\nDesktop Emotional Companion Robot',
      author: 'Author: '
    }
  }
};

const supportedLanguages = [
  { code: 'zh', nativeName: '中文' },
  { code: 'en', nativeName: 'English' }
];

let currentLanguage = 'zh';

function i18nInit() {
  const saved = localStorage.getItem('xiaoq_language');
  if (saved && i18nDict[saved]) {
    currentLanguage = saved;
  } else {
    const bl = navigator.language || '';
    currentLanguage = bl.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }
  i18nApply(currentLanguage);
  i18nGenerateSwitcher();
}

function i18nApply(langCode) {
  if (!i18nDict[langCode]) langCode = 'zh';
  currentLanguage = langCode;
  const dict = i18nDict[langCode];
  const get = (obj, path) => path.split('.').reduce((c, k) => (c && c[k] !== undefined) ? c[k] : undefined, obj);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = get(dict, el.getAttribute('data-i18n'));
    if (text !== undefined) {
      if (el.innerHTML.includes('<br')) el.innerHTML = text;
      else el.textContent = text;
    }
  });

  document.title = dict.title;
  document.documentElement.lang = langCode === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('.lang-option').forEach(o =>
    o.classList.toggle('active', o.getAttribute('data-lang') === langCode));
  const label = document.querySelector('.lang-trigger-label');
  if (label) label.textContent = getLangNativeName(langCode);
  localStorage.setItem('xiaoq_language', langCode);
}

function i18nSwitchLanguage(langCode) {
  if (langCode === currentLanguage) return;
  i18nApply(langCode);
}

function getLangNativeName(code) {
  const l = supportedLanguages.find(x => x.code === code);
  return l ? l.nativeName : code;
}

function i18nGenerateSwitcher() {
  const nav = document.querySelector('.nav-container');
  if (!nav || document.querySelector('.lang-switcher')) return;

  const switcher = document.createElement('div');
  switcher.className = 'lang-switcher';

  const trigger = document.createElement('button');
  trigger.className = 'lang-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');

  const label = document.createElement('span');
  label.className = 'lang-trigger-label';
  label.textContent = getLangNativeName(currentLanguage);
  const caret = document.createElement('span');
  caret.className = 'lang-trigger-caret';
  caret.textContent = '▾';
  trigger.appendChild(label);
  trigger.appendChild(caret);

  const menu = document.createElement('ul');
  menu.className = 'lang-menu';
  menu.setAttribute('role', 'listbox');

  supportedLanguages.forEach(lang => {
    const item = document.createElement('li');
    item.className = 'lang-option' + (lang.code === currentLanguage ? ' active' : '');
    item.setAttribute('data-lang', lang.code);
    item.setAttribute('role', 'option');
    const name = document.createElement('span');
    name.className = 'lang-option-name';
    name.textContent = lang.nativeName;
    const check = document.createElement('span');
    check.className = 'lang-option-check';
    check.textContent = '✓';
    item.appendChild(name);
    item.appendChild(check);
    item.addEventListener('click', () => { i18nSwitchLanguage(lang.code); closeLangMenu(); });
    menu.appendChild(item);
  });

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (switcher.classList.contains('open')) closeLangMenu();
    else { switcher.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); }
  });

  switcher.appendChild(trigger);
  switcher.appendChild(menu);
  nav.appendChild(switcher);

  document.addEventListener('click', (e) => { if (!switcher.contains(e.target)) closeLangMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLangMenu(); });

  function closeLangMenu() {
    switcher.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('DOMContentLoaded', i18nInit);