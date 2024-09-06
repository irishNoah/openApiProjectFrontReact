// https://mui.com/x/react-data-grid/pagination/
// https://mui.com/x/react-data-grid/row-selection/#usage-with-server-side-pagination
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../components/Layout.module.css"

function CoinMuiGrid() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // API에서 데이터를 가져오는 부분
  React.useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch('https://api.coinpaprika.com/v1/tickers');
        const data = await response.json();

        // 필요한 데이터 필드를 가공하여 DataGrid의 rows로 사용
        const processedData = data.map((coin, index) => ({
          id: index + 1, // DataGrid에서 필요한 고유 id
          rank: coin.rank,
          symbol: coin.symbol,
          total_supply: coin.total_supply,
          first_data_at: coin.first_data_at,
          last_updated: coin.last_updated,
        }));

        setRows(processedData); // 가공된 데이터를 상태로 저장
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coin data:', error);
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  // DataGrid에 표시할 컬럼 정의
  const columns = [
    { field: 'rank', headerName: 'Rank', width: 100 },
    { field: 'symbol', headerName: 'Symbol', width: 150 },
    { field: 'total_supply', headerName: 'Total Supply', width: 180 },
    { field: 'first_data_at', headerName: 'First Data At', width: 200 },
    { field: 'last_updated', headerName: 'Last Updated', width: 200 },
  ];

  return (
    <div className="content">
      <div style={{ height: '600px', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          pagination
          pageSizeOptions={[25, 50, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
        />
      </div>
    </div>
  );
}

export default CoinMuiGrid;