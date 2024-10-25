//@ts-check

import Car from './Car.js';

class Race {
  constructor() {
    this.cars = [];
  }

  /**@param {string[]} carNames  */
  initializeCars(carNames) {
    this.cars = carNames.map((car) => new Car(car.trim()));
  }

  /**@param {number} attempts  */
  race(attempts) {
    for (let i = 0; i < attempts; i++) {
      this.moveForward();
    }
  }

  moveForward() {
    this.cars.forEach((car) => car.move());
  }

  determineWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars.filter((car) => car.position === maxPosition);
  }

  getCars() {
    return this.cars;
  }
}

export default Race;
