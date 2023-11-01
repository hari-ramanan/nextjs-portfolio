import Image from "next/image";
import contact_image from '../assets/contact_image.png';

const ContactMe = () => {
    return (
        <div id="contact">
            <h2 className="mt-32 text-3xl text-center">Contact Me</h2>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="lg:order-2 md:order-2 sm:order-1"> 
                    <Image src={contact_image} className="w-full h-auto lg:ml-4" alt="contact-image"/> 
                </div>

                <div className="lg:order-2 md:order-2 sm:order-2 ml-4">
                    <h2 className="text-lg mt-6"> Get in Touch with me </h2>
                    <p className="text-md opacity-70">Inbox is always open. Feel free to connect!</p>
                    <input type="text" className="mt-7 text-black bg-gray-200 rounded-md w-full h-14 p-3 mb-4" placeholder="Name" required/>
                    <input type="email" className="text-black bg-gray-200 rounded-md w-full h-14 p-3 mb-4" placeholder="Email" required />
                    <textarea className="text-black bg-gray-200 rounded-md w-full h-32 p-3 mb-4" placeholder="Message" required />
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
