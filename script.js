class Shape {

  name;
  sides;
  sideLength;

   constructor(sideLength, name, sides,) {
     this.sideLength = sideLength;
     this.name = name;
     this.sides = sides;
   }

   calcPerimeter(){
    console.log(this.sides * this.sideLength)
   }

}

// const square = new Shape('square', 4, 5)
// const triangle = new Shape('triangle', 3, 3)

// square.calcPerimeter()
// triangle.calcPerimeter()

class Square extends Shape {
    #isRadioActive
    
    constructor(sideLength, isRadioActive){
        super(sideLength)
        this.#isRadioActive = isRadioActive
        this.name = 'square'
        this.sides = 4
        
    }

    calcArea(){
        console.log(this.sides, this.sideLength)
    }
    isRadioActive(){
        console.log(this.#isRadioActive)
    }
}

const square = new Square(10, false)
console.log(square)
square.calcArea()
square.calcPerimeter()
square.isRadioActive()
