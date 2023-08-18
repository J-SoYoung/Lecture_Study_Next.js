import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import DetailHeader from "../components/DetailHeader";
import DetailNavBar from "../components/DetailNavBar";
import Menu from "../components/Menu";

export default function RestaurantMenuPage() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <DetailNavBar/>
      <Menu/>
    </div>
  );
}
