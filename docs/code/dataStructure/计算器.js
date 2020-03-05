// 1+((2+3)*4)-5 => 1 2 3 + 4 * + 5 -
const center = '(1+((2+3)*4)-5)/2.5';
// 1. 将中缀表达式拆分成数组
const c_Array = (s) => s.split(/([*\/()+\-]|\b\s*[-+])/g).filter(value => value !== '');
let newArray = c_Array(center);
// 2. 按照规则将中缀表达式转换成后缀表达式
// 2.1 准备一个栈装运算符,准备一个数组装表达式
console.log('中缀表达式', newArray);


class Stack {
    constructor() {
        this.size = 0;
        this.stackArray = [];
    }

    push(v) {
        this.stackArray.push(v);
        this.size += 1;
    }

    pop() {
        let n = this.peek();
        this.size -= 1;
        this.stackArray.pop();
        return n
    }

    peek() {
        return this.stackArray[this.size - 1];
    }

    isEmpty() {
        return this.size === 0
    }
}

const baseCalc = (num1, num2, sign) => {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num2 - num1;
        case '*':
            return num1 * num2;
        case '/':
            return num2 / num1;
    }
};
level = (v) => {
    const levels = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };
    return levels[v]
};
const s1 = new Stack();
const s2 = [];

for (let i = 0; i < newArray.length; i++) {
    let n = newArray[i];
    let t = new RegExp('^\\d+(\\.\\d+)?$');
    if (t.test(n)) {//如果是数字
        s2.push(n)

    } else {//如果是符号
        if (s1.isEmpty() || n === '(') { //如果s1 栈是空的,或者是 ( ,或者是最后一个直接压入s1栈
            s1.push(n);
            continue;
        }
        if (n === ')') { //如果是 ) 则依次弹出s1栈顶元素压入s2,直至遇到 ( 为止
            while (s1.peek() !== '(') {
                s2.push(s1.pop())
            }
            s1.pop();
            continue;
        }
        if (level(n) > level(s1.peek())) {// 如果 n 的运算符优先级高于s1栈顶运算符,直接压入s1
            s1.push(n);
        } else {// 如果 n 的运算符优先级低于s1栈顶运算符,将栈顶出栈,压入s2然后再与栈顶比较
            while (s1.size !== 0 && level(n) <= level(s1.peek())) {
                s2.push(s1.pop())
            }
            s1.push(n);
        }
    }
}
// 将 s1 剩余的运算符加入到s2
while (s1.size !== 0) {
    s2.push(s1.pop())
}
console.log('逆波兰表达式', s2);
// 生成后缀表达式
let s3 = new Stack();
s2.forEach((v) => {
    let t = new RegExp('^\\d+(\\.\\d+)?$');
    //遇到运算符就计算,遇到数字就压入栈
    if (t.test(v)) {//数字
        s3.push(v)
    } else {//运算符
        let n1 = Number(s3.pop());
        let n2 = Number(s3.pop());
        let temp = baseCalc(n1, n2, v);
        s3.push(temp)
    }
});
let res = s3.pop();
console.log('结果', res);


/* 规则
1. 初始化两个栈:运算符栈s1和储存中间结果的栈s2;
2. 从左至右扫描中缀表达式;
3. 遇到操作数时,将其压s2
4. 遇到运算符时,比较其与s1栈顶运算符的优先级
   1. 如果s1为空,或栈顶运算符为左括号“(”,则直接将此运算符入栈;
   2. 否则,若优先级比栈顶运算符的高,也将运算符压入s1;
   3. 否则,将s1栈顶的运算符弹出并压入到s2中,再次转到(4-1)与s1中新的栈顶运算符相比较
5. 遇到括号时
   1. 如果是左括号“(”,则直接压入s1
   2. 如果是右括号“)”,则依次弹出s1栈顶的运算符,并压入s2,直到遇到左括号为止,此时将这一对括号丢弃
6. 重复步骤2至5,直到表达式的最右边
7. 将s1中剩余的运算符依次弹出并压入s2
8. 依次弹出s2中的元素并输出,结果的逆序即为中级表达式对应的后缀表达式
* */
