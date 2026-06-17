// ══════════════════════════════════════════
// FOOD DATABASE — 113 items
// ══════════════════════════════════════════
const FOOD_DB = [
  // American
  {id:'db001',emoji:'🍔',dish:'Classic Cheeseburger',restaurant:'Shake Shack',cat:'american'},
  {id:'db002',emoji:'🍔',dish:'Smash Burger',restaurant:'Smashburger',cat:'american'},
  {id:'db003',emoji:'🍔',dish:'Bacon BBQ Burger',restaurant:'Five Guys',cat:'american'},
  {id:'db004',emoji:'🍗',dish:'Spicy Chicken Sandwich',restaurant:'Popeyes',cat:'american'},
  {id:'db005',emoji:'🍗',dish:'Crispy Chicken Sandwich',restaurant:'Chick-fil-A',cat:'american'},
  {id:'db006',emoji:'🍟',dish:'Loaded Cajun Fries',restaurant:'Five Guys',cat:'american'},
  {id:'db007',emoji:'🥪',dish:'Club Sandwich',restaurant:'Local Deli',cat:'american'},
  {id:'db008',emoji:'🥪',dish:'Philly Cheesesteak',restaurant:"Jersey Mike's",cat:'american'},
  {id:'db009',emoji:'🌭',dish:'Gourmet Hot Dog',restaurant:'Local Stand',cat:'american'},
  {id:'db010',emoji:'🥩',dish:'Steak Sandwich',restaurant:'Local Bistro',cat:'american'},
  {id:'db011',emoji:'🍗',dish:'Buffalo Wings',restaurant:'Buffalo Wild Wings',cat:'american'},
  {id:'db012',emoji:'🧀',dish:'Mac & Cheese',restaurant:'Local Kitchen',cat:'american'},
  {id:'db013',emoji:'🫔',dish:'Breakfast Burrito',restaurant:'Local Cafe',cat:'american'},
  {id:'db014',emoji:'🥓',dish:'BLT Sandwich',restaurant:'Local Deli',cat:'american'},
  {id:'db015',emoji:'🥚',dish:'Eggs Benedict',restaurant:'Local Brunch',cat:'american'},
  // Pizza
  {id:'db016',emoji:'🍕',dish:'Pepperoni Pizza',restaurant:"Domino's",cat:'pizza'},
  {id:'db017',emoji:'🍕',dish:'Margherita Pizza',restaurant:'Local Pizzeria',cat:'pizza'},
  {id:'db018',emoji:'🍕',dish:'BBQ Chicken Pizza',restaurant:'CPK',cat:'pizza'},
  {id:'db019',emoji:'🍕',dish:'Meat Lovers Pizza',restaurant:'Pizza Hut',cat:'pizza'},
  {id:'db020',emoji:'🍕',dish:'Veggie Supreme Pizza',restaurant:'Local Pizzeria',cat:'pizza'},
  {id:'db021',emoji:'🍕',dish:'White Truffle Pizza',restaurant:'Local Pizzeria',cat:'pizza'},
  {id:'db022',emoji:'🍕',dish:'Buffalo Chicken Pizza',restaurant:'Local Pizzeria',cat:'pizza'},
  {id:'db023',emoji:'🫓',dish:'Calzone',restaurant:'Local Pizzeria',cat:'pizza'},
  {id:'db024',emoji:'🍕',dish:'Four Cheese Pizza',restaurant:'Local Pizzeria',cat:'pizza'},
  {id:'db025',emoji:'🍕',dish:'Hawaiian Pizza',restaurant:'Pizza Hut',cat:'pizza'},
  // Asian · Chinese
  {id:'db026',emoji:'🥡',dish:'Orange Chicken',restaurant:'Panda Express',cat:'asian'},
  {id:'db027',emoji:'🍜',dish:'Lo Mein',restaurant:'Local Chinese',cat:'asian'},
  {id:'db028',emoji:'🥡',dish:'Fried Rice',restaurant:'Local Chinese',cat:'asian'},
  {id:'db029',emoji:'🥡',dish:'Kung Pao Chicken',restaurant:'Local Chinese',cat:'asian'},
  {id:'db030',emoji:'🥡',dish:"General Tso's Chicken",restaurant:'Local Chinese',cat:'asian'},
  {id:'db031',emoji:'🍜',dish:'Beef with Broccoli',restaurant:'Local Chinese',cat:'asian'},
  {id:'db032',emoji:'🥟',dish:'Steamed Dumplings',restaurant:'Dim Sum Kitchen',cat:'asian'},
  {id:'db033',emoji:'🥟',dish:'Pan-Fried Potstickers',restaurant:'Dim Sum Kitchen',cat:'asian'},
  {id:'db034',emoji:'🍲',dish:'Hot & Sour Soup',restaurant:'Local Chinese',cat:'asian'},
  {id:'db035',emoji:'🥡',dish:'Sesame Chicken',restaurant:'Local Chinese',cat:'asian'},
  // Asian · Japanese
  {id:'db036',emoji:'🍣',dish:'Spicy Tuna Roll',restaurant:'Sushi Bar',cat:'asian'},
  {id:'db037',emoji:'🍣',dish:'California Roll',restaurant:'Sushi Bar',cat:'asian'},
  {id:'db038',emoji:'🍣',dish:'Salmon Sashimi',restaurant:'Sushi Bar',cat:'asian'},
  {id:'db039',emoji:'🍱',dish:'Chicken Teriyaki Bento',restaurant:'Local Japanese',cat:'asian'},
  {id:'db040',emoji:'🍜',dish:'Tonkotsu Ramen',restaurant:'Ramen House',cat:'asian'},
  {id:'db041',emoji:'🍜',dish:'Spicy Miso Ramen',restaurant:'Ramen House',cat:'asian'},
  {id:'db042',emoji:'🥟',dish:'Gyoza',restaurant:'Local Japanese',cat:'asian'},
  {id:'db043',emoji:'🍱',dish:'Katsu Curry',restaurant:'Local Japanese',cat:'asian'},
  {id:'db044',emoji:'🍣',dish:'Dragon Roll',restaurant:'Sushi Bar',cat:'asian'},
  {id:'db045',emoji:'🍱',dish:'Chirashi Bowl',restaurant:'Sushi Bar',cat:'asian'},
  // Asian · Thai
  {id:'db046',emoji:'🍜',dish:'Pad Thai',restaurant:'Thai Kitchen',cat:'asian'},
  {id:'db047',emoji:'🍛',dish:'Green Curry',restaurant:'Thai Kitchen',cat:'asian'},
  {id:'db048',emoji:'🍛',dish:'Massaman Curry',restaurant:'Thai Kitchen',cat:'asian'},
  {id:'db049',emoji:'🍜',dish:'Pad See Ew',restaurant:'Thai Kitchen',cat:'asian'},
  {id:'db050',emoji:'🍛',dish:'Thai Basil Chicken',restaurant:'Thai Kitchen',cat:'asian'},
  {id:'db051',emoji:'🥗',dish:'Papaya Salad',restaurant:'Thai Kitchen',cat:'asian'},
  // Asian · Korean
  {id:'db052',emoji:'🥩',dish:'Bulgogi Bowl',restaurant:'Korean BBQ',cat:'asian'},
  {id:'db053',emoji:'🍱',dish:'Bibimbap',restaurant:'Korean Kitchen',cat:'asian'},
  {id:'db054',emoji:'🍗',dish:'Korean Fried Chicken',restaurant:'Korean Kitchen',cat:'asian'},
  {id:'db055',emoji:'🌯',dish:'Bulgogi Wrap',restaurant:'Korean Kitchen',cat:'asian'},
  {id:'db056',emoji:'🥘',dish:'Sundubu Jjigae',restaurant:'Korean Kitchen',cat:'asian'},
  // Asian · Vietnamese
  {id:'db057',emoji:'🍜',dish:'Beef Pho',restaurant:'Pho House',cat:'asian'},
  {id:'db058',emoji:'🥖',dish:'Banh Mi',restaurant:'Banh Mi Shop',cat:'asian'},
  {id:'db059',emoji:'🥗',dish:'Fresh Spring Rolls',restaurant:'Vietnamese Kitchen',cat:'asian'},
  {id:'db060',emoji:'🍜',dish:'Bun Bo Hue',restaurant:'Pho House',cat:'asian'},
  // Mexican
  {id:'db061',emoji:'🌯',dish:'Chicken Burrito',restaurant:'Chipotle',cat:'mexican'},
  {id:'db062',emoji:'🌯',dish:'Carnitas Burrito Bowl',restaurant:'Chipotle',cat:'mexican'},
  {id:'db063',emoji:'🌮',dish:'Street Tacos',restaurant:'Local Mexican',cat:'mexican'},
  {id:'db064',emoji:'🌮',dish:'Al Pastor Tacos',restaurant:'Local Mexican',cat:'mexican'},
  {id:'db065',emoji:'🌮',dish:'Birria Tacos',restaurant:'Local Mexican',cat:'mexican'},
  {id:'db066',emoji:'🌮',dish:'Fish Tacos',restaurant:'Local Mexican',cat:'mexican'},
  {id:'db067',emoji:'🥙',dish:'Quesadilla',restaurant:'Chipotle',cat:'mexican'},
  {id:'db068',emoji:'🫓',dish:'Loaded Nachos',restaurant:'Local Mexican',cat:'mexican'},
  {id:'db069',emoji:'🌯',dish:'Veggie Burrito',restaurant:'Chipotle',cat:'mexican'},
  {id:'db070',emoji:'🥗',dish:'Mexican Street Corn Salad',restaurant:'Local Mexican',cat:'mexican'},
  {id:'db071',emoji:'🌯',dish:'Steak Burrito Bowl',restaurant:'Qdoba',cat:'mexican'},
  // Indian
  {id:'db072',emoji:'🍛',dish:'Butter Chicken',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db073',emoji:'🍛',dish:'Chicken Tikka Masala',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db074',emoji:'🍛',dish:'Chicken Biryani',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db075',emoji:'🍛',dish:'Lamb Rogan Josh',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db076',emoji:'🥘',dish:'Palak Paneer',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db077',emoji:'🍛',dish:'Dal Makhani',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db078',emoji:'🫓',dish:'Garlic Naan',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db079',emoji:'🧆',dish:'Samosa',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db080',emoji:'🍛',dish:'Chana Masala',restaurant:'Indian Kitchen',cat:'indian'},
  {id:'db081',emoji:'🍛',dish:'Shrimp Masala',restaurant:'Indian Kitchen',cat:'indian'},
  // Mediterranean
  {id:'db082',emoji:'🥙',dish:'Chicken Shawarma',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db083',emoji:'🥙',dish:'Lamb Shawarma',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db084',emoji:'🥙',dish:'Falafel Wrap',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db085',emoji:'🥗',dish:'Greek Salad',restaurant:'Greek Kitchen',cat:'mediterranean'},
  {id:'db086',emoji:'🥙',dish:'Chicken Gyro',restaurant:'Greek Kitchen',cat:'mediterranean'},
  {id:'db087',emoji:'🫓',dish:'Hummus & Pita',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db088',emoji:'🥩',dish:'Lamb Kebab Plate',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db089',emoji:'🥗',dish:'Tabbouleh',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db090',emoji:'🍱',dish:'Mezze Platter',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  {id:'db091',emoji:'🍛',dish:'Moroccan Chicken',restaurant:'Mediterranean Grill',cat:'mediterranean'},
  // Healthy
  {id:'db092',emoji:'🥗',dish:'Caesar Salad',restaurant:'Sweetgreen',cat:'healthy'},
  {id:'db093',emoji:'🥗',dish:'Harvest Bowl',restaurant:'Sweetgreen',cat:'healthy'},
  {id:'db094',emoji:'🥗',dish:'Cobb Salad',restaurant:'Local Cafe',cat:'healthy'},
  {id:'db095',emoji:'🥗',dish:'Poke Bowl',restaurant:'Poke Bar',cat:'healthy'},
  {id:'db096',emoji:'🥗',dish:'Grain & Veggie Bowl',restaurant:'Sweetgreen',cat:'healthy'},
  {id:'db097',emoji:'🥗',dish:'Salmon Poke Bowl',restaurant:'Poke Bar',cat:'healthy'},
  {id:'db098',emoji:'🥙',dish:'Turkey Avocado Wrap',restaurant:'Local Cafe',cat:'healthy'},
  {id:'db099',emoji:'🥗',dish:'Kale & Quinoa Salad',restaurant:'Local Cafe',cat:'healthy'},
  {id:'db100',emoji:'🍱',dish:'Protein Box',restaurant:'Local Cafe',cat:'healthy'},
  // Italian
  {id:'db101',emoji:'🍝',dish:'Spaghetti Carbonara',restaurant:'Local Italian',cat:'italian'},
  {id:'db102',emoji:'🍝',dish:'Fettuccine Alfredo',restaurant:'Local Italian',cat:'italian'},
  {id:'db103',emoji:'🍝',dish:'Penne Arrabbiata',restaurant:'Local Italian',cat:'italian'},
  {id:'db104',emoji:'🍗',dish:'Chicken Parmesan',restaurant:'Olive Garden',cat:'italian'},
  {id:'db105',emoji:'🥗',dish:'Caprese Salad',restaurant:'Local Italian',cat:'italian'},
  {id:'db106',emoji:'🍲',dish:'Minestrone Soup',restaurant:'Local Italian',cat:'italian'},
  {id:'db107',emoji:'🍝',dish:'Cacio e Pepe',restaurant:'Local Italian',cat:'italian'},
  {id:'db108',emoji:'🍝',dish:'Bolognese',restaurant:'Local Italian',cat:'italian'},
  // BBQ
  {id:'db109',emoji:'🥩',dish:'Brisket Plate',restaurant:'Local BBQ',cat:'bbq'},
  {id:'db110',emoji:'🍖',dish:'Pulled Pork Sandwich',restaurant:'Local BBQ',cat:'bbq'},
  {id:'db111',emoji:'🍗',dish:'Smoked Chicken',restaurant:'Local BBQ',cat:'bbq'},
  {id:'db112',emoji:'🍖',dish:'Baby Back Ribs',restaurant:'Local BBQ',cat:'bbq'},
  {id:'db113',emoji:'🥩',dish:'Burnt Ends',restaurant:'Local BBQ',cat:'bbq'},
];

const CATEGORIES = [
  {id:'all',           label:'All',              labelZh:'全部'},
  {id:'custom',        label:'✨ My Adds',        labelZh:'✨ 我的添加'},
  {id:'blocked',       label:'🚫 Blocked',        labelZh:'🚫 已屏蔽'},
  {id:'american',      label:'🍔 American',       labelZh:'🍔 美式'},
  {id:'pizza',         label:'🍕 Pizza',          labelZh:'🍕 披萨'},
  {id:'asian',         label:'🥢 Asian',          labelZh:'🥢 亚洲料理'},
  {id:'mexican',       label:'🌮 Mexican',        labelZh:'🌮 墨西哥'},
  {id:'indian',        label:'🍛 Indian',         labelZh:'🍛 印度'},
  {id:'mediterranean', label:'🥙 Mediterranean',  labelZh:'🥙 地中海'},
  {id:'healthy',       label:'🥗 Healthy',        labelZh:'🥗 健康轻食'},
  {id:'italian',       label:'🍝 Italian',        labelZh:'🍝 意大利'},
  {id:'bbq',           label:'🔥 BBQ',            labelZh:'🔥 烧烤'},
];

const CAT_LABEL = {american:'American',pizza:'Pizza',asian:'Asian',mexican:'Mexican',indian:'Indian',mediterranean:'Mediterranean',healthy:'Healthy',italian:'Italian',bbq:'BBQ',custom:'My Adds'};
const CAT_LABEL_ZH = {american:'美式',pizza:'披萨',asian:'亚洲料理',mexican:'墨西哥',indian:'印度',mediterranean:'地中海',healthy:'健康轻食',italian:'意大利',bbq:'烧烤',custom:'我的添加'};

// ── Chinese dish name translations ──
const DISH_ZH = {
  // American
  db001:'经典芝士汉堡', db002:'碎肉汉堡',      db003:'培根烧烤汉堡',
  db004:'辣鸡三明治',   db005:'脆皮鸡三明治',  db006:'卡真风味薯条',
  db007:'总会三明治',   db008:'费城芝士牛排堡', db009:'美食热狗',
  db010:'牛排三明治',   db011:'水牛城鸡翅',     db012:'奶酪通心粉',
  db013:'早餐卷饼',     db014:'BLT三明治',      db015:'班尼迪克蛋',
  // Pizza
  db016:'意式辣肠披萨', db017:'玛格丽特披萨',   db018:'烧烤鸡肉披萨',
  db019:'肉食至尊披萨', db020:'蔬菜至尊披萨',   db021:'白松露披萨',
  db022:'水牛城鸡肉披萨',db023:'意式包馅饺',   db024:'四种芝士披萨',
  db025:'夏威夷披萨',
  // Asian – Chinese
  db026:'陈皮鸡',       db027:'捞面',           db028:'炒饭',
  db029:'宫保鸡丁',     db030:'左宗棠鸡',       db031:'西兰花炒牛肉',
  db032:'蒸饺',         db033:'煎锅贴',         db034:'酸辣汤',
  db035:'芝麻鸡',
  // Asian – Japanese
  db036:'辣金枪鱼卷',   db037:'加州卷',         db038:'三文鱼刺身',
  db039:'照烧鸡肉便当', db040:'猪骨拉面',       db041:'辣味噌拉面',
  db042:'煎饺',         db043:'炸猪排咖喱',     db044:'龙卷',
  db045:'散寿司碗',
  // Asian – Thai
  db046:'泰式炒河粉',   db047:'绿咖喱',         db048:'马沙文咖喱',
  db049:'泰式炒宽面',   db050:'泰式罗勒鸡',     db051:'青木瓜沙拉',
  // Asian – Korean
  db052:'韩式烤牛肉饭', db053:'石锅拌饭',       db054:'韩式炸鸡',
  db055:'韩式烤牛肉卷', db056:'嫩豆腐锅',
  // Asian – Vietnamese
  db057:'越南牛肉粉',   db058:'越式法棍三明治', db059:'新鲜春卷',
  db060:'顺化牛肉粉',
  // Mexican
  db061:'鸡肉墨西哥卷', db062:'卡尼塔斯饭碗',  db063:'街头玉米饼',
  db064:'牧羊人烤肉饼', db065:'比利亚炖肉饼',  db066:'鱼肉玉米饼',
  db067:'墨西哥芝士饼', db068:'豪华玉米片',     db069:'蔬菜墨西哥卷',
  db070:'墨西哥街头玉米沙拉', db071:'牛排墨西哥饭碗',
  // Indian
  db072:'黄油鸡',       db073:'印度鸡肉马萨拉', db074:'印度鸡肉香饭',
  db075:'印度羊肉咖喱', db076:'菠菜奶酪',       db077:'奶油扁豆',
  db078:'蒜香烤饼',     db079:'印度咖喱角',     db080:'鹰嘴豆咖喱',
  db081:'印度咖喱虾',
  // Mediterranean
  db082:'鸡肉沙瓦尔玛', db083:'羊肉沙瓦尔玛',  db084:'炸豆丸子卷',
  db085:'希腊沙拉',     db086:'希腊鸡肉卷',     db087:'鹰嘴豆泥配皮塔饼',
  db088:'羊肉串烤拼盘', db089:'黎巴嫩欧芹沙拉', db090:'中东小食拼盘',
  db091:'摩洛哥风味鸡',
  // Healthy
  db092:'凯撒沙拉',     db093:'丰收碗',         db094:'科布沙拉',
  db095:'夏威夷拌饭碗', db096:'谷物蔬菜碗',     db097:'三文鱼拌饭碗',
  db098:'火鸡牛油果卷', db099:'羽衣甘蓝藜麦沙拉', db100:'高蛋白便当',
  // Italian
  db101:'培根蛋黄意面', db102:'奶油宽面',       db103:'辣番茄管面',
  db104:'帕尔马鸡排',   db105:'卡布里沙拉',     db106:'意式蔬菜汤',
  db107:'奶酪胡椒意面', db108:'肉酱意面',
  // BBQ
  db109:'烟熏牛胸肉',   db110:'手撕猪肉堡',     db111:'烟熏鸡肉',
  db112:'猪仔排',       db113:'焦糖牛肉块',
};

let currentLang = 'en';

function getDish(food) {
  if (!food) return '';
  return currentLang === 'zh' && DISH_ZH[food.id] ? DISH_ZH[food.id] : food.dish;
}
function getCatLabel(cat) {
  return currentLang === 'zh' ? (CAT_LABEL_ZH[cat] || CAT_LABEL[cat] || cat) : (CAT_LABEL[cat] || cat);
}
function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  document.getElementById('lang-btn').textContent = currentLang === 'en' ? '中文' : 'EN';
  buildCatPills();
  renderBrowse();
  renderStats();
  if (lastResult) {
    document.getElementById('result-dish').textContent = getDish(lastResult);
  }
  if (swipingActive && matchIndex < swipeQueue.length) renderSwipeCard();
}

const SLICE_COLORS = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#FF9F43','#C77DFF','#00D2D3','#FF6BAA','#A8E063','#FF8E53','#5FC3E4','#FFB347','#FC5C65','#45AAF2','#26DE81','#FED330','#A55EEA','#2BCBBA'];

const FOOD_EMOJIS = ['🍕','🍔','🌮','🌯','🍜','🍣','🍱','🥗','🍛','🥙','🍝','🥪','🍗','🥩','🍖','🍤','🥡','🍲','🥘','🍚','🍞','🧆','🥟','🥖','🫔','🌭','🥓','🫓','🧀','🥚'];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let blockedIds  = new Set();
let customFoods = [];
let isSpinning  = false;
let currentAngle = 0;
let activeCat   = 'all';
let isGuestMode = false;
let guestItems  = [];
let lastResult  = null;   // food object of last spin result

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.slice(1);
  if (hash.startsWith('share=')) { loadGuestMode(hash.slice(6)); return; }
  loadFromStorage();
  buildCatPills();
  renderBrowse();
  renderStats();
  buildEmojiGrid();
  refreshVisualItems();
  drawWheel();

  // Show tutorial on first visit
  setTimeout(initTutorial, 400);
});

