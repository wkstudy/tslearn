// Partial

type IPartical<Type> = {
  [x in keyof Type]?: Type[x]
}
// Required<Type>
type IRequire<Type> = {
  [x in keyof Type]-?: Type[x]
}
// Readonly<Type>
type IReadonly<Type> = {
  readonly[x in keyof Type]: Type[x]
}
// Record<Keys, Type>
type IRecord<Key extends string | number | symbol, Type> = {
  readonly[x in  Key]: Type
}


// Pick<Type, Keys>
type IPick<Type, Keys extends keyof Type> = {
  [k in Keys]: Type[k]
}

// Omit<Type, Keys>
// type IOmit<Type, Keys extends keyof Type> = {
//   [k in Exclude<keyof Type, Keys>]: Type[k]
// }

// Exclude<UnionType, ExcludedMembers>
//  ?
// type IExclude<UnionType, Keys> = {};
// type T0 = Exclude<"a" | "b" | "c", "a"| "b">;
// type T0 = "b" | "c"


// ? 
type IExclude2<Type, Keys extends keyof Type>= {
  [k in keyof Type] : k extends Keys ? never : Type[k]
}



let x = [0, 1, null];

interface Animal {
  name: string;
}
 
interface Dog extends Animal {
  breed: string;
}
 
// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Dog;
  // 'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
  [x: string]: Animal;
}
let arr: ReadonlyArray<string> = [''];



interface T {
  name: string;
  age: number
}

type C = Exclude<{name: string;age: number}, {name: string}>

type D = Exclude<'name' | 'age', 'name'>
//  never直接被过滤了

type E = Exclude<{name: string;age: number},'name'>


// partial
type f = Partial<'name'|'age'>
type g = Partial<{name: string; age: number}>

// Record<Keys, Type>
type IIRecord<K, V> = {
  [s in keyof K]: V
}
type i = Record<'name'| 'age', number>

// Pick<Type, Keys>
type IPICK<Type, Keys extends keyof Type> = {
  [i in Keys]: Type[i]
}
// Omit<Type, Keys>
type IOmit<Type, Keys> = Pick<Type, Exclude<keyof Type, Keys>>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, 'description'>;

// const todo: TodoPreview = {
//   title: 'Clean room',
//   completed: false,
// };
type a = string extends Object ? true : false
type b = null & Object;
type d = undefined & Object;

type IExclude<Type, Keys> = Type extends Keys ? never : Type
type c = IExclude<'a'|'b', 'a'>
type e = keyof 'a' | 'b'

// ? Extract<Type, Union>
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type IExtract<Type, Union> = Type extends Union ? Type : never;

//  a extends b ? a b 为联合类型的话是单独某一项与某一项之间的比较，而不是整体的比较

// NonNullable<Type> 
type T1 = NonNullable<string | number | undefined>; // string | number
type INonNullable<T> = T extends null | undefined ? never : T
type INonNullable2<T> = T & Object;
type T2 = NonNullable<string[] | null | undefined>; // string[]

// Parameters<Type>
type IParameters<T> =  T extends (...args: infer R)=> any ? R : never;
type T3 = IParameters<(s: string) => void>;
// ConstructorParameters<Type>
type T4 = ConstructorParameters<ErrorConstructor>; //    [message?: string | undefined]
type  IConstructorParameters<T> = T extends {new(...args: infer R): any} ? R : never
type T5 = ConstructorParameters<any>; //   unknown[]

// ReturnType<Type> 
type T6 = ReturnType<() => string>;  // string
type IReturnType<T> = T extends (...args: any) =>infer R ? R :never;

// InstanceType<Type>

// Required<Type>
// interface Props {
//   a?: number;
//   b?: string;
// }

// const obj: Props = { a: 5 }; // OK

// const obj2: IRequire<Props> = { a: 5 };

// 注册
// 处罚


// class EventEmit {
//   listeners: {
//     [name:string]: [(...args: any[])=> void]
//   }[];
//   constructor() {
//     this.listeners = []
//   }
//   // 注册
//   on(name:string, cb:(...args: any[])=>void) {
//     if(this.listeners[name] !== undefined) {
//       this.listeners[name].push(cb)
//     } else {
//       this.listeners[name] = [cb]
//     }

//   }
//   trigger(name:string) {
//     this.listeners[name]?.forEach(cb => {
//       cb()
//     });

//   }
// }

// let ee = new EventEmit();
// ee.on('name', function() {
//   console.log(name)
// })
// ee.trigger('name')