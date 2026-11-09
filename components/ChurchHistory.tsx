'use client';

import React, { useState } from 'react';
import historyDataEnRaw from '@/church-history-v4.json';
import historyDataZhRaw from '@/church-history-v4.zh.json';
import { useLocale } from './LocaleProvider';

// Type definitions matching church-history-v4.json and church-history-v4.zh.json
export interface HeroGlanceItem {
  year: string;
  title: string;
  desc: string;
}

export interface StatCalloutItem {
  value: string;
  label: string;
  subtext: string;
}

export interface KeyFigure {
  name: string;
  role: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface EraItem {
  id: string;
  period: string;
  title: string;
  summary: string;
  details: string;
  keyFigures: KeyFigure[];
  milestones: Milestone[];
}

export interface ChurchHistoryData {
  meta: {
    title: string;
    chineseTitle: string;
    subtitle: string;
    location: string;
  };
  heroAtAGlance: HeroGlanceItem[];
  statCallouts: StatCalloutItem[];
  eras: EraItem[];
}

const historyDataEn = historyDataEnRaw as ChurchHistoryData;
const historyDataZh = historyDataZhRaw as ChurchHistoryData;

interface ChurchHistoryProps {
  className?: string;
  showHeroHeader?: boolean;
}

export default function ChurchHistory({
  className = '',
  showHeroHeader = true,
}: ChurchHistoryProps) {
  // Gracefully read locale if inside LocaleProvider
  let currentLocale = 'en';
  try {
    const localeCtx = useLocale();
    if (localeCtx?.locale) {
      currentLocale = localeCtx.locale;
    }
  } catch {
    currentLocale = 'en';
  }
  const isZh = currentLocale === 'zh';
  const historyData = isZh ? historyDataZh : historyDataEn;

  // View mode: 'glance' (summaries only by default) vs 'narrative' (all expanded)
  const [viewMode, setViewMode] = useState<'glance' | 'narrative'>('glance');

  // Track which eras are expanded
  const [expandedEras, setExpandedEras] = useState<Record<string, boolean>>({
    'era-1': false,
    'era-2': false,
    'era-3': false,
    'era-4': false,
    'era-5': false,
  });

  // Filter by era ('all' or specific era id)
  const [activeEraFilter, setActiveEraFilter] = useState<string>('all');

  // Toggle individual era
  const toggleEra = (id: string) => {
    setExpandedEras((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Switch view mode
  const handleModeChange = (mode: 'glance' | 'narrative') => {
    setViewMode(mode);
    if (mode === 'narrative') {
      // Expand all eras in narrative mode
      const allOpen = historyData.eras.reduce<Record<string, boolean>>(
        (acc, era) => {
          acc[era.id] = true;
          return acc;
        },
        {}
      );
      setExpandedEras(allOpen);
    } else {
      // Collapse all eras in glance mode
      const allClosed = historyData.eras.reduce<Record<string, boolean>>(
        (acc, era) => {
          acc[era.id] = false;
          return acc;
        },
        {}
      );
      setExpandedEras(allClosed);
    }
  };

  const expandAll = () => {
    const allOpen = historyData.eras.reduce<Record<string, boolean>>(
      (acc, era) => {
        acc[era.id] = true;
        return acc;
      },
      {}
    );
    setExpandedEras(allOpen);
  };

  const collapseAll = () => {
    const allClosed = historyData.eras.reduce<Record<string, boolean>>(
      (acc, era) => {
        acc[era.id] = false;
        return acc;
      },
      {}
    );
    setExpandedEras(allClosed);
  };

  // Quick jump & expand from hero cards
  const jumpToEra = (eraId: string) => {
    setActiveEraFilter('all');
    setExpandedEras((prev) => ({
      ...prev,
      [eraId]: true,
    }));
    const el = document.getElementById(eraId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Map hero card to era ID
  const heroEraMap: Record<number, string> = {
    0: 'era-1', // 1903 -> era-1 (1902-1950)
    1: 'era-2', // 1951 -> era-2 (1951-1954)
    2: 'era-4', // 1975 -> era-4 (1975-1983)
    3: 'era-5', // Today -> era-5 (1984-Present)
  };

  const filteredEras =
    activeEraFilter === 'all'
      ? historyData.eras
      : historyData.eras.filter((era) => era.id === activeEraFilter);

  return (
    <div className={`w-full ${className}`}>
      {/* Optional Top Hero Banner */}
      {showHeroHeader && (
        <section className="bg-primary-600 text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            {/* Top pill tag: Warm Orange 400 for announcement/accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-400 text-white font-semibold text-xs md:text-sm tracking-wide mb-6 uppercase shadow-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{isZh ? '1902 至今 · 逾 120 载历史' : '1902 – Present · 120+ Years'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              {isZh ? historyData.meta.chineseTitle : historyData.meta.title}
            </h1>

            {isZh && (
              <p className="text-xl md:text-2xl font-semibold text-teal-300 mb-4">
                {historyData.meta.title}
              </p>
            )}

            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-6" />

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              {historyData.meta.subtitle}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-white/60">
              <svg
                className="w-4 h-4 text-teal-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{historyData.meta.location}</span>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        {/* ============================================================== */}
        {/* 1. HERO SUMMARY: "History at a Glance" (4-Card Horizontal Grid) */}
        {/* ============================================================== */}
        <section aria-labelledby="history-at-a-glance-heading" className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-900 text-xs font-bold uppercase tracking-wider mb-2">
                {isZh ? '百年瞬间' : 'Timeline Overview'}
              </div>
              <h2
                id="history-at-a-glance-heading"
                className="text-3xl md:text-4xl font-bold text-primary-950 tracking-tight"
              >
                {isZh ? '历史概览' : 'History at a Glance'}
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              {isZh
                ? '四座具有里程碑意义的基石，见证伯大尼从柴山茅草屋到多元语言数码事工的信心足迹。'
                : 'Four transformative milestones tracing our path from a humble thatched hut to a multi-lingual beacon.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyData.heroAtAGlance.map((item, idx) => {
              const targetEraId = heroEraMap[idx];
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-primary-100/80 hover:border-primary-300 hover:shadow-md hover-lift transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Decorative top border accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 ${
                      idx === 0
                        ? 'bg-teal-500'
                        : idx === 1
                        ? 'bg-orange-400'
                        : idx === 2
                        ? 'bg-primary-600'
                        : 'bg-teal-400'
                    }`}
                  />

                  <div>
                    {/* Header: Year Badge and Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-900 font-mono text-sm font-bold border border-primary-100">
                        {item.year}
                      </span>

                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                          idx === 0
                            ? 'bg-teal-50 text-teal-700'
                            : idx === 1
                            ? 'bg-orange-50 text-orange-600'
                            : idx === 2
                            ? 'bg-primary-100 text-primary-800'
                            : 'bg-teal-100 text-teal-800'
                        }`}
                        aria-hidden="true"
                      >
                        {idx === 0 && (
                          /* 1903 Humble Beginnings / Seedling */
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                        {idx === 1 && (
                          /* 1951 Displacement & Faith / Relocation Compass */
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                            />
                          </svg>
                        )}
                        {idx === 2 && (
                          /* 1975 Permanent Home / Church Cornerstone */
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        )}
                        {idx === 3 && (
                          /* Today Multi-Lingual & Digital / Broadcast */
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-3-9c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary-950 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Interactive trigger to jump down to era */}
                  <button
                    type="button"
                    onClick={() => jumpToEra(targetEraId)}
                    className="inline-flex items-center text-xs font-semibold text-teal-700 hover:text-teal-900 pt-2 border-t border-gray-100 group-hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
                    aria-label={isZh ? `查看「${item.title}」详细篇章` : `Jump to ${item.title} details`}
                  >
                    <span>{isZh ? '查看详细篇章' : 'Read Chapter'}</span>
                    <svg
                      className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. STAT HIGHLIGHTS BAR (4-Column Callout Widget)               */}
        {/* ============================================================== */}
        <section
          aria-labelledby="stat-highlights-heading"
          className="mb-16 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-primary-100/90 relative overflow-hidden"
        >
          {/* Subtle decorative background watermarks */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-40 -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-50 rounded-full blur-2xl opacity-40 -ml-16 -mb-16 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                {isZh ? '历史印记' : 'Key Metrics'}
              </span>
              <h2
                id="stat-highlights-heading"
                className="text-2xl sm:text-3xl font-bold text-primary-950 mt-2"
              >
                {isZh ? '数说百年恩典' : 'Faith by the Numbers'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-primary-100">
              {historyData.statCallouts.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center px-4 ${
                    idx > 0 ? 'pt-6 sm:pt-0' : ''
                  }`}
                >
                  {/* Metric Value */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-900 tracking-tight font-sans">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-base sm:text-lg font-bold text-teal-700 mt-2 mb-1">
                    {stat.label}
                  </div>

                  {/* Subtext */}
                  <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-normal">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. INTERACTIVE ERA TIMELINE (Accordion with View Controls)      */}
        {/* ============================================================== */}
        <section aria-labelledby="interactive-timeline-heading" className="relative">
          {/* Section Header with Mode Toggle & Era Jump Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-200">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider mb-2">
                {isZh ? '历程纪实' : 'Five Chapters of Growth'}
              </span>
              <h2
                id="interactive-timeline-heading"
                className="text-3xl sm:text-4xl font-bold text-primary-950 tracking-tight"
              >
                {isZh ? '百年纪实与历史长河' : 'The Five Historic Eras'}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
                {isZh
                  ? '点击每个时代篇章展开详细叙述、先贤生平与重大历史节点。'
                  : 'Explore each era through detailed chronicles, founding pioneers, and landmark milestones.'}
              </p>
            </div>

            {/* View Mode Switcher ("At a Glance" vs "Full Narrative") */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div
                className="inline-flex p-1 rounded-xl bg-primary-100/70 border border-primary-200"
                role="radiogroup"
                aria-label="View mode toggle"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={viewMode === 'glance'}
                  onClick={() => handleModeChange('glance')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    viewMode === 'glance'
                      ? 'bg-white text-primary-950 shadow-sm'
                      : 'text-primary-800 hover:text-primary-950'
                  }`}
                >
                  <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{isZh ? '概览模式' : 'At a Glance'}</span>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={viewMode === 'narrative'}
                  onClick={() => handleModeChange('narrative')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    viewMode === 'narrative'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-primary-800 hover:text-primary-950'
                  }`}
                >
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>{isZh ? '全文模式' : 'Full Narrative'}</span>
                </button>
              </div>

              {/* Expand / Collapse All Quick Actions */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={expandAll}
                  className="px-2.5 py-1 text-xs text-primary-700 hover:text-primary-900 font-medium hover:bg-primary-50 rounded transition-colors"
                >
                  {isZh ? '展开全部' : 'Expand All'}
                </button>
                <span className="text-gray-300">|</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-2.5 py-1 text-xs text-primary-700 hover:text-primary-900 font-medium hover:bg-primary-50 rounded transition-colors"
                >
                  {isZh ? '折叠全部' : 'Collapse All'}
                </button>
              </div>
            </div>
          </div>

          {/* Era Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
            <span className="text-gray-500 font-medium shrink-0">
              {isZh ? '筛选篇章:' : 'Filter Era:'}
            </span>
            <button
              type="button"
              onClick={() => setActiveEraFilter('all')}
              className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 ${
                activeEraFilter === 'all'
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
              }`}
            >
              {isZh ? '全部 (5个时期)' : 'All Eras (5)'}
            </button>
            {historyData.eras.map((era) => (
              <button
                key={era.id}
                type="button"
                onClick={() => setActiveEraFilter(era.id)}
                className={`px-3 py-1.5 rounded-full font-mono transition-all shrink-0 ${
                  activeEraFilter === era.id
                    ? 'bg-primary-600 text-white font-bold'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
                }`}
              >
                {era.period}
              </button>
            ))}
          </div>

          {/* ========================================================== */}
          {/* The Vertical Timeline with Accordion Cards                 */}
          {/* ========================================================== */}
          <div className="relative pl-4 sm:pl-8 md:pl-10 space-y-6">
            {/* Continuous Vertical Timeline Line */}
            <div
              className="absolute left-4 sm:left-8 md:left-10 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary-400 via-teal-400 to-orange-400 -translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />

            {filteredEras.map((era, index) => {
              const isExpanded = !!expandedEras[era.id];
              const contentId = `era-content-${era.id}`;
              const buttonId = `era-btn-${era.id}`;

              return (
                <div
                  key={era.id}
                  id={era.id}
                  className="relative group transition-all duration-300"
                >
                  {/* Timeline Node Marker on the vertical line */}
                  <div
                    className={`absolute -left-4 sm:-left-8 md:-left-10 -translate-x-1/2 top-7 w-5 h-5 rounded-full border-4 border-white shadow transition-all duration-300 z-10 ${
                      isExpanded
                        ? 'bg-teal-500 scale-125 ring-4 ring-teal-100'
                        : 'bg-primary-600 group-hover:scale-110'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Accordion Card Container */}
                  <div
                    className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                      isExpanded
                        ? 'border-primary-400 shadow-lg ring-1 ring-primary-100'
                        : 'border-gray-200/90 hover:border-primary-300 hover:shadow-md'
                    }`}
                  >
                    {/* -------------------------------------------------- */}
                    {/* Unexpanded Header / Interactive Accordion Trigger   */}
                    {/* -------------------------------------------------- */}
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isExpanded}
                      aria-controls={contentId}
                      onClick={() => toggleEra(era.id)}
                      className="w-full text-left p-5 sm:p-6 md:p-7 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                    >
                      <div className="flex-1">
                        {/* Period Badge & Era Index */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                          <span className="inline-flex items-center px-3 py-1 rounded-md bg-primary-600 text-white font-mono text-xs sm:text-sm font-bold shadow-xs">
                            {era.period}
                          </span>
                          <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
                            {isZh ? `第 0${index + 1} 篇章` : `Chapter 0${index + 1}`}
                          </span>
                        </div>

                        {/* Era Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-950 group-hover:text-primary-700 transition-colors tracking-tight">
                          {era.title}
                        </h3>

                        {/* Summary (Always visible in unexpanded state) */}
                        <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                          {era.summary}
                        </p>
                      </div>

                      {/* Right Expand/Collapse Indicator Icon */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-1 ${
                          isExpanded
                            ? 'bg-teal-50 text-teal-700 rotate-180'
                            : 'bg-primary-50 text-primary-700 group-hover:bg-primary-100'
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          className="w-5 h-5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* -------------------------------------------------- */}
                    {/* Expanded Content: Details, Key Figures & Milestones */}
                    {/* -------------------------------------------------- */}
                    {isExpanded && (
                      <div
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-5 sm:px-6 md:px-7 pb-7 pt-2 border-t border-gray-100 animate-fadeIn"
                      >
                        {/* 1. Full Details Narrative Box */}
                        <div className="bg-primary-50/70 rounded-2xl p-5 md:p-6 border-l-4 border-primary-600 mb-8 mt-2">
                          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-primary-900">
                            <svg
                              className="w-4 h-4 text-primary-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{isZh ? '历史纪实' : 'Historical Narrative'}</span>
                          </div>
                          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                            {era.details}
                          </p>
                        </div>

                        {/* 2. Key Figures Section (Avatar Cards) */}
                        {era.keyFigures && era.keyFigures.length > 0 && (
                          <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-900 flex items-center justify-center shrink-0">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-base sm:text-lg font-bold text-primary-950">
                                {isZh ? '关键先贤人物' : 'Key Historical Figures'}
                              </h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                              {era.keyFigures.map((person, pIdx) => {
                                // Extract initials for the avatar badge
                                const initials = person.name
                                  .replace(/\(.*?\)/g, '')
                                  .trim()
                                  .split(' ')
                                  .filter(Boolean)
                                  .map((n) => n[0])
                                  .slice(0, 2)
                                  .join('');

                                return (
                                  <div
                                    key={pIdx}
                                    className="bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-xs hover:border-primary-300 transition-colors flex items-start space-x-3"
                                  >
                                    {/* Initials Avatar */}
                                    <div
                                      className="w-10 h-10 rounded-full bg-primary-gradient text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs uppercase tracking-wider"
                                      aria-hidden="true"
                                    >
                                      {initials || 'BP'}
                                    </div>

                                    {/* Name & Role */}
                                    <div className="min-w-0 flex-1">
                                      <p className="text-sm font-bold text-primary-950 truncate">
                                        {person.name}
                                      </p>
                                      <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                                        {person.role}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* 3. Bulleted List of Milestones */}
                        {era.milestones && era.milestones.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-base sm:text-lg font-bold text-primary-950">
                                {isZh ? '时代里程碑' : 'Era Milestones'}
                              </h4>
                            </div>

                            <div className="relative pl-3 space-y-3.5">
                              {/* Left connecting indicator */}
                              <div
                                className="absolute left-1 top-2 bottom-2 w-0.5 bg-teal-200"
                                aria-hidden="true"
                              />

                              {era.milestones.map((m, mIdx) => (
                                <div
                                  key={mIdx}
                                  className="relative flex items-start space-x-3 text-sm sm:text-base group"
                                >
                                  {/* Milestone node dot */}
                                  <div
                                    className="w-2.5 h-2.5 rounded-full bg-teal-500 border-2 border-white shadow-xs mt-1.5 -ml-1.5 shrink-0 z-10"
                                    aria-hidden="true"
                                  />

                                  {/* Year Pill Tag */}
                                  <span className="shrink-0 font-mono text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/80">
                                    {m.year}
                                  </span>

                                  {/* Milestone Event Description */}
                                  <p className="text-gray-700 leading-relaxed flex-1 text-sm sm:text-base">
                                    {m.event}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer / Call to Action note */}
        <div className="mt-16 text-center bg-primary-50 rounded-3xl p-8 md:p-12 border border-primary-100">
          <h3 className="text-2xl font-bold text-primary-900 mb-2">
            {isZh ? '百年同行，恩典相伴' : 'Continuing the Journey of Faith'}
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base mb-6">
            {isZh
              ? '欢迎加入我们每周的主日敬拜与团契生活，与我们一同书写下一个百年的生命故事。'
              : 'Join us for Sunday worship across our Hokkien, Mandarin, English, and Youth services as we build the next chapter together.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA: Aqua Teal button with dark ink text */}
            <a
              href="/services"
              className="btn-teal-primary px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            >
              {isZh ? '查看主日崇拜时间' : 'View Service Times'}
            </a>
            {/* Ghost style secondary button */}
            <a
              href="/visit"
              className="px-6 py-3 rounded-full text-sm font-semibold text-primary-800 border border-primary-300 hover:bg-white transition-colors"
            >
              {isZh ? '计划访问伯大尼' : 'Plan Your Visit'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
