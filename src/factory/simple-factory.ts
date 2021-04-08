// 简单工厂
interface IDrink {
  name: string;
  make(): void;
  show(): void;
}

class Tea implements IDrink {
  name: string;

  constructor(name: string) {
    this.name = name;
    this.make();
  }

  make(): void {
    console.log("make " + this.name);
  }

  show(): void {
    console.log("show " + this.name);
  }
}

class Juice implements IDrink {
  name: string;
  constructor(name: string) {
    this.name = name;
    this.make();
  }

  make(): void {
    console.log("make " + this.name);
  }

  show(): void {
    console.log("make " + this.name);
  }
}

class SimpleDrinkFactory {
  createDrink(type: string): Tea | Juice {
    switch (type) {
      case "tea":
        return new Tea("tea");
      case "juice":
        return new Juice("juice");
      default:
        return new Tea("tea");
    }
  }
}

export default SimpleDrinkFactory;