function copyText(dom) {
	console.clear();
  dom.select();
  document.execCommand('copy');
}

btn1 = document.querySelector('#btn1');
code1 = document.querySelector('#code1');
btn1.addEventListener('click', function() { copyText(code1)});

btn2 = document.querySelector('#btn2');
code2 = document.querySelector('#code2');
btn2.addEventListener('click', function() { copyText(code2)});

btn3 = document.querySelector('#btn3');
code3 = document.querySelector('#code3');
btn3.addEventListener('click', function() { copyText(code3)});

btn4 = document.querySelector('#btn4');
code4 = document.querySelector('#code4');
btn4.addEventListener('click', function() { copyText(code4)});

btn5 = document.querySelector('#btn5');
code5 = document.querySelector('#code5');
btn5.addEventListener('click', function() { copyText(code5)});

btn6 = document.querySelector('#btn6');
code6 = document.querySelector('#code6');
btn6.addEventListener('click', function() { copyText(code6)});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function update_fact() {
	var arr = [
		"每個奇數的英文中都有一個\'e\'。",
		"少一條腿，你的BMI會降低；但少兩條腿，你的BMI會暴增。",
		"每個人都踢過孕婦。",
		"冰箱是櫃子、冰櫃是箱子。",
		"「拿去」的英文和台語唸起來一樣。",
		"切一半其實就是切兩半。"
	];
	var str = arr[getRandom(0, arr.length)];
	var ele = document.getElementById("fun_fact");
	ele.innerHTML += str;
}
update_fact()

function func() {
	return "AAA";
}
