// Interface：
// 中文直譯是介面，是一種對於物件的格式規範，定義了物件應該具有的屬性和方法。
// 透過Interface，我們可以定義物件的格式，並且可以在不同的物件中使用相同的格式。

interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Woof!";
  }
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Meow!";
  }
}

const dog = new Dog("Buddy");
console.log(`${dog.name} says: ${dog.sound()}`);

const cat = new Cat("Kitty");
console.log(`${cat.name} says: ${cat.sound()}`);

//利用Interface直接賦予給Dog和Cat類別一個相同的格式（Animal），這個格式包含了name和sound()這兩個屬性。
