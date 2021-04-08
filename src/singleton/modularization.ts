// 模块化实现
class ModularizationSingleton {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  show(): void {
    console.log(this.name);
  }
}

export default new ModularizationSingleton("singleton");