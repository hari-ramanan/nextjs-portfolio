import { IntroData, SocialIconsData } from "@/lib/data";
import Image from "next/image";
import coder from '../assets/profile_images/coder.webp';
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import Link from "next/link";
import Head from "next/head";


const IconsData = [
    { Icon: LinkedIn, url: SocialIconsData.LinkedinUrl },
    { Icon: GitHub, url: SocialIconsData.GithubuUrl },
    { Icon: Mail, url: SocialIconsData.MailUrl },
];

export default function Introduction() {
    return (
        <div>
            <Head>
                <title>{IntroData.name} - Introduction </title>
                <meta name="description" content="Front End developer | Linux Enthusiast | Content Craetor | Aspiring Full Stack Developer" />
                <meta property="og:title" content={`${IntroData.name} - Introduction`} />
                <meta property="og:description" content="Dedicated job seeker looking for a satisfying position where I can put my abilities to use, work with a great team, and contribute to the company's goals. I am well-versed in web development and interpersonal interaction. Currently, I am learning Backend Technologies and will get expertise in that soon" />
            </Head>

            <div id="about" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                <div className="container mx-10 my-10">
                    <h2 className="mt-10 text-5xl lg:text-6xl md:text-4xl sm:text-lg">Welcome, I am</h2>
                    <p className="mt-4 ml-2 text-3xl text-pink-700">{IntroData.name}</p>
                       
                </div>

                <div className="mt-10 flex justify-center items-center">
                    <Image src={coder} className="ml-5 bg-pink-700 rounded-full w-96 h-96" alt="profile-photo" />
                </div>
            </div>

            <div className="ml-5 hidden lg:flex">
                <div className="fixed">
                    {IconsData.map(({ Icon, url }, index) => (
                        <Link href={url} target="_blank" key={index}>
                            <div className="flex flex-row p-3 text-white bg-pink-700 rounded-full">
                                <Icon className="" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
