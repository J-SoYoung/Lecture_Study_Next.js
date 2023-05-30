import Image from "next/image";
// next에서 제공하는 최적화 img컴포넌트를 사용할 수 있음
// import tomato from "/public/img/tomato.png";

export default function List() {
  let 상품 = [
    { name: "Tomato", img: "tomato.png" },
    { name: "melon", img: "melon.jpg" },
    { name: "coconut", img: "coconut.png" },
    { name: "Pasta", img: "pasta.png" },
    { name: "Egg", img: "egg.jpg" },
    { name: "Icecream", img: "icecream.jpg" },
  ];
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
