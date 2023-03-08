// Partial

type IPartical<Type> = {
  [x in keyof Type]?: Type[x]
}
// Required<Type>
type IRequire<Type> = {
  [x in keyof Type]: Type[x]
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
type IOmit<Type, Keys extends keyof Type> = {
  [k in Exclude<keyof Type, Keys>]: Type[k]
}

// Exclude<UnionType, ExcludedMembers>
//  ?
type IExclude<UnionType, Keys> = ;
type T0 = Exclude<"a" | "b" | "c", "a"| "b">;
// type T0 = "b" | "c"


// ? 
type IExclude2<Type, Keys extends keyof Type>= {
  [k in keyof Type] : k extends Keys ? never : Type[k]
}


// Extract<Type, Union>
type IExtract<Type, Union> = {
  [k in keyof Union]: k extends keyof Type ? Type[k] : never
}

let x = [0, 1, null];
