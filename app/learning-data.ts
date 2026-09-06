export type GradePlan = {
  grade: number;
  stage: string;
  cefr: string;
  headline: string;
  focus: string[];
  materials: string[];
  weekly: string[];
  output: string[];
  checkpoint: string;
};

export const gradePlans: GradePlan[] = [
  {
    grade: 1,
    stage: '起步年',
    cefr: '零基础 → Pre A1',
    headline: '先让声音、意义和文字连起来',
    focus: ['建立英语声音敏感度', '完成基础字母音与拼读', '敢用整句回答', '形成每天阅读习惯'],
    materials: ['Power Up 1', 'Jolly Phonics Pupil Books 1–3', '牛津树可解码读物 1+–5级'],
    weekly: ['综合主课 2 × 45分钟', '拼读练习 4 × 15分钟', '亲子/自主阅读 5 × 20分钟', '听力与跟读 5 × 15分钟'],
    output: ['1分钟自我介绍', '看图说4–6句', '独立拼读CVC和已学双字母音', '读完并复述一本短读物'],
    checkpoint: '用 Pre A1 Starters 样题做体验性检查，不建议正式刷考。',
  },
  {
    grade: 2,
    stage: '自主阅读年',
    cefr: 'Pre A1 → A1',
    headline: '从“会拼”过渡到“能自己读”',
    focus: ['补齐替代拼写和高频词', '提升朗读流利度', '进行3–5分钟日常交流', '开始短句和小段落写作'],
    materials: ['Power Up 2', '牛津树 5–9级', 'A1 Movers 官方活动与样题'],
    weekly: ['综合主课 2 × 60分钟', '分级阅读 5 × 25分钟', '听力/有声书 5 × 20分钟', '拼写与短写作 2 × 20分钟'],
    output: ['口头复述故事顺序', '写40–60词小短文', '阅读短章节并找关键信息', '完成一次英语小展示'],
    checkpoint: '达到 A1 后可做 Movers；是否报考取决于孩子意愿。',
  },
  {
    grade: 3,
    stage: '跨越A2年',
    cefr: 'A1 → A2-',
    headline: '把阅读变成获取知识的工具',
    focus: ['进入章节书', '听懂适龄故事和科普', '复述并表达个人看法', '掌握段落结构'],
    materials: ['Power Up 3–4（按测评推进）', '牛津树 9–12级', 'A2 Flyers / Key 官方样题'],
    weekly: ['综合主课 2 × 60分钟', '章节/分级阅读 5 × 30分钟', '主题听力 4 × 25分钟', '口语讨论与写作各1次'],
    output: ['5–8分钟主题交流', '写80–100词故事或说明文', '读完一本短章节书', '完成听读后的口头总结'],
    checkpoint: '先以 A2 Flyers 检查能力；不必急着进入 KET 冲刺班。',
  },
  {
    grade: 4,
    stage: 'A2毕业年',
    cefr: 'A2 → B1-',
    headline: '从描述事实走向解释原因和观点',
    focus: ['阅读更长的小说与非虚构文本', '理解态度和简单推断', '表达理由与比较', '完成结构清楚的写作'],
    materials: ['Power Up 4–5', '牛津树 13–15级', 'Complete Key for Schools（考前4–6个月）'],
    weekly: ['综合主课 2 × 75分钟', '原版阅读 5 × 30分钟', '讨论/演讲 1 × 45分钟', '写作与修改 1 × 45分钟'],
    output: ['10分钟主题讨论', '写100–150词文章', '阅读后回答推理问题', '独立完成英语项目海报或演讲'],
    checkpoint: '官方模考稳定达到 A2 中上段，再考虑 KET；考试只占学习时间10%–20%。',
  },
  {
    grade: 5,
    stage: '独立使用年',
    cefr: 'B1- → B1',
    headline: '让英语进入真实学习和表达',
    focus: ['读适龄原版章节书', '理解访谈、讨论和科普视频', '持续表达并回应别人', '进行写作规划与修改'],
    materials: ['Power Up 6', '牛津树 16–18级 / Cambridge Readers', 'Complete Preliminary for Schools'],
    weekly: ['B1综合课 2 × 75分钟', '原版阅读 5 × 35分钟', '口语项目 1 × 45分钟', '写作反馈 1 × 45分钟'],
    output: ['15分钟自然交流', '写150–200词文章', '完成一本原版书阅读日志', '进行3–5分钟演讲并回答问题'],
    checkpoint: '用 PET 官方样题诊断；准备充分可在五年级末或六年级报考。',
  },
  {
    grade: 6,
    stage: 'B2冲刺年',
    cefr: '稳定 B1 → 挑战 B2',
    headline: '从“会英语”走向“用英语思考和学习”',
    focus: ['适应正常语速和多种口音', '阅读较复杂的故事与观点文章', '讨论利弊并维护观点', '写完整叙事、说明和议论文本'],
    materials: ['B2 First for Schools适龄课程', '牛津树 19–20级及原版书', '纪录片、播客、TED-Ed等真实内容'],
    weekly: ['B1+/B2综合课 2 × 90分钟', '原版阅读 5 × 40分钟', '口语辩论/项目 1 × 60分钟', '过程写作 1 × 60分钟'],
    output: ['20分钟持续交流', '写200–300词清晰文章', '不依赖中文字幕理解适龄视频', '完成跨学科英语研究项目'],
    checkpoint: 'PET高分段后再做 B2 First模考；不要用大学六级真题替代儿童B2课程。',
  },
];

