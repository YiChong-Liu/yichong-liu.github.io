/* 全录智伴产品页 - 多语言系统 (zh/en)
 * 用法: HTML 元素加 data-i18n="key"，字典查值替换
 * 添加语言 = i18nDict 加一个对象 + supportedLanguages 加一行 */
const i18nDict = {
  zh: {
    title: '全录智伴 - 端云协同 AI 智能产品',
    nav: { logo: '全录智伴', features: '功能', specs: '规格', tech: '技术' },
    hero: {
      title: '全录智伴',
      subtitle: '端云协同 AI 智能产品，赋能办公自动化',
      tagline: '一言即达 AI 办公 · 对话开启高效协作'
    },
    video: {
      title: '看见智能办公的未来',
      caption: '30秒体验全录智伴的核心功能',
      fallback: '您的浏览器不支持视频播放'
    },
    features: {
      sectionTitle: '三大核心功能',
      f1Title: '会议录音 & 转写',
      f1Desc: '完整记录会议内容，转录成文字并智能总结要点。一键生成飞书文档，告别手动整理。',
      f1Flow1: '录音会议', f1Flow2: '云端转录', f1Flow3: '归纳总结', f1Flow4: '飞书文档',
      f2Title: '图文智录',
      f2Desc: '拍照识别关键信息，智能解析图片内容。快速生成总结，输出飞书文档。',
      f2Flow1: '拍照上传', f2Flow2: 'AI 分析', f2Flow3: '输出文档',
      f3Title: 'AI 对话助手',
      f3Desc: '自然语言对话，快速获取办公信息；支持飞书群聊对话与今日群聊消息智能总结，一键输出飞书文档。',
      f3Flow1: '自然对话', f3Flow2: '群聊对话', f3Flow3: '消息总结', f3Flow4: '飞书输出'
    },
    specs: {
      sectionTitle: '技术规格',
      labelOS: '操作系统', labelProcessor: '处理器', labelEdgeModel: '端侧模型',
      labelCloudModel: '云端模型', labelPower: '工作功耗', labelEdgeAI: '端侧AI',
      noteEdgeModel: '识别准确率99.1%，延时≤500ms',
      valueEdgeModel: '自研 XiaoQ-KWS',
      noteCloudModel: '语音响应≤2.0s，识别准确率≥98%，图文理解≤5s',
      notePower: '对比手机降低 90%',
      noteEdgeAI: '关键词唤醒实时率≤0.2s'
    },
    tech: {
      sectionTitle: '为什么选择全录智伴',
      h1Title: '信息高效归纳总结',
      h1Desc: '智能提炼会议要点与群聊消息，快速生成文档，大幅提升整理效率',
      h2Title: '操作简单高效',
      h2Desc: '一键录音，拍照即对话，处理快，省时省力',
      h3Title: '无缝集成飞书',
      h3Desc: '一键输出飞书文档，信息流转更顺畅',
      h4Title: '专注办公场景',
      h4Desc: '深度适配办公流程，解决真实办公痛点'
    },
    footer: {
      text: '全录智伴 · 软件中心三部出品<br />基于 OpenVela OS 运行的 AI Agent 办公助手，由云端 AI 大模型赋能',
      author: '作者：'
    }
  },
  en: {
    title: 'AI Office Assistant - Edge-Cloud AI Smart Product',
    nav: { logo: 'AI Office Assistant', features: 'Features', specs: 'Specs', tech: 'Technology' },
    hero: {
      title: 'AI Office Assistant',
      subtitle: 'Edge-cloud AI smart product for office automation',
      tagline: 'One Command to AI Office · Dialogue for Efficient Collaboration'
    },
    video: {
      title: 'See the Future of Smart Office',
      caption: 'Experience the core features of the AI Office Assistant in 30 seconds',
      fallback: 'Your browser does not support video playback'
    },
    features: {
      sectionTitle: 'Three Core Features',
      f1Title: 'Meeting Recording & Transcription',
      f1Desc: 'Fully record meetings, transcribe to text and intelligently summarize key points. Generate Feishu documents with one click.',
      f1Flow1: 'Record Meeting', f1Flow2: 'Cloud Transcription', f1Flow3: 'Smart Summary', f1Flow4: 'Feishu Docs',
      f2Title: 'Smart Image Capture',
      f2Desc: 'Capture photos to recognize key information with intelligent image analysis. Quick summaries exported to Feishu documents.',
      f2Flow1: 'Photo Upload', f2Flow2: 'AI Analysis', f2Flow3: 'Document Output',
      f3Title: 'AI Chat Assistant',
      f3Desc: 'Natural language dialogue for quick office information; supports Feishu group chat and daily message summaries, one-click export to Feishu documents.',
      f3Flow1: 'Natural Chat', f3Flow2: 'Group Chat', f3Flow3: 'Message Summary', f3Flow4: 'Feishu Export'
    },
    specs: {
      sectionTitle: 'Technical Specifications',
      labelOS: 'Operating System', labelProcessor: 'Processor', labelEdgeModel: 'Edge Model',
      labelCloudModel: 'Cloud Model', labelPower: 'Power Consumption', labelEdgeAI: 'Edge AI',
      noteEdgeModel: 'Recognition accuracy 99.1%, latency ≤500ms',
      valueEdgeModel: 'XiaoQ-KWS (self-developed)',
      noteCloudModel: 'Voice response ≤2.0s, recognition accuracy ≥98%, image understanding ≤5s',
      notePower: '90% lower than smartphones',
      noteEdgeAI: 'Keyword wake-up latency ≤0.2s'
    },
    tech: {
      sectionTitle: 'Why Choose AI Office Assistant',
      h1Title: 'Efficient Information Summarization',
      h1Desc: 'Intelligently extract meeting highlights and group chat messages into documents, dramatically boosting productivity',
      h2Title: 'Simple & Efficient',
      h2Desc: 'One-click recording, photo-to-dialogue, fast processing saves time and effort',
      h3Title: 'Seamless Feishu Integration',
      h3Desc: 'One-click export to Feishu documents for smoother information flow',
      h4Title: 'Office-Focused',
      h4Desc: 'Deeply adapted to office workflows, solving real workplace pain points'
    },
    footer: {
      text: 'AI Office Assistant · Developed by Software Center Dept. III<br />An AI Agent running on OpenVela OS, empowered by cloud large language models',
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
  const saved = localStorage.getItem('openvela_language');
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
  localStorage.setItem('openvela_language', langCode);
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