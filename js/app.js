const provincesData = {
  xinjiang: {
    name: "新疆維吾爾自治區",
    info: [
      "地理特徵：天山橫貫南北，準噶爾盆地與塔克拉瑪干沙漠相互交織，乾燥少雨，晝夜溫差大。",
      "文化特色：維吾爾族聚居，多元語言與音樂舞蹈豐富；冬不拉是當地代表性的傳統樂器，常出現在節慶與聚會中。",
      "地方特產：葡萄乾、哈密瓜、羊肉串、伊犁薰衣草與香甜果品。"
    ].join("\n")
  },
  tibet: {
    name: "西藏自治區",
    info: [
      "地理特徵：平均海拔超過4000公尺，被稱為「世界屋脊」；壯闊高山與湖泊景觀非常突出。",
      "文化特色：藏傳佛教影響深遠，寺院建築、轉經筒與宗教節慶形成獨特氛圍。",
      "地方特產：酥油茶、青稞酒、牦牛肉，以及乾淨少鹽的高原飲食風格。"
    ].join("\n")
  },
  qinghai: {
    name: "青海省",
    info: [
      "地理特徵：青海湖與三江源是重要水源地；青海湖是中國最大的內陸鹹水湖，也是著名景觀。",
      "文化特色：多民族交融，藏族文化與高原生活方式相互映照，牧歌與市集都很有特色。",
      "地方特產：青稞、牦牛奶製品、枸杞，以及高原綿羊與牧場風味。"
    ].join("\n")
  },
  gansu: {
    name: "甘肅省",
    info: [
      "地理特徵：黃河上游的重要段落流經其境，兼具山地、河谷與戈壁風貌；河西走廊因綠洲而繁盛。",
      "文化特色：絲綢之路的交通樞紐之一，敦煌壁畫等歷史遺存讓文化厚度很突出，尤以魏晉南北朝至唐代的藝術最為輝煌。",
      "地方特產：蘭州牛肉麵、羊肉與孜然風味、甘草與地方麵點。"
    ].join("\n")
  },
  sichuan: {
    name: "四川省",
    info: [
      "地理特徵：盆地與山地相間，河流縱橫，水熱條件多樣；既有川西高原氣質，也有成都平原的溫潤。",
      "文化特色：省會成都以悠閒生活和美食聞名，川劇變臉、麻辣飲食與地方方言交織成強烈辨識度。",
      "地方特產：火鍋、川菜麻辣口味、臘肉臘腸、四川泡菜與茶文化。"
    ].join("\n")
  },
  yunnan: {
    name: "雲南省",
    info: [
      "地理特徵：地形複雜，山脈多、河谷深，氣候多樣；大理、麗江一帶的古城與湖山景觀很迷人。",
      "文化特色：少數民族多元，白族是雲南特有且人口較多的民族之一，節慶、服飾與歌舞文化豐富。",
      "地方特產：過橋米線、鮮花餅、宣威火腿、以及雲南普洱茶與咖啡豆。"
    ].join("\n")
  },
  neimenggu: {
    name: "內蒙古自治區",
    info: [
      "地理特徵：草原廣闊，從東北到西部地貌多樣；呼倫貝爾、科爾沁等地草場特色鮮明。",
      "文化特色：蒙古族與多民族文化共融，牧民生活、馬文化與歌聲形成獨特風景；蒙古包是傳統的移動居所。",
      "地方特產：手把肉、奶茶與乳製品、烤羊排，以及草原上新鮮的牛羊肉風味。"
    ].join("\n")
  },
  heilongjiang: {
    name: "黑龍江省",
    info: [
      "地理特徵：黑龍江流域為核心，冬季漫長寒冷；松嫩平原的廣闊與河湖帶來豐富自然資源。",
      "文化特色：東北移民與多文化交融，冰雪運動與城市風格也很有代表性；邊境城市綏芬河是重要的對俄口岸。",
      "地方特產：鍋包肉、凍梨與秋冬農產、以及黑龍江常見的魚類與大米風味。"
    ].join("\n")
  },
  guangxi: {
    name: "廣西壯族自治區",
    info: [
      "地理特徵：喀斯特地貌突出，山峰奇秀、溶洞與峰林景觀迷人；河流與海岸線也形成多樣生態。",
      "文化特色：壯族文化保存完整，歌節、織繡與民俗活動非常有生命力；首府南寧是區域中心。",
      "地方特產：螺螄粉、桂林米粉風味、臍橙與柑橘類水果、以及酸辣開胃口感。"
    ].join("\n")
  },
  guizhou: {
    name: "貴州省",
    info: [
      "地理特徵：山多地少、喀斯特地貌普遍，雨霧較多，形成層疊的山谷景觀；河谷氣候溫和。",
      "文化特色：苗族、侗族等多民族聚居，服飾、木構建築與歌舞節慶吸引人；荔波是「中國南方喀斯特」世界自然遺產的核心區之一。",
      "地方特產：酸湯類料理、折耳根等地方風味、以及臘味與各式豆製品。"
    ].join("\n")
  },
  hainan: {
    name: "海南省",
    info: [
      "地理特徵：島嶼面積大，海洋性氣候明顯；熱帶雨林與海岸風光讓度假氛圍很濃。",
      "文化特色：多元移民歷史帶來飲食融合，椰香與海鮮風味常見，生活節奏也較舒展。海南是中國唯一的全省熱帶省份。",
      "地方特產：文昌雞、海南雞飯、椰子與熱帶水果、以及海鮮米粉與清甜湯品。"
    ].join("\n")
  },
  guangdong: {
    name: "廣東省",
    info: [
      "地理特徵：沿海地帶平原較多，珠江流域水網密集；氣候相對溫暖，海風與濕潤感明顯。",
      "文化特色：嶺南文化特色鮮明，粵菜體系成熟；省會廣州是歷史悠久的商貿中心。",
      "地方特產：燒臘、點心、潮汕牛肉丸、以及煲湯與濃郁海鮮做法。"
    ].join("\n")
  },
  hunan: {
    name: "湖南省",
    info: [
      "地理特徵：山地與丘陵較多，湘江等河流貫通；氣候帶來適合種植的農業基礎。",
      "文化特色：湖湘文化深厚，文學與民俗活動活躍；省內最大河流湘江是湖南簡稱「湘」的由來。",
      "地方特產：臭豆腐、湘菜（剁椒等）與各式辣味料理，以及米粉類地方小吃。"
    ].join("\n")
  },
  hubei: {
    name: "湖北省",
    info: [
      "地理特徵：長江與湖泊眾多，水網發達；武漢作為樞紐，歷史上商旅往來頻繁。",
      "文化特色：荊楚文化影響深遠，楚風建筑與民俗藝術常能看到歷史痕跡。武漢因長江與漢江交匯而被稱為「江城」。",
      "地方特產：熱乾麵、武昌魚、藕與湖產食材，以及特色小龍蝦風味。"
    ].join("\n")
  },
  heinan: {
    name: "河南省",
    info: [
      "地理特徵：位於中原地帶，地勢相對平緩；黃河流域帶來深厚的農業文明基礎。",
      "文化特色：中華文明的重要發源地之一，古都與歷史遺址密集，省會鄭州是現代交通樞紐。",
      "地方特產：胡辣湯、燴麵/麵食系、道口燒雞風味，以及傳統麵點與醬香料理。"
    ].join("\n")
  },
  shaanxi: {
    name: "陝西省",
    info: [
      "地理特徵：關中平原地勢相對開闊，南北山地環繞；黃土高原也讓景觀充滿層次。",
      "文化特色：秦文化與西安歷史名城底色深厚，西安曾是唐朝都城，秦腔、古都風貌都很有辨識度。",
      "地方特產：羊肉泡饃、涼皮、油潑麵，以及關中風味的麵食香氣。"
    ].join("\n")
  },
  taiwan: {
    name: "臺灣",
    info: [
      "地理特徵：山地占比高，東部地形陡峭；海岸線多樣，四季氣候與海風也影響生活。",
      "文化特色：族群多元帶來飲食與節慶融合；臺灣海峽對岸為福建省，兩地歷史淵源深厚。",
      "地方特產：臺灣鳳梨酥、珍珠奶茶、鹹酥雞與各式海鮮小點。"
    ].join("\n")
  },
  fujian: {
    name: "福建省",
    info: [
      "地理特徵：山海相連，海岸線曲折；多山地形讓交通與飲食形成獨特節奏。",
      "文化特色：閩南、閩東等地域文化差異明顯，建築、戲曲與語言特色豐富。福建簡稱「閩」，源於境內閩江。",
      "地方特產：肉粽、佛跳牆、魚丸與各類海味料理；武夷周邊茶香也很有名。"
    ].join("\n")
  },
  zhejiang: {
    name: "浙江省",
    info: [
      "地理特徵：沿海與丘陵並存，水系密集；杭州灣等海岸地貌形成濕潤環境。",
      "文化特色：江南文化細膩，園林與絲綢工藝聞名；杭州西湖是世界文化遺產，也是省會杭州的標誌。",
      "地方特產：西湖醋魚、龍井茶、叫花雞與鮮味十足的江南家常菜。"
    ].join("\n")
  },
  jiangxi: {
    name: "江西省",
    info: [
      "地理特徵：山地與丘陵較多，鄱陽湖及周邊水系重要；雨量較充足，綠意盎然。",
      "文化特色：歷史人物與宗族文化影響深，古村落與書院散落，形成濃厚人文氣息。鄱陽湖是中國第一大淡水湖。",
      "地方特產：贛南臍橙、瓦罐湯、炒粉/麵食與鄱湖附近的水產風味。"
    ].join("\n")
  },
  anhui: {
    name: "安徽省",
    info: [
      "地理特徵：皖南多山，黃山與周邊景觀讓山形與雲海特別出名；平原也有農業區。",
      "文化特色：徽派建築與商貿文化影響深遠，文房與民間藝術很有味道。黃山以奇松、怪石、雲海、溫泉「四絕」聞名。",
      "地方特產：毛豆腐、臭鱖魚、徽州燒餅與臘味料理。"
    ].join("\n")
  },
  shanghai: {
    name: "上海市",
    info: [
      "地理特徵：地處長江入海口附近，濱海河網密集；城市形態以水系與港口資源為特色。",
      "文化特色：海派文化成熟，融合中西風格；都市節奏快，但飲食也很講究。上海簡稱「滬」，源於古代漁具。",
      "地方特產：生煎包、小籠包、蟹粉相關料理，以及精緻點心與麵食。"
    ].join("\n")
  },
  jiangsu: {
    name: "江蘇省",
    info: [
      "地理特徵：平原為主，水網密布；運河與湖泊帶來豐富水資源與農漁條件。",
      "文化特色：江南文化綿長，蘇式園林、傳統手工與文人氣質突出。省會南京是六朝古都。",
      "地方特產：鹽水鴨、松鼠桂魚、揚州炒飯與各式江南麵點。"
    ].join("\n")
  },
  shandong: {
    name: "山東省",
    info: [
      "地理特徵：沿海地帶面向海洋，既有平原農業也有山區與丘陵；氣候相對溫和。",
      "文化特色：儒家文化源遠流長，孔孟之鄉的歷史精神影響深刻；山東因位於太行山以東而得名。",
      "地方特產：煎餅、蔥爆海鮮、煙台蘋果，以及魯菜偏濃厚的家常口感。"
    ].join("\n")
  },
  shanxi: {
    name: "山西省",
    info: [
      "地理特徵：多山地地形，晉中、晉南的自然風貌層次分明；黃河與支流也在此展開人文與交通。",
      "文化特色：晉商文化與民俗藝術在多地保留；古建與麵食文化同樣出彩。山西簡稱「晉」，源於春秋時期晉國。",
      "地方特產：刀削麵、山西老陳醋、羊肉湯與各式面食點心。"
    ].join("\n")
  },
  hebei: {
    name: "河北省",
    info: [
      "地理特徵：位於華北平原與山地交界，兼具農業與山區資源；京津周邊的交通樞紐地位明顯。",
      "文化特色：長城沿線歷史悠久，古建與民俗活動豐富；省會石家莊是近代發展起來的中心城市。",
      "地方特產：驢肉火燒、鹹驢肉與麵食小吃，以及地方特色醬菜與燒餅。"
    ].join("\n")
  },
  jilin: {
    name: "吉林省",
    info: [
      "地理特徵：森林與平原兼具，冬季寒冷漫長；松花江流域與湖泊為自然景觀增添色彩。",
      "文化特色：東北氣質明顯，冰雪活動與地方飲食偏實在；省會長春是著名的汽車城和電影城。",
      "地方特產：砂鍋魚頭、滿族風味菜、各式人參相關食品，以及冬季的特色麵食。"
    ].join("\n")
  },
  liaoning: {
    name: "遼寧省",
    info: [
      "地理特徵：瀕臨渤海與黃海，海岸線與港口資源明顯；內陸也有平原與河谷地貌。",
      "文化特色：遼沈歷史底蘊深厚，城市文化活躍；海鮮與東北菜的搭配很有辨識度。遼寧簡稱「遼」，源於遼河。",
      "地方特產：鍋包肉、叫花雞風味、海鮮與大米/玉米相關食材，口味偏豐富厚實。"
    ].join("\n")
  },
  ningxia: {
    name: "寧夏回族自治區",
    info: [
      "地理特徵：黃河穿行並形成灌溉綠洲，使其在乾旱環境中更顯珍貴；賀蘭山以北風貌明顯。",
      "文化特色：回族文化元素與西北生活方式融合；濃厚的宗教飲食與手作風格令人印象深刻。首府銀川是歷史悠久的塞上古城。",
      "地方特產：枸杞、手抓羊肉、羊肉麵以及西北香料風味的乾拌菜。"
    ].join("\n")
  },
  beijing: {
    name: "北京市",
    info: [
      "地理特徵：位於華北平原北部，四季分明；城市周邊有山地與平原組合的自然輪廓。",
      "文化特色：帝都歷史深厚，皇家建築群、宮廷文化與老城街巷共同構成城市記憶。北京別稱「燕京」始於遼金時期。",
      "地方特產：北京烤鴨、炸醬麵、豆汁與各式京味小吃（如豌豆黃等）。"
    ].join("\n")
  },
  tianjin: {
    name: "天津市",
    info: [
      "地理特徵：靠海與河流交織，水運發達；城市風貌受海港與移民文化影響較大。",
      "文化特色：津味生活節奏鮮明，街區與老建築充滿年代感；海河是天津的母親河，城市依海河而建。",
      "地方特產：狗不理包子風味、煎餅果子、海鮮小吃與津味鹹香口感。"
    ].join("\n")
  }
};