export const weeklyModels = {
  '4–5 小时': {
    name: '轻量不断线',
    target: '六年级强 A2 / B1',
    note: '适合课业较忙家庭，关键是每天20–40分钟持续输入。',
    days: [
      ['周一', '主教材 + 跟读', '45分钟'], ['周二', '分级阅读 + 复述', '35分钟'], ['周三', '老师综合课', '60分钟'],
      ['周四', '听力 + 拼写', '35分钟'], ['周五', '分级阅读', '30分钟'], ['周六', '老师综合课 + 项目', '75分钟'], ['周日', '亲子共读/英文影片', '45分钟'],
    ],
  },
  '7–9 小时': {
    name: '推荐均衡型',
    target: '六年级稳定 B1、挑战 B2',
    note: '3小时指导课配合4–6小时家庭输入，是本方案的默认强度。',
    days: [
      ['周一', '主教材 + 朗读', '60分钟'], ['周二', '分级阅读 + 口头复述', '55分钟'], ['周三', '老师综合课 + 作业', '90分钟'],
      ['周四', '精听跟读 + 拼写写作', '60分钟'], ['周五', '原版阅读 + 自由表达', '55分钟'], ['周六', '主课 + 口语项目', '120分钟'], ['周日', '有声书/纪录片 + 周复盘', '75分钟'],
    ],
  },
  '10–12 小时': {
    name: '强化沉浸型',
    target: '六年级更有把握冲刺 B2',
    note: '增加真实内容、项目和写作反馈，不是增加刷题时间。',
    days: [
      ['周一', '综合课 + 阅读', '90分钟'], ['周二', '精听 + 跟读 + 复述', '80分钟'], ['周三', '老师综合课 + 写作', '120分钟'],
      ['周四', '原版阅读 + 词汇应用', '80分钟'], ['周五', '口语课 + 主题研究', '90分钟'], ['周六', '项目课 + 大量阅读', '150分钟'], ['周日', '英文影片/播客 + 周复盘', '100分钟'],
    ],
  },
} as const;

export type DigitalResource = {
  title: string;
  access: '免费样章' | '免费 PDF' | '免费注册阅读' | '官方翻页试读' | '购买授权' | '免费样题';
  detail: string;
  url: string;
};

type LearningResource = {
  category: string;
  name: string;
  stage: string;
  role: string;
  buy: string;
  link: string;
  digitalNote: string;
  digitalResources: DigitalResource[];
};

// Oxford Owl exposes individual titles through its public keyword filter.
// Reading requires the publisher's free login; these are not PDF downloads.
const oxfordBook = (title: string) =>
  `https://www.oxfordowl.co.uk/for-home/library-page?type=book&view=details&query=${encodeURIComponent(title)}`;

