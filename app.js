// Tap & Speak (Flashcard 1-by-1)
// Features: Listen (always from start), Prev, Next, Shuffle On/Off, Speed slider
// Files: img/001.jpg ~ img/141.jpg, audio/001.mp3 ~ audio/141.mp3
// (Updated word list per user)

const items = [
  { text: "hands", img: "img/001.jpg", audio: "audio/001.mp3" },
  { text: "mailbox", img: "img/002.jpg", audio: "audio/002.mp3" },
  { text: "drinks", img: "img/003.jpg", audio: "audio/003.mp3" },
  { text: "lamp", img: "img/004.jpg", audio: "audio/004.mp3" },
  { text: "dog", img: "img/005.jpg", audio: "audio/005.mp3" },
  { text: "picture", img: "img/006.jpg", audio: "audio/006.mp3" },
  { text: "saleswoman", img: "img/007.jpg", audio: "audio/007.mp3" },
  { text: "rack", img: "img/008.jpg", audio: "audio/008.mp3" },
  { text: "display", img: "img/009.jpg", audio: "audio/009.mp3" },
  { text: "curtain", img: "img/010.jpg", audio: "audio/010.mp3" },
  { text: "mirror", img: "img/011.jpg", audio: "audio/011.mp3" },
  { text: "salesman", img: "img/012.jpg", audio: "audio/012.mp3" },
  { text: "credit card", img: "img/013.jpg", audio: "audio/013.mp3" },
  { text: "bag", img: "img/014.jpg", audio: "audio/014.mp3" },
  { text: "camera", img: "img/015.jpg", audio: "audio/015.mp3" },
  { text: "cashier", img: "img/016.jpg", audio: "audio/016.mp3" },
  { text: "food", img: "img/017.jpg", audio: "audio/017.mp3" },
  { text: "dispenser", img: "img/018.jpg", audio: "audio/018.mp3" },
  { text: "movie", img: "img/019.jpg", audio: "audio/019.mp3" },
  { text: "delivery person", img: "img/020.jpg", audio: "audio/020.mp3" },
  { text: "garbage can", img: "img/021.jpg", audio: "audio/021.mp3" },
  { text: "garbage bag", img: "img/022.jpg", audio: "audio/022.mp3" },
  { text: "counter", img: "img/023.jpg", audio: "audio/023.mp3" },
  { text: "table", img: "img/024.jpg", audio: "audio/024.mp3" },
  { text: "sculpture", img: "img/025.jpg", audio: "audio/025.mp3" },
  { text: "taxi", img: "img/026.jpg", audio: "audio/026.mp3" },
  { text: "driver", img: "img/027.jpg", audio: "audio/027.mp3" },
  { text: "fare", img: "img/028.jpg", audio: "audio/028.mp3" },
  { text: "shelf", img: "img/029.jpg", audio: "audio/029.mp3" },
  { text: "book", img: "img/030.jpg", audio: "audio/030.mp3" },
  { text: "books", img: "img/031.jpg", audio: "audio/031.mp3" },
  { text: "bus driver", img: "img/032.jpg", audio: "audio/032.mp3" },
  { text: "seat", img: "img/033.jpg", audio: "audio/033.mp3" },
  { text: "internet café", img: "img/034.jpg", audio: "audio/034.mp3" },
  { text: "computer", img: "img/035.jpg", audio: "audio/035.mp3" },
  { text: "couple", img: "img/036.jpg", audio: "audio/036.mp3" },
  { text: "menu", img: "img/037.jpg", audio: "audio/037.mp3" },
  { text: "waiter", img: "img/038.jpg", audio: "audio/038.mp3" },
  { text: "necklace", img: "img/039.jpg", audio: "audio/039.mp3" },
  { text: "bowl", img: "img/040.jpg", audio: "audio/040.mp3" },
  { text: "plate", img: "img/041.jpg", audio: "audio/041.mp3" },
  { text: "package", img: "img/042.jpg", audio: "audio/042.mp3" },
  { text: "scale", img: "img/043.jpg", audio: "audio/043.mp3" },
  { text: "envelope", img: "img/044.jpg", audio: "audio/044.mp3" },
  { text: "purse", img: "img/045.jpg", audio: "audio/045.mp3" },
  { text: "chair", img: "img/046.jpg", audio: "audio/046.mp3" },
  { text: "barber", img: "img/047.jpg", audio: "audio/047.mp3" },
  { text: "luggage", img: "img/048.jpg", audio: "audio/048.mp3" },
  { text: "X-ray machine", img: "img/049.jpg", audio: "audio/049.mp3" },
  { text: "security guard", img: "img/050.jpg", audio: "audio/050.mp3" },
  { text: "flight attendant", img: "img/051.jpg", audio: "audio/051.mp3" },
  { text: "seat belt", img: "img/052.jpg", audio: "audio/052.mp3" },
  { text: "carousel", img: "img/053.jpg", audio: "audio/053.mp3" },
  { text: "woman", img: "img/054.jpg", audio: "audio/054.mp3" },
  { text: "women", img: "img/055.jpg", audio: "audio/055.mp3" },
  { text: "shoes", img: "img/056.jpg", audio: "audio/056.mp3" },
  { text: "wrist", img: "img/057.jpg", audio: "audio/057.mp3" },
  { text: "phone", img: "img/058.jpg", audio: "audio/058.mp3" },
  { text: "gloves", img: "img/059.jpg", audio: "audio/059.mp3" },
  { text: "doctor", img: "img/060.jpg", audio: "audio/060.mp3" },
  { text: "cart", img: "img/061.jpg", audio: "audio/061.mp3" },
  { text: "bread", img: "img/062.jpg", audio: "audio/062.mp3" },
  { text: "plastic bag", img: "img/063.jpg", audio: "audio/063.mp3" },
  { text: "water fountain", img: "img/064.jpg", audio: "audio/064.mp3" },
  { text: "telephone number", img: "img/065.jpg", audio: "audio/065.mp3" },
  { text: "vending machine", img: "img/066.jpg", audio: "audio/066.mp3" },
  { text: "balloon", img: "img/067.jpg", audio: "audio/067.mp3" },
  { text: "balloons", img: "img/068.jpg", audio: "audio/068.mp3" },
  { text: "banner", img: "img/069.jpg", audio: "audio/069.mp3" },
  { text: "present", img: "img/070.jpg", audio: "audio/070.mp3" },
  { text: "birthday cake", img: "img/071.jpg", audio: "audio/071.mp3" },
  { text: "escalator", img: "img/072.jpg", audio: "audio/072.mp3" },
  { text: "kitchen sink", img: "img/073.jpg", audio: "audio/073.mp3" },
  { text: "dish rack", img: "img/074.jpg", audio: "audio/074.mp3" },
  { text: "passengers", img: "img/075.jpg", audio: "audio/075.mp3" },
  { text: "sofa", img: "img/076.jpg", audio: "audio/076.mp3" },
  { text: "ring", img: "img/077.jpg", audio: "audio/077.mp3" },
  { text: "wake up", img: "img/078.jpg", audio: "audio/078.mp3" },
  { text: "wash", img: "img/079.jpg", audio: "audio/079.mp3" },
  { text: "brush", img: "img/080.jpg", audio: "audio/080.mp3" },
  { text: "shave", img: "img/081.jpg", audio: "audio/081.mp3" },
  { text: "get dressed", img: "img/082.jpg", audio: "audio/082.mp3" },
  { text: "make", img: "img/083.jpg", audio: "audio/083.mp3" },
  { text: "eat", img: "img/084.jpg", audio: "audio/084.mp3" },
  { text: "squeeze", img: "img/085.jpg", audio: "audio/085.mp3" },
  { text: "spit", img: "img/086.jpg", audio: "audio/086.mp3" },
  { text: "rinse", img: "img/087.jpg", audio: "audio/087.mp3" },
  { text: "dry", img: "img/088.jpg", audio: "audio/088.mp3" },
  { text: "put on", img: "img/089.jpg", audio: "audio/089.mp3" },
  { text: "boil", img: "img/090.jpg", audio: "audio/090.mp3" },
  { text: "pour", img: "img/091.jpg", audio: "audio/091.mp3" },
  { text: "throw", img: "img/092.jpg", audio: "audio/092.mp3" },
  { text: "sit down", img: "img/093.jpg", audio: "audio/093.mp3" },
  { text: "drink", img: "img/094.jpg", audio: "audio/094.mp3" },
  { text: "read", img: "img/095.jpg", audio: "audio/095.mp3" },
  { text: "get on", img: "img/096.jpg", audio: "audio/096.mp3" },
  { text: "show", img: "img/097.jpg", audio: "audio/097.mp3" },
  { text: "hold", img: "img/098.jpg", audio: "audio/098.mp3" },
  { text: "get off", img: "img/099.jpg", audio: "audio/099.mp3" },
  { text: "buckle", img: "img/100.jpg", audio: "audio/100.mp3" },
  { text: "turn", img: "img/101.jpg", audio: "audio/101.mp3" },
  { text: "pay", img: "img/102.jpg", audio: "audio/102.mp3" },
  { text: "walk", img: "img/103.jpg", audio: "audio/103.mp3" },
  { text: "run", img: "img/104.jpg", audio: "audio/104.mp3" },
  { text: "press", img: "img/105.jpg", audio: "audio/105.mp3" },
  { text: "hang", img: "img/106.jpg", audio: "audio/106.mp3" },
  { text: "take off", img: "img/107.jpg", audio: "audio/107.mp3" },
  { text: "put", img: "img/108.jpg", audio: "audio/108.mp3" },
  { text: "turn on", img: "img/109.jpg", audio: "audio/109.mp3" },
  { text: "turn off", img: "img/110.jpg", audio: "audio/110.mp3" },
  { text: "talk", img: "img/111.jpg", audio: "audio/111.mp3" },
  { text: "pull", img: "img/112.jpg", audio: "audio/112.mp3" },
  { text: "type", img: "img/113.jpg", audio: "audio/113.mp3" },
  { text: "touch", img: "img/114.jpg", audio: "audio/114.mp3" },
  { text: "pick up", img: "img/115.jpg", audio: "audio/115.mp3" },
  { text: "watch", img: "img/116.jpg", audio: "audio/116.mp3" },
  { text: "yawn", img: "img/117.jpg", audio: "audio/117.mp3" },
  { text: "set", img: "img/118.jpg", audio: "audio/118.mp3" },
  { text: "take out", img: "img/119.jpg", audio: "audio/119.mp3" },
  { text: "fold", img: "img/120.jpg", audio: "audio/120.mp3" },
  { text: "iron", img: "img/121.jpg", audio: "audio/121.mp3" },
  { text: "vacuum", img: "img/122.jpg", audio: "audio/122.mp3" },
  { text: "sweep", img: "img/123.jpg", audio: "audio/123.mp3" },
  { text: "pet", img: "img/124.jpg", audio: "audio/124.mp3" },
  { text: "work", img: "img/125.jpg", audio: "audio/125.mp3" },
  { text: "give", img: "img/126.jpg", audio: "audio/126.mp3" },
  { text: "try", img: "img/127.jpg", audio: "audio/127.mp3" },
  { text: "write", img: "img/128.jpg", audio: "audio/128.mp3" },
  { text: "sign", img: "img/129.jpg", audio: "audio/129.mp3" },
  { text: "enter", img: "img/130.jpg", audio: "audio/130.mp3" },
  { text: "print out", img: "img/131.jpg", audio: "audio/131.mp3" },
  { text: "hang up", img: "img/132.jpg", audio: "audio/132.mp3" },
  { text: "wrap", img: "img/133.jpg", audio: "audio/133.mp3" },
  { text: "sing", img: "img/134.jpg", audio: "audio/134.mp3" },
  { text: "blow", img: "img/135.jpg", audio: "audio/135.mp3" },
  { text: "shake hands", img: "img/136.jpg", audio: "audio/136.mp3" },
  { text: "take", img: "img/137.jpg", audio: "audio/137.mp3" },
  { text: "go", img: "img/138.jpg", audio: "audio/138.mp3" },
  { text: "punch", img: "img/139.jpg", audio: "audio/139.mp3" },
];