function allFoods() { return [...FOOD_DB, ...customFoods]; }
function activeItems() { return allFoods().filter(f => !blockedIds.has(f.id)); }

function loadFromStorage() {
  try {
    blockedIds  = new Set(JSON.parse(localStorage.getItem('wte_blocked') || '[]'));
    customFoods = JSON.parse(localStorage.getItem('wte_custom') || '[]');
    const valid = new Set(allFoods().map(f => f.id));
    blockedIds = new Set([...blockedIds].filter(id => valid.has(id)));
  } catch(e) { blockedIds = new Set(); customFoods = []; }
}

function saveToStorage() {
  localStorage.setItem('wte_blocked', JSON.stringify([...blockedIds]));
  localStorage.setItem('wte_custom',  JSON.stringify(customFoods));
}

// ══════════════════════════════════════════
// GUEST MODE
// ══════════════════════════════════════════
function loadGuestMode(encoded) {
  try {
    const data = JSON.parse(atob(encoded));
    guestItems  = data.items || [];
    isGuestMode = true;
    document.body.classList.add('guest-mode');
    document.getElementById('share-banner').textContent = `🎡 Spin for ${data.name || 'your friend'}!`;
    document.getElementById('share-banner').classList.add('visible');
    document.querySelector('.btn-icon').style.display = 'none';
    buildEmojiGrid();
    renderStats();
    refreshVisualItems();
    drawWheel();
  } catch(e) { showToast('Invalid share link 😕'); }
}

