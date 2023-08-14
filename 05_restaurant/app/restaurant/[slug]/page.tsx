import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import DetailHeader from "./components/DetailHeader";
import DetailNavBar from "./components/DetailNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import DetailImages from "./components/DetailImages";
import Review from "./components/Review";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <DetailHeader/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <DetailNavBar/>
            <Title/>
            <Rating/>
            <Description/>
            <DetailImages/>
            <Review/>
          </div>
          <ReservationCard/>
        </div>
      </main>
    </main>
  );
}
