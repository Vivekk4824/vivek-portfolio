import { useEffect, useState } from "react";
import { getPortfolio } from "../services/portfolioApi";

export default function usePortfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const portfolio = await getPortfolio();

        setData(portfolio);
      } catch (err) {
        console.error(err);

        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolio();
  }, []);

  return {
    data,
    loading,
    error
  };
}