// ══════════════════════════════════════════
// TABS
// ══════════════════════════════════════════
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach((t,i) =>
    t.classList.toggle('active',
      (tab==='spin'&&i===0)||(tab==='browse'&&i===1)||(tab==='match'&&i===2)));
  document.getElementById('spin-view').classList.toggle('active',   tab==='spin');
  document.getElementById('browse-view').classList.toggle('active', tab==='browse');
  document.getElementById('match-view').classList.toggle('active',  tab==='match');
}

// ══════════════════════════════════════════
// STATS LINE
// ══════════════════════════════════════════
function renderStats() {
  const blocked = isGuestMode ? 0 : blockedIds.size;
  const blockedEl = document.getElementById('stat-blocked-link');
  if (blockedEl) {
    blockedEl.textContent = blocked > 0 ? `${blocked} food${blocked !== 1 ? 's' : ''} blocked — manage` : '';
    blockedEl.style.display = blocked > 0 ? '' : 'none';
  }
}

// ══════════════════════════════════════════
// BROWSE VIEW
// ══════════════════════════════════════════
function buildCatPills() {
  document.getElementById('cat-pills').innerHTML = CATEGORIES.map(c =>
    `<button class="pill ${c.id===activeCat?'active':''}" onclick="setCat('${c.id}')">${currentLang==='zh'?(c.labelZh||c.label):c.label}</button>`
  ).join('');
}
function setCat(id) { activeCat = id; buildCatPills(); renderBrowse(); }

function renderBrowse() {
  const query = (document.getElementById('search-input')?.value || '').toLowerCase();
  const list  = document.getElementById('food-list');
  const foods = allFoods();

  // Split active / blocked
  let showActive  = [];
  let showBlocked = [];

  foods.forEach(f => {
    if (activeCat === 'blocked') { if (blockedIds.has(f.id)) showBlocked.push(f); return; }
    if (activeCat === 'custom'  && f.cat !== 'custom') return;
    if (activeCat !== 'all' && activeCat !== 'custom' && activeCat !== 'blocked' && f.cat !== activeCat) return;
    if (query && !f.dish.toLowerCase().includes(query) && !f.restaurant.toLowerCase().includes(query) && !(DISH_ZH[f.id]||'').includes(query)) return;
    if (blockedIds.has(f.id)) showBlocked.push(f);
    else showActive.push(f);
  });

  if (!showActive.length && !showBlocked.length) {
    list.innerHTML = `<div style="text-align:center;padding:48px 20px;color:var(--muted);font-size:14px;">No results</div>`;
    return;
  }

  let html = '';

  // Group active items by category when browsing "All" with no search
  if (activeCat === 'all' && !query) {
    const groups = {};
    showActive.forEach(f => { (groups[f.cat] = groups[f.cat]||[]).push(f); });
    for (const cat of Object.keys(groups)) {
      html += `<span class="category-label">${getCatLabel(cat)}</span>`;
      html += groups[cat].map(f => rowHTML(f, false)).join('');
    }
  } else {
    html = showActive.map(f => rowHTML(f, false)).join('');
  }

  // Blocked section
  if (showBlocked.length && activeCat !== 'blocked') {
    html += `<div class="blocked-toggle" onclick="setCat('blocked')">🚫 ${showBlocked.length} blocked food${showBlocked.length!==1?'s':''} — tap to manage</div>`;
  }
  if (activeCat === 'blocked') {
    if (showBlocked.length) html = `<span class="category-label">Blocked foods — tap ↩ to restore</span>` + showBlocked.map(f => rowHTML(f, true)).join('');
    else html = `<div style="text-align:center;padding:48px 20px;color:var(--muted);font-size:14px;">No blocked foods 🎉</div>`;
  }

  list.innerHTML = html;
}