export const resources: LearningResource[] = [
  {
    category: '综合课',
    name: 'Cambridge Power Up',
    stage: 'Pre A1–B1｜小学主线',
    role: '六年课程的综合主教材，覆盖听说读写、项目任务和剑桥考试衔接。',
    buy: '学生用书 + 活动册 + 数字资源；按级别半年到一年购买。',
    link: 'https://shop.cambridge.org/english/family/2100113135',
    digitalNote: '以下是第二版官方单元样章，不是整本教材。完整 eBook 需购买对应级别的授权，并在 Cambridge One 激活；不要混买不同版本。',
    digitalResources: [
      { title: 'Power Up 1 · Unit 6', access: '免费样章', detail: '第二版 · PDF 约25.4 MB；文件较大，打开需稍等。', url: 'https://www.cambridge.org/sites/default/files/media/documents/Level1Unit6_for%20Ceros.pdf' },
      { title: 'Power Up 3 · Unit 3', access: '免费样章', detail: '第二版 · 14页 PDF · A healthy body。', url: 'https://www.cambridge.org/sites/default/files/media/documents/Level3Unit3_for_Ceros.pdf' },
      { title: 'Power Up 5 · Unit 4', access: '免费样章', detail: '第二版 · 12页 PDF，供判断后续级别难度。', url: 'https://www.cambridge.org/sites/default/files/media/documents/Level5Unit4_for_Ceros.pdf' },
      { title: 'Power Up 1–6 · 完整 eBook 版本', access: '购买授权', detail: '官方版本目录；选择 Pupil’s Book with eBook。地区供应和授权期限以商品页为准。', url: 'https://shop.cambridge.org/english/family/2100113135' },
    ],
  },
  {
    category: '启蒙拼读',
    name: 'Jolly Phonics',
    stage: '零基础–一年级',
    role: '系统学习42个主要语音、合成拼读、拆音拼写和不规则词。',
    buy: 'Pupil Books 1–3；如果老师另有完整体系，不要混用顺序。',
    link: 'https://jollylearning.com/our-programmes/jolly-phonics',
    digitalNote: 'Pupil Books 1–3 为英式英语、印刷体版本的官方页面内试读，不是免费整本下载。翻页阅读器由 Issuu 提供，部分网络可能打不开；下方两份 PDF 可直接用于家庭练习。',
    digitalResources: [
      { title: 'Jolly Phonics Pupil Book 1', access: '官方翻页试读', detail: 'ISBN 9781844147199 · 打开后下滑到页面内试读。', url: 'https://india.jollylearning.com/collections/pupil-books/products/jolly-phonics-pupil-book-1-in-print-letters' },
      { title: 'Jolly Phonics Pupil Book 2', access: '官方翻页试读', detail: '印刷体第2册 · 打开后下滑到页面内试读。', url: 'https://india.jollylearning.com/collections/pupil-books/products/jolly-phonics-pupil-book-2-in-print-letters' },
      { title: 'Jolly Phonics Pupil Book 3', access: '官方翻页试读', detail: '印刷体第3册 · 打开后下滑到页面内试读。', url: 'https://india.jollylearning.com/collections/pupil-books/products/jolly-phonics-pupil-book-3-in-print-letters' },
      { title: 'Group 1 Pupil Worksheets', access: '免费 PDF', detail: '6页可打印练习 · s / a / t / i / p / n；不是 Pupil Book 全册。', url: 'https://jollylearning.com/hubfs/teacher-guide/6ff19446f05ca741-group-1-pupil-worksheets-c30fcac9.pdf?hsLang=en-gb' },
      { title: 'Home Letter Sound Book', access: '免费 PDF', detail: '5页家庭字母音练习材料，可配合课堂复习。', url: 'https://jollylearning.com/hubfs/teacher-guide/de5654b188e335e0-home-letter-sound-book-ffac4f30.pdf?hsLang=en-gb' },
    ],
  },
  {
    category: '阅读听力',
    name: 'Oxford Reading Tree',
    stage: '1–20级｜一年级–六年级',
    role: '从可解码短读物平滑过渡到高年级流利阅读，虚构与非虚构兼顾。',
    buy: '先买当前级别20–30本；低级别优先 Floppy’s Phonics 等可解码系列。',
    link: 'https://home.oxfordowl.co.uk/reading/reading-schemes-oxford-levels/oxford-reading-tree-levels/',
    digitalNote: '已定位 Oxford Owl 免费书库中的具体书名。先免费注册或登录，再点 Log in to read eBook；这些是在线电子书，不提供整套牛津树 PDF。Oxford Level 不是中国年级。',
    digitalResources: [
      { title: 'The Haircut', access: '免费注册阅读', detail: 'Oxford Level 1 · Lilac；适合起步阶段亲子看图讲述。', url: oxfordBook('The Haircut') },
      { title: 'Big, Bad Bug', access: '免费注册阅读', detail: 'Oxford Level 1+ · Pink；从简单文字开始。', url: oxfordBook('Big, Bad Bug') },
      { title: 'Jack', access: '免费注册阅读', detail: 'Oxford Level 2 · Red；搜索结果中选择书名为 Jack 的一行。', url: oxfordBook('Jack') },
      { title: 'The Stinky Plant', access: '免费注册阅读', detail: 'Oxford Level 4 · Blue；基础稳固后再读。', url: oxfordBook('The Stinky Plant') },
    ],
  },
  {
    category: '阅读听力',
    name: 'Oxford Owl 免费电子书',
    stage: '启蒙–小学高年级',
    role: '用于试读和补充家庭阅读，适合先判断级别再采购。',
    buy: '免费注册使用；不替代纸书和真实阅读互动。',
    link: 'https://home.oxfordowl.co.uk/reading/free-ebooks/',
    digitalNote: '这里补充两本进阶书；起步书见左侧/上方牛津树卡片。链接已按书名筛选，登录后在线阅读，免费书目可能由出版社调整。',
    digitalResources: [
      { title: 'The Frog Prince', access: '免费注册阅读', detail: '选择 Oxford Reading Tree / Oxford Level 6 的版本。', url: oxfordBook('The Frog Prince') },
      { title: 'Space Hunt', access: '免费注册阅读', detail: 'Project X · Oxford Level 11；适合已能自主阅读的孩子。', url: oxfordBook('Space Hunt') },
    ],
  },
  {
    category: '阅读听力',
    name: 'British Council LearnEnglish Kids',
    stage: 'A1–B1',
    role: '免费听力、歌曲、故事、阅读和写作活动，适合作为日常短练习。',
    buy: '免费；一次只做一个主题，完成听—说—读—写闭环。',
    link: 'https://learnenglishkids.britishcouncil.org/',
    digitalNote: '下方是完整短故事的文字稿和活动页，不是成册教材。可直接打开 PDF；网站的 Level 1 / 3 是其内容分级，不等于一年级 / 三年级。',
    digitalResources: [
      { title: 'The hungry dragon · 故事文字稿', access: '免费 PDF', detail: '入门 Level 1 · 食物与数字主题，1页。', url: 'https://learnenglishkids.britishcouncil.org/sites/kids/files/attachment/short-stories-the-hungry-dragon-transcript.pdf' },
      { title: 'The hungry dragon · 配套活动', access: '免费 PDF', detail: '听读后练习词汇、数字和故事理解。', url: 'https://learnenglishkids.britishcouncil.org/sites/kids/files/attachment/short-stories-the-hungry-dragon-worksheet.pdf' },
      { title: 'The magic paintbrush · 故事文字稿', access: '免费 PDF', detail: '进阶 Level 3 · 神笔故事，1页。', url: 'https://learnenglishkids.britishcouncil.org/sites/kids/files/attachment/short-stories-story-time-the-magic-paintbrush-transcript.pdf' },
    ],
  },
  {
    category: '考试',
    name: 'Complete Key for Schools',
    stage: 'A2｜KET',
    role: '把语言学习与KET题型结合，适合考试前4–6个月系统准备。',
    buy: '达到A2后再买；不能替代前期综合课和分级阅读。',
    link: 'https://shop.cambridge.org/english/family/2100034500',
    digitalNote: '出版社免费提供第5单元试读包，含不同配套用书的节选；不是完整 Student’s Book。完整版需购买，注意第二版与相应数字资源授权。',
    digitalResources: [
      { title: 'Complete Key for Schools · Unit 5', access: '免费样章', detail: '第二版 · 21页 PDF · It’s my favourite sport!，约8.1 MB。', url: 'https://www.cambridge.org/sites/default/files/media/documents/Complete%20Key%20for%20Schools%202nd%20Ed%20Unit%205%20Sample_0.pdf' },
    ],
  },
  {
    category: '考试',
    name: 'Complete Preliminary for Schools',
    stage: 'B1｜PET',
    role: '覆盖B1听说读写和PET任务，适合高年级进入正式准备。',
    buy: '先用官方样题诊断；考前4–6个月开始最合适。',
    link: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/preparation/',
    digitalNote: '这是出版社的第5单元试读包，不是完整教材；含教师用书等配套节选，家长可先判断难度，后续再购买相应版本。',
    digitalResources: [
      { title: 'Complete Preliminary for Schools · Unit 5', access: '免费样章', detail: 'B1 / PET 官方单元试读 PDF · 约21.9 MB，打开需稍等。', url: 'https://www.cambridge.org/sites/default/files/media/documents/Complete%20Preliminary%20for%20Schools%20Unit%205%20Sample.pdf' },
    ],
  },
  {
    category: '考试',
    name: '剑桥官方免费样题',
    stage: 'Pre A1–B2',
    role: '每半年做一次阶段诊断，区分能力不足和不熟悉题型。',
    buy: '免费；模考不是日常教学。',
    link: 'https://www.cambridgeenglish.org/resources/',
    digitalNote: '考试资源不是综合教材。低年级先用图画词汇书；KET / PET 样题包仅用于到级后的诊断，不建议每天刷题。',
    digitalResources: [
      { title: 'Pre A1 Starters · Wordlist Picture Book', access: '免费 PDF', detail: '剑桥启蒙图画词汇书，适合一年级亲子看图说词。', url: 'https://www.cambridgeenglish.org/images/351849-pre-a1-starters-wordlist-picture-book.pdf' },
      { title: 'A2 Key for Schools · 官方样题包', access: '免费样题', detail: 'ZIP 压缩包；下载解压后使用，不是 Complete 教材。', url: 'https://www.cambridgeenglish.org/Images/504343-a2-key-for-schools-sample-tests.zip' },
      { title: 'B1 Preliminary for Schools · 官方样题包', access: '免费样题', detail: 'ZIP 压缩包；对应 PET 青少版，由当前官方备考页提供。', url: 'https://www.cambridgeenglish.org/Images/565480-b1-preliminary-schools-2020-sample-tests.zip' },
    ],
  },
];

