import { PrismaClient } from "@prisma/client";

import DetailNavBar from "./components/DetailNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import DetailImages from "./components/DetailImages";
import Review from "./components/Review";
import ReservationCard from "./components/ReservationCard";

const prisma = new PrismaClient()

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  location: Location;
  slug: string;
}

const fetchRestaurantBySlug = async(slug:string): Promise<Restaurant> =>{
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      id:true,
      name: true,
      images: true,
      description: true,
      slug: true,
    }
  })
  if (!restaurant){
    throw new Error()
  }
  return restaurant
}

export default async function RestaurantDetails({params}:{params: {slug:string}}) {
  const restautant = await fetchRestaurantBySlug(params.slug)
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <DetailNavBar slug={restautant.slug}/>
        <Title name ={restautant.name}/>
        <Rating/>
        <Description description={restautant.description}/>
        <DetailImages images={restautant.images}/>
        <Review/>
      </div>
      <ReservationCard/>
    </>
  );
}