function rowHTML(f, isBlocked) {
  return `
    <div class="food-row ${isBlocked?'blocked':''}">
      <div class="food-row-emoji">${f.emoji}</div>
      <div class="food-row-text">
        <div class="food-row-dish">${esc(getDish(f))}</div>
        <div class="food-row-rest">${esc(f.restaurant)}</div>
      </div>
      <button class="row-block-btn ${isBlocked?'blocked':''}"
        onclick="toggleBlock('${f.id}')"
        title="${isBlocked?'Restore food':'Block this food'}">
        ${isBlocked ? '↩' : '✕'}
      </button>
    </div>`;
}

function toggleBlock(id) {
  if (blockedIds.has(id)) {
    blockedIds.delete(id);
    showToast('Food restored ✓');
  } else {
    blockedIds.add(id);
    showToast('Blocked 🚫 — spin again anytime');
  }
  saveToStorage();
  renderBrowse();
  renderStats();
}

// ══════════════════════════════════════════
// ADD CUSTOM FOOD
// ══════════════════════════════════════════
let selectedEmoji = '🍕';

function buildEmojiGrid() {
  document.getElementById('emoji-grid').innerHTML = FOOD_EMOJIS.map(e =>
    `<button class="emoji-btn ${e===selectedEmoji?'selected':''}" onclick="selectEmoji('${e}',this)">${e}</button>`
  ).join('');
}
function selectEmoji(emoji, btn) {
  selectedEmoji = emoji;
  document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}
function openAddModal() {
  selectedEmoji = '🍕';
  document.getElementById('input-dish').value = '';
  document.getElementById('input-restaurant').value = '';
  buildEmojiGrid();
  document.getElementById('add-modal').classList.add('open');
  setTimeout(() => document.getElementById('input-dish').focus(), 100);
}
function closeAddModal() { document.getElementById('add-modal').classList.remove('open'); }
function closeModalOnBg(e) { if (e.target===e.currentTarget) closeAddModal(); }
function saveCustomFood() {
  const dish = document.getElementById('input-dish').value.trim();
  const restaurant = document.getElementById('input-restaurant').value.trim();
  if (!dish) { document.getElementById('input-dish').focus(); return; }
  const food = {id:'c'+Date.now(), emoji:selectedEmoji, dish, restaurant: restaurant || '', cat:'custom'};
  customFoods.push(food);
  saveToStorage();
  closeAddModal();
  renderBrowse();
  renderStats();
  showToast(`${selectedEmoji} ${dish} added!`);
}
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeAddModal(); closeResult(); closeRoomMenu(); }
  if (e.key==='Enter' && document.getElementById('add-modal').classList.contains('open')) saveCustomFood();
  // Arrow keys to swipe during Match
  if (e.key==='ArrowRight' && swipingActive) { e.preventDefault(); doSwipe(true); }
  if (e.key==='ArrowLeft'  && swipingActive) { e.preventDefault(); doSwipe(false); }
});

// ══════════════════════════════════════════
// WHEEL CANVAS
// ══════════════════════════════════════════
const WHEEL_COLORS = ['#FFE566','#FFB3B3','#FFCBA4','#B5EAD7','#9BD8E8','#E0C4E8','#FFB3D4','#A8E6CF'];
let visualItems  = [];   // 8 foods shown on wheel each spin

function refreshVisualItems() {
  const pool = isGuestMode ? guestItems : activeItems();
  if (!pool.length) { visualItems = []; return; }
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  visualItems = shuffled.slice(0, Math.min(8, shuffled.length));
}

function drawWheel() {
  if (!visualItems.length) refreshVisualItems();
  renderWheel(visualItems, currentAngle);
}

function renderWheel(items, angle) {
  const canvas = document.getElementById('wheel-canvas');
  const ctx    = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2, r = W / 2 - 4;

  ctx.clearRect(0, 0, W, H);

  if (!items.length) {
    // Empty state
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF9E6'; ctx.fill();
    ctx.font = '56px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('🍽️', cx, cy - 20);
    ctx.font = 'bold 24px Inter,sans-serif'; ctx.fillStyle = '#C8B89A';
    ctx.fillText('Nothing to spin', cx, cx + 46);
    return;
  }

  const n = items.length;
  const slice = (Math.PI * 2) / n;

  items.forEach((item, i) => {
    const start = angle + i * slice - Math.PI / 2;
    const end   = start + slice;
    const mid   = start + slice / 2;

    // Slice fill
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
    ctx.fill();

    // Divider
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Emoji only — centered in slice
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(mid);
    ctx.font = '38px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.emoji, r * 0.62, 0);
    ctx.restore();
  });

  // Outer ring stroke
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 4; ctx.stroke();

  // Center cap
  ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'white'; ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.07)'; ctx.lineWidth = 2; ctx.stroke();
  ctx.font = '22px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('🎡', cx, cy);
}

// ══════════════════════════════════════════
// SPIN ANIMATION
// ══════════════════════════════════════════
function startSpin() {
  const pool = isGuestMode ? guestItems : activeItems();
  if (!pool.length) { showToast('All foods blocked! Restore some in Browse.'); return; }
  if (isSpinning) return;

  isSpinning = true;
  document.getElementById('spin-btn').disabled = true;

  // Fresh set of 8 for this spin
  refreshVisualItems();
  renderWheel(visualItems, currentAngle);

  const n          = visualItems.length;
  const slice      = (Math.PI * 2) / n;
  const winnerIdx  = Math.floor(Math.random() * n);
  const winner     = visualItems[winnerIdx];

  // Aim pointer (top = -π/2) at center of winning slice
  const winnerMid  = winnerIdx * slice + slice / 2;
  const extraSpins = (2 + Math.random() * 1) * Math.PI * 2;   // 2–3 full rotations
  const target     = currentAngle + extraSpins
                     + ((Math.PI * 2) - ((currentAngle % (Math.PI * 2)) + winnerMid))
                     + Math.PI * 2;

  const from = currentAngle;
  const dur  = 900 + Math.random() * 200;   // 0.9 – 1.1 s
  const t0   = performance.now();

  function animate(now) {
    const p = Math.min((now - t0) / dur, 1);
    currentAngle = from + (target - from) * easeOut(p);
    renderWheel(visualItems, currentAngle);
    if (p < 1) { requestAnimationFrame(animate); return; }
    isSpinning = false;
    document.getElementById('spin-btn').disabled = false;
    lastResult = winner;
    showResult(winner);
  }

  requestAnimationFrame(animate);
}

function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

// ══════════════════════════════════════════
// RESULT
// ══════════════════════════════════════════
function showResult(item) {
  document.getElementById('result-emoji').textContent      = item.emoji;
  document.getElementById('result-dish').textContent       = getDish(item);
  document.getElementById('result-restaurant').textContent = item.restaurant;
  document.getElementById('result-overlay').classList.add('open');
}

function closeResult() {
  document.getElementById('result-overlay').classList.remove('open');
}

function dislikeResult() {
  if (!lastResult) return;
  blockedIds.add(lastResult.id);
  saveToStorage();
  renderStats();
  closeResult();
  showToast(`${lastResult.emoji} Blocked — spinning again…`);
  setTimeout(startSpin, 500);
}

// ══════════════════════════════════════════
// SHARE
// ══════════════════════════════════════════
function shareWheel() {
  const url = `${location.origin}${location.pathname}`;
  navigator.clipboard.writeText(url)
    .then(() => showToast('🔗 Link copied!'))
    .catch(() => prompt('Share this link:', url));
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ══════════════════════════════════════════
// FIREBASE CONFIG
// ⚠️  Replace ALL values below with yours
//     from Firebase Console → Project Settings → Your apps → </> Web
// ══════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAQ5OtWz9K85uX3hMNup6181FwyrMqQlEk",
  authDomain:        "whattoeat-74e0f.firebaseapp.com",
  databaseURL:       "https://whattoeat-74e0f-default-rtdb.firebaseio.com",
  projectId:         "whattoeat-74e0f",
  storageBucket:     "whattoeat-74e0f.firebasestorage.app",
  messagingSenderId: "261773516273",
  appId:             "1:261773516273:web:e3138946d20a49db4cf850"
};

let db = null;
let firebaseReady = false;

function initFirebase() {
  if (firebaseReady) return true;
  if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
    showToast('⚠️ Paste your Firebase config first!');
    return false;
  }
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.database();
    firebaseReady = true;
    return true;
  } catch(e) {
    showToast('Firebase error — check config');
    console.error(e);
    return false;
  }
}

// ══════════════════════════════════════════
// MATCH STATE
// ══════════════════════════════════════════
let matchRoomId    = null;
let matchRole      = null;   // 'host' | 'guest'
let matchFoods     = [];     // full combined pool from Firebase
let swipeQueue     = [];     // current batch of 20 (locally shuffled)
let matchIndex     = 0;      // index within swipeQueue
let usedIds        = new Set(); // food IDs already shown
let batchNum       = 0;
const BATCH_SIZE   = 20;
let mySwipes       = {};     // {foodId: true|false}
let theirSwipes    = {};
let foundMatches   = [];
let shownMatchIds  = new Set();
let matchListeners = [];     // Firebase refs to .off() on leave
let swipingActive  = false;
let roomBlocked    = new Set(); // food IDs blocked only in this room session

// ══════════════════════════════════════════
// ROOM ID
// ══════════════════════════════════════════
function genRoomId() {
  let id = '';
  for (let i = 0; i < 6; i++) id += Math.floor(Math.random() * 10);
  return id;
}

