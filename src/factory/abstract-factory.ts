// 抽象工厂
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

interface IFood {
  name: string;
  make(): void;
  show(): void;
}

class Hamburger implements IFood {
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

interface IMealFactory {
  createDrink(): IDrink;
  createFood(): IFood;
}

class MealFacory implements IMealFactory {
  createDrink(): Tea {
    return new Tea("tea");
  }

  createFood(): Hamburger {
    return new Hamburger("hamburger");
  }
}

const mealFacory = new MealFacory();
mealFacory.createDrink().show();
mealFacory.createFood().show();

export { MealFacory };
