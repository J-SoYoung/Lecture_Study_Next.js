import { PrismaClient } from "@prisma/client";

import DetailNavBar from "../components/DetailNavBar";
import Menu from "../components/Menu";

const prisma = new PrismaClient()
const fetchRestaurantMenu = async (slug:string) =>{
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      items: true
    }
  })
  if(!restaurant){
    throw new Error
  }
  return restaurant.items
}

export default async function RestaurantMenuPage({params}: {params: {slug : string}}) {
  const menu = await fetchRestaurantMenu(params.slug)
 
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <DetailNavBar slug={params.slug}/>
      <Menu menu={menu}/>
    </div>
  );
}
