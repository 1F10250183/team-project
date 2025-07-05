let selectedZodiac = null;
let selectedBlood = null;

function selectZodiac(img) {
  document.querySelectorAll('#zodiac-group img').forEach(el => el.classList.remove('selected'));
  img.classList.add('selected');
  selectedZodiac = img.getAttribute('data-value');
}

function selectBlood(img) {
  document.querySelectorAll('#blood-group img').forEach(el => el.classList.remove('selected'));
  img.classList.add('selected');
  selectedBlood = img.getAttribute('data-value');
}

function getFortune() {
  if (!selectedZodiac || !selectedBlood) {
    alert("星座と血液型を選んでください。");
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const key = selectedZodiac + "_" + selectedBlood + "_" + today;

  const fortunes = [
    "大吉",
    "中吉",
    "小吉",
    "吉",
    "凶",
    "大凶"
  ];

  const hash = hashCode(key);
  const index = Math.abs(hash) % fortunes.length;
  const result = "今日の運勢：" + fortunes[index];

  // 結果をモーダルに表示
  document.getElementById('modal-text').textContent = result;
  document.getElementById('result-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('result-modal').style.display = 'none';
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}