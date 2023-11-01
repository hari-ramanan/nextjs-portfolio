import Image from "next/image";
import project_1 from '../assets/project_images/project_1.png';
import { ProjectsData } from "@/lib/data";
import { GitHub, PublicOutlined } from "@mui/icons-material";
import Link from "next/link";



const Projects = () => {
  return (
    <div id="projects">
      <h2 className="mt-32 text-3xl text-center">Projects Built</h2>
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="group relative">
          <div className="bg-white p-4 rounded-xl w-full h-full absolute top-0 left-0 transform rotateY-180 transition-transform opacity-0 group-hover:opacity-100">
            <p className="mb-2 text-lg font-bold"> {ProjectsData.Project_1.name}</p>
            <p> {ProjectsData.Project_1.description} </p>
            <p className="mb-1 text-gray-400"> Tech Stack:{ProjectsData.Project_1.techstack}</p>
            <div className="flex flex-row justify-evenly">
              <Link href={ProjectsData.Project_1.githubrepo}>
                <GitHub />
              </Link>

              <Link href={ProjectsData.Project_1.demo}>
                <PublicOutlined />
              </Link>
            </div>
          </div>

          <div className="w-full h-full transform transition-transform rotateY-0 group-hover:rotateY-180 group-hover:opacity-0">
            <Image src={project_1} className="rounded-xl" alt="Project 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
