# 类型

## 联合类型 Pick 和 Patial(部分局部的)  以及条件类型

```typescript
// 联合类型
let user : string|null|undefined="";
// 或者
type NullableStr = string|null|undefined;
let user : NullableStr=''

/**
* 用户类型
*/
interface User {
    nickName:string;
    age:number;
    gender:string;
    avatar:string
}
type PartialUser =Partial<User>
function updateUser(dto:PartialUser){}
// 使用 partial 时候不要求传入全部的变量 
updateUser({nickname:""})

// 得到所有变量
type keyofUser = keyof User;

// 与上面 type PartialUser =Partial<User> 效果一致
type MyPartial<T> = {
    [P in keyof T]?:T[P] |undefined
}

// 选取部分
type MyPick<T,Keys extends keyof K> = {
    [P in keyof T]:T[P]
}
type UserAgeGender = MyPick<User,"age"|"gender">


// 选出不同的类型
type UserKeys ="name"| "age"
type StudentKeys="name"|"age"|"gender"

// 会 返回不同的KEY
type Diff<T, U>=T extends U ? never : T

type StudentUserDiffKeys= Diff<studentKeys, UserKeys>


```

```typescript
Omit<> pick<>
```

函数类型

```typescript
type addTag =  (payload: TagActionPayload)=>TagAction; // 箭头后面是返回值类型
```