// ══════════════════════════════════════════
// COMBINED FOOD POOL
// ══════════════════════════════════════════
function buildCombinedPool(hostPrefs, guestPrefs) {
  const hostBlocked  = new Set(hostPrefs?.blockedIds  || []);
  const guestBlocked = new Set(guestPrefs?.blockedIds || []);
  const hostCustom   = hostPrefs?.customFoods  || [];
  const guestCustom  = guestPrefs?.customFoods || [];

  const seen = new Set();
  const pool = [];

  const dedupeKey = f => `${f.dish}|${f.restaurant}`.toLowerCase();

  // FOOD_DB: not blocked by either
  for (const f of FOOD_DB) {
    if (!hostBlocked.has(f.id) && !guestBlocked.has(f.id)) {
      seen.add(f.id);
      pool.push({...f, _source: 'db'});
    }
  }

  // Host's custom foods: not blocked by guest
  for (const f of hostCustom) {
    if (!guestBlocked.has(f.id) && !seen.has(f.id)) {
      if (!pool.some(p => dedupeKey(p) === dedupeKey(f))) {
        seen.add(f.id);
        pool.push({...f, _source: 'host'});
      }
    }
  }

  // Guest's custom foods: not blocked by host
  for (const f of guestCustom) {
    if (!hostBlocked.has(f.id) && !seen.has(f.id)) {
      if (!pool.some(p => dedupeKey(p) === dedupeKey(f))) {
        seen.add(f.id);
        pool.push({...f, _source: 'guest'});
      }
    }
  }

  // Shuffle
  return pool.sort(() => Math.random() - 0.5);
}

// ══════════════════════════════════════════
// CREATE ROOM (host)
// ══════════════════════════════════════════
async function createRoom() {
  if (!initFirebase()) return;

  matchRoomId = genRoomId();
  matchRole   = 'host';

  const myPrefs = { blockedIds: [...blockedIds], customFoods };

  try {
    await db.ref(`rooms/${matchRoomId}`).set({
      status:    'waiting',
      createdAt: Date.now(),
      host:      { prefs: myPrefs, ready: true },
      guest:     null
    });

    document.getElementById('room-code-display').textContent = matchRoomId;
    document.getElementById('pname-me').textContent = 'You (host)';
    showMsub('msub-waiting');

    // Watch for guest joining
    const guestRef = db.ref(`rooms/${matchRoomId}/guest`);
    matchListeners.push(guestRef);
    guestRef.on('value', snap => {
      const g = snap.val();
      if (g && g.ready) {
        document.getElementById('pstatus-friend').textContent = '✓ Joined!';
        document.getElementById('pcard-friend').classList.add('you');
        document.getElementById('waiting-dot').classList.add('connected');
        document.getElementById('waiting-text').textContent = 'Building your menu…';
        hostStartGame();
      }
    });

    // Watch for room closure (friend left)
    const statusRefH = db.ref(`rooms/${matchRoomId}/status`);
    matchListeners.push(statusRefH);
    statusRefH.on('value', snap => {
      if (snap.val() === 'closed' && matchRoomId) onFriendLeft();
    });

  } catch(e) {
    showToast('Error creating room 😕');
    console.error(e);
  }
}

// Re-attach host listeners when host reopens their own share link

// Host reads both prefs, computes pool, writes foods, starts game
async function hostStartGame() {
  if (matchRole !== 'host') return;
  try {
    const snap = await db.ref(`rooms/${matchRoomId}`).once('value');
    const room = snap.val();
    if (!room?.guest) return;

    const hostPrefs  = room.host?.prefs  || {};
    const guestPrefs = room.guest?.prefs || {};
    const pool = buildCombinedPool(hostPrefs, guestPrefs);
    await db.ref(`rooms/${matchRoomId}/foods`).set(pool);
    await db.ref(`rooms/${matchRoomId}/status`).set('active');

    beginSwiping(pool);
  } catch(e) { console.error('hostStartGame error', e); }
}

// ══════════════════════════════════════════
// JOIN ROOM (guest)
// ══════════════════════════════════════════


async function joinRoom(codeOverride) {
  if (!initFirebase()) return;

  const code = (codeOverride || document.getElementById('join-code-input')?.value || '')
    .replace(/\D/g,'').slice(0, 6);

  if (code.length !== 6) { showToast('Enter the 6-digit code'); return; }

  try {
    const snap = await db.ref(`rooms/${code}`).once('value');
    const room = snap.val();

    if (!room)                     { showToast('Room not found 🤔'); return; }
    if (room.status !== 'waiting') { showToast('Room is already active or closed'); return; }
    if (room.guest?.ready)         { showToast('Room is full! Did you create this room? Tap "I made this room" below.'); return; }

    matchRoomId = code;
    matchRole   = 'guest';

    const myPrefs = { blockedIds: [...blockedIds], customFoods };
    await db.ref(`rooms/${code}/guest`).set({ prefs: myPrefs, ready: true });

    document.getElementById('room-code-display').textContent = matchRoomId;
    document.getElementById('pname-me').textContent   = 'You (guest)';
    document.getElementById('pstatus-friend').textContent = '✓ Hosting';
    document.getElementById('pcard-friend').classList.add('you');
    document.getElementById('waiting-dot').classList.add('connected');
    document.getElementById('waiting-text').textContent = 'Host is building your menu…';
    showMsub('msub-waiting');

    // Wait for host to write the foods
    const foodsRef = db.ref(`rooms/${code}/foods`);
    matchListeners.push(foodsRef);
    foodsRef.on('value', snap => {
      const foods = snap.val();
      if (foods && !swipingActive) beginSwiping(foods);
    });

    // Watch for room closure (host left)
    const statusRefG = db.ref(`rooms/${code}/status`);
    matchListeners.push(statusRefG);
    statusRefG.on('value', snap => {
      if (snap.val() === 'closed' && matchRoomId) onFriendLeft();
    });

  } catch(e) {
    showToast('Error joining room 😕');
    console.error(e);
  }
}

// ══════════════════════════════════════════
// BEGIN SWIPING
// ══════════════════════════════════════════
function loadNextBatch() {
  const remaining = matchFoods.filter(f => !usedIds.has(f.id));
  if (!remaining.length) return false;
  // Each client shuffles independently — different order per person
  const shuffled = [...remaining].sort(() => Math.random() - 0.5);
  swipeQueue = shuffled.slice(0, BATCH_SIZE);
  swipeQueue.forEach(f => usedIds.add(f.id));
  matchIndex = 0;
  batchNum++;
  if (batchNum > 1) showToast(`🎴 Next ${swipeQueue.length} cards loaded!`);
  return true;
}

function beginSwiping(foodsArray) {
  if (swipingActive) return;
  swipingActive  = true;
  matchFoods     = foodsArray;
  swipeQueue     = [];
  usedIds        = new Set();
  matchIndex     = 0;
  batchNum       = 0;
  mySwipes       = {};
  theirSwipes    = {};
  foundMatches   = [];
  shownMatchIds  = new Set();
  loadNextBatch();

  // Real-time listener for their swipes
  const theirRole = matchRole === 'host' ? 'guest' : 'host';
  const swipesRef = db.ref(`rooms/${matchRoomId}/swipes/${theirRole}`);
  matchListeners.push(swipesRef);
  swipesRef.on('value', snap => {
    theirSwipes = snap.val() || {};
    checkIncomingMatches();
    renderFriendLikes();
  });

  showMsub('msub-swiping');
  renderSwipeCard();
  setupDrag();
}

function renderSwipeCard() {
  // Skip room-blocked foods in current batch
  while (matchIndex < swipeQueue.length && roomBlocked.has(swipeQueue[matchIndex].id)) {
    matchIndex++;
  }
  // If batch exhausted, load next 20
  if (matchIndex >= swipeQueue.length) {
    const hasMore = loadNextBatch();
    if (!hasMore) { endSwiping(); return; }
    // Skip blocked in new batch too
    while (matchIndex < swipeQueue.length && roomBlocked.has(swipeQueue[matchIndex].id)) {
      matchIndex++;
    }
    if (matchIndex >= swipeQueue.length) { endSwiping(); return; }
  }
  const f = swipeQueue[matchIndex];
  document.getElementById('swipe-emoji').textContent = f.emoji;
  document.getElementById('swipe-dish').textContent  = getDish(f);
  document.getElementById('swipe-rest').textContent  = f.restaurant;
  document.getElementById('swipe-progress').textContent =
    `Batch ${batchNum} · Card ${matchIndex + 1} of ${swipeQueue.length}`;

  const card = document.getElementById('swipe-card');
  card.classList.remove('fly-left','fly-right','show-like','show-nope');
  card.style.transform = '';
}

function doSwipe(liked) {
  if (matchIndex >= swipeQueue.length || !swipingActive) return;
  const food = swipeQueue[matchIndex];
  const card = document.getElementById('swipe-card');

  card.classList.add(liked ? 'fly-right' : 'fly-left');
  card.style.transform = '';

  mySwipes[food.id] = liked;
  if (liked) {
    db.ref(`rooms/${matchRoomId}/swipes/${matchRole}/${food.id}`).set(true);
    // Immediate match check (their swipe already recorded)
    if (theirSwipes[food.id] === true && !shownMatchIds.has(food.id)) {
      shownMatchIds.add(food.id);
      foundMatches.push(food);
      setTimeout(() => showMatch(food), 380);
      matchIndex++;
      return;
    }
  }

  matchIndex++;
  setTimeout(renderSwipeCard, 370);
}

