// import GetChapters from "../components/getChapters";
import getShlok from "./getShlok";
export default function MainContent(props) {
  return (
    <div>
      {props.selectedChapter && <h2>Chapter {props.selectedChapter}</h2>}
      {props.selectedSummary && <h2>Chapter {props.selectedSummary}</h2>}
    </div>
  );
}
