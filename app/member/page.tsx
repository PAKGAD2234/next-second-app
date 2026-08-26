
import Link from "next/link";
export default function Page() {

    return (
        <div>
            <h1>Member  Page</h1>
            <hr />

            <Link href="/member/normal/n0001">Go to Normal Member รหัส  n0001</Link><br />
            <Link href="/member/vip/vip0001/Rattankorn/23">Go to VIP Member รหัส vip0001/ชื่อ รัตนากร/ อายุ 23 ปี</Link><br />
           
        </div>
    );
}

//basic Routing = /products