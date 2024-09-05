// CoinDataGrid.js
import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useCoinData } from './CoinData'; // 데이터를 가져오는 훅 사용

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
    </GridToolbarContainer>
  );
}

export default function CoinDataGrid() {
  const { coins, loading } = useCoinData();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'symbol', headerName: 'Symbol', width: 100 },
    { field: 'rank', headerName: 'Rank', width: 100 },
    { field: 'total_supply', headerName: 'Total Supply', width: 150 },
    { field: 'first_data_at', headerName: 'First Data At', width: 200 },
    { field: 'last_updated', headerName: 'Last Updated', width: 200 },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={coins}
        columns={columns}
        loading={loading}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