// Called when their swipes update live
function checkIncomingMatches() {
  for (const [id, liked] of Object.entries(mySwipes)) {
    if (liked && theirSwipes[id] === true && !shownMatchIds.has(id)) {
      const food = matchFoods.find(f => f.id === id);
      if (food) {
        shownMatchIds.add(id);
        foundMatches.push(food);
        showMatch(food);
      }
    }
  }
}

function showMatch(food) {
  document.getElementById('match-food-emoji').textContent = food.emoji;
  document.getElementById('match-food-dish').textContent  = getDish(food);
  document.getElementById('match-food-rest').textContent  = food.restaurant;
  showMsub('msub-match');
}

function resumeSwiping() {
  showMsub('msub-swiping');
  renderSwipeCard();
}

function renderFriendLikes() {
  const likes = Object.entries(theirSwipes)
    .filter(([,v]) => v === true)
    .map(([id]) => matchFoods.find(f => f.id === id))
    .filter(Boolean);

  const el = document.getElementById('friend-likes');
  if (!el) return;
  if (!likes.length) {
    el.innerHTML = '<span style="opacity:0.6">Waiting for friend\'s choices…</span>';
    return;
  }
  el.innerHTML = `<div style="margin-bottom:4px">Friend liked:</div>
    <div class="friend-like-chips">${likes.map(f =>
      `<span class="friend-chip">${f.emoji} ${esc(getDish(f))}</span>`).join('')}</div>`;
}

function endSwiping() {
  const doneIcon  = document.getElementById('done-icon');
  const doneTitle = document.getElementById('done-title');
  const doneDesc  = document.getElementById('done-desc');
  const doneList  = document.getElementById('done-list');

  if (foundMatches.length > 0) {
    doneIcon.textContent  = '🎊';
    doneTitle.textContent = `${foundMatches.length} Match${foundMatches.length > 1 ? 'es' : ''}!`;
    doneDesc.textContent  = 'You both liked:';
    doneList.innerHTML    = foundMatches.map(f => `
      <div class="nomatch-row">
        <div class="nomatch-emoji">${f.emoji}</div>
        <div>
          <div class="nomatch-dish">${esc(getDish(f))}</div>
          <div class="nomatch-rest">${esc(f.restaurant)}</div>
        </div>
      </div>`).join('');
  } else {
    doneIcon.textContent  = '😅';
    doneTitle.textContent = 'No matches this time';
    doneDesc.textContent  = 'You and your friend had totally different taste! Try again?';
    doneList.innerHTML    = '';
  }
  showMsub('msub-done');
}

// ══════════════════════════════════════════
// DRAG TO SWIPE
// ══════════════════════════════════════════
function setupDrag() {
  const card = document.getElementById('swipe-card');
  if (!card) return;
  let startX = 0, dx = 0, dragging = false;
  const THRESHOLD = 75;

  function onStart(e) {
    startX   = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    dragging = true;
  }
  function onMove(e) {
    if (!dragging) return;
    dx = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - startX;
    card.style.transform = `translateX(${dx}px) rotate(${dx * 0.06}deg)`;
    card.classList.toggle('show-like', dx > 30);
    card.classList.toggle('show-nope', dx < -30);
  }
  function onEnd() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove('show-like','show-nope');
    if      (dx >  THRESHOLD) doSwipe(true);
    else if (dx < -THRESHOLD) doSwipe(false);
    else { card.style.transform = ''; }
    dx = 0;
  }

  card.addEventListener('mousedown',  onStart);
  card.addEventListener('touchstart', onStart, {passive:true});
  window.addEventListener('mousemove',  onMove);
  window.addEventListener('touchmove',  onMove, {passive:true});
  window.addEventListener('mouseup',    onEnd);
  window.addEventListener('touchend',   onEnd);
}

// ══════════════════════════════════════════
// LEAVE / CLEANUP
// ══════════════════════════════════════════
function leaveRoom(notify = true) {
  if (!matchRoomId) return; // prevent re-entry
  const roomId = matchRoomId;
  matchRoomId   = null;     // null immediately so status listener doesn't re-trigger

  // Detach all Firebase listeners
  matchListeners.forEach(ref => { try { ref.off(); } catch(e){} });
  matchListeners = [];

  // Tell Firebase the room is closed so friend gets redirected
  if (notify && db && firebaseReady) {
    db.ref(`rooms/${roomId}/status`).set('closed').catch(() => {});
  }

  matchRole     = null;
  matchFoods    = [];
  swipeQueue    = [];
  usedIds       = new Set();
  matchIndex    = 0;
  batchNum      = 0;
  mySwipes      = {};
  theirSwipes   = {};
  foundMatches  = [];
  shownMatchIds = new Set();
  swipingActive = false;
  roomBlocked   = new Set();

  const inp = document.getElementById('join-code-input');
  if (inp) inp.value = '';
  showMsub('msub-lobby');
}

function onFriendLeft() {
  if (!matchRoomId) return; // already left
  showToast('👋 Your friend left — room closed');
  leaveRoom(false); // don't write 'closed' again
}

// ══════════════════════════════════════════
// COPY INVITE LINK
// ══════════════════════════════════════════
function copyRoomLink() {
  const url = `${location.origin}${location.pathname}`;
  navigator.clipboard.writeText(url)
    .then(() => showToast('🔗 Link copied! Share with your friend'))
    .catch(() => prompt('Share this link with your friend:', url));
}

function copyCode() {
  if (!matchRoomId) return;
  navigator.clipboard.writeText(matchRoomId)
    .then(() => showToast('📋 Code copied!'))
    .catch(() => {});
}

// ══════════════════════════════════════════
// ROOM MENU MODAL
// ══════════════════════════════════════════
let currentRoomTab = 'foods';
let rmenuSelectedEmoji = '🍕';

function openRoomMenu(tab = 'foods') {
  document.getElementById('room-menu-overlay').classList.add('open');
  switchRoomTab(tab);
}

function closeRoomMenu(e) {
  if (e?.target && e.target !== document.getElementById('room-menu-overlay')) return;
  document.getElementById('room-menu-overlay').classList.remove('open');
}

function switchRoomTab(tab) {
  currentRoomTab = tab;
  ['foods','blocked','add'].forEach(t => {
    document.getElementById(`rmt-${t}`).classList.toggle('active', t === tab);
  });
  if (tab === 'foods')   renderRoomFoods();
  if (tab === 'blocked') renderRoomBlocked();
  if (tab === 'add')     renderRoomAdd();
}

// Helper: get label for a food based on its source and my role
function getFoodLabel(food) {
  if (food._source === 'db') return null;
  const isMine = (matchRole === 'host' && food._source === 'host') ||
                 (matchRole === 'guest' && food._source === 'guest');
  return isMine ? 'mine' : 'theirs';
}

function renderRoomFoods() {
  const body = document.getElementById('room-menu-body');
  const visible = matchFoods.filter(f => !roomBlocked.has(f.id));
  if (!visible.length) {
    body.innerHTML = '<div class="rmenu-empty">No foods in the menu 😅</div>';
    return;
  }

  body.innerHTML = visible.map(f => {
    const labelType = getFoodLabel(f);
    const labelText = labelType === 'mine' ? '✨ My add' : labelType === 'theirs' ? '✨ Friend\'s add' : '';
    const isFriendsFood = labelType === 'theirs';
    return `
      <div class="rmenu-food-row">
        <div class="rmenu-emoji">${f.emoji}</div>
        <div class="rmenu-info">
          <div class="rmenu-dish">${esc(getDish(f))}</div>
          <div class="rmenu-rest">${esc(f.restaurant)}</div>
          ${labelText ? `<div class="rmenu-tag ${labelType}">${labelText}</div>` : ''}
        </div>
        <div class="rmenu-actions">
          ${isFriendsFood ? `<button class="rmenu-btn save" onclick="saveToMyList('${f.id}')">+ Save</button>` : ''}
          <button class="rmenu-btn block" onclick="roomBlockFood('${f.id}')">Block</button>
        </div>
      </div>`;
  }).join('');
}

function renderRoomBlocked() {
  const body = document.getElementById('room-menu-body');
  const blocked = matchFoods.filter(f => roomBlocked.has(f.id));
  if (!blocked.length) {
    body.innerHTML = '<div class="rmenu-empty">No blocked foods in this room 🎉</div>';
    return;
  }
  body.innerHTML = `<div class="rmenu-section-label">Blocked in this room (only you)</div>` +
    blocked.map(f => `
      <div class="rmenu-food-row">
        <div class="rmenu-emoji">${f.emoji}</div>
        <div class="rmenu-info">
          <div class="rmenu-dish">${esc(getDish(f))}</div>
          <div class="rmenu-rest">${esc(f.restaurant)}</div>
        </div>
        <div class="rmenu-actions">
          <button class="rmenu-btn unblock" onclick="roomUnblockFood('${f.id}')">Restore</button>
        </div>
      </div>`).join('');
}