export type TeachingVideo = {
  title: string;
  channel: string;
  grades: number[];
  level: string;
  focus: string;
  task: string;
  videoId: string;
};

export const teachingVideos: TeachingVideo[] = [
  {
    title: 'Hello!｜问候与感受表达',
    channel: 'Super Simple Songs',
    grades: [1],
    level: '零基础–Pre A1',
    focus: '用歌曲建立 hello、How are you? 和常见感受的整句反应。',
    task: '看第1遍跟动作，第2遍暂停问答，最后替换成孩子当天的真实感受。',
    videoId: 'tVlcKp3bWH8',
  },
  {
    title: 'Alphablocks｜Learn to Read',
    channel: 'Alphablocks 官方频道',
    grades: [1, 2],
    level: 'Pre A1｜自然拼读',
    focus: '观察字母音怎样合成单词，巩固 blending 与 segmenting。',
    task: '每次只看8–12分钟；记下5个单词，用字母卡重新拼一次，再读进句子。',
    videoId: 'qPCbB-gH2Ew',
  },
  {
    title: 'Weird But Wonderful Animals',
    channel: 'Nat Geo Kids',
    grades: [2, 3],
    level: 'A1–A2｜科普听力',
    focus: '通过动物事实扩展形容词、身体部位和比较表达。',
    task: '每次选一种动物，完成“名字—特点—我觉得”的3句口头卡片。',
    videoId: 'nBL-CeDdvDU',
  },
  {
    title: 'Why Is the Sky Blue?',
    channel: 'SciShow Kids',
    grades: [3, 4],
    level: 'A2｜科学英语',
    focus: '练习听懂因果关系，并从视频中提取主旨和关键步骤。',
    task: '先盲听抓主旨，再开英文字幕；最后用 because / so 复述3个因果句。',
    videoId: 'bcVr13Fw7w8',
  },
  {
    title: 'Why Do Cats Act So Weird?',
    channel: 'TED-Ed',
    grades: [4, 5],
    level: 'A2+–B1｜真实语速',
    focus: '适应较快旁白，学习用证据解释动物行为。',
    task: '分两次看完；每次摘录3个关键词，用“claim + because”做1分钟解释。',
    videoId: 'sI8NsYIyQ2A',
  },
  {
    title: 'What Makes a Hero?',
    channel: 'TED-Ed',
    grades: [5, 6],
    level: 'B1–B2｜文学与观点',
    focus: '把阅读中的人物发展与“英雄旅程”结构连接起来。',
    task: '画6格故事结构图，再选一本读过的书做2–3分钟英语讲解。',
    videoId: 'Hhk4N9A0oCA',
  },
  {
    title: 'A2 Key for Schools Speaking｜Luca & Federica',
    channel: 'English with Cambridge',
    grades: [4],
    level: 'A2｜KET口语示范',
    focus: '看真实考生怎样回答个人问题、表达喜好并给出理由。',
    task: '不背答案；暂停后先自己答，再比较示范中的展开方式和互动语言。',
    videoId: '-DNilMthxx8',
  },
  {
    title: 'B1 Preliminary for Schools Speaking｜Roberto & Simone',
    channel: 'English with Cambridge',
    grades: [5, 6],
    level: 'B1｜PET口语示范',
    focus: '观察看图描述、协商选择、回应同伴和持续表达。',
    task: '两人模仿 Part 2–3，每人录一次；复盘是否有理由、追问和回应。',
    videoId: 'xF_Q2anYOfc',
  },
  {
    title: 'B2 First Speaking｜Victoria & Edward',
    channel: 'English with Cambridge',
    grades: [6],
    level: 'B2｜六年级挑战',
    focus: '提前看见B2需要的比较、推测、协商和观点论证，而不是立即刷题。',
    task: '只选一段精练：先列连接词，再完成1分钟不间断表达并回听修改。',
    videoId: 'EdeZp0n0JHw',
  },
];

