class LocalDB<T> {
  constructor(private localStorageKey: string) {
  }
  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v))
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return (v) ? JSON.parse(v) : null;
  }
}

interface User { name: string }

const userDB = new LocalDB<User>('user');
userDB.add({ name: 'jay' });
const userA = userDB.get();
userA.name;

/* -------------------------------------------------------------------------- */

// 제네릭은 인터페이스에서도 사용할 수 있다. 
interface DB<T>{
  add(v: T): void;
  get(): T;
}

interface JSONSerializer {
  serialize(): string;
}

class RemoteDB<T extends JSONSerializer> implements DB<T> {
  constructor(private localStorageKey: string) {
  }
  add(v: T): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }
  get(): T {
    const  v = localStorage.getItem(this.localStorageKey);
    return (v) ? JSON.parse(v) : null;
  }
}

const remoteUserDB = new RemoteDB<JSONSerializer>('haha');