function renderRoomAdd() {
  const body = document.getElementById('room-menu-body');
  body.innerHTML = `
    <div class="rmenu-add-form">
      <div>
        <div class="form-label" style="margin-bottom:8px">Pick an emoji</div>
        <div class="rmenu-emoji-grid" id="rmenu-emoji-grid"></div>
      </div>
      <div>
        <div class="form-label" style="margin-bottom:6px">Dish name</div>
        <input class="form-input" id="rmenu-dish" placeholder="e.g. Spicy Tuna Roll" maxlength="50">
      </div>
      <div>
        <div class="form-label" style="margin-bottom:6px">Restaurant</div>
        <input class="form-input" id="rmenu-restaurant" placeholder="e.g. Hana Sushi (optional)" maxlength="50">
      </div>
      <button class="rmenu-add-btn" onclick="addFoodToRoom()">Add to room + my list</button>
    </div>`;

  // Build emoji grid
  rmenuSelectedEmoji = '🍕';
  document.getElementById('rmenu-emoji-grid').innerHTML = FOOD_EMOJIS.map(e =>
    `<button class="rmenu-emoji-btn ${e === rmenuSelectedEmoji ? 'selected' : ''}"
      onclick="selectRmenuEmoji('${e}',this)">${e}</button>`
  ).join('');
}

