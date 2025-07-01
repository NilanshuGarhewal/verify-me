// requiring stuff
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config({ path: "./.env" });

// declaring stuff
const PORT = 5000;

// using stuff
app.use(cors());
app.use(express.json());

// checl middlewares
const checkSus = (stats) => {
  let safe = "good";
  let reason =
    "Everything looks good and the profile looks completed, but still double check on your own.";

  if (stats.followers < 100 && stats.following > 300 && stats.posts < 5) {
    safe = "bad";
    reason =
      "Low followers, high following, and barely any posts = Suspicious ⚠️";
  } else if (!stats.profile_pic || stats.profile_pic === "") {
    safe = "bad";
    reason = "No profile picture = Might be fake 😬";
  } else if (!stats.full_name || stats.full_name.length < 2) {
    safe = "bad";
    reason = "No proper full name = Not trustworthy";
  } else if (
    stats.followers > 5000 &&
    stats.is_verified === false &&
    stats.full_name.toLowerCase().includes("official")
  ) {
    safe = "bad";
    reason =
      "High follower account with 'official' in name but not verified = Could be impersonating";
  }

  return { safe, reason };
};

const checkNeu = (stats) => {
  let safe = "good";
  let reason =
    "Everything looks good and the profile looks completed, but still double check on your own.";

  if (!stats.bio) {
    safe = "neutral";
    reason = "Empty or weak bio = Looks incomplete";
  } else if (stats.followers < 100000 && stats.is_verified == true) {
    safe = "neutral";
    reason = "low followers but verifies, looks like he purchased bluetick";
  }

  return { safe, reason };
};

// creating & using api
app.post("/check-profile", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.json({
      isUrl: false,
      why: "URL not provided!",
    });
  }

  console.log(url);

  const isInsta = url.includes("instagram.com");

  if (!isInsta) {
    return res.json({
      isUrl: true,
      instaInclude: false,
    });
  }

  // Extract username from Instagram link
  const username = url.split("instagram.com/")[1].split(/[/?]/)[0];

  console.log(username);

  // ACTUAL URL
  const encodedParams = new URLSearchParams();
  encodedParams.set("username_or_url", username);
  encodedParams.set("data", "basic");

  const options = {
    method: "POST",
    url: "https://instagram-scraper-stable-api.p.rapidapi.com/ig_get_fb_profile.php",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: encodedParams,
  };

  console.log(options.data);

  const response = await axios.request(options);
  let data = response.data;

  const profileData = {
    username: data.username || "",
    followers: data.follower_count || 0,
    following: data.following_count || 0,
    posts: data.media_count || 0,
    profile_pic:
      data.hd_profile_pic_url_info?.url || data.profile_pic_url || "",

    category: data.category || "Unknown",
    is_verified: data.is_verified || false,
    full_name: data.full_name || "",
    bio: data.biography || "",
  };

  console.log(profileData);

  // let demo_data = {
  //   username: "totallynotfake123",
  //   followers: 24,
  //   following: 1843,
  //   posts: 1,
  //   profile_pic: "",
  //   categoty: "",
  //   is_verified: false,
  //   full_name: "",
  //   bio: "DM for collab",
  // };

  let stats = profileData;

  let result = checkSus(stats);

  if (result.safe == "good") {
    result = checkNeu(stats);
  }

  return res.json({
    isUrl: true,
    instaInclude: true,
    safe: result.safe,
    reason: result.reason,
    stats,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
