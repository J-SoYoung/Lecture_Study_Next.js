import { age } from "./data";
import { name } from "./data";
import Test from "./test";

export default function Cart() {
  return (
    <div>
      <h1 className="title">
        Cart - {name},{age}
      </h1>
      <Test />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
