let can = document.querySelector('canvas'),
	ctx = can.getContext('2d');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	let random;
	let randomer;
can.addEventListener('mousemove', mouseEnter);

function mouseEnter() {
ctx.clearRect(0,0, can.width, can.height)
	for (var i = 0; i < 100; i++) {
		random = Math.ceil(Math.random() * 9999999);
		randomer = Math.ceil(Math.random() * 9999)
		ctx.strokeStyle = `#${random}`;
		ctx.fillStyle = `#${randomer}`;
		ctx.lineWidth = 1;
		ctx.beginPath()
		let x = Math.ceil(Math.random() * can.width);
		let y = Math.ceil(Math.random() * can.height);
		ctx.arc(x, y, 40, 0, Math.PI * 2,false);
		ctx.stroke();
		ctx.fill();
	}
}
setInterval(mouseEnter, 2000)
