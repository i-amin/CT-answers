2. An object that has the prototype of a `Square` function inherits the prototype of a `Rectangle` function, but of course not all rectangles are squares. Suppose an instance of `Rectangle` has its own properties `width` and `height` changed so that it becomes a square.

  * 2a) What is the condition for a rectangle to also be a square? (not a trick question)
    * to have an equal width and hieght.
  * 2b) How can the Square class inherit the Rectangle class?

    ```javascript
    	function Rectangle(width, height) {
        this.width = width;
        this.height = height;
	    }
	    Rectangle.prototype.calcArea = function() {
	        return this.width * this.height;
	    };

	    // child class
	    function Square(size) {
	        Rectangle.call(this, size, size);
	    }
	    Square.prototype = Object.create(Rectangle.prototype);
	    Square.prototype.constructor = Square;

	    //new instance
	    var sq1 = new Square(10);
    ``` 

  * 2c) How can a rectangle instance inherit the `Square` prototype when it is actually a square?

    ```javascript
    	function Rectangle(width, height) {
	        this.width = width;
	        this.height = height;
	        if (width === hieght && !(this instanceof Square)) {
	            return new Square(width);
	        }
	    }
	    Rectangle.prototype.calcArea = function() {
	        return this.width * this.height;
	    };

	    // child class
	    function Square(size) {
	        Rectangle.call(this, size, size);
	    }
	    Square.prototype = Object.create(Rectangle.prototype);
	    Square.prototype.constructor = Square;

	    //new instance
	    var sq1 = new Rectangle(10,10);
	    console.log(sq1.constructor.name) // result is Square
	```

  * 2d) Given a `Square` instance, how can it lose the `Square` prototype when it is no longer a square?
    * we can manepulate class and objects prototypes but as soon as an instance created we cannot modify it's prototype.