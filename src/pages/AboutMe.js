import Image from "next/image";
import { AboutData } from "@/lib/data";
import Link from "next/link";
import image from '../assets/profile_images/image.jpg'

const Aboutme = ()=> {
    return(
        <div id="about">
            <h1 className="mt-10 mt text-3xl text-center mt-18"> About me  </h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
                <div className='flex justify-center mt-10'>
                  <Image src={image}  alt={AboutData.image.alt} className='rounded-3xl ml-7 w-72 ' />
                </div>

                <div className='container mt-10 ml-5'>
                    <h1 className="mt-7 text-3xl"> {AboutData.name} </h1>
                    <p className="mt-5 text-sm"> {AboutData.title} </p>
                    <p className="mt-9"> {AboutData.description} </p>
                    <Link href={AboutData.resume.url} target="_blank">
                       <button className="mt-6 text-lg bg-pink-700 text-white rounded-xl p-2 cursor-pointer">Resume</button>  
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Aboutme;
