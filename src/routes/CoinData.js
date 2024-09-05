// CoinData.js
import React, { useEffect, useState } from 'react';

export const useCoinData = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((data) => {
        // 필요한 데이터만 추출
        const processedData = data.map((coin, index) => ({
          id: index + 1, // 고유한 id
          name: coin.name,
          symbol: coin.symbol,
          rank: coin.rank,
          total_supply: coin.total_supply,
          first_data_at: coin.first_data_at,
          last_updated: coin.last_updated,
        }));
        setCoins(processedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching coin data:", error);
        setLoading(false);
      });
  }, []);

  return { coins, loading };
};
