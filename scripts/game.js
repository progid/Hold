UI = {
	createDrawingNode: (w, h) => {
		const node = document.createElement('canvas');
		node.setAttribute('width', w);
		node.setAttribute('height', h);
		document.body.appendChild(node);
		return node;
	},

};

class Player {
	constructor(o) {
		this.name = o.name || 'Player';
		this.score = 0;
		this.gametime = 0;
		this.position = {x: 0, y: 0, r: o.radius || 10};
	}
	
};


class Game {
	constructor(o = {}) {
		this.started = false;
		this.requestId = null;
		this.node = o.node || UI.createDrawingNode(800, 600);
		this.ctx = {
			w: this.node.width,
			h: this.node.height,
			c: this.node.getContext('2d'),
		};
	}
	startGame() {
		this.started = true;
		this.startRendering();
	}
	endGame() {
		this.started = false;
		this.stopRendering();
	}
	startRendering() {
		const {w, h, c: ctx} = this.ctx;
		let x = 0
		const frame = () => {
			ctx.clearRect(0,0,w,h);
			ctx.beginPath();
			ctx.rect(x,0,w/2,h/2);
			ctx.fill();
			ctx.closePath();
			x += 1;
			this.requestId = window.requestAnimationFrame(frame);
		}
		frame();
	}
	stopRendering() {
		window.cancelAnimationFrame(this.requestId);
	}
};