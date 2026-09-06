'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookCheck,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Headphones,
  Library,
  MessageCircleMore,
  MonitorPlay,
  NotebookPen,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import {
  type DigitalResource,
  classCriteria,
  creatorVideos,
  ebooks,
  gradePlans,
  habitItems,
  officialSources,
  resources,
  teachingVideos,
  weeklyModels,
} from './learning-data';

type WeeklyHours = keyof typeof weeklyModels;

const levelOptions = ['零基础', 'Pre A1', 'A1', 'A2', 'B1'];
const hourOptions: WeeklyHours[] = ['4–5 小时', '7–9 小时', '10–12 小时'];
const resourceCategories = ['全部', '综合课', '启蒙拼读', '阅读听力', '考试'];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold tracking-[.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-.035em] text-balance sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{copy}</p>
    </div>
  );
}

function ResourceLinks({ items }: { items: DigitalResource[] }) {
  const paidAccess = ['购买授权', '纸书购买', '付费电子书', '地区版授权'];
  const limitedAccess = ['免费样章', '官方翻页试读', '注册试用', '学校账号', '馆藏查询', '版本核对'];

  return (
    <ul className="mt-3 divide-y divide-border/70">
      {items.map((resource) => (
        <li key={resource.title} className="py-3 first:pt-0 last:pb-0">
          <a href={resource.url} target="_blank" rel="noreferrer" className="flex min-h-11 items-start gap-3 rounded-lg py-1 text-sm text-primary transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-label={`打开 ${resource.title}（${resource.access}，新标签页）`}>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold leading-6 underline decoration-primary/25 underline-offset-4">{resource.title}</span>
                <span className={`rounded-full px-2 py-0.5 text-sm font-medium ${paidAccess.includes(resource.access) ? 'bg-amber-100 text-amber-900' : limitedAccess.includes(resource.access) ? 'bg-secondary text-foreground' : 'bg-primary/10 text-primary'}`}>{resource.access}</span>
              </span>
              <span className="mt-1 block text-sm leading-6 text-muted-foreground">{resource.detail}</span>
            </span>
            <ExternalLink className="mt-1 size-4 shrink-0" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [grade, setGrade] = useState(1);
  const [level, setLevel] = useState('零基础');
  const [weeklyHours, setWeeklyHours] = useState<WeeklyHours>('7–9 小时');
  const [resourceCategory, setResourceCategory] = useState('全部');
  const [habits, setHabits] = useState<number[]>([]);
  const [criteria, setCriteria] = useState<number[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem('english-growth-habits');
    if (saved) {
      try {
        setHabits(JSON.parse(saved));
      } catch {
        setHabits([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('english-growth-habits', JSON.stringify(habits));
  }, [habits]);

  const selectedGrade = gradePlans[grade - 1];
  const weeklyModel = weeklyModels[weeklyHours];
  const visibleResources = useMemo(
    () => resources.filter((item) => resourceCategory === '全部' || item.category === resourceCategory),
    [resourceCategory],
  );
  const visibleVideos = useMemo(() => teachingVideos.filter((item) => item.grades.includes(grade)), [grade]);
  const visibleCreatorVideos = useMemo(() => creatorVideos.filter((item) => item.grades.includes(grade)), [grade]);
  const visibleEbooks = useMemo(() => ebooks.filter((item) => item.grades.includes(grade)), [grade]);
  const habitProgress = Math.round((habits.length / habitItems.length) * 100);
  const classVerdict = criteria.length >= 7
    ? ['值得进入复试听', '基本要素比较完整，再观察孩子是否真正参与和喜欢。']
    : criteria.length >= 4
      ? ['信息还不够', '要求机构补充课程目标、学生作品和反馈样例后再决定。']
      : ['建议谨慎', '先不要被“外教、原版、KET/PET速成”等标签推动报名。'];

  function toggleItem(index: number, setter: React.Dispatch<React.SetStateAction<number[]>>) {
    setter((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(circle_at_12%_18%,rgba(248,184,69,.20),transparent_32%),radial-gradient(circle_at_88%_8%,rgba(42,157,143,.16),transparent_30%)]" />

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="英语成长地图首页">
          <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm"><BookOpen className="size-5" /></span>
          <span>
            <b className="block font-heading text-[17px] tracking-tight">英语成长地图</b>
            <small className="block text-[11px] font-medium tracking-[.14em] text-muted-foreground">GRADE 1 → GRADE 6</small>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          <a href="#roadmap" className="transition hover:text-foreground">六年路线</a>
          <a href="#curriculum" className="transition hover:text-foreground">每周课程</a>
          <a href="#resources" className="transition hover:text-foreground">教材资源</a>
          <a href="#media" className="transition hover:text-foreground">视频与电子书</a>
          <a href="#tracker" className="transition hover:text-foreground">家庭打卡</a>
          <a href="#classes" className="transition hover:text-foreground">选辅导班</a>
        </nav>
        <Button className="h-10 rounded-xl px-4" onClick={() => document.querySelector('#planner')?.scrollIntoView({ behavior: 'smooth' })}>
          生成方案 <ArrowRight />
        </Button>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:pb-24 lg:pt-16">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-semibold text-amber-900">
            <Sparkles className="size-3.5" /> 稳定 B1 · 挑战 B2 · 不走低龄刷题路线
          </div>
          <h1 className="font-heading text-[clamp(2.7rem,7vw,5.6rem)] font-semibold leading-[.94] tracking-[-.055em] text-balance">
            六年，把英语变成<span className="text-primary">真正能用</span>的能力。
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            从一年级的听说与拼读，到六年级自然交流、原版阅读和成篇写作。每天知道做什么，每12周知道如何验收。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-border"><Clock3 className="size-4 text-primary" /> 7–9 小时 / 周</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-border"><Headphones className="size-4 text-primary" /> 听说读写一体</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-border"><BookOpen className="size-4 text-primary" /> KET / PET 只是里程碑</span>
          </div>
        </div>

        <aside id="planner" className="relative self-end rounded-[28px] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(34,77,68,.14)] backdrop-blur-xl sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[.16em] text-primary">QUICK START</p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight">孩子的当前方案</h2>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800">自动匹配</span>
          </div>
          <div className="mt-6 space-y-5">
            <fieldset>
              <legend className="mb-3 text-sm font-semibold">所在年级</legend>
              <div className="grid grid-cols-6 gap-1.5">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <button key={item} onClick={() => setGrade(item)} className={`rounded-xl border py-2.5 text-sm font-semibold transition ${grade === item ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-white hover:border-primary/45'}`}>{item}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-sm font-semibold">当前水平</legend>
              <div className="flex flex-wrap gap-2">
                {levelOptions.map((item) => (
                  <button key={item} onClick={() => setLevel(item)} className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${level === item ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-white hover:border-primary/45'}`}>{item}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-sm font-semibold">每周可投入</legend>
              <div className="grid grid-cols-3 gap-2">
                {hourOptions.map((item) => (
                  <button key={item} onClick={() => setWeeklyHours(item)} className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition sm:text-sm ${weeklyHours === item ? 'border-primary bg-primary/8 text-primary' : 'border-border bg-white hover:border-primary/45'}`}>{item}</button>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="mt-6 rounded-2xl bg-[#f4f1e8] p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold tracking-[.12em] text-muted-foreground">{grade}年级 · {level}</p>
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary">{selectedGrade.cefr}</span>
            </div>
            <p className="mt-3 text-lg font-semibold">{selectedGrade.materials.slice(0, 2).join(' + ')}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{weeklyModel.name}：{weeklyModel.target}。{weeklyModel.note}</p>
            <a href="#roadmap" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">查看完整课程 <ChevronRight className="size-4" /></a>
          </div>
        </aside>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <figure className="overflow-hidden rounded-[26px] border border-border bg-white shadow-[0_18px_55px_rgba(38,82,73,.09)]">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/learning-journey.png`} alt="孩子沿着A1、A2、B1和B2学习路径阅读、听力、交流和写作" className="aspect-[1.91/1] w-full object-cover" />
        </figure>
      </section>

      <section id="roadmap" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="01 · SIX-YEAR ROADMAP" title="六年路线，不按年龄硬升册" copy="每年级有默认目标，但真正的升级依据是听、说、读、写的表现。点击年级查看课程、教材、产出和检查点。" />
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {gradePlans.map((plan) => (
              <button key={plan.grade} onClick={() => setGrade(plan.grade)} className={`min-w-[118px] rounded-2xl border px-4 py-3 text-left transition ${grade === plan.grade ? 'border-primary bg-primary text-primary-foreground shadow-md' : 'border-border bg-white hover:-translate-y-0.5 hover:border-primary/40'}`}>
                <span className="block text-xs font-semibold opacity-75">{plan.stage}</span>
                <b className="mt-1 block text-base">{plan.grade} 年级</b>
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-5 rounded-[28px] border border-border bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[.85fr_1.15fr]">
            <div className="rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
              <p className="text-xs font-bold tracking-[.16em] opacity-70">目标等级</p>
              <p className="mt-3 font-heading text-3xl font-semibold">{selectedGrade.cefr}</p>
              <h3 className="mt-8 text-xl font-semibold leading-8">{selectedGrade.headline}</h3>
              <div className="mt-7 space-y-3">
                {selectedGrade.focus.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0" /><span>{item}</span></div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 font-semibold"><BookCheck className="size-4 text-primary" />本年教材</div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {selectedGrade.materials.map((item) => <li key={item} className="border-b border-border/70 pb-3">{item}</li>)}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 font-semibold"><CalendarDays className="size-4 text-primary" />每周结构</div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {selectedGrade.weekly.map((item) => <li key={item} className="border-b border-border/70 pb-3">{item}</li>)}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 font-semibold"><MessageCircleMore className="size-4 text-primary" />可观察产出</div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  {selectedGrade.output.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500" />{item}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl bg-secondary p-5">
                <div className="flex items-center gap-2 font-semibold"><Target className="size-4 text-primary" />阶段检查</div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{selectedGrade.checkpoint}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="border-y border-border/70 bg-white/72 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="02 · WEEKLY CURRICULUM" title="把目标落到每一天" copy="选择家庭能够长期坚持的强度。时间增加时，优先增加原版输入、交流和项目，不增加机械刷题。" />
            <div className="flex flex-wrap gap-2">
              {hourOptions.map((item) => (
                <button key={item} onClick={() => setWeeklyHours(item)} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${weeklyHours === item ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background'}`}>{item}</button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
            <div className="rounded-[26px] bg-[#213f3a] p-7 text-white">
              <p className="text-xs font-bold tracking-[.15em] text-amber-300">{weeklyModel.name}</p>
              <p className="mt-4 font-heading text-3xl font-semibold">{weeklyHours} / 周</p>
              <p className="mt-5 text-sm leading-7 text-white/70">{weeklyModel.note}</p>
              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-xs font-semibold text-white/60">六年目标</p>
                <p className="mt-2 text-lg font-semibold">{weeklyModel.target}</p>
              </div>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p className="flex gap-2"><Check className="mt-0.5 size-4 text-amber-300" />指导课负责结构与反馈</p>
                <p className="flex gap-2"><Check className="mt-0.5 size-4 text-amber-300" />家庭时间负责输入与习惯</p>
                <p className="flex gap-2"><Check className="mt-0.5 size-4 text-amber-300" />每周至少一次真实输出</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {weeklyModel.days.map(([day, task, duration], index) => (
                <article key={day} className={`rounded-2xl border border-border bg-background p-5 ${index === 6 ? 'sm:col-span-2' : ''}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-lg bg-primary/9 px-2.5 py-1 text-xs font-bold text-primary">{day}</span>
                    <span className="text-xs font-medium text-muted-foreground">{duration}</span>
                  </div>
                  <p className="mt-4 font-semibold">{task}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <b>一年级执行方式：</b>将每天任务拆成两个20–25分钟时段；先听说、再阅读，书写不超过孩子手部耐力。三年级后再逐步延长单次学习时间。
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="03 · RESOURCE LIBRARY" title="教材少而精，每本书都有明确角色" copy="综合教材搭骨架，拼读解决解码，分级阅读积累语言，考试教材只在考前短期加入。不要同时推进多套综合教材。" />
          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm leading-6 sm:p-5">
            <BookOpen className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold">{resources.reduce((total, item) => total + item.digitalResources.length + (item.moreResources?.length ?? 0), 0)} 个教材与配套入口，按书名直接打开</p>
              <p className="mt-1 text-muted-foreground">已扩展到出版社、正版电子书平台、正规书店和图书馆目录。免费样章 ≠ 完整教材，在线练习 ≠ 整本电子书；每条均标明获取方式和版本。资源核对：2026-09-06。</p>
              <p className="mt-2 text-muted-foreground">购买前核对 ISBN、授权码是否全新、账号地区和有效期。海外平台与配送可能受地区限制；馆藏记录不代表本地可借，部分网站需相应网络环境。这里不提供未授权扫描版或网盘整套包。</p>
            </div>
          </div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {resourceCategories.map((item) => (
              <button key={item} onClick={() => setResourceCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${resourceCategory === item ? 'bg-primary text-primary-foreground' : 'border border-border bg-white hover:border-primary/40'}`}>{item}</button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {visibleResources.map((item) => (
              <article key={item.name} className="group rounded-[24px] border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,75,68,.09)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">{item.category}</span>
                  <a href={item.link} target="_blank" rel="noreferrer" aria-label={`打开${item.name}官方资源`} className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"><ExternalLink className="size-4" /></a>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-xs font-semibold text-primary">{item.stage}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.role}</p>
                <div className="mt-5 border-t border-border pt-4 text-sm leading-6"><b>怎么用：</b><span className="text-muted-foreground">{item.buy}</span></div>
                <div className="mt-5 rounded-2xl bg-background p-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold"><Library className="size-4 text-primary" aria-hidden="true" />电子书 / PDF 直达</h4>
                  <ResourceLinks items={item.digitalResources} />
                  <p className="mt-4 border-t border-border/70 pt-3 text-sm leading-6 text-muted-foreground">{item.digitalNote}</p>
                </div>
                {item.moreResources && (
                  <div className="mt-4 rounded-2xl border border-border p-4">
                    <h4 className="flex items-center gap-2 text-sm font-bold"><BookCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />完整教材、配套与其他渠道</h4>
                    <ResourceLinks items={item.moreResources} />
                  </div>
                )}
                {item.editionGuide && (
                  <details className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                    <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">第二版全级别 ISBN 对照（点击展开）</summary>
                    <div className="mt-3 overflow-x-auto rounded-lg border border-border bg-white" role="region" aria-label={`${item.name} 版本对照表，可横向滚动`} tabIndex={0}>
                      <table className="w-full whitespace-nowrap text-left text-sm">
                        <caption className="sr-only">{item.name} 第二版 ISBN 版本对照</caption>
                        <thead className="bg-secondary/60">
                          <tr>{item.editionGuide.columns.map((column) => <th key={column} scope="col" className="px-3 py-3 font-semibold">{column}</th>)}</tr>
                        </thead>
                        <tbody>
                          {item.editionGuide.rows.map((row) => (
                            <tr key={row[0]} className="border-t border-border">
                              <th scope="row" className="px-3 py-3 font-medium">{row[0]}</th>
                              {row.slice(1).map((isbn) => <td key={isbn} className="px-3 py-3 font-mono text-sm">{isbn}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.editionGuide.note}</p>
                    <a href={item.editionGuide.source} target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">核对出版社原始目录<ExternalLink className="size-4" aria-hidden="true" /></a>
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="border-y border-border/70 bg-white/72 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="04 · WATCH & READ" title="按年级点开就能学的视频与电子书" copy="视频全部来自可核验的官方或专业教育频道；电子书只收官方免费、开放阅读或公版资源。先选年级，再从当周主题中各挑一个，不需要全部完成。" />
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <button key={item} onClick={() => setGrade(item)} className={`shrink-0 rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${grade === item ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:border-primary/40'}`}>{item}年级</button>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#213f3a] p-5 text-white sm:p-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-amber-300"><MonitorPlay className="size-4" />YOUTUBE LEARNING</div>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{grade}年级 · 本阶段视频课</h3>
              </div>
              <p className="max-w-lg text-sm leading-6 text-white/65">推荐一次只看一个片段：先看懂，再暂停复述，最后留下一个可检查的口头或书面产出。</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visibleVideos.map((video) => (
                <article key={video.videoId} className="overflow-hidden rounded-[22px] bg-white text-foreground shadow-sm">
                  <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className="group relative block aspect-video overflow-hidden bg-[#d9e5e1]">
                    <span aria-hidden="true" className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-[1.03]" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg)` }} />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-full bg-red-600 text-white shadow-lg"><Play className="ml-0.5 size-5 fill-current" /></span>
                  </a>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold"><span className="text-primary">{video.level}</span><span className="text-muted-foreground">{video.channel}</span></div>
                    <h4 className="mt-3 text-base font-semibold leading-6">{video.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{video.focus}</p>
                    <div className="mt-4 rounded-xl bg-secondary p-3 text-xs leading-5"><b>看完要做：</b>{video.task}</div>
                    <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">打开 YouTube <ExternalLink className="size-3.5" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-amber-200 bg-amber-50/65 p-5 sm:p-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-amber-800"><Users className="size-4" />TEACHER & CREATOR PICKS</div>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{grade}年级 · 优质老师 / UP主精选</h3>
              </div>
              <p className="max-w-lg text-sm leading-6 text-amber-950/65">这些是经过筛选的个人老师或教育创作者。低年级由家长指定单条视频，高年级按明确技能选课，不建议让孩子自行刷推荐流。</p>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {visibleCreatorVideos.map((video) => (
                <article key={video.videoId} className="overflow-hidden rounded-[22px] border border-amber-200/80 bg-white shadow-sm sm:grid sm:grid-cols-[190px_1fr]">
                  <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className="group relative block aspect-video overflow-hidden bg-[#eadfca] sm:aspect-auto sm:min-h-[250px]">
                    <span aria-hidden="true" className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-[1.03]" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg)` }} />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-full bg-red-600 text-white shadow-lg"><Play className="ml-0.5 size-4 fill-current" /></span>
                  </a>
                  <div className="flex flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-900">{video.level}</span>
                      <span className="text-muted-foreground">{video.style}</span>
                    </div>
                    <h4 className="mt-3 text-base font-semibold leading-6">{video.title}</h4>
                    <p className="mt-1 text-xs font-bold text-primary">{video.teacher}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground"><b className="text-foreground">为什么选：</b>{video.why}</p>
                    <div className="mt-4 rounded-xl bg-secondary p-3 text-xs leading-5"><b>家庭用法：</b>{video.task}</div>
                    <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">跟老师练习 <ExternalLink className="size-3.5" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-primary"><Library className="size-4" />LEGAL EBOOK SHELF</div>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{grade}年级 · 具体电子书单</h3>
              </div>
              <p className="max-w-lg text-sm leading-6 text-muted-foreground">“站内搜索书名”表示 Oxford Owl 登录后在免费书库输入这里列出的英文书名；其余链接可直接打开或下载。</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visibleEbooks.map((book) => (
                <article key={book.title} className="flex flex-col rounded-[22px] border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary"><FileText className="size-5" /></span>
                    <span className="rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">{book.format}</span>
                  </div>
                  <p className="mt-5 text-xs font-bold text-primary">{book.source} · {book.level}</p>
                  <h4 className="mt-2 font-heading text-xl font-semibold leading-7">{book.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{book.use}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">{book.access}</span>
                    <a href={book.link} target="_blank" rel="noreferrer" aria-label={`打开电子书${book.title}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">打开 <Download className="size-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <b>使用边界：</b>YouTube 视频只通过官方页面观看，不下载或二次传播；Project Gutenberg 的作品为公版资源，但不同地区版权期限可能不同，使用前可按所在地规则确认。
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#213f3a] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold tracking-[.18em] text-amber-300">05 · KET & PET</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-.035em] sm:text-4xl">考试是体检，不是课程主线</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[
              { tag: 'A2 · KET', title: '基础英语毕业检查', ready: '通常三年级末到四年级，真实能力达到A2后', can: ['读懂简单通知、邮件和短文', '听懂较慢的日常材料', '问答个人信息、兴趣和理由', '写短邮件和看图故事'], risk: '高分仍不等于能读长书或自然交流；备考控制在4–6个月。', link: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/format/' },
              { tag: 'B1 · PET', title: '独立使用英语的起点', ready: '通常五年级末到六年级，A2基础稳固后', can: ['读简单教材和较长文章', '理解观点、态度与部分推断', '描述图片、讨论方案和回应观点', '写约100词邮件、文章或故事'], risk: '同时考语言、认知组织和考试耐力；不能只靠题型训练判断真实B1。', link: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/format/' },
            ].map((exam) => (
              <article key={exam.tag} className="rounded-[26px] border border-white/12 bg-white/7 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-[#213f3a]">{exam.tag}</span>
                  <a href={exam.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-white">官方题型 <ExternalLink className="size-3.5" /></a>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold">{exam.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65"><b className="text-white">适合报考：</b>{exam.ready}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {exam.can.map((item) => <p key={item} className="flex gap-2 rounded-xl bg-white/7 p-3 text-sm leading-5 text-white/80"><Check className="mt-0.5 size-4 shrink-0 text-amber-300" />{item}</p>)}
                </div>
                <p className="mt-6 border-t border-white/12 pt-5 text-sm leading-6 text-amber-100"><b>注意：</b>{exam.risk}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tracker" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
          <div>
            <SectionHeading eyebrow="06 · FAMILY TRACKER" title="家庭打卡：记录行动，不制造压力" copy="勾选本周完成项，进度只保存在当前设备。目标不是每天满分，而是让薄弱环节及时被看见。" />
            <div className="mt-8 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-border">
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-sm text-muted-foreground">本周完成</p><p className="mt-1 font-heading text-4xl font-semibold text-primary">{habits.length}<span className="text-lg text-muted-foreground"> / {habitItems.length}</span></p></div>
                <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-primary">{habitProgress}%</span>
              </div>
              <Progress value={habitProgress} className="mt-5 [&_[data-slot=progress-track]]:h-2" />
              <p className="mt-4 text-xs leading-5 text-muted-foreground">完成5项以上已是有效的一周；如果连续两周不足3项，优先减少任务种类，而不是加压。</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {habitItems.map((item, index) => (
              <label key={item} className={`group flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${habits.includes(index) ? 'border-primary/40 bg-primary/6' : 'border-border bg-white hover:border-primary/35'}`}>
                <Checkbox checked={habits.includes(index)} onCheckedChange={() => toggleItem(index, setHabits)} className="mt-0.5 size-5" />
                <span><b className="block text-sm leading-6">{item}</b><small className="mt-1 block text-xs text-muted-foreground">完成后勾选，可重复修改</small></span>
              </label>
            ))}
            <button onClick={() => setHabits([])} className="rounded-2xl border border-dashed border-border p-5 text-left text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary">清空本周，开始新一周</button>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/72 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="07 · 12-WEEK REVIEW" title="每12周做一次能力盘点" copy="统一保留录音、朗读、阅读理解和独立写作样本。对比孩子自己的过去，而不是只看机构排名。" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Headphones, '听力', '播放一段略陌生的适龄材料，检查主旨、细节和是否依赖中文。'],
              [MessageCircleMore, '口语', '录制2–10分钟主题表达，观察流利度、句子连接和自我修正。'],
              [BookOpen, '阅读', '陌生文本朗读与默读结合，检查解码、速度、理解、推断和复述。'],
              [NotebookPen, '写作', '在有限帮助下独立完成一篇文章，保留初稿和修改稿。'],
            ].map(([Icon, title, copy]) => {
              const IconComponent = Icon as typeof Headphones;
              return (
                <article key={String(title)} className="rounded-[22px] border border-border bg-background p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground"><IconComponent className="size-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-6 rounded-2xl border border-border bg-background p-5 text-sm leading-6 text-muted-foreground">
            <b className="text-foreground">升级条件：</b>新级别材料中，大部分内容能独立理解，复述能抓住主要关系，写作和口语不依赖背诵模板。只做完教材不等于掌握。
          </div>
        </div>
      </section>

      <section id="classes" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="08 · CHOOSING A CLASS" title="辅导班怎么报：先配角色，再看品牌" copy="最值得付费的是结构化教学和高质量反馈。外教、原版、KET/PET都只是标签，不能代替课程目标与成长证据。" />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { icon: GraduationCap, title: '一年级–二年级', subtitle: '主课老师优先', lines: ['每周2次、每次45–60分钟', '1:4–8小班较合适', '老师懂拼读、可解码阅读和低龄课堂', '口语课可有，但不要随机聊天'] },
              { icon: Users, title: '三年级–四年级', subtitle: '综合课 + 输出课', lines: ['每周2次综合课 + 1次口语/项目', '要求有章节阅读和段落写作', '每月至少一次录音或写作反馈', 'KET班只在达到A2后加入'] },
              { icon: ShieldCheck, title: '五年级–六年级', subtitle: 'B1/B2能力课优先', lines: ['每周2次75–90分钟综合课', '增加讨论、演讲和过程写作', 'PET/FCE备考限制在4–6个月', '看老师能否改写作、带原版阅读'] },
            ].map((item) => (
              <article key={item.title} className="rounded-[24px] border border-border bg-white p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary"><item.icon className="size-5" /></span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{item.subtitle}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {item.lines.map((line) => <li key={line} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" />{line}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 rounded-[28px] border border-border bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground"><BookCheck className="size-5" /></span><div><h3 className="font-heading text-xl font-semibold">试听课核对表</h3><p className="text-sm text-muted-foreground">勾选机构能真实证明的项目</p></div></div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {classCriteria.map((item, index) => (
                  <label key={item} className={`flex cursor-pointer gap-3 rounded-xl border p-4 text-sm leading-6 transition ${criteria.includes(index) ? 'border-primary/45 bg-primary/6' : 'border-border'}`}>
                    <Checkbox checked={criteria.includes(index)} onCheckedChange={() => toggleItem(index, setCriteria)} className="mt-1" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl bg-secondary p-6 lg:sticky lg:top-6 lg:self-start">
              <p className="text-xs font-bold tracking-[.15em] text-primary">试听判断</p>
              <p className="mt-4 font-heading text-3xl font-semibold">{classVerdict[0]}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{classVerdict[1]}</p>
              <div className="mt-6 rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between"><span className="text-sm font-semibold">已核实</span><b className="text-2xl text-primary">{criteria.length}/8</b></div>
                <Progress value={(criteria.length / classCriteria.length) * 100} className="mt-4 [&_[data-slot=progress-track]]:h-2" />
              </div>
              <div className="mt-5 space-y-3 text-sm leading-6">
                <p className="flex gap-2"><CircleAlert className="mt-1 size-4 shrink-0 text-amber-600" />拒绝“低龄一年KET、两年PET”一类统一速成承诺。</p>
                <p className="flex gap-2"><CircleAlert className="mt-1 size-4 shrink-0 text-amber-600" />不要同时报多个综合体系班，家庭执行会失去主线。</p>
              </div>
            </aside>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['预算有限', '一位可靠主课老师 + 家庭阅读和听力。把钱优先花在教师反馈，不必单独长期报外教课。'],
              ['中等预算', '小班综合课为主，每月增加1次一对一口语/写作诊断，及时修正问题。'],
              ['预算充足', '主课小班 + 阅读写作反馈课。增加真实项目和营地可以，但仍只保留一条教材主线。'],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-border bg-background p-5"><p className="font-semibold">{title}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:px-10">
          <div className="max-w-lg">
            <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><BookOpen className="size-4" /></span><b>英语成长地图</b></div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">默认按一年级零基础、非国际学校环境设计。任何年级都应先测当前能力，再选择对应课程，不按年龄跳级。</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[.14em] text-muted-foreground">权威参考</p>
            <div className="mt-3 flex max-w-xl flex-wrap gap-x-5 gap-y-2">
              {officialSources.map(([name, link]) => <a key={name} href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">{name}<ExternalLink className="size-3" /></a>)}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
