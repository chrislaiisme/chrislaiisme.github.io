function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function update_fact() {
	var arr = [
		"除了清一色、混一色以外，立直也是副露減一番。",
		"每個奇數的英文中都有一個\'e\'。"
	];
	var str = arr[getRandom(0, arr.length)];
	var ele = document.getElementById("fun_fact");
	ele.textContent += str;
}
update_fact()