function selectRmenuEmoji(emoji, btn) {
  rmenuSelectedEmoji = emoji;
  document.querySelectorAll('.rmenu-emoji-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function roomBlockFood(id) {
  roomBlocked.add(id);
  showToast('Blocked in this room 🚫');
  renderRoomFoods();
}

function roomUnblockFood(id) {
  roomBlocked.delete(id);
  showToast('Food restored ✓');
  renderRoomBlocked();
}

function saveToMyList(id) {
  const food = matchFoods.find(f => f.id === id);
  if (!food) return;
  // Check not already in local customFoods
  if (customFoods.some(f => f.dish === food.dish && f.restaurant === food.restaurant)) {
    showToast('Already in your list!');
    return;
  }
  const newFood = { id: 'c' + Date.now(), emoji: food.emoji, dish: food.dish, restaurant: food.restaurant, cat: 'custom' };
  customFoods.push(newFood);
  saveToStorage();
  showToast(`${food.emoji} Saved to your list!`);
  renderRoomFoods();
}

function addFoodToRoom() {
  const dish       = document.getElementById('rmenu-dish')?.value.trim();
  const restaurant = document.getElementById('rmenu-restaurant')?.value.trim();
  if (!dish) { document.getElementById('rmenu-dish')?.focus(); return; }

  const newFood = {
    id: 'r' + Date.now(),
    emoji: rmenuSelectedEmoji,
    dish, restaurant: restaurant || '',
    cat: 'custom',
    _source: matchRole  // tag as mine
  };

  // Add to this room's swipe queue
  matchFoods.push(newFood);

  // Also save to my local list
  const forStorage = { id: 'c' + Date.now(), emoji: rmenuSelectedEmoji, dish, restaurant, cat: 'custom' };
  customFoods.push(forStorage);
  saveToStorage();

  showToast(`${rmenuSelectedEmoji} ${dish} added!`);
  document.getElementById('room-menu-overlay').classList.remove('open');
}

// ══════════════════════════════════════════
// MATCH SUB-VIEW SWITCHER
// ══════════════════════════════════════════
function showMsub(id) {
  document.querySelectorAll('.msub').forEach(el => el.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}

// ══════════════════════════════════════════
// TUTORIAL SYSTEM
// ══════════════════════════════════════════

const TUTORIAL_ART = {
  spin: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="46" r="32" fill="#FFF9E6" stroke="#F0E9D2" stroke-width="2"/>
    <path d="M60 46 L60 14 A32 32 0 0 1 87.7 62 Z" fill="#FFE566"/>
    <path d="M60 46 L87.7 62 A32 32 0 0 1 32.3 62 Z" fill="#FFB3B3"/>
    <path d="M60 46 L32.3 62 A32 32 0 0 1 60 14 Z" fill="#B5EAD7"/>
    <circle cx="60" cy="46" r="7" fill="white" stroke="#F0E9D2" stroke-width="2"/>
    <polygon points="60,6 54,18 66,18" fill="#F5C518" stroke="#E5B008" stroke-width="1"/>
    <text x="68" y="34" font-size="12" text-anchor="middle">🍕</text>
    <text x="76" y="62" font-size="12" text-anchor="middle">🍔</text>
    <text x="40" y="58" font-size="12" text-anchor="middle">🍜</text>
    <text x="20" y="20" font-size="11">✨</text>
    <text x="96" y="22" font-size="10">⭐</text>
  </svg>`,

  block: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="56" rx="28" ry="8" fill="#F0E9D2"/>
    <path d="M32 50 Q32 74 60 74 Q88 74 88 50 Z" fill="#FFF9E6" stroke="#F0E9D2" stroke-width="2"/>
    <path d="M42 55 Q50 50 58 55 Q66 60 74 55" stroke="#FFB3B3" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M44 62 Q53 57 62 62 Q70 66 76 62" stroke="#FFCBA4" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="60" cy="44" r="22" fill="none" stroke="#E85D50" stroke-width="4" opacity="0.9"/>
    <line x1="44" y1="28" x2="76" y2="60" stroke="#E85D50" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
    <text x="96" y="20" font-size="14">😕</text>
  </svg>`,

  add: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="62" rx="30" ry="9" fill="#F0E9D2"/>
    <ellipse cx="60" cy="58" rx="26" ry="7" fill="white" stroke="#F0E9D2" stroke-width="2"/>
    <text x="60" y="64" font-size="20" text-anchor="middle">🍱</text>
    <circle cx="82" cy="26" r="16" fill="#FFE566" stroke="white" stroke-width="3"/>
    <line x1="82" y1="18" x2="82" y2="34" stroke="#2D2410" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="74" y1="26" x2="90" y2="26" stroke="#2D2410" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="24" cy="22" r="4" fill="#FFE566"/>
    <circle cx="18" cy="38" r="3" fill="#FFB3D4"/>
    <circle cx="32" cy="14" r="3" fill="#B5EAD7"/>
    <text x="20" y="20" font-size="10">✨</text>
  </svg>`,

  match: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 38 C38 32 30 28 26 34 C22 40 30 50 38 56 C46 50 54 40 50 34 C46 28 38 32 38 38 Z" fill="#FFB3D4"/>
    <path d="M82 38 C82 32 74 28 70 34 C66 40 74 50 82 56 C90 50 98 40 94 34 C90 28 82 32 82 38 Z" fill="#FFE566" stroke="#F5C518" stroke-width="1.5"/>
    <circle cx="56" cy="46" r="3" fill="#F0E9D2"/>
    <circle cx="60" cy="44" r="4" fill="#F5C518"/>
    <circle cx="64" cy="46" r="3" fill="#F0E9D2"/>
    <text x="33" y="44" font-size="11" text-anchor="middle">🍕</text>
    <text x="87" y="44" font-size="11" text-anchor="middle">🍕</text>
    <text x="52" y="22" font-size="13">🎉</text>
    <text x="18" y="26" font-size="10">✨</text>
    <text x="94" y="26" font-size="10">✨</text>
  </svg>`,

  roomcode: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Left phone -->
    <rect x="12" y="20" width="30" height="50" rx="6" fill="white" stroke="#F0E9D2" stroke-width="2"/>
    <rect x="16" y="26" width="22" height="30" rx="3" fill="#FFF9E6"/>
    <text x="27" y="46" font-size="13" text-anchor="middle">🙂</text>
    <!-- Right phone -->
    <rect x="78" y="20" width="30" height="50" rx="6" fill="white" stroke="#F0E9D2" stroke-width="2"/>
    <rect x="82" y="26" width="22" height="30" rx="3" fill="#FFF9E6"/>
    <text x="93" y="46" font-size="13" text-anchor="middle">😊</text>
    <!-- Code badge in center -->
    <rect x="34" y="32" width="52" height="26" rx="10" fill="#FFE566" stroke="#F5C518" stroke-width="1.5"/>
    <text x="60" y="43" font-size="8.5" font-weight="bold" fill="#2D2410" text-anchor="middle" font-family="monospace">ABC123</text>
    <!-- Arrow -->
    <text x="60" y="30" font-size="11" text-anchor="middle">📤</text>
    <!-- Phone dots -->
    <circle cx="27" cy="64" r="3" fill="#F0E9D2"/>
    <circle cx="93" cy="64" r="3" fill="#F0E9D2"/>
  </svg>`,

  swipe: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Card -->
    <rect x="34" y="12" width="52" height="66" rx="12" fill="white" stroke="#F0E9D2" stroke-width="2"/>
    <text x="60" y="54" font-size="28" text-anchor="middle">🍔</text>
    <!-- NOPE label on card -->
    <text x="42" y="28" font-size="7.5" font-weight="bold" fill="#E85D50" opacity="0.75">NOPE</text>
    <!-- LIKE label on card -->
    <text x="74" y="28" font-size="7.5" font-weight="bold" fill="#6B8F4E" opacity="0.75" text-anchor="end">LIKE</text>
    <!-- Left circle (nope) -->
    <circle cx="16" cy="45" r="12" fill="#FFB3B3" opacity="0.9"/>
    <text x="16" y="50" font-size="13" text-anchor="middle">✕</text>
    <!-- Right circle (like) -->
    <circle cx="104" cy="45" r="12" fill="#B5EAD7" opacity="0.9"/>
    <text x="104" y="50" font-size="12" text-anchor="middle">❤️</text>
    <!-- Left arrow -->
    <line x1="32" y1="45" x2="22" y2="45" stroke="#E85D50" stroke-width="2" stroke-linecap="round"/>
    <polygon points="22,45 27,42 27,48" fill="#E85D50"/>
    <!-- Right arrow -->
    <line x1="88" y1="45" x2="98" y2="45" stroke="#6B8F4E" stroke-width="2" stroke-linecap="round"/>
    <polygon points="98,45 93,42 93,48" fill="#6B8F4E"/>
  </svg>`,

  menu: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Clipboard body -->
    <rect x="26" y="18" width="68" height="62" rx="8" fill="white" stroke="#F0E9D2" stroke-width="2"/>
    <!-- Clip tab -->
    <rect x="42" y="12" width="36" height="14" rx="5" fill="#FFE566" stroke="#F5C518" stroke-width="1.5"/>
    <!-- Two people icon -->
    <text x="82" y="34" font-size="13">👥</text>
    <!-- Menu rows -->
    <text x="34" y="40" font-size="12">🍕</text>
    <text x="50" y="40" font-size="10" fill="#2D2410">Pizza</text>
    <text x="84" y="40" font-size="11" fill="#6B8F4E">✓</text>
    <text x="34" y="55" font-size="12">🍔</text>
    <text x="50" y="55" font-size="10" fill="#2D2410">Burger</text>
    <text x="84" y="55" font-size="11" fill="#6B8F4E">✓</text>
    <!-- Blocked item (strikethrough) -->
    <text x="34" y="70" font-size="12">🍣</text>
    <text x="50" y="70" font-size="10" fill="#C0B8A8">Sushi</text>
    <line x1="49" y1="68" x2="75" y2="68" stroke="#E85D50" stroke-width="1.5" opacity="0.7"/>
    <text x="84" y="70" font-size="10" fill="#E85D50">✕</text>
  </svg>`,

  matchresult: `<svg width="120" height="88" viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Confetti pieces -->
    <rect x="16" y="10" width="9" height="9" rx="2" fill="#FFE566" transform="rotate(25 20 14)"/>
    <rect x="96" y="12" width="8" height="8" rx="2" fill="#FFB3D4" transform="rotate(-20 100 16)"/>
    <rect x="10" y="52" width="7" height="7" rx="1" fill="#B5EAD7" transform="rotate(40 13 55)"/>
    <rect x="103" y="50" width="7" height="7" rx="1" fill="#FFCBA4" transform="rotate(-30 106 53)"/>
    <circle cx="22" cy="38" r="4" fill="#FFB3B3"/>
    <circle cx="100" cy="34" r="4" fill="#FFE566"/>
    <!-- Glow circle -->
    <circle cx="60" cy="46" r="30" fill="#FFF9E6" stroke="#FFE566" stroke-width="3"/>
    <!-- Food -->
    <text x="60" y="55" font-size="28" text-anchor="middle">🍕</text>
    <!-- Stars -->
    <text x="8" y="22" font-size="12">⭐</text>
    <text x="102" y="24" font-size="12">⭐</text>
    <!-- Match text -->
    <text x="60" y="84" font-size="8.5" font-weight="bold" fill="#F5C518" text-anchor="middle" letter-spacing="1">MATCH!</text>
  </svg>`
};

const TUTORIAL_STEPS = [
  {
    tab: 'spin',
    anchorFn: () => document.querySelector('.spin-actions'),
    arrow: 'top',
    title: 'Spin to Decide!',
    desc: 'Tap Spin and let the wheel pick your meal at random. Feeling lucky?',
    art: 'spin'
  },
  {
    tab: 'browse',
    anchorFn: () => document.querySelector('.food-row'),
    arrow: 'top',
    title: 'Block What You Hate',
    desc: 'Swipe left on any dish or tap ✕ to block it from your wheel forever.',
    art: 'block'
  },
  {
    tab: 'browse',
    anchorFn: () => document.querySelector('.browse-search-row'),
    arrow: 'top',
    title: 'Add Your Own Food',
    desc: 'Tap "+ Add" to add a custom dish — your secret Chipotle order, anything!',
    art: 'add'
  },
  {
    tab: 'match',
    anchorFn: () => document.querySelector('.match-action-card'),
    arrow: 'top',
    title: 'Match with a Friend',
    desc: 'Create a room and share the code — your friend joins and you both start swiping!',
    art: 'match'
  },
  {
    tab: 'match',
    setupFn: () => {
      document.getElementById('room-code-display').textContent = 'ABC123';
      showMsub('msub-waiting');
    },
    anchorFn: () => document.querySelector('#msub-waiting .room-code-box'),
    arrow: 'top',
    title: 'Share Your Room Code',
    desc: 'Send this code to your friend. They type it in to join — then the swiping begins!',
    art: 'roomcode'
  },
  {
    tab: 'match',
    setupFn: () => {
      document.getElementById('swipe-emoji').textContent = '🍔';
      document.getElementById('swipe-dish').textContent = 'Cheeseburger';
      document.getElementById('swipe-rest').textContent = '';
      document.getElementById('swipe-progress').textContent = 'Card 3 of 20';
      showMsub('msub-swiping');
    },
    anchorFn: () => document.querySelector('.swipe-btns'),
    arrow: 'top',
    title: 'Swipe to Vote',
    desc: 'Like a dish? Tap ❤️ or swipe right. Not feeling it? Tap ✕ or swipe left. Your friend votes independently!',
    art: 'swipe'
  },
  {
    tab: 'match',
    setupFn: () => showMsub('msub-swiping'),
    anchorFn: () => document.querySelector('#msub-swiping .btn-secondary'),
    arrow: 'top',
    title: 'Your Shared Menu',
    desc: 'Tap "View menu" to see all options — includes foods added by both of you, with everyone\'s blocked dishes removed.',
    art: 'menu'
  },
  {
    tab: 'match',
    setupFn: () => {
      document.getElementById('match-food-emoji').textContent = '🍕';
      document.getElementById('match-food-dish').textContent = 'Pepperoni Pizza';
      document.getElementById('match-food-rest').textContent = '';
      showMsub('msub-match');
    },
    anchorFn: () => document.querySelector('.match-food-card'),
    arrow: 'top',
    title: "It's a Match! 🎉",
    desc: "When you both swipe right on the same dish, this screen appears. Dinner decision: officially made!",
    art: 'matchresult'
  }
];

let tutStep = 0;

function initTutorial() {
  if (localStorage.getItem('wte_tutorial_done')) return;
  tutStep = 0;
  showTutorialStep(tutStep);
}

function replayTutorial() {
  tutStep = 0;
  showTutorialStep(tutStep);
}

function showTutorialStep(step) {
  const steps = TUTORIAL_STEPS;
  if (step >= steps.length) { endTutorial(); return; }

  const s = steps[step];
  const card = document.getElementById('tutorial-card');
  const spotlight = document.getElementById('tutorial-spotlight');

  switchTab(s.tab);

  const doPosition = () => {
    if (s.setupFn) s.setupFn();

    const anchor = s.anchorFn();
    if (!anchor) { endTutorial(); return; }

    const rect = anchor.getBoundingClientRect();

    document.getElementById('tut-art').innerHTML = TUTORIAL_ART[s.art];
    document.getElementById('tut-step-label').textContent = `Step ${step + 1} of ${steps.length}`;
    document.getElementById('tut-title').textContent = s.title;
    document.getElementById('tut-desc').textContent = s.desc;
    card.setAttribute('data-arrow', s.arrow);

    const nextBtn = document.getElementById('tut-next-btn');
    nextBtn.textContent = step === steps.length - 1 ? 'Got it! 🎉' : 'Next →';

    const pad = 8;
    spotlight.style.top    = (rect.top    - pad) + 'px';
    spotlight.style.left   = (rect.left   - pad) + 'px';
    spotlight.style.width  = (rect.width  + pad * 2) + 'px';
    spotlight.style.height = (rect.height + pad * 2) + 'px';
    spotlight.classList.add('active');

    const cardH = 260;
    const viewH = window.innerHeight;
    let cardTop = rect.bottom + 18;
    if (cardTop + cardH > viewH - 16) {
      cardTop = rect.top - cardH - 18;
      card.setAttribute('data-arrow', 'bottom');
    }
    card.style.top = cardTop + 'px';
    card.style.bottom = 'auto';

    card.classList.remove('active');
    void card.offsetWidth;
    card.classList.add('active');
  };

  setTimeout(doPosition, 150);
}

function nextTutorialStep() {
  tutStep++;
  if (tutStep >= TUTORIAL_STEPS.length) {
    endTutorial();
  } else {
    showTutorialStep(tutStep);
  }
}

function skipTutorial() {
  endTutorial();
}

function endTutorial() {
  localStorage.setItem('wte_tutorial_done', '1');
  document.getElementById('tutorial-card').classList.remove('active');
  document.getElementById('tutorial-spotlight').classList.remove('active');
  // Restore match tab to lobby state
  showMsub('msub-lobby');
}
