function doMove(id, attr, dir, target, endfn) {
	dir = parseInt(getStyle(id, attr)) < target ? dir : -dir;
	clearInterval(id.timer);
	id.timer = setInterval(function() {
		var speed = parseInt(getStyle(id, attr)) + dir;

		if (speed > target && dir > 0 || speed < target && dir < 0) {
			speed = target
		}

		id.style[attr] = speed + 'px'
		if (speed == target) {
			clearInterval(id.timer);
			endfn && endfn();
		}

	}, 30);
}
function opacity(obj,attr){
	var num=getStyle(obj, attr);
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		num=num-0.1;
		obj.style[attr]=num;
		if(num==0){
			clearInterval(obj.timer)
		}
	},30)
}
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function setDefault(obj, attr, num) {
	obj.setAttribute(attr, num);
}


function shake(obj, attr, endfn) {
	clearInterval(obj.timer);
	var isDef = obj.getAttribute('data-left');
	if (!!isDef) {

	} else {
		var thisDefaultT = obj.offsetTop;
		var thisDefaultL = obj.offsetLeft;
		setDefault(obj, 'data-left', thisDefaultL);
		setDefault(obj, 'data-top', thisDefaultT);
	}
	var arr = [];
	var num = 0;
	var pos = parseInt(getStyle(obj, attr));
	for (var i = 20; i > 0; i -= 2) {
		arr.push(i, -i);
	}
	arr.push(0);
	obj.timer = setInterval(function() {
		obj.style[attr] = pos + arr[num] + 'px';
		num++
		if (num == arr.length) {
			clearInterval(obj.timer);
			endfn && endfn();
		}
	}, 20)
}

function result(obj) {
	clearInterval(obj.timer);
	var topD = obj.getAttribute('data-top');
	var leftD = obj.getAttribute('data-left');
	obj.style['top'] = topD + 'px';
	obj.style['left'] = leftD + 'px';
}