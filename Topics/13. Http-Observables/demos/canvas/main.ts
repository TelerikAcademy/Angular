import { Observable, Observer } from 'rxjs'

let canvas: any = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let move = Observable.fromEvent(canvas, 'mousemove');

move
	.map((mouseEv: MouseEvent) => { return { x: mouseEv.clientX, y: mouseEv.clientY } })
	.subscribe(move => {
		ctx.lineTo(move.x, move.y);
		ctx.stroke();
	})
