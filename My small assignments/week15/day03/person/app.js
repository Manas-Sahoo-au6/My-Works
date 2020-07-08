class Person {
  constructor(name, energy) {
    this.perName = name;
    this.perEnergy = energy;
    this.perId = Person.personId();
  }
  perSinging() {
    let singEnergy = this.perEnergy - 2;
    if (singEnergy < 2) {
      console.log(`${this.perName} CANNOT SING ANYMORE`);
    } else {
      console.log(`${this.perName} is still singing`);
    }
  }
  perWalking() {
    let walkEnergy = this.perEnergy - 1;
    if (walkEnergy < 2) {
      console.log(`${this.perName} CANNOT RUN ANYMORE`);
    } else {
      console.log(`${this.perName} is still Running`);
    }
  }
  static personId() {
    if (!this.currentId) {
      return (this.currentId = 1);
    } else {
      this.currentId++;
      return this.currentId;
    }
  }
}
const manas = new Person("manas", 6);
manas.perSinging();
manas.perWalking();
console.log(manas);

const ranjan = new Person("ranjan", 3);
ranjan.perSinging();
ranjan.perWalking();
console.log(ranjan);

const walker = new Person("walker", 2);
walker.perSinging();
walker.perWalking();
console.log(walker);
