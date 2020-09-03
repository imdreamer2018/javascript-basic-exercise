export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  constructor(x, y) {
    this.__getX__ = () => x;
    this.__getY__ = () => y;
  }

  get x() {
    return this.__getX__();
  }

  // eslint-disable-next-line class-methods-use-this
  set x(val) {
    throw new Error('The should not set x and y of the vector');
  }

  get y() {
    return this.__getY__();
  }

  // eslint-disable-next-line class-methods-use-this
  set y(val) {
    throw new Error('The should not set x and y of the vector');
  }

  static plus(vector1, vector2) {
    return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
  }

  static minus(vector1, vector2) {
    return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
  }

  // eslint-disable-next-line class-methods-use-this
  distance() {
    return Math.hypot(this.x, this.y);
  }
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE
}
