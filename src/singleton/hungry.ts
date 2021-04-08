// 饿汉式
export class HungrySingleton {
  private name: string;
  private static instance: HungrySingleton = new HungrySingleton('singeleton');
  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(): HungrySingleton {
    return HungrySingleton.instance;
  }

  show(): void {
    console.log(this.name);
  }

}
