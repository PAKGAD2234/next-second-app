import Image from "next/image";
import cat1 from "./../../assets/images/cat1.png";
import cat2 from "./../../assets/images/cat2.png";
export default function Page() {
    return (
        <div>
            <hr />
            <h1 className="text-center text-green-900 font-bold text-4xl">
                Register Page
            </h1>
            <br />

            {/* รูปที่เอามาจากโฟล์เดอร์ public/images/ */}


            <Image src="/kitty.png" alt="Kitty Icon" width={200} height={200} 
            className="border-4 border-blue-500 rounded-4xl mx-auto" />

            <br />
            {/* รูปที่เอามาจากโฟล์เดอร์ assets/images/ */}

            <Image src={cat1} alt="Kitty Icon" width={200} height={200} 
            className="border-4 border-green-500 rounded-4xl ml-auto" />

            <br />

            <Image src={cat2} alt="Kitty Icon" width={200} height={200} 
            className="border-4 border-yellow-500 rounded-4xl p-2 mt-2" />
            <br />
            
            {/* รูปที่เอามาจากเว็บไซต์ภายนอก */}
            <Image
            src ="https://images.pexels.com/photos/38614524/pexels-photo-38614524.jpeg"
            alt="Rose Icon"
            width={200}
            height={200}
            className="border-4 border-purple-500 rounded-4xl mx-auto"
             />
             <br />
            <Image
            src ="https://media.istockphoto.com/id/140276482/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A2%E0%B8%B7%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87.jpg?s=2048x2048&w=is&k=20&c=-bC2Tf-54Xv4w7l_za6DTOIhJ3HjOSMak3ZiGVk2GyI="
            alt="Rose Icon"
            width={500}
            height={500}
            className="border-4 border-purple-500 rounded-4xl mx-auto"
             />

        </div>
    );
}
// อ้างอิงรูปจากโฟล์เดอร์ public/images/nextjs-icon.png
//basic Routing = /register