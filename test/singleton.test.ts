import { HungrySingleton } from "../src/singleton/hungry"
import { LazySingleton } from "../src/singleton/Lazy"
import modularization from "../src/singleton/modularization"

describe("单例模式", () => {
  it("饿汉式", () => {
    expect(HungrySingleton.getInstance().show())
  })

  it("懒汉式", () => {
    expect(LazySingleton.getInstance().show())
  })

  it("模块化", () => {
    expect(modularization.show())
  })
})