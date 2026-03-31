# China Province Quiz - Development Document

## 1. Introduction
Interactive geography game built with vanilla JavaScript, HTML5, CSS3. Players click provinces on an SVG map, answer quiz questions, collect cards, and track real-time performance stats. Pure client-side with localStorage persistence.

---

## 2. New Functions & Features (Core Features)

✅ **Province Click & Modal** - Click any province → opens modal with pop animation + geographic description

✅ **Quiz System** - Multiple choice questions with instant feedback animations (shake for wrong, sweep for correct)

✅ **Real-time Dashboard** - Live stats: correct rate %, total answered, wrong count, top 5 difficulty provinces (pie & bar charts)

✅ **Collection System** - Right-click provinces to collect cards, toggle panel view with 2-column grid, localStorage persistence

✅ **Progress Bar** - Exploration tracker showing % of 34 provinces visited

**Additional**: Sequential cascade animations (title → image → description → question → options at 60ms intervals), localStorage auto-save

---

## 3. Key Code Snippets

### 3.1 Animation Implementation

#### Modal Pop Animation (CSS)
Creates an elastic bounce effect when modal opens:
```css
@keyframes modalPop {
  from { opacity: 0; transform: scale(0.9) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal.modal-visible {
  animation: modalPop 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
```
**How it works**: Element scales from 90% to 100% while fading in over 0.4s. The cubic-bezier easing creates an elastic bounce effect at the end.

#### Sequential Cascade Animation (JavaScript)
Reveals modal content in waterfall pattern at 60-80ms intervals:
```javascript
function sequentialReveal(steps) {
  steps.forEach((s) => {
    s.el.style.opacity = "0";
    s.el.style.transform = "translateY(16px)";
  });
  steps.forEach((s) => {
    setTimeout(() => {
      s.el.style.opacity = "1";
      s.el.style.transform = "translateY(0)";
    }, s.delayMs);
  });
}

// Usage: title (0ms) → image (80ms) → description (160ms) → question (280ms) → options (340ms)
sequentialReveal([
  { el: provinceNameEl, delayMs: 0 },
  { el: featuredImgEl.parentElement, delayMs: 80 },
  { el: provinceInfoTextEl, delayMs: 160 },
  { el: quizLabelEl, delayMs: 220 },
  { el: questionTextEl, delayMs: 280 },
  { el: optionsContainerEl, delayMs: 340 }
]);
```
**How it works**: Each element starts hidden (opacity 0, translateY 16px down), then animates in sequentially. Creates professional waterfall reveal effect.

#### Answer Feedback Animations (CSS)
Visual feedback for correct/incorrect answers:
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  75% { transform: translateX(6px); }
}

.option-btn.wrong {
  animation: shake 0.4s ease;
  background-color: #c0392b;
}

.option-btn.correct {
  background-color: #27ae60;
}
```
**How it works**: Correct answer turns green, wrong answer turns red and shakes left-right 6px ± for 0.4s.

### 3.2 Data Statistics Logic

#### Stats Structure
All statistics stored in localStorage with dual-level tracking:
```javascript
{
  totalAnswered: number,      // Total questions answered
  correct: number,             // Total correct answers
  wrong: number,               // Total wrong answers
  totalTimeMs: number,         // Total time spent (ms)
  explored: [],                // Array of visited province IDs
  provinceStats: {             // Per-province breakdown
    [provinceId]: {
      clicks: number,
      answered: number,
      correct: number,
      wrong: number,
      totalTimeMs: number
    }
  }
}
```

#### Recording Answers
```javascript
function recordAnswer(id, isCorrect, timeMs) {
  // Initialize province stats if not exist
  if (!stats.provinceStats[id]) {
    stats.provinceStats[id] = { 
      clicks: 0, answered: 0, correct: 0, wrong: 0, totalTimeMs: 0 
    };
  }
  
  // Update per-province stats
  const ps = stats.provinceStats[id];
  ps.answered = (ps.answered || 0) + 1;
  ps.totalTimeMs = (ps.totalTimeMs || 0) + timeMs;
  isCorrect ? ps.correct++ : ps.wrong++;

  // Update global stats
  stats.totalAnswered = (stats.totalAnswered || 0) + 1;
  stats.totalTimeMs = (stats.totalTimeMs || 0) + timeMs;
  isCorrect ? stats.correct++ : stats.wrong++;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  updateDashboard();
}
```
**How it works**: Both global and per-province statistics update together. Time measured from question appearance to answer submission.

#### Dashboard Charts
**Pie Chart** (correct vs wrong ratio):
```javascript
const correctPct = (correct / (correct + wrong)) * 100;
pie.style.background = `conic-gradient(#2ecc71 0 ${correctPct}%, #e74c3c ${correctPct}% 100%)`;
```

**Bar Chart** (top 3 most difficult provinces):
```javascript
const items = provinceIds
  .map((id) => ({ id, stat: getProvinceStat(id) }))
  .filter((x) => x.stat && x.stat.answered > 0)
  .map((x) => ({ id: x.id, wrongRate: x.stat.wrongRate }))
  .sort((a, b) => b.wrongRate - a.wrongRate)
  .slice(0, 3);
