class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }

    getPerimeter(){
        return this.height * 2 + this.width * 2;
    }

    toString(){
        let output = "Width = " + this.width + "; Height = " + this.height + "; Perimeter = " + this.getPerimeter() + "; Square = " + this.getArea() + ".";
        return output;
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side, side);
    }

    toString(){
        let output = "Side = " + this.width + "; Perimeter = " + this.getPerimeter() + "; Square = " + this.getArea() + ".";
        return output;
    }
}