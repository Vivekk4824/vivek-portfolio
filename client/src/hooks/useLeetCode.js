import { useEffect, useState } from "react";

export default function useLeetCode() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
        const response = await fetch(`${baseUrl}/leetcode`);

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode stats");
        }

        const data = await response.json();

        setStats(data);
      } catch (error) {
        console.error(
          "LeetCode stats error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return {
    stats,
    loading
  };
}