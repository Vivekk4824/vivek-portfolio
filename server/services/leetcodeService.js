const axios = require("axios");

const LEETCODE_API = "https://leetcode.com/graphql";

async function getLeetCodeStats(username) {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username

        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
          realName
          userAvatar
        }
      }

      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
      }
    }
  `;

  const response = await axios.post(
    LEETCODE_API,
    {
      query,
      variables: {
        username
      }
    },
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    }
  );

  const data = response.data.data;

  if (!data || !data.matchedUser) {
    throw new Error("LeetCode user not found");
  }

  const submissions =
    data.matchedUser.submitStatsGlobal.acSubmissionNum;

  const easy =
    submissions.find(
      (item) => item.difficulty === "Easy"
    )?.count || 0;

  const medium =
    submissions.find(
      (item) => item.difficulty === "Medium"
    )?.count || 0;

  const hard =
    submissions.find(
      (item) => item.difficulty === "Hard"
    )?.count || 0;

  return {
    username,

    problemsSolved: easy + medium + hard,

    easy,
    medium,
    hard,

    rating:
      data.userContestRanking?.rating || null,

    globalRanking:
      data.userContestRanking?.globalRanking || null,

    contestsAttended:
      data.userContestRanking?.attendedContestsCount || 0,

    topPercentage:
      data.userContestRanking?.topPercentage || null,

    profileRanking:
      data.matchedUser.profile?.ranking || null
  };
}

module.exports = {
  getLeetCodeStats
};