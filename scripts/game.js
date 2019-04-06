class UI {
	constructor(o) {
		this.painter = document.querySelector(o.painter) || document.createElement('canvas');
		if(!this.painter) {
			this.painter = document.createElement('canvas');
			this.painter.setAttribute('class', 'game-canvas');
			document.body.appendChild(this.painter);
		}
		this.ctx = this.painter.getContext('2d');
		this.drawingWidth = this.painter.width = o.width || this.painter.width;
		this.drawingHeight = this.painter.height = o.height || this.painter.height;
	}
	setPainterWidth(w) {
		this.painter.width = w;
	}
	setPainterHeight(h) {
		this.painter.height = h;
	}
	renderPlayer({ x, y, radius }) {
		this.ctx.beginPath();
		this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
		this.ctx.fill();
		this.ctx.closePath();
	}
	renderLine(line) {
		this.ctx.beginPath();
		line.getPoints().map(point => {
			this.ctx.lineTo(point.x, point.y);
		});
		this.ctx.stroke();
		this.ctx.closePath();
	}
	refreshPainter() {
		this.ctx.clearRect(0, 0, this.drawingWidth, this.drawingHeight);
	}
	setHandlerForPlayer(handler) {
		this.painter.addEventListener('mousemove', (e) => handler(e.pageX, e.pageY), false);
	}
};

class Geometry {
	constructor(ui) {
		this.width = ui.drawingWidth;
		this.height = ui.drawingHeight;
		this.ui = ui;
	}
	changeWidth = (w) => this.ui.painter.width = w;
	changeHeight = (h) => this.ui.painter.height = h;
};

class Line {
	constructor(o) {
		this.points = [];
	}
	addPoint() {
		const x = Math.random() * 
		this.points.push(new Point())
	}
};

class Point {
	constructor({ x, y, geometry }) {
		this.setPoint(x,y,geometry)
	}
	setPoint(x, y, geometry) {
		this.x = x < 0 ? 0 : x > geometry.width ? geometry.width : x;
		this.y = y < 0 ? 0 : y > geometry.height ? geometry.height : y;
	}
};

class RandomPoint extends Point {
	constructor(){
		super({
			x: 
		});
	}
}

class Player {
	constructor(o = {}) {
		this.name = o.name || 'Player';
		this.radius = o.radius || 20;
		this.score = 0;
		this.x = 0;
		this.y = 0;
	}
	moveXTo(a) {
		this.x = a;
	}
	moveYTo(a) {
		this.y = a;
	}
	moveTo(x, y) {
		this.moveXTo(x);
		this.moveYTo(y);
	}
	increaseScoreValue(increaser) {
		this.score += abs(increaser);
	}
	decreaseScoreValue(decreaser) {
		this.score -= abs(decreaser);
	}
	setName(newName) {
		this.name = newName;
	}
};

class Game {
	constructor(o = {}) {
		this.started = false;
		this.scoreDelta = 1;
		this.level = 1;
		this.player = o.player || new Player();
		this.line = new Line();
	}
	startGame() {
		this.started = true;
	}
	endGame() {
		this.started = false;
	}
};