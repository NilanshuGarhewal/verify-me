import "./ResultSection.css";
import "../HeroSection/HeroSection.css";
import InputBox from "../InputBox/InputBox";
import Details from "../Details/Details";
import SaveCrash from "../SaveCrash/SaveCrash";

export default function ResultSection({ result, url }) {
  return (
    <div id="result-section">
      <p className="upper-heading">
        please paste your <span className="unique">link</span> to verify
      </p>

      <InputBox show={false} margin={20} />

      {result?.isUrl ? (
        result?.instaInclude ? (
          <Details res={result} />
        ) : (
          <SaveCrash
            message={"Only instagram profile links are supported now."}
          />
        )
      ) : (
        <SaveCrash message={"URL needed"} />
      )}
    </div>
  );
}
