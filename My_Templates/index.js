function copyText(dom) {
	console.clear();
  dom.select();
  document.execCommand('copy');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setEvent(btn, code) {
  btn.addEventListener('click', function() {copyText(code);});
}

function setContent(link, ele) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", link);
  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        str = xhr.responseText;
        ele.innerHTML += str + "\n";
        console.log(link);
      }
    }
  };
  xhr.send();
}

async function init() {
  await sleep(1000);
  btns = document.querySelectorAll(".btn");
  codes = document.querySelectorAll(".code");
  strs = ["Default_Code", "LeetCode", "Generate", "Generate_Simple", "Match", "Special_Judge"];
  headings = [[0, 1], [1], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]];
  link = "https://raw.githubusercontent.com/chrislaiisme/chrislaiisme.github.io/main/My_Templates/";
  for(var i=0; i<codes.length; i++) {
    setEvent(btns[i], codes[i]);
    for(var j=0; j<headings[i].length; j++) {
      setContent(link + "Heading" + headings[i][j].toString() + ".txt", codes[i]);
      await sleep(10);
    }
    codes[i].innerHTML += "\n";
    setContent(link + strs[i] + ".txt", codes[i]);
    await sleep(10);
  }
}


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
init();