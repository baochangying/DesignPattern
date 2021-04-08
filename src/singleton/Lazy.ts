// 懒汉式
export class LazySingleton {
  private name: string;
  private static instance: LazySingleton;
  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(): LazySingleton {
    if (!LazySingleton.instance) {
      LazySingleton.instance = new LazySingleton('singleton');
    }
    return LazySingleton.instance;
  }

  show(): void {
    console.log(this.name);
  }
}