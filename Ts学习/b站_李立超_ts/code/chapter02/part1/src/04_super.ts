(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('动物在叫~');
        }
    }

    class Dog extends Animal{

        age: number;

        constructor(name: string, age: number) { // --- 在子类中写了constructor，相当于重写父类的constructor，如果没有super，则会漏属性；
            // --- 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name); // 调用父类的构造函数
            this.age = age;
        }

        sayHello() {
            // --- 在类的方法中 super就表示当前类的父类/或者父类的实例---反正代表父类
            //super.sayHello();

            console.log('汪汪汪汪！');
        }

    }

    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();