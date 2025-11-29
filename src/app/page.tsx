import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";

const getGithubReadme = async (username: string): Promise<string> => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${username}/readme`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      return "Failed to load About Me content.";
    }
    const data = await res.json();
    return Buffer.from(data.content, "base64").toString("utf-8");
  } catch (error) {
    return "An error occurred while loading content.";
  }
};

export default async function Home() {
  const content = await getGithubReadme("kdsecdev");

  return (
    <main>
      <Hero />
      <AboutMe content={content} />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
