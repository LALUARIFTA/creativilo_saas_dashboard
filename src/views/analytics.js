// Analytics view: conversion funnel, channels, regions, landing pages.

import { funnelHeader, funnel, channels, regions, pages } from '../data/analytics.js';

export function renderAnalyticsView() {
  return `
  <section class="menu-view" id="view-analytics">
    <!-- Conversion Funnel Banner -->
    <div class="hero-green-banner mb-5 stagger-card">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div>
          <h3 class="text-white font-extrabold text-[15px]">${funnelHeader.title}</h3>
          <p class="text-white/80 text-[11px]">${funnelHeader.subtitle}</p>
        </div>
        <span class="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold">${funnelHeader.badge}</span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        ${funnel.map(f => `
        <div class="kpi-subcard">
          <p class="text-[10.5px] text-white/80">${f.step}</p>
          <h4 class="text-[18px] font-extrabold mt-0.5">${f.value}</h4>
          <span class="text-[10px] text-white/90">${f.note}</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- Traffic Channels & Device Breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 stagger-card">
      <div class="dash-card p-5">
        <h3 class="text-[15px] font-bold text-[#2b332b] mb-4">Traffic Acquisition Channels</h3>
        <div class="space-y-3.5">
          ${channels.map(c => `
          <div>
            <div class="flex justify-between text-[12px] font-bold mb-1">
              <span>${c.label}</span>
              <span class="${c.accent}">${c.pct}% (${c.count})</span>
            </div>
            <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full ${c.bar} rounded-full" style="width: ${c.pct}%"></div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <div class="dash-card p-5 flex flex-col justify-between">
        <h3 class="text-[15px] font-bold text-[#2b332b] mb-3">Top Customer Regions</h3>
        <div class="space-y-2.5 text-[12px]">
          ${regions.map(r => `
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#f8faf7]">
            <span class="font-bold">${r.flag} ${r.name}</span>
            <span class="font-extrabold ${r.accent}">${r.value}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Top Landing Pages Table -->
    <div class="dash-card p-5 stagger-card">
      <h3 class="text-[15px] font-bold text-[#2b332b] mb-3">High-Performing Storefront Pages</h3>
      <div class="divide-y divide-gray-100 text-[12px]">
        <div class="grid grid-cols-12 py-2.5 font-semibold text-gray-400">
          <div class="col-span-5">Page Path</div>
          <div class="col-span-3">Unique Visitors</div>
          <div class="col-span-2">Avg. Time</div>
          <div class="col-span-2 text-right">Conv. Rate</div>
        </div>
        ${pages.map(p => `
        <div class="grid grid-cols-12 py-3 items-center">
          <div class="col-span-5 font-bold text-[#2b332b]">${p.path}</div>
          <div class="col-span-3 text-gray-500">${p.visitors}</div>
          <div class="col-span-2 text-gray-500">${p.time}</div>
          <div class="col-span-2 text-right font-bold ${p.accent}">${p.conv}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}
