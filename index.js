function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function update_fact() {
  var arr = [
    "每個奇數的英文中都有一個\'e\'。",
    "少一條腿，你的BMI會降低；但少兩條腿，你的BMI會暴增。",
    "幾乎每個人都踢過孕婦。",
    "冰箱是櫃子、冰櫃是箱子。",
    "「拿去」的英文和台語唸起來一樣。",
    "切一半其實就是切兩半。",
    "滑鼠游標不是左右對稱的。",
    "花生湯圓內外翻轉會變成客家麻糬。"
  ];
  var str = arr[getRandom(0, arr.length)];
  var ele = document.getElementById("fun_fact");
  ele.innerHTML += str;
}
update_fact()

function func() {
  return "AAA";
}