```

### 3.3 Traditional Chinese Adaptation

#### HTML Setup
```html
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  ...
</head>
```
**Purpose**: `lang="zh-Hant"` declares Traditional Chinese; UTF-8 encoding ensures character display.

#### Font Cascade Strategy
```css
body {
  font-family: "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", system-ui, sans-serif;
}
```
**Priority**:
1. **Noto Sans TC** - Google font, modern, comprehensive Unicode support
2. **Microsoft JhengHei** - Windows fallback for older systems
3. **PingFang TC** - macOS/iOS native font
4. **system-ui** - Generic system sans-serif

#### Collection Display (Safe Rendering)
```javascript
function updateCollection() {
  collected.forEach((id) => {
    const card = document.createElement("div");
    const imgSrc = getProvinceImageSrc(id);
    card.innerHTML = `
      <img src="${imgSrc}" alt="${provincesData[id].name}">
      <div>${provincesData[id].name}</div>
    `;
    collectionGridEl.appendChild(card);
  });
}
```
**Why this works**: Traditional Chinese names from hardcoded `provincesData` object are safe for innerHTML. Image alt text includes Chinese for accessibility.

#### Text Content Handling
```javascript
// CORRECT: Use textContent for text-only content
provinceNameEl.textContent = data.name;        // "新疆維吾爾自治區"
questionTextEl.textContent = q.question;       // Quiz question

// CORRECT: Use innerHTML for hardcoded data with HTML
card.innerHTML = `<img src="..."><div>${provincesData[id].name}</div>`;
```
**Why**: `textContent` preserves UTF-8 encoding for Pure text and prevents XSS. `innerHTML` used only with hardcoded provincial database.

#### All 34 Provinces in Traditional Chinese
- Complete Traditional Chinese names: 新疆維吾爾自治區, 西藏自治區, 北京市, 上海市, etc.
- 3-category descriptions for each: Geography (地理特徵) + Culture (文化特色) + Products (地方特產)
- Quiz questions about local instruments, landmarks, and specialties
- localStorage automatically handles UTF-8 for persistence

---

## 4. Chinese Support
- Encoding: `<meta charset="UTF-8">` + `lang="zh-Hant"`
- Font cascade: "Noto Sans TC" → "Microsoft JhengHei" → "PingFang TC"
- Use `textContent` (not innerHTML) for text insertion
- All 34 provinces in Traditional Chinese

---

## 5. Running the Project

**Startup**:
1. Extract: index.html, js/ folder (containing app.js and questions.js), css/ folder (containing style.css), images/ folder (containing china_map.jpeg and province/ subfolder)
2. Open index.html

---

## 6. Optimization Suggestions

**Multi-language Support**: Full i18n system supporting Simplified Chinese (zh-Hans), English, and Traditional Chinese (zh-Hant) using a clean translation object.

**Game Modes**:
1. Timed challenge mode (e.g. 5-minute sprint)
2. Endless mode
3. Regional focus mode (e.g. only Northern provinces)

**Achievements & Badges**: Unlockable achievements for milestones like "Collect all 34 provinces", "100% accuracy streak", or "Master of Southwest China".

**Audio Feedback**: Subtle sound effects for correct/incorrect answers, modal open, and collection actions (using Web Audio API for small footprint).
---

## 7. Video Demonstration
https://drive.google.com/file/d/1p_0QXC3aaz0pttpdrRrfRfITpoETMLGf/view?usp=sharing