export type CreatorVideo = {
  title: string;
  teacher: string;
  grades: number[];
  level: string;
  style: string;
  why: string;
  task: string;
  videoId: string;
};

export const creatorVideos: CreatorVideo[] = [
  {
    title: 'First Day of School｜Caitie’s Classroom',
    teacher: 'Caitie · Super Simple Play',
    grades: [1],
    level: '零基础–Pre A1',
    style: '真人课堂 · 歌曲 · 游戏',
    why: '主持人语速慢、表情和动作清楚，单词放在真实课堂情境里，低龄孩子容易参与。',
    task: '分两次观看；每次只选一个游戏，最后让孩子用英语说出书包里的5样东西。',
    videoId: '6aYMOPerAz8',
  },
  {
    title: 'Learn the Letters and Their Sounds',
    teacher: 'Jack Hartmann',
    grades: [1],
    level: 'Pre A1｜字母音',
    style: '真人带练 · 节奏动作',
    why: '每个字母音都有口头示范和动作，适合精力旺盛、坐不住的一年级孩子。',
    task: '不要整段循环刷；每次练6–8个音，暂停后找一个以该音开头的家中物品。',
    videoId: 'KsDMOJbWt_Y',
  },
  {
    title: 'Wake Up!｜Daily Routines',
    teacher: 'Matt · Dream English Kids',
    grades: [1, 2],
    level: 'Pre A1–A1',
    style: '英语老师 · 原创歌曲',
    why: 'Matt长期教授儿童英语，歌曲直接练 wake up、brush my teeth 等日常整句。',
    task: '跟动作唱完后关掉视频，按真实早晨顺序说“I…”句子，二年级再加时间。',
    videoId: 'eUXkj6j6Ezw',
  },
  {
    title: 'What Do You Do Every Day?',
    teacher: 'Fun Kids English',
    grades: [2, 3],
    level: 'A1｜日常表达',
    style: '儿童ESL · 句型歌',
    why: '目标句型单一、重复适量，适合从跟唱过渡到独立问答，而不是只记动作词。',
    task: '一人问“What do you do every day?”，一人抽动作卡回答；交换角色做8轮。',
    videoId: '_oEAdz3MAj0',
  },
  {
    title: 'English for Beginner Level｜Speak Real English',
    teacher: 'Vanessa',
    grades: [3, 4],
    level: 'A1+–A2',
    style: '美式英语 · 口语带练',
    why: 'Vanessa会把真实口语拆开示范，适合已经能读短文、但开口仍依赖课本句子的孩子。',
    task: '视频较长，每次只学10分钟；选3句跟读、替换个人信息，再录30秒自然回答。',
    videoId: 'dEcr9M0xKE4',
  },
  {
    title: 'Free English Class｜Our Daily Routines',
    teacher: 'Bob the Canadian',
    grades: [4, 5],
    level: 'A2–B1',
    style: '加拿大老师 · 主题词汇课',
    why: 'Bob讲解有结构、语速自然但清楚，能把零散词汇组织成完整的主题表达。',
    task: '先看前12–15分钟；列出8个动词短语，然后不看稿讲自己从起床到睡觉的一天。',
    videoId: '99XSZHP0Wgk',
  },
  {
    title: 'Tell a Great Story in English',
    teacher: 'Emma · mmmEnglish',
    grades: [5, 6],
    level: 'B1–B2',
    style: '澳式英语 · 模仿与影子跟读',
    why: 'Emma把故事时态、重音和节奏放在同一次口语练习里，适合从“句子正确”走向“表达连贯”。',
    task: '完成 Listen → Copy → Shadow 三步后，保留故事结构，把内容改成自己的真实经历。',
    videoId: 'IqJlqzEfyKo',
  },
  {
    title: 'R & L Pronunciation｜Play It, Say It',
    teacher: 'Rachel’s English',
    grades: [6],
    level: 'B1+–B2｜发音诊断',
    style: '美式发音 · 口型细节',
    why: 'Rachel擅长用口型、舌位和真实对话解释美式发音，适合针对明确问题做精修。',
    task: '只练R/L相关片段；录10组最小对立词和3个句子，对比口型，不追求消除口音。',
    videoId: 'TjwZPtjtGJg',
  },
];

