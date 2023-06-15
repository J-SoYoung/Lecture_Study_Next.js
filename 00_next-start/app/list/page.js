// next에서 제공하는 최적화 img컴포넌트를 사용할 수 있음
// import Image from "next/image";
// import tomato from "/public/img/tomato.png";

"use client";
import { useState } from "react";

export default function List() {
  let 상품 = [
    { name: "Tomato", img: "tomato.png", num: 0 },
    { name: "melon", img: "melon.jpg", num: 0 },
    { name: "coconut", img: "coconut.png", num: 0 },
    { name: "Pasta", img: "pasta.png", num: 0 },
    { name: "Egg", img: "egg.jpg", num: 0 },
    { name: "Icecream", img: "icecream.jpg", num: 0 },
  ];
  const [count, setCount] = useState([0, 0, 0, 0, 0, 0]);
  return (
    <>
      <div className="food-box">
        <h1>상품목록</h1>
        <div className="food-list">
          {상품.map((ele, idx) => {
            return (
              <div className="food" key={idx}>
                {/* <Image src={tomato} className="food-img" /> */}
                <img src={`/img/${ele.img}`} className="food-img" />
                <h4>
                  {ele.name} : {(idx + 1) * 1000}원
                </h4>
                <div className="list-btn-box">
                  <span>{count[idx]}</span>
                  <button
                    className="list-btn"
                    onClick={() => {
                      let copy = [...count];
                      copy[idx]++;
                      setCount(copy);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="list-btn"
                    onClick={() => {
                      setCount(count[idx] - 1);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
