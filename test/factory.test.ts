import { MealFacory } from "../src/factory/abstract-factory"
import { TeaFactory } from "../src/factory/factory"
import SimpleDrinkFactory from "../src/factory/simple-factory"

describe("工厂模式", () => {
  it("简单工厂", () => {
    expect((new SimpleDrinkFactory).createDrink("tea").show())
  })

  it("工厂", () => {
    expect((new TeaFactory).createDrink().show())
  })

  it("抽象工厂", () => {
    expect((new MealFacory).createDrink().show())
  })
})
