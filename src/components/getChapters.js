import { useState, useEffect } from "react";
import GetShlok from "./getShlok";

const url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";

const options = {
  method: "GET",
  url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
  params: { limit: "18" },
  headers: {
    "X-RapidAPI-Key": "9a0bfaef88msh2fe99b13243688ep1a2010jsn12cc4d99f86a",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

export default function GetChapters(props) {
  const [chapters, setChapters] = useState([]);
  const [activeList, setActiveList] = useState("chapter");
  // const [summary, setSummary] = useState([]);

  const dataNew = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (data.length > 0) setChapters(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    dataNew(url, options);
  }, []);

  const handleChapterClick = (chapterNumber) => {
    props.setSelectedChapter(chapterNumber);
    setActiveList("shlok");
  };
  const handleShlokClick = () => {
    setActiveList("shlok");
  };
  const handleChapterSummary = (chapterSummary) => {
    props.setSelectedSummary(chapterSummary);
  };
  if (activeList === "chapter") {
    return (
      <div>
        <ul className={activeList}>
          {chapters.map((chapter) => (
            <div
              style={{
                borderStyle: "solid",
                listStyle: "none",
                cursor: "pointer",
              }}
              key={chapter.chapter_number}
              onClick={() => {
                handleChapterClick(chapter.chapter_number);
                handleChapterSummary(chapter.chapter_summary);
              }}
            >
              <li>{chapter.name}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  } else {
    return <GetShlok />;
  }
}
