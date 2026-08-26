//หน้า home page Root = /
import Link from "next/link";
export default function Page() {
  return (
    <div>
    <h1> ID:6752410029 </h1>
    <h1> Name: Rattankorn Sura </h1>
    <hr />
    <h3>Link to Basic Routing Page</h3>
    <Link href="/register">[หน้า Register Page]</Link><br />
    <Link href="/products">[หน้า Products Page]</Link> <br />
    <Link href="/member">[หน้า Member Page]</Link> <br />


    

    <hr />
    <h3>Link to Nested Routing Page</h3>

    <Link href="/products/keyboard">[หน้า Keyboard]</Link><br />
    <Link href="/products/mouse">[หน้า Mouse]</Link><br />
    <Link href="/products/notebook/lenovo">[หน้า Lenovo Notebook]</Link><br />
    <Link href="/products/notebook/acer">[หน้า Acer Notebook]</Link> <br />

    </div>
  );
}