// --- DOM ---
const cardImg = document.getElementById("cardImg");
const spell = document.getElementById("spell");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prevBtn");
const listenBtn = document.getElementById("listenBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

const rate = document.getElementById("rate");
const rateValue = document.getElementById("rateValue");

const player = document.getElementById("player");

// --- State ---
let order = Array.from({ length: items.length }, (_, i) => i); // [0..n-1]
let pos = 0;
let shuffleOn = false;

// --- Helpers ---
function currentItem() {
  return items[order[pos]];
}

function resetSpell() {
  spell.textContent = "";
  spell.classList.add("hidden");
}

function stopAudio() {
  player.pause();
  player.currentTime = 0;
}

function setRate(v) {
  const val = Number(v);
  player.playbackRate = val;
  rateValue.textContent = `${val.toFixed(2)}×`;
}

// Speed init
setRate(rate.value);
rate.addEventListener("input", (e) => setRate(e.target.value));

// Render current card
function renderCard() {
  const item = currentItem();

  cardImg.src = item.img;
  cardImg.alt = item.text;

  // Moving cards always hides spelling and stops sound
  resetSpell();
  stopAudio();

  // Preload source for quicker playback (still re-set on Listen to guarantee restart)
  player.src = item.audio;
  player.playbackRate = Number(rate.value);

  counter.textContent = `${pos + 1} / ${order.length}` + (shuffleOn ? " (Shuffled)" : "");
}

// Listen: ALWAYS from start
function listenFromStart() {
  const item = currentItem();

  spell.textContent = item.text;
  spell.classList.remove("hidden");

  stopAudio();
  player.src = item.audio;
  player.playbackRate = Number(rate.value);

  player.play().catch(() => {
    // Usually fine because it's triggered by a button tap
  });
}

// Hide spelling when audio ends
player.addEventListener("ended", () => {
  resetSpell();
});

// Navigation
function next() {
  pos = (pos + 1) % order.length;
  renderCard();
}

function prev() {
  pos = (pos - 1 + order.length) % order.length;
  renderCard();
}

// Shuffle
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function toggleShuffle() {
  shuffleOn = !shuffleOn;

  // Keep current item visible after toggling
  const currentIndex = order[pos];

  if (shuffleOn) {
    order = shuffleArray(order);
    pos = order.indexOf(currentIndex);

    shuffleBtn.textContent = "Shuffle On";
    shuffleBtn.setAttribute("aria-pressed", "true");
  } else {
    order = Array.from({ length: items.length }, (_, i) => i);
    pos = currentIndex;

    shuffleBtn.textContent = "Shuffle Off";
    shuffleBtn.setAttribute("aria-pressed", "false");
  }

  renderCard();
}

// Button wiring
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
listenBtn.addEventListener("click", listenFromStart);
shuffleBtn.addEventListener("click", toggleShuffle);

// Start
renderCard();
