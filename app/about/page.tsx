import Image from "next/image";
import profilePic from "../../public/images/casamila.jpeg"


export default function About(){
    return (
        <div className="flex -space-x-1 overflow-hidden justify-center mt-10">
            <Image className="inline-block h-13 w-13 rounded-full ring-2 ring-white"
                    src={profilePic}
                    alt="casamila" 
                    width={500}
                    height={500}/>
            <p className="text-lg text-pretty inline-block mt-10">Welcome to the official explorer for The New York Times Bestseller list explorer:  We hope enjoy your stay!</p> 
        </div>
    );
}