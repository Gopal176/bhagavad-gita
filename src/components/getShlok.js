import { useState, useEffect } from "react";
import GetChapters from "./getChapters";
// const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/`;
const options = {
  method: "GET",
  url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/",
  headers: {
    "X-RapidAPI-Key": "9a0bfaef88msh2fe99b13243688ep1a2010jsn12cc4d99f86a",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

const GetShlok = (props) => {
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${props.selectedChapter}/verses/`;
  const [shlok, setshlok] = useState([]);
  const [selectedShlok, setSelectedShlok] = useState(null);
  const shlokdata = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (data.length > 0) setshlok(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    shlokdata(url, options);
  }, []);

  return (
    <div>
      <ul>
        {shlok.map((res) => (
          <div
            style={{
              borderStyle: "solid",
              listStyle: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              handleChapterClick(chapter.chapter_number);
              handleChapterSummary(chapter.chapter_summary);
            }}
          >
            <li>Verse No.{res.verse_number}</li>
            {/* <p>{res.translations.description}</p> */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetShlok;
