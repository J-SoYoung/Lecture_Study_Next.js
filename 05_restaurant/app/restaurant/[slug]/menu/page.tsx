import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import DetailHeader from "../components/DetailHeader";
import DetailNavBar from "../components/DetailNavBar";
import Menu from "../components/Menu";

export default function RestaurantMenuPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
        <DetailHeader/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <DetailNavBar/>
            <Menu/>
          </div>
        </div>
      </main>
    </main>
  );
}
