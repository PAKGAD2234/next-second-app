import {Itim, Srisakdi} from "next/font/google";
import localFont from "next/font/local";
const itim = Itim({
  subsets: ["thai", "latin"],
  weight: ["400"],
});

const srisakdi = Srisakdi({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
});

const Denim = localFont({
  src: "./../fonts/Denim.ttf",
  weight: "400",
});

export default function Page() {
    return (
        <div>
            <h1>Products Page</h1>
            <hr />
            <h1 >สวัสดีคร่าาาา💕</h1>
            <h1 className={itim.className}>ลาก่องงง👋 font Item</h1>
            <h1 className={srisakdi.className}>บั้ยยยยยยยยยยยย👋😭 font srisakdi</h1>
            <hr />
            
            <h1 className={Denim.className}>มหาวิทยาลัยอาคเนย์🎓</h1>

        </div>
    );
}

//basic Routing = /products