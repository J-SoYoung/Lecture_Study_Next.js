import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import ReserveHeader from "./components/ReserveHeader";
import ReserveForm from "./components/ReserveForm";

export default function ReservationPage(){
  return (
<main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    <NavBar/>
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReserveHeader/>
        <ReserveForm/>
      </div>
    </div>
  </main>
</main>

  )
}