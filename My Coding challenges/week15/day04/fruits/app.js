class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  ripe() {
    console.log(`${this.name} is riped`);
  }

  grow() {
    console.log(`${this.name} is grow`);
  }
}

class Apple extends Fruit {
  constructor(type, variety, ...properties) {
    super(...properties);

    this.type = type;
    this.variety = variety;
  }
}
class Orange extends Fruit {
  constructor(type, variety, ...properties) {
    super(...properties);

    this.type = type;
    this.variety = variety;
  }

  nutrients() {
    console.log(`${this.name} has nutrients`);
  }
}

let apple = new Apple(
  "Kashmiri",
  "Big apples that are very expensive XD",
  "Apples",
  "Red"
);

console.log(apple);

let orange = new Orange(
  "Nagpuri",
  "the small and sour once",
  "Oranges",
  "Orange"
)

console.log(orange);
orange.nutrients()
