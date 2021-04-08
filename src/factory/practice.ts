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
  }

  make(): void {
    console.log("make " + this.name);
  }
  show(): void {
    console.log("show " + this.name);
  }
}

class SimpleDrinkFactory {
  createDrink(type: string) {
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

interface IDrinkFactory {
  createDrink(): IDrink;
}

class TeaFactory implements IDrinkFactory {
  createDrink(): IDrink {
    return new Tea("tea");
  }
}

class JuiceFactory implements IDrinkFactory {
  createDrink(): IDrink {
    return new Juice("juice");
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
  }
  make(): void {
    console.log("make " + this.name);
  }
  show(): void {
    console.log("make " + this.name);
  }
}

interface IMealFactory {
  createDrink(): IDrink;
  createFook(): IFood;
}

class MealFacory implements IMealFactory {
  createDrink(): IDrink {
    return new Tea("tea");
  }
  createFook(): IFood {
    return new Hamburger("hamburger");
  }
}
const simpleDrinkFactory = new SimpleDrinkFactory();
simpleDrinkFactory.createDrink("tea").show();

const teaFactory = new TeaFactory();
teaFactory.createDrink().show();

const mealFacory = new MealFacory();
mealFacory.createDrink().show();
