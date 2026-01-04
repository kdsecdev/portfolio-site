import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";

const getAboutMeContent = async (): Promise<string> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/about-me-content.md`, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return "Failed to load About Me content.";
    }
    return await res.text();
  } catch {
    return "An error occurred while loading content.";
  }
};

export default async function Home() {
  const content = await getAboutMeContent();

  return (
    <main>
      <Hero />
      <AboutMe content={content} />
      <Work />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
