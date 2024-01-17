"use client"

import { Navbar, Footer} from "@/exports/ComponentExports";
import { Introduction, AboutMe, Skills, ContactMe, Projects } from "@/exports/PagesExports";

const Page = () => {
  return(
    <div>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Page;
