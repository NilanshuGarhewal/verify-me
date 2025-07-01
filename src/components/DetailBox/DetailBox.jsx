import "./DetailBox.css";

import Box from "../Box/Box";

export default function DetailBox({ object }) {
  return (
    <div className="detail-container">
      <div className="d1">
        <Box boxName={"account name"} boxContent={object.account_name} />
        <Box boxName={"following"} boxContent={object.following} />
        <Box boxName={"posts"} boxContent={object.posts} />
      </div>
      <div className="d2">
        <Box boxName={"full name"} boxContent={object.full_name} />
        <Box boxName={"followers"} boxContent={object.followers} />
        <Box boxName={"verified?"} boxContent={object.is_verified} />
      </div>
    </div>
  );
}
