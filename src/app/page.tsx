import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";
import { Services } from "@/components/Services";
import { promises as fs } from "fs";
import path from "path";

const getAboutMeContent = async (): Promise<string> => {
  try {
    const filePath = path.join(process.cwd(), "public", "about-me-content.md");
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch {
    return "An error occurred while loading content.";
  }
};

export default async function Home() {
  const content = await getAboutMeContent();

  return (
    <main className="w-full">
      <section className="min-h-screen w-full">
        <Hero />
      </section>
      <section className="min-h-screen w-full">
         <AboutMe content={content} />
      </section>
      <section className="min-h-screen w-full">
        <Work />
      </section>
      <section className="w-full">
        <Services />
      </section>
      <section className="min-h-screen w-full">
        <Achievements />
      </section>
      <section className="min-h-screen w-full">
        <Contact />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
