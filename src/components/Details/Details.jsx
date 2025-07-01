import "./Details.css";
import ShowSafe from "../showSafe/ShowSafe";
import DetailBox from "../DetailBox/DetailBox";

export default function Details({ res }) {
  function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  let data = {
    account_name: res?.stats?.username,
    followers: formatNumber(res?.stats?.followers),
    following: formatNumber(res?.stats?.following),
    posts: res?.stats?.posts,
    is_verified: res?.stats?.is_verified ? "yes" : "no",
    full_name: res?.stats?.full_name,
  };

  let isSafe = res?.safe;

  return (
    <div className="details">
      <div className="heading-box">
        <p>
          Account &nbsp;<span>details</span>
        </p>
        <div className="heading-line"></div>
      </div>

      <div className="detail-box">
        <DetailBox object={data} />
        <ShowSafe isSafe={isSafe} reason={res?.reason} />
      </div>

      <div className="line"></div>
    </div>
  );
}
