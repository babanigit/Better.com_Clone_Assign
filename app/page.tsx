//homepage
import HomeSection1 from "@/components/sections/HomeSection1";
import HomeSection2 from "@/components/sections/HomeSection2";
import HomeSection3 from "@/components/sections/HomeSection3";



export default function Home() {
  return (

    <>
    <div className="bg-accentBorderInverseSecondary full-hero">

      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />

      <hr className="border-t border-strokeDivider my-0 pb-lg" />
    </div>
    </>

  );
}
