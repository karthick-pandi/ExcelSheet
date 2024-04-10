import logo from './logo.svg';
import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css"
import ReactDOM from 'react-dom';
import * as XLSX from 'xlsx';



function App() {
  const [excelData, setExcelData] = useState([]);

  // Function to handle downloading the Excel data
  const handleDownloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = excelData.map(row => row.map(cell => cell === null ? '' : cell));; // Extracting cell values
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'workbook.xlsx');
  };

  // Callback to handle changes in the workbook data
  const settings = {
    data: [{ name: 'Sheet1', celldata: [{ r: 0, c: 0, v: null }] }], // sheet data
    onChange: (data) => { 
      setExcelData(data[0].data);
    }, 
    lang: 'zh' 
  }
  return (
    <div id="root">
       <center><button
       style={{width:"30%",margin:"1%"}}
      onClick={handleDownloadExcel}
      >Download Excel</button></center>
      <Workbook
        {...settings}
      />

     
    </div>


  );
}



export default App;
