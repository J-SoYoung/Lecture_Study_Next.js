import { age } from "./data";
import { name } from "./data";
import Test from "./test";

export default function Cart() {
  let 장바구니 = ["tomato", "pasta"];
  return (
    <div className="cart-box">
      <h1 className="title">
        Cart - {name},{age}
      </h1>
      {장바구니.map((ele, idx) => {
        return <CartItem item={ele} />;
      })}
      <Test />
      <Banner content="롯데카드" />
      <Banner content="삼성카드" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Banner(props) {
  return <p className="propsTest">{props.content} 결제 행사중, props을 이용해 데이터 전송</p>;
}
