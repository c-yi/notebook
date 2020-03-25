/* 允许扩展 不允许修改*/

// 用抽象方法做中间层
abstract class Sheap {
    abstract draw(): void
}

class DrawCircle extends Sheap {
    draw(): void {
        console.log("绘制圆形");
    }
}

class DrawTriangle extends Sheap {
    draw(): void {
        console.log("绘制三角形");
    }
}

class DrawRectangle extends Sheap {
    draw(): void {
        console.log("绘制矩形");
    }
}

class EditGraphy {
    draw(s: Sheap) {
        s.draw()
    }
}

function main() {
    let e = new EditGraphy();
    e.draw(new DrawCircle());
    e.draw(new DrawTriangle());
    e.draw(new DrawRectangle());
}

main();
