/*
* 低层模块都要有抽象类或接口,或者两者都有,程序稳定性更好
* 变量的声明类型尽量使抽象类或者是借口,这样我们在变量的引用和实际对象间就存在一个缓冲层,利于程序扩展和优化
* 继承时遵循里式替换原则
*
* */

interface IReceiver {
    say(): void;
}

class Message implements IReceiver {
    say() {
        console.log("收到短信");
    }
}

class WeiXin implements IReceiver {
    say() {
        console.log("收到微信");
    }
}

class Email implements IReceiver {
    say() {
        console.log("收到邮件");
    }
}

class People {
    static receive(m: IReceiver) {
        m.say()
    }
}

// People 不再依赖于具体的方法或类,而是依赖于抽象的Receiver接口实现输出不同的结果
function main() {

    /*
    * 依赖传递有三种方式 此处使用的是接口传递
    * 1. 构造方法传递
    * 2. setter 方法传递
    * 3. 接口传递
    * */
    
    People.receive(new Message());
    People.receive(new WeiXin());
    People.receive(new Email());
}

main();
