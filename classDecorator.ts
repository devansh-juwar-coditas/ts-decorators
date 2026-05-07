function Logger(constructor: Function) {
  constructor.prototype.name = "Devansh";
}
@Logger
class User {}
const c = new User()
console.log((c as any).name);