export type EbookResource = {
  title: string;
  source: string;
  grades: number[];
  level: string;
  format: string;
  use: string;
  access: string;
  link: string;
};

export const ebooks: EbookResource[] = [
  {
    title: 'Pre A1 Starters Wordlist Picture Book',
    source: 'Cambridge English 官方',
    grades: [1],
    level: 'Pre A1',
    format: '彩色 PDF · 直接打开',
    use: '看图找词、亲子问答和口头造句；不把词表当成每日抄写任务。',
    access: '免费直读 / 可下载',
    link: 'https://www.cambridgeenglish.org/images/351849-pre-a1-starters-wordlist-picture-book.pdf',
  },
  {
    title: 'The Stinky Plant',
    source: 'Oxford Owl',
    grades: [1],
    level: 'Oxford Level 4',
    format: '分级电子书 · 站内搜索书名',
    use: '适合会读常见字母组合和部分高频词后，做亲子共读与简单评价。',
    access: '免费注册后阅读',
    link: 'https://home.oxfordowl.co.uk/reading/free-ebooks/',
  },
  {
    title: 'A1 Movers Wordlist Picture Book',
    source: 'Cambridge English 官方',
    grades: [2],
    level: 'A1',
    format: '彩色 PDF · 直接打开',
    use: '围绕商店、地点和日常生活做看图叙述，推动一词回答变成完整句。',
    access: '免费直读 / 可下载',
    link: 'https://www.cambridgeenglish.org/Images/351850-a1-movers-wordlist-picture-book.pdf',
  },
  {
    title: 'Who Eats Who?',
    source: 'Oxford Owl',
    grades: [2],
    level: 'Oxford Level 6',
    format: '分级电子书 · 站内搜索书名',
    use: '用食物链主题练信息提取，读完画三层关系图并用英语说明。',
    access: '免费注册后阅读',
    link: 'https://home.oxfordowl.co.uk/reading/free-ebooks/',
  },
  {
    title: 'The Tale of Peter Rabbit',
    source: 'Project Gutenberg',
    grades: [2, 3],
    level: 'A1+–A2｜亲子共读',
    format: '带原版插图 HTML · 在线阅读',
    use: '篇幅短但有少量旧式表达；先听读或亲子共读，再按事件顺序复述。',
    access: '公版免费直读',
    link: 'https://www.gutenberg.org/cache/epub/14838/pg14838-images.html',
  },
  {
    title: 'A2 Flyers Wordlist Picture Book',
    source: 'Cambridge English 官方',
    grades: [3, 4],
    level: 'A2',
    format: '彩色 PDF · 直接打开',
    use: '用活动页和图片练描述、叙事与提问；适合作为Flyers阶段诊断补充。',
    access: '免费直读 / 可下载',
    link: 'https://www.cambridgeenglish.org/images/351851-a2-flyers-wordlist-picture-book.pdf',
  },
  {
    title: 'Grace the Pirate',
    source: 'Oxford Owl',
    grades: [3, 4],
    level: 'Oxford Level 14',
    format: '分级电子书 · 站内搜索书名',
    use: '练章节阅读、人物动机和有证据的观点表达。',
    access: '免费注册后阅读',
    link: 'https://home.oxfordowl.co.uk/reading/free-ebooks/',
  },
  {
    title: 'Exploring the Deep',
    source: 'Oxford Owl',
    grades: [4, 5],
    level: 'Oxford Level 16',
    format: '分级电子书 · 站内搜索书名',
    use: '训练非虚构文本的标题、图表、术语和信息归纳。',
    access: '免费注册后阅读',
    link: 'https://home.oxfordowl.co.uk/reading/free-ebooks/',
  },
  {
    title: 'The Wonderful Wizard of Oz',
    source: 'Project Gutenberg',
    grades: [4, 5],
    level: 'A2+–B1｜原版长读物',
    format: '带原版插图 HTML · 在线阅读',
    use: '每周读1–2章，记录人物目标、困难和变化；生词只查影响理解的部分。',
    access: '公版免费直读',
    link: 'https://www.gutenberg.org/cache/epub/43936/pg43936-images.html',
  },
  {
    title: "Alice's Adventures in Wonderland",
    source: 'Project Gutenberg',
    grades: [5, 6],
    level: 'B1+｜挑战阅读',
    format: 'HTML / EPUB / Kindle',
    use: '语言游戏较多，不适合作为第一本章节书；选章精读并讨论荒诞逻辑。',
    access: '公版免费直读 / 下载',
    link: 'https://www.gutenberg.org/ebooks/11',
  },
  {
    title: 'The Secret Garden',
    source: 'Project Gutenberg',
    grades: [5, 6],
    level: 'B1+–B2｜持续阅读',
    format: 'HTML / EPUB / Kindle',
    use: '以人物变化为主线，每3章写一次100词阅读日志；方言段落可跳过精抠。',
    access: '公版免费直读 / 下载',
    link: 'https://www.gutenberg.org/ebooks/17396',
  },
  {
    title: 'Anne of Green Gables',
    source: 'Project Gutenberg',
    grades: [6],
    level: 'B2挑战｜长篇小说',
    format: 'HTML / EPUB / Kindle',
    use: '适合已经能稳定读B1章节书的孩子；做人物关系、观点摘录和章节摘要。',
    access: '公版免费直读 / 下载',
    link: 'https://www.gutenberg.org/ebooks/45',
  },
];

export const habitItems = ['完成2次主课/教师课', '完成5次英语听力', '完成5次分级或原版阅读', '完成3次口头复述/讨论', '完成2次拼写或写作', '完成1次主题项目', '完成周末复盘'];

export const classCriteria = [
  '能说明本学期具体CEFR目标与课程进度',
  '使用一条清晰的综合教材主线，不频繁换体系',
  '低龄阶段真正教授系统拼读与可解码阅读',
  '课堂中孩子有足够的连续开口和同伴互动',
  '每周包含真实阅读，而不只是练习册',
  '老师会对发音、口语和写作给出可执行反馈',
  '每12周能展示录音、阅读、写作等成长证据',
  '考试班只在达到相应能力后进入，不承诺低龄速成',
];

export const officialSources = [
  ['CEFR B2能力描述', 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-%20cefr-3.3-common-reference-levels-global-scale'],
  ['剑桥英语学校考试进阶', 'https://www.cambridgeenglish.org/in/exams-and-tests/qualifications/schools/'],
  ['A2 Key for Schools题型', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/format/'],
  ['B1 Preliminary for Schools题型', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/format/'],
  ['剑桥指导学习时数', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
] as const;
