// https://mui.com/x/react-data-grid/pagination/
// https://mui.com/x/react-data-grid/row-selection/#usage-with-server-side-pagination
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./CoinMuiGrid.css"

function GetUltraSrtNcst() { // 초단기 실황
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // API에서 데이터를 가져오는 부분
  React.useEffect(() => {
    const fetchNcstData = async () => {
      try {
        const response = await fetch('http://192.168.1.106/api/ultrasrtncst');
        const data = await response.json();

        // 필요한 데이터 필드를 가공하여 DataGrid의 rows로 사용
        const processedData = data.results.map((area, index) => ({
          id: index + 1, // DataGrid에서 필요한 고유 id
          AREA_CODE: area.AREA_CODE,
          STEP_1: area.STEP_1,
          STEP_2: area.STEP_2,
          STEP_3: area.STEP_3,
          baseDate : area.baseDate,
          baseTime : area.baseTime,
          temperature : area.categories.기온,
          humidity : area.categories.습도,
          rainPerHour : area.categories["1시간강수량"],
          windPlace : area.categories.풍향,
          windSpeed : area.categories.풍속,
        }));

        setRows(processedData); // 가공된 데이터를 상태로 저장
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Collection Area data:', error);
        setLoading(false);
      }
    };

    fetchNcstData();
  }, []);

  // DataGrid에 표시할 컬럼 정의
  const columns = [
    { field: 'AREA_CODE', headerName: '지역 코드', width: 150 },
    { field: 'STEP_1', headerName: '지역구분 1', width: 150 },
    { field: 'STEP_2', headerName: '지역구분 2', width: 200 },
    { field: 'STEP_3', headerName: '지역구분 3', width: 200 },
    { field: 'baseDate', headerName: '수집일자', width: 200 },
    { field: 'baseTime', headerName: '수집시간', width: 200 },
    { field: 'temperature', headerName: '기온', width: 200 },
    { field: 'humidity', headerName: '습도', width: 200 },
    { field: 'rainPerHour', headerName: '1시간 강수량', width: 200 },
    { field: 'windPlace', headerName: '풍향', width: 200 },
    { field: 'windSpeed', headerName: '풍속', width: 200 },
  ];

  return (
    <div className="CoinMuiGrid-container">
      <div>
        <h2>날씨 수집 지역</h2>
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
    </div>
  );
}

export default GetUltraSrtNcst;