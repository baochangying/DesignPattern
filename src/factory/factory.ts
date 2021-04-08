// 工厂模式
interface IDrink {
  name: string;
  make(): void;
  show(): void;
}

interface IDrinkFactory {
  createDrink(): IDrink;
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
    console.log("make " + this.name);
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

class TeaFactory implements IDrinkFactory {
  createDrink(): Tea {
    return new Tea("tea");
  }
}

class JuiceFactory implements IDrinkFactory {
  createDrink(): Juice {
    return new Juice("juice");
  }
}

export { TeaFactory, JuiceFactory }
