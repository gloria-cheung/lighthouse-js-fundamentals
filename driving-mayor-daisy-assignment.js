function carPassing (cars, speed) {
  const newObject = {};
  newObject["time"] = Date.now();
  newObject["speed"] = speed;
  cars.push(newObject);
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
carPassing(cars, 38);