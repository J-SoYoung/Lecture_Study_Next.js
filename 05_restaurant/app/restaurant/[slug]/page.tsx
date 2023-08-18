import DetailNavBar from "./components/DetailNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import DetailImages from "./components/DetailImages";
import Review from "./components/Review";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <DetailNavBar/>
        <Title/>
        <Rating/>
        <Description/>
        <DetailImages/>
        <Review/>
      </div>
      <ReservationCard/>
    </>
  );
}
