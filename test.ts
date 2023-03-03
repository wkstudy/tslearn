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