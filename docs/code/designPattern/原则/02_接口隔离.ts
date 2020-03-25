interface Interface1 {
    print1(): void
}

interface Interface2 {
    print2(): void

    print3(): void
}

interface Interface3 {
    print4(): void

    print5(): void
}

class B implements Interface1, Interface3 {

    public print1(): void {
        console.log("B类 实现接口1");
    }

    public print4(): void {
        console.log("B类 实现接口4");
    }

    public print5(): void {
        console.log("B类 实现接口5");
    }

}


class D implements Interface1, Interface2 {
    print1(): void {
        console.log("D类 实现接口1");
    }

    print2(): void {
        console.log("D类 实现接口2");
    }

    print3(): void {
        console.log("D类 实现接口3");
    }

}

// A类 通过接口依赖 B类
class A {
    public a1(i: Interface1) {
        i.print1()
    }

    public a4(i: Interface3) {
        i.print4()
    }

    public a5(i: Interface3) {
        i.print5()
    }
}

// C类 通过接口依赖 D类


class C {
    static a1(i: Interface1) {
        i.print1()
    }

    static a2(i: Interface2) {
        i.print2()
    }

    static a3(i: Interface2) {
        i.print3()
    }
}

let a = new A();
a.a1(new B());
a.a4(new B());
a.a5(new B());

let c = new C();
C.a1(new D());
C.a2(new D());
C.a3(new D());