document.addEventListener("DOMContentLoaded", () => {
    //Get all necessary DOM elements and define constants
    const STORAGE_KEY = "quizStats";
    const QUESTIONS = window.provinceQuestions || {};
    const mapContainer = document.getElementById("map-container");
    const svg = document.getElementById("map-svg");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");
    const dashboardToggleBtn = document.getElementById("dashboard-toggle-btn");
    const dashboardCloseBtn = document.getElementById("dashboard-close-btn");
    const dashboardResetBtn = document.getElementById("dashboard-reset-btn");
    const dashboardEl = document.getElementById("dashboard");
    const collectionToggleBtn = document.getElementById("collection-toggle-btn");
    const collectionCloseBtn = document.getElementById("collection-close-btn");
    const collectionEl = document.getElementById("collection");
    const collectionGridEl = document.getElementById("collection-grid");
    const progressFill = document.getElementById("progress-fill");
    const progressText = document.getElementById("progress-text");
    const provinceNameEl = document.getElementById("province-name");
    const provinceInfoTextEl = document.getElementById("province-info-text");
    const questionTextEl = document.getElementById("question-text");
    const optionsContainerEl = document.getElementById("options-container");
    const feedbackEl = document.getElementById("feedback");
    const featuredImgEl = document.getElementById("province-bg-img");
    const hoverLabel = document.getElementById("hover-label");
    const quizLabelEl = document.querySelector(".quiz-label");
    
    // Prevent runtime errors if HTML structure changes
    if (!svg || !modal || !provinceNameEl || !provinceInfoTextEl || !questionTextEl || !optionsContainerEl) {
      return;
    }

    const provinceEls = Array.from(svg.querySelectorAll(".province"));
    const provinceIds = provinceEls.map((p) => p.id);
    const totalProvinces = provinceIds.length;

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // If there is no data, set to default
      if (!raw) {
        return {
          totalAnswered: 0,
          correct: 0,
          wrong: 0,
          totalTimeMs: 0,
          explored: [],
          provinceStats: {}
        };
      }
      const parsedJSON = JSON.parse(raw);
      // Prevent incomplete data from breaking the app by ensuring all keys exist
      return Object.assign(
        {
          totalAnswered: 0,
          correct: 0,
          wrong: 0,
          totalTimeMs: 0,
          explored: [],
          provinceStats: {}
        }, parsedJSON);
    } catch (e) {
        return {
            totalAnswered: 0,
            correct: 0,
            wrong: 0,
            totalTimeMs: 0,
            explored: [],
            provinceStats: {}
        };
    }
  }

  function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  function getProvinceImageSrc(id) {
    return `images/province/${id}.jpg`;
  }

  // Start of the main app
  let stats = loadStats();
  let clickedProvinceId = null;
  let selectedOptionIndex = null;
  let answered = false;
  let questionStartTime = 0;
  let feedbackTimeout = null;
  let sequentialTimeouts = [];

  function isModalVisible() {
    return modal.classList.contains("modal-visible");
  }

  // Hide feedback message (correct/wrong)
  function hideFeedback() {
    clearTimeout(feedbackTimeout);
    feedbackTimeout = null;
    if (!feedbackEl) return;
    feedbackEl.classList.add("hidden");
    feedbackEl.classList.remove("correct-feedback", "wrong-feedback");
  }
  // Hide feedback message (correct/wrong)
  function showFeedback(isCorrect, correctOptionText) {
    if (!feedbackEl) return;
    hideFeedback();
    feedbackEl.classList.remove("hidden");
    feedbackEl.classList.add(isCorrect ? "correct-feedback" : "wrong-feedback");
    feedbackEl.textContent = isCorrect ? "回答正確！" : `回答錯誤！正確答案是：${correctOptionText}`;
    // Auto fade-out after 3s
    feedbackTimeout = setTimeout(() => {
      feedbackEl.classList.add("hidden");
      feedbackEl.classList.remove("correct-feedback", "wrong-feedback");
    }, 3000);
  }

  function openModal() {
    modal.classList.add("modal-visible");
    hideHover();
  }

  function closeModal() {
    modal.classList.remove("modal-visible");
    hideHover();
    clickedProvinceId = null;
    selectedOptionIndex = null;
    answered = false;
    questionStartTime = 0;
    sequentialTimeouts.forEach((t) => clearTimeout(t));
    sequentialTimeouts = [];
    hideFeedback();
    optionsContainerEl.innerHTML = "";
    // Refresh collection display if it's open
    if (collectionEl && !collectionEl.classList.contains("hidden")) {
      updateCollection();
    }
    optionsContainerEl.style.display = "none";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (!isModalVisible()) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    }
  });

  // --------------------------
  // Dashboard / progress
  // --------------------------
  function getExploredSet() {
    return new Set(stats.explored);
  }

  function updateExploredStyles() {
    const explored = getExploredSet();
    provinceEls.forEach((poly) => {
      if (explored.has(poly.id)) poly.classList.add("explored");
      else poly.classList.remove("explored");
    });
  }

  function updateProgressUI() {
    const explored = getExploredSet();
    const exploredCount = explored.size;
    const pct = totalProvinces ? Math.round((exploredCount / totalProvinces) * 100) : 0;
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `已探索 ${exploredCount} / ${totalProvinces}`;
    updateExploredStyles();
  }

  /*
  stats (All Provinces) = {
  totalAnswered: 0,
    correct: 0,
    wrong: 0,
    totalTimeMs: 0,
    explored: [],
    provinceStats: {}
  }
  provinceStats (Each Provinces) = {
    answered: 0, 
    wrong: 0, 
    correct: 0, 
    correctRate: 0, 
    wrongRate: 0, 
    avgTimeMs: 0, 
    clicks: 0
  }
  */ 

  function getProvinceStat(id) {
    const ps = stats.provinceStats[id];
    if (!ps) return null;
    // Prevent NaN or undefined values
    const answered = ps.answered || 0;
    const wrong = ps.wrong || 0;
    const correct = ps.correct || 0;
    const correctRate = answered ? correct / answered : 0;
    const wrongRate = answered ? wrong / answered : 0;
    const avgTimeMs = answered ? (ps.totalTimeMs || 0) / answered : 0;
    return { answered, wrong, correct, correctRate, wrongRate, avgTimeMs, clicks: ps.clicks || 0 };
  }

  function updateDashboard() {
    const totalAnsweredEl = document.getElementById("stat-total-answered");
    const correctRateEl = document.getElementById("stat-correct-rate");
    const avgTimeEl = document.getElementById("stat-avg-time");
    const exploredCountEl = document.getElementById("stat-explored-count");

    const explored = getExploredSet();
    const exploredCount = explored.size;
    // Prevent NaN or undefined values
    const totalAnswered = stats.totalAnswered || 0;
    const correct = stats.correct || 0;
    const wrong = stats.wrong || 0;
    const totalTimeMs = stats.totalTimeMs || 0;

    //Top 4 summary stats
    if (totalAnsweredEl) totalAnsweredEl.textContent = String(totalAnswered);
    const correctRatePct = totalAnswered ? Math.round((correct / totalAnswered) * 100) : 0;
    if (correctRateEl) correctRateEl.textContent = `${correctRatePct}%`;
    const avgTimeSec = totalAnswered ? (totalTimeMs / totalAnswered) / 1000 : 0;
    if (avgTimeEl) avgTimeEl.textContent = `${avgTimeSec.toFixed(1)} 秒`;
    if (exploredCountEl) exploredCountEl.textContent = String(exploredCount);

    // Pie chart (correct & wrong percentage)
    const pie = document.getElementById("pie-chart");
    if (pie) {
      const denom = correct + wrong;
      const correctPct = denom ? (correct / denom) * 100 : 0;
      pie.style.background = `conic-gradient(#2ecc71 0 ${correctPct}%, #e74c3c ${correctPct}% 100%)`;
      // inner label
      let inner = pie.querySelector("span");
      if (!inner) {
        inner = document.createElement("span");
        pie.appendChild(inner);
      }
      inner.textContent = denom ? `${correctPct.toFixed(0)}%` : "0%";
    }

    // Bar chart (top 3 wrong rate)
    const barWrap = document.getElementById("bar-chart");
    if (barWrap) {
      const items = provinceIds
        //Create an object array {id, stat} for each province
        .map((id) => ({ id, stat: getProvinceStat(id) }))
        //Filter out provinces with no answers to avoid NaN wrong rates
        .filter((x) => x.stat && x.stat.answered > 0)
        .map((x) => ({ id: x.id, wrongRate: x.stat.wrongRate, answered: x.stat.answered }))
        .sort((a, b) => b.wrongRate - a.wrongRate)
        .slice(0, 3);

      //Clear previous bars evertime open dashboard
      barWrap.innerHTML = "";
      
      if (items.length === 0) {
        barWrap.innerHTML = `<div style="color:#b8c7e6; font-weight:700;">尚無作答資料</div>`;
      } else {
        // Find the maximum wrong rate (>= 0.001) to scale the bars
        const maxWrong = Math.max(...items.map((x) => x.wrongRate), 0.001);
        const maxHeight = 100;

        // Create a bar for each item
        items.forEach((item) => {
          const bar = document.createElement("div");
          bar.className = "bar";
          const fillHeight = (item.wrongRate / maxWrong) * maxHeight;
          const fill = document.createElement("div");
          fill.className = "bar-fill";
          fill.style.height = `${fillHeight}px`;
          const label = document.createElement("div");
          label.className = "bar-label";
          const name = provincesData[item.id]?.name || item.id;
          label.innerHTML = `<div class="bar-label-name">${name}</div><div class="bar-label-pct">${Math.round(item.wrongRate * 100)}%</div>`;
          bar.appendChild(fill);
          bar.appendChild(label);
          barWrap.appendChild(bar);
        });
      }
    }

    // Ranking list (top correct rate) (Similar to bar chart)
    const ranking = document.getElementById("ranking-list");
    if (ranking) {
      const ranked = provinceIds
        .map((id) => ({ id, stat: getProvinceStat(id) }))
        .filter((x) => x.stat && x.stat.answered > 0)
        .map((x) => ({ id: x.id, correctRate: x.stat.correctRate, answered: x.stat.answered }))
        .sort((a, b) => b.correctRate - a.correctRate)
        .slice(0);

      ranking.innerHTML = "";
      if (ranked.length === 0) {
        ranking.innerHTML = `<div style="color:#b8c7e6; font-weight:700;">尚無作答資料</div>`;
      } else {
        ranked.forEach((it) => {
          const item = document.createElement("div");
          item.className = "ranking-item";
          item.innerHTML = `
            <div class="ranking-left">${provincesData[it.id]?.name || it.id}</div>
            <div class="ranking-right">${Math.round(it.correctRate * 100)}%</div>`;
          ranking.appendChild(item);
        });
      }
    }

    // Insights （快速洞察）
    const insightsEl = document.getElementById("insights");
    if (insightsEl) {
      const provinceStatsArr = provinceIds
        .map((id) => ({ id, stat: getProvinceStat(id) }))
        .filter((x) => x.stat && x.stat.answered > 0)
        .map((x) => ({ id: x.id, wrong: x.stat.wrong, avgTimeMs: x.stat.avgTimeMs }));

      if (provinceStatsArr.length === 0) {
        insightsEl.textContent = "尚無作答資料，點擊任一省份開始挑戰！";
      } else {
        const mostWrong = [...provinceStatsArr].sort((a, b) => b.wrong - a.wrong)[0];
        const fastest = [...provinceStatsArr].sort((a, b) => a.avgTimeMs - b.avgTimeMs)[0];
        const mostWrongName = provincesData[mostWrong.id]?.name || mostWrong.id;
        const fastestName = provincesData[fastest.id]?.name || fastest.id;
        insightsEl.innerHTML = `
          <div>最容易出錯：${mostWrongName}</div>
          <div>最快作答省份：${fastestName}</div>
        `;
      }
    }
  }

  function toggleDashboard(isOpen) {
    if (!dashboardEl) return;
    // Base on current state of dashboard to decide whether open or close
    const isHidden = dashboardEl.classList.contains("hidden");
    const shouldOpen = isOpen ? isHidden : isOpen;
    if (shouldOpen) {
      dashboardEl.classList.remove("hidden");
      // Close collection when opening dashboard
      if (collectionEl && !collectionEl.classList.contains("hidden")) {
        collectionEl.classList.add("hidden");
      }
    } else {
      dashboardEl.classList.add("hidden");
    }
  }

  function updateCollection() {
    if (!collectionGridEl) return;
    const collectedKey = "collectedProvinces";
    let collected = [];
    try {
      collected = JSON.parse(localStorage.getItem(collectedKey) || "[]");
    } catch {
      collected = [];
    }

    collectionGridEl.innerHTML = "";
    
    if (collected.length === 0) {
      collectionGridEl.innerHTML = '<div class="collection-empty">還沒有收藏的卡片<br/>右鍵點擊省份可收藏</div>';
      return;
    }

    collected.forEach((provinceId) => {
      const data = provincesData[provinceId];
      if (!data) return;
      
      const card = document.createElement("div");
      card.className = "collection-card";
      const imgSrc = getProvinceImageSrc(provinceId);
      card.innerHTML = `
        <img class="collection-card-img" src="${imgSrc}" alt="${data.name}" loading="lazy" decoding="async" onerror="this.src='images/china_map.jpeg'">
        <div class="collection-card-name">${data.name}</div>
      `;
      collectionGridEl.appendChild(card);
    });
  }

  function toggleCollection(isOpen) {
    if (!collectionEl) return;
    const isHidden = collectionEl.classList.contains("hidden");
    const shouldOpen = isOpen ? isHidden : isOpen;
    if (shouldOpen) {
      collectionEl.classList.remove("hidden");
      updateCollection();
      // Close dashboard when opening collection
      if (dashboardEl && !dashboardEl.classList.contains("hidden")) {
        dashboardEl.classList.add("hidden");
      }
    } else {
      collectionEl.classList.add("hidden");
    }
  }

  // Click dashboard toggle button to open or close | close button inside dashboard to close | reset button to clear stats and close
  if (dashboardToggleBtn) dashboardToggleBtn.addEventListener("click", () => toggleDashboard(true));
  if (dashboardCloseBtn) dashboardCloseBtn.addEventListener("click", () => toggleDashboard(false));
  if (collectionToggleBtn) collectionToggleBtn.addEventListener("click", () => toggleCollection(true));
  if (collectionCloseBtn) collectionCloseBtn.addEventListener("click", () => toggleCollection(false));
  if (dashboardResetBtn) {
    dashboardResetBtn.addEventListener("click", () => {
      // Remove local storage data and reset stats to default, then update all related UI
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem("collectedProvinces");
      stats = loadStats();
      updateProgressUI();
      updateDashboard();
      hideFeedback();
      closeModal();
      updateExploredStyles();
      if (optionsContainerEl) optionsContainerEl.style.display = "none";
    });
  }

  // --------------------------
  // Province interactions
  // --------------------------
  function recordExploreAndClick(id) {
    if (!id) return;
    // Add to explored list if not already there
    if (!stats.explored.includes(id)) stats.explored.push(id);
    // If province stat doesn't exist, initialize.
    if (!stats.provinceStats[id]) {
      stats.provinceStats[id] = { clicks: 0, answered: 0, correct: 0, wrong: 0, totalTimeMs: 0 };
    }
    stats.provinceStats[id].clicks = (stats.provinceStats[id].clicks || 0) + 1;
    saveStats();
  }

  function recordAnswer(id, isCorrect, timeMs) {
    // If province stat doesn't exist, initialize.
    if (!stats.provinceStats[id]) {
      stats.provinceStats[id] = { clicks: 0, answered: 0, correct: 0, wrong: 0, totalTimeMs: 0 };
    }
    // Single province stats
    const ps = stats.provinceStats[id];
    ps.answered = (ps.answered || 0) + 1;
    ps.totalTimeMs = (ps.totalTimeMs || 0) + timeMs;
    if (isCorrect) ps.correct = (ps.correct || 0) + 1;
    else ps.wrong = (ps.wrong || 0) + 1;

    // Overall province stats
    stats.totalAnswered = (stats.totalAnswered || 0) + 1;
    stats.totalTimeMs = (stats.totalTimeMs || 0) + timeMs;
    if (isCorrect) stats.correct = (stats.correct || 0) + 1;
    else stats.wrong = (stats.wrong || 0) + 1;
    saveStats();
  }

  // Visual effect for polygon
  function createRipple(e) {
    const container = document.getElementById("map-container");
    if (!container) return;
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  }

  function showHover(id) {
    if (!hoverLabel) return;
    const name = provincesData[id]?.name || id;
    hoverLabel.textContent = name;
    hoverLabel.classList.remove("hidden");
  }

  function hideHover() {
    if (!hoverLabel) return;
    hoverLabel.classList.add("hidden");
  }

  // --------------------------
  // Quiz rendering & answer
  // --------------------------
  function renderOptions(options) {
    optionsContainerEl.innerHTML = "";
    optionsContainerEl.style.display = "flex";
    optionsContainerEl.style.opacity = "1";
    // Create a button for each option
    options.forEach((txt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("data-index", String(idx));
      btn.textContent = txt;
      btn.addEventListener("click", () => {
        if (answered) return;
        setSelectedOption(idx);
        handleAnswer(idx);
      });
      optionsContainerEl.appendChild(btn);
    });
  }

  function setOptionsDisabled(disabled) {
    const btns = optionsContainerEl.querySelectorAll(".option-btn");
    btns.forEach((b) => {
      b.disabled = disabled;
    });
  }

  function setSelectedOption(idx) {
    selectedOptionIndex = idx;
    const btns = optionsContainerEl.querySelectorAll(".option-btn");
    btns.forEach((b, i) => {
      if (b.disabled) return;
      // Find the selected options
      b.classList.toggle("selected", i === idx);
    });
  }

  function handleAnswer(idx) {
    if (!clickedProvinceId) return;
    const q = QUESTIONS[clickedProvinceId];
    if (!q || answered) return;
    answered = true;

    const correctIdx = Number(q.correctIndex);
    const correctOptionText = q.options[correctIdx] || "";

    setOptionsDisabled(true);

    const btns = optionsContainerEl.querySelectorAll(".option-btn");
    btns.forEach((b) => {
      b.classList.remove("correct", "wrong", "selected");
    });

    // Check selected option correct or wrong
    const isCorrect = idx === correctIdx;
    const chosenBtn = optionsContainerEl.querySelector(`.option-btn[data-index="${idx}"]`);
    if (chosenBtn) chosenBtn.classList.add(isCorrect ? "correct" : "wrong");

    // Wrong: show correct answer
    if (!isCorrect) {
      const correctBtn = optionsContainerEl.querySelector(`.option-btn[data-index="${correctIdx}"]`);
      if (correctBtn) correctBtn.classList.add("correct");
    }

    const timeMs = Math.max(0, Math.round(performance.now() - questionStartTime));
    recordAnswer(clickedProvinceId, isCorrect, timeMs);
    showFeedback(isCorrect, correctOptionText);

    // Refresh analytics in real time
    updateProgressUI();
    updateDashboard();
  }

  // Sequential loading animation: title -> image -> background -> quiz -> options
  function sequentialReveal(steps) {
    steps.forEach((s) => {
      if (!s.el) return;
      s.el.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      s.el.style.opacity = "0";
      s.el.style.transform = "translateY(16px)";
    });
    steps.forEach((s) => {
      if (!s.el) return;
      const t = setTimeout(() => {
        s.el.style.opacity = "1";
        s.el.style.transform = "translateY(0)";
      }, s.delayMs);
      sequentialTimeouts.push(t);
    });
  }

  function showProvinceModal(id, fromClickEvent) {
    clickedProvinceId = id;
    selectedOptionIndex = null;
    answered = false;
    questionStartTime = performance.now();
    hideFeedback();

    const data = provincesData[id] || { name: id, info: "（尚未提供此省份的背景介紹。）" };
    const q = QUESTIONS[id];

    provinceNameEl.textContent = data.name;
    provinceInfoTextEl.textContent = data.info;

    if (featuredImgEl) {
      featuredImgEl.style.opacity = "0";
      featuredImgEl.style.transition = "opacity 0.35s ease";
      featuredImgEl.loading = "lazy";
      featuredImgEl.decoding = "async";
      featuredImgEl.src = getProvinceImageSrc(id);;
      featuredImgEl.onerror = () => {
        featuredImgEl.onerror = null;
        featuredImgEl.src = "images/china_map.jpeg";
      };
      setTimeout(() => {
        featuredImgEl.style.opacity = "1";
      }, 60);
    }

    if (q) {
      questionTextEl.textContent = q.question;
      renderOptions(q.options);
    } else {
      questionTextEl.textContent = "（此省份目前尚未設定測驗題目。）";
      optionsContainerEl.innerHTML = "";
      optionsContainerEl.style.display = "none";
    }

    openModal();

    // Sequential loading animation: title -> image -> background -> quiz -> options
    sequentialReveal([
      { el: provinceNameEl, delayMs: 0 },
      { el: featuredImgEl && featuredImgEl.parentElement, delayMs: 80 },
      { el: provinceInfoTextEl, delayMs: 160 },
      { el: quizLabelEl, delayMs: 220 },
      { el: questionTextEl, delayMs: 280 },
      { el: optionsContainerEl, delayMs: 340 }
    ]);

    if (fromClickEvent && fromClickEvent.target && fromClickEvent.target.classList) {
      const poly = fromClickEvent.target;
      poly.classList.remove("province-bounce");
      poly.offsetHeight; // force reflow for restart
      poly.classList.add("province-bounce");
      setTimeout(() => poly.classList.remove("province-bounce"), 260);
    }
  }

  // --------------------------
  // Map zoom (mouse wheel)
  // --------------------------
  let zoom = 1;
  const ZOOM_MIN = 0.75;
  const ZOOM_MAX = 2.2;
  let wheelRaf = null;
  let wheelDeltaAcc = 0;

  function applyZoom(newZoom) {
    zoom = newZoom;
    if (!mapContainer) return;
    mapContainer.style.transform = `scale(${zoom})`;
  }

  if (mapContainer) {
    // Map entry animation (class-driven to avoid timing/race issues)
    // CSS defines the initial state and transition rules.
    setTimeout(() => {
      mapContainer.classList.add("visible");
      applyZoom(1);
    }, 100);

    mapContainer.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        wheelDeltaAcc += e.deltaY;
        if (wheelRaf) return;
        wheelRaf = requestAnimationFrame(() => {
          wheelRaf = null;
          const delta = wheelDeltaAcc;
          wheelDeltaAcc = 0;
          const factor = delta > 0 ? 0.92 : 1.08;
          const next = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, zoom * factor));
          applyZoom(next);
        });
      },
      { passive: false }
    );
  }

  // --------------------------
  // Bind events to provinces
  // --------------------------
  provinceEls.forEach((poly) => {
    const id = poly.id;
    const titleEl = poly.querySelector("title");
    if (titleEl) titleEl.textContent = provincesData[id]?.name || id;

    // Click: open modal + record exploration/progress + ripple + bounce.
    poly.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      recordExploreAndClick(id);
      showProvinceModal(id, e);
      createRipple(e);
      updateProgressUI();
      updateDashboard();
    });

    // Hover: show Traditional Chinese province name.
    poly.addEventListener("mouseenter", () => showHover(id));
    poly.addEventListener("mouseleave", hideHover);

    // Right-click: collect province card
    poly.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const name = provincesData[id]?.name || id;
      const collectedKey = "collectedProvinces";
      let collected = [];
      try {
        collected = JSON.parse(localStorage.getItem(collectedKey) || "[]");
      } catch {
        collected = [];
      }
      if (!collected.includes(id)) collected.push(id);
      localStorage.setItem(collectedKey, JSON.stringify(collected));
      alert(`已收藏「${name}」到你的卡片集！`);
      updateCollection();
    });
  });

  // Initial UI sync (restore explored + dashboard)
  updateProgressUI();
  updateDashboard();

  // Make modal start hidden (CSS handles opacity).
  closeModal();
});