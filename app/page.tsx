//หน้า home page Root = /
import Link from "next/link";
export default function Page() {
  return (
    <div>
    <h1> ID:6752410029 </h1>
    <h1> Name: Rattankorn Sura </h1>
    <hr />
    <h3>Link to Basic Routing Page</h3>
    <Link href="/register">[Register Page]</Link><br />
    <Link href="/products">[Products Page]</Link> <br />

    

    <hr />
    <h3>Link to Nested Routing Page</h3>

    <Link href="/products/keyboard">[Keyboard Page]</Link><br />
    <Link href="/products/mouse">[Mouse Page]</Link><br />
    <Link href="/products/notebook/lenovo">[Lenovo Notebook]</Link><br />
    <Link href="/products/notebook/acer">[Acer Notebook]</Link> <br />

    </div>
  );
}