import MenuCard from "./MenuCard";

function Menu({menu}:{menu:Item[]}) {

  return ( 
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.length ?
            menu.map((m,idx)=>{
              return (
                <MenuCard key={idx} menu={m}/>
                )
              })
              :
              <p>이 레스토랑은 메뉴가 없습니다</p>
          }
        </div>
      </div>
    </main>
  );
}

export default Menu;