var os_block_one = document.querySelector('.first');
var os_block_two = document.querySelector('.second');
var os_block_three = document.querySelector('.third');
var os_block_four = document.querySelector('.four');
var os_block_five = document.querySelector('.five');

var windows = document.querySelector('.windows');
var linux = document.querySelector('.linux');
var os = document.querySelector('.os_info_block');
var ubuntu = document.querySelector('.ubuntu');
var macos = document.querySelector('.macos');


/*first_block*/
os_block_one.onmouseover = function(){
	os_block_one.classList.add('hided');

	windows.classList.add('oper_main_showed');
};

windows.onmouseover = function(){
	os_block_one.classList.add('hided');

	windows.classList.add('oper_main_showed');
};

os_block_one.onmouseout = function(){
	os_block_one.classList.remove('hided');

	windows.classList.remove('oper_main_showed');
};

windows.onmouseout = function(){
	os_block_one.classList.remove('hided');

	windows.classList.remove('oper_main_showed');
};


/*second_block*/
os_block_two.onmouseover = function(){
	os_block_two.classList.add('hided');

	linux.classList.add('oper_main_showed');
};

linux.onmouseover = function(){
	os_block_two.classList.add('hided');

	linux.classList.add('oper_main_showed');
};

os_block_two.onmouseout = function(){
	os_block_two.classList.remove('hided');

	linux.classList.remove('oper_main_showed');
};

linux.onmouseout = function(){
	os_block_two.classList.remove('hided');

	linux.classList.remove('oper_main_showed');
};

/*third block*/
os_block_three.onmouseover = function(){
	os_block_three.classList.add('hided');

	os.classList.add('oper_main_showed');
};

os.onmouseover = function(){
	os_block_three.classList.add('hided');

	os.classList.add('oper_main_showed');
};

os_block_three.onmouseout = function(){
	os_block_three.classList.remove('hided');

	os.classList.remove('oper_main_showed');
};

os.onmouseout = function(){
	os_block_three.classList.remove('hided');

	os.classList.remove('oper_main_showed');
};

/*fourth block*/
os_block_four.onmouseover = function(){
	os_block_four.classList.add('hided');

	ubuntu.classList.add('oper_main_showed');
};

ubuntu.onmouseover = function(){
	os_block_four.classList.add('hided');

	ubuntu.classList.add('oper_main_showed');
};

os_block_four.onmouseout = function(){
	os_block_four.classList.remove('hided');

	ubuntu.classList.remove('oper_main_showed');
};

ubuntu.onmouseout = function(){
	os_block_four.classList.remove('hided');

	ubuntu.classList.remove('oper_main_showed');
};

/*fiveth block*/
os_block_five.onmouseover = function(){
	os_block_five.classList.add('hided');

	macos.classList.add('oper_main_showed');
};

macos.onmouseover = function(){
	os_block_five.classList.add('hided');

	macos.classList.add('oper_main_showed');
};

os_block_five.onmouseout = function(){
	os_block_five.classList.remove('hided');

	macos.classList.remove('oper_main_showed');
};

macos.onmouseout = function(){
	os_block_five.classList.remove('hided');

	macos.classList.remove('oper_main_showed');
};

/*For click_main_menu*/
/*os_block_one.onclick = function(){
	os_block_one.classList.add('hided');
	os_block_two.classList.remove('hided');
	os_block_three.classList.remove('hided');
	os_block_four.classList.remove('hided');
	os_block_five.classList.remove('hided');

	windows.classList.add('oper_main_showed');

	linux.classList.remove('oper_main_showed');
	os.classList.remove('oper_main_showed');
	ubuntu.classList.remove('oper_main_showed');
	macos.classList.remove('oper_main_showed');
};

	os_block_two.onclick = function(){
	os_block_one.classList.remove('hided');
	os_block_two.classList.add('hided');
	os_block_three.classList.remove('hided');
	os_block_four.classList.remove('hided');
	os_block_five.classList.remove('hided');

	linux.classList.add('oper_main_showed');

	windows.classList.remove('oper_main_showed');
	os.classList.remove('oper_main_showed');
	ubuntu.classList.remove('oper_main_showed');
	macos.classList.remove('oper_main_showed');
};
os_block_three.onclick = function(){
	os_block_one.classList.remove('hided');
	os_block_two.classList.remove('hided');
	os_block_three.classList.add('hided');
	os_block_four.classList.remove('hided');
	os_block_five.classList.remove('hided');
	
	os.classList.add('oper_main_showed');

	linux.classList.remove('oper_main_showed');
	windows.classList.remove('oper_main_showed');
	ubuntu.classList.remove('oper_main_showed');
	macos.classList.remove('oper_main_showed');
};
os_block_four.onclick = function(){
	os_block_one.classList.remove('hided');
	os_block_two.classList.remove('hided');
	os_block_three.classList.remove('hided');
	os_block_four.classList.add('hided');
	os_block_five.classList.remove('hided');

	ubuntu.classList.add('oper_main_showed');

	linux.classList.remove('oper_main_showed');
	os.classList.remove('oper_main_showed');
	windows.classList.remove('oper_main_showed');
	macos.classList.remove('oper_main_showed');
};
os_block_five.onclick = function(){
	os_block_one.classList.remove('hided');
	os_block_two.classList.remove('hided');
	os_block_three.classList.remove('hided');
	os_block_four.classList.remove('hided');
	os_block_five.classList.add('hided');

	macos.classList.add('oper_main_showed');

	linux.classList.remove('oper_main_showed');
	os.classList.remove('oper_main_showed');
	ubuntu.classList.remove('oper_main_showed');
	windows.classList.remove('oper_main_showed');
};*/
