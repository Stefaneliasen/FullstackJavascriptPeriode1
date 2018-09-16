class Shape {
    color: string;
    area: number;
    constructor(color){
        this.color = color;
    }
    getArea(){
     return  this.area;
    }
    getPerimeter(){
        return undefined;
    }
    setColor(color){
        this.color = color;
    }
    
    setArea(area){
        this.area = area;
    }
   
    getColor(){
        return this.color;
    }
    toString(){
    console.log(this.color.toString(), this.area.toString())
    }
}
let aShape = new Shape("red");
aShape.setArea(51);
aShape.toString();

class Circle extends Shape {
    radius: number;
    constructor(radius, color){
     super(color);
     this.radius = radius;   
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }

    getArea(){
        return  this.area;
       }
       getPerimeter(){
           return undefined;
       }
       setColor(color){
           this.color = color;
       }
       
       setArea(area){
           this.area = area;
       }
      
       getColor(){
           return this.color;
       }
       toString(){
       console.log(this.color.toString(), this.area.toString(), this.radius.toString());
       }

}

let newCircle = new Circle(11, "red");

newCircle.setArea(30);
newCircle.setRadius(100);
newCircle.toString();

class Cylinder extends Circle{
    height: number;
    constructor(height, radius, color){
        super(radius, color);
        this.height = height;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    toString() {
        console.log(this.color.toString(), this.area.toString(), this.radius.toString(), this.height.toString());
    }
    setHeight(height) {
        this.height = height;
    }
    getHeight() {
        return this.height;
    }

}

let newCylinder = new Cylinder(20,15,"red");
newCylinder.setArea(51);
newCylinder.toString();
console.log(newCylinder.area);