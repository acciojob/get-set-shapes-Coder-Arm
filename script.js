//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	set width(val){
		return this._width = val;
	}
	set height(val){
		return this._height = val;
	}
	getArea(){
		return this.width*this.height;
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
