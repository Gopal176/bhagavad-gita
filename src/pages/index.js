import GetChapters from "@/components/getChapters";
import MainContent from "@/components/MainContent";
import GetShlok from "@/components/getShlok";
import { useState } from "react";

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSummary, setSelectedSummary] = useState(null);

  return (
    <section id="page">
      <header> Bhagvad Gita App</header>
      <nav>
        {
          <GetChapters
            setSelectedChapter={setSelectedChapter}
            setSelectedSummary={setSelectedSummary}
          />
        }
        {/* <GetShlok /> */}
      </nav>
      <main>
        <MainContent
          selectedChapter={selectedChapter}
          selectedSummary={selectedSummary}
        />
      </main>

      <footer>Footer</footer>
    </section>
  );
}
