interface User {
  name: string
}
interface Product {
  id: string;
  price: number;
}
class Cart {
  
  // protected user: User; // protect의 경우 인스턴스에서 접근이 되지 않고 상속해도 보이지 않는다.
  // private store: object; // 인스턴스에서 접근이 되지 않는다. 상속하면 인스턴스의 속성이 새로 만들어진다. 
  
  // 이렇게쓰면 public user라는 것을 바로 생성할 수 있다.  위의 두 줄이 필요가 없어진다. 
  constructor(public user: User, private store: object = {}) {
    this.user = user;
  }
  
  public put(id: string, product: Product) {
    this.store[id] = product;
  }
  
  get(id) {
    return this.store[id];
  }
}

//상속은 extends를 쓰면된다. 
class PromotionCart extends Cart {
  addPromotion() {
    this.user
  }
}
const cart2 = new PromotionCart({ name: 'john' });

const cartJohn = new Cart({ name: 'John '});
const cartJay = new Cart({ name: 'Jay' });