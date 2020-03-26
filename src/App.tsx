import React, { useEffect } from "react";
import anime, { path } from "animejs";
import "./App.css";
import logo from "./logo.svg";

function App() {
  useEffect(() => {
    const pathEls = document.querySelectorAll("path");
    pathEls.forEach(p => {
      const offset = anime.setDashoffset(p);
      p.setAttribute("stroke-dashoffset", offset.toString());
      anime({
        targets: p,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true
      });
    });
  });
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            id="svgjsPath1756"
            d="M561.82,1470.14L561.82,1398.12L561.82,1326.23L561.82,1254.34L561.82,1166.33L561.82,1117.45L600.30,1117.45L667.64,1117.45L733.94,1117.45L819.09,1117.45L882.27,1117.45L947.53,1117.45L994.72,1117.45L1076.62,1117.45L1206.23,1117.45Q1206.23,992.4549999999999,1206.23,984.2L1206.23,984.20L1206.10,969.51Q1202.2649999999999,939.61,1184.65,938.31L1184.65,938.31L1076.62,938.31"
            fill="none"
            stroke="#F9E103"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1759"
            d="M898.00,750.20L865.50,782.70L839.50,808.70L813.50,834.70L787.50,860.70L761.50,886.70L733.94,912.70L733.94,947.15L733.94,981.86L733.94,1019.56L733.94,1059.34L733.94,1117.45L733.94,1166.33L733.94,1205.07L733.94,1266.82L733.94,1331.95L733.94,1395.00L733.94,1460.00L733.94,1525.00L733.94,1590.00L733.94,1655.00L733.94,1720.00L733.94,1785.00L733.94,1863.00"
            fill="none"
            stroke="#0066CC"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1762"
            d="M1378.22,893.20L1379.52,993.69L1332.33,1035.94L1275.52,1078.32L1213.12,1117.45L1076.62,1117.45L1076.62,1207.80L1076.62,1268.38L1076.62,1331.95L1076.62,1410.34L1076.62,1473.65L1076.62,1525.26L1076.62,1579.21L1076.62,1631.47Q1079.155,1664.815,1126.15,1660.98L1126.15,1660.98L1197.52,1660.98"
            fill="none"
            stroke="#EA6632"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1765"
            d="M1076.62,1117.45L1076.62,1000.58L1076.62,938.31L1076.62,893.20L1050.10,869.80L1020.20,846.40L990.30,823.00L960.40,799.60L930.50,776.20L898.00,750.20L898.00,698.20L898.00,652.70L898.00,615.00L898.00,563.00L898.00,498.00"
            fill="none"
            stroke="#EA6632"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1768"
            d="M1437.50,1115.11L1398.50,1161.00L1358.46,1207.80L1358.46,1331.95L1358.46,1392.40L1358.46,1451.68L1358.46,1510.96L1358.46,1570.24L1358.46,1629.52L1358.46,1688.67L1358.46,1748.08L1358.46,1807.36L1400.06,1832.06L1449.59,1862.09L1532.53,1862.09L1600.78,1862.09L1670.72,1862.09L1670.72,1940.87L1670.72,2034.47Q1670.2650000000003,2083.48,1755.35,2075.81L1755.35,2075.81L1899.65,2075.81L2008.46,2075.81Q2040.96,2061.5099999999998,2047.46,2036.81L2047.46,2036.81L2047.46,1960.89L2047.46,1862.09"
            fill="none"
            stroke="#009900"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1771"
            d="M415.31,1118.36L475.89,1059.34L561.30,1058.82L599.91,1020.21L638.26,981.86L733.94,981.86L820.00,981.86L904.11,981.86L947.53,981.86L994.72,981.86L994.72,1035.03L994.72,1117.45L994.72,1207.80L1076.62,1207.80L1133.30,1207.80L1189.59,1207.80L1245.88,1207.80L1302.17,1207.80L1358.46,1207.80L1391.35,1236.79L1426.58,1269.42L1467.14,1309.07L1547.61,1309.07L1623.92,1309.07L1704.13,1309.07"
            fill="none"
            stroke="#FF0000"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1774"
            d="M2022.50,784.00L1961.40,784.00L1902.90,784.00L1826.20,784.00L1766.40,784.00L1687.10,784.00L1614.30,784.00L1551.90,784.00L1486.90,784.00L1405.00,784.00L1378.22,836.00L1378.22,893.20L1076.62,893.20L1038.40,893.20L1007.72,893.20L1007.72,917.51L1007.72,942.47L947.53,942.47L947.53,981.86L947.53,1117.45L947.53,1166.33L878.50,1166.33L807.78,1166.33L733.94,1166.33L667.25,1166.33L621.10,1166.33L561.82,1166.33L492.40,1101.72L475.89,1059.34L468.35,981.99L468.35,919.59L468.35,857.19L468.35,794.92"
            fill="none"
            stroke="#8B1F5C"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1777"
            d="M741.74,1863.00L741.74,1785.00L831.70,1746.00L966.90,1682.30L1076.62,1631.47L1134.60,1605.60L1223.00,1567.90L1299.70,1536.70L1358.46,1510.96"
            fill="none"
            stroke="#3FA37E"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1780"
            d="M621.10,1166.33L603.55,1215.66L586.00,1265.00L638.00,1331.95L690.00,1331.95L733.94,1331.95L796.21,1331.95L875.12,1331.95L953.25,1331.95L1076.62,1331.95L1167.10,1331.95L1216.89,1331.95L1266.55,1331.95L1316.34,1331.95L1358.46,1331.95"
            fill="none"
            stroke="#00A1CC"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1783"
            d="M890.20,615.00L890.20,550.00L833.00,550.00L768.00,550.00L703.00,550.00L651.00,485.00L547.00,485.00L526.20,516.20L505.40,550.00L401.40,550.00L297.40,550.00L193.40,550.00L89.40,550.00"
            fill="none"
            stroke="#99c857"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1786"
            d="M1467.14,1309.07L1467.14,1354.83Q1466.6200000000001,1406.2450000000003,1520.18,1413.2L1520.18,1413.20L1593.50,1413.20L1671.50,1413.20L1750.80,1413.20L1826.20,1413.20L1896.40,1413.20L1965.30,1413.20L2042.00,1413.20L2129.10,1413.20"
            fill="none"
            stroke="#a7b942"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1789"
            d="M898.00,750.20L950.00,698.20L1002.00,646.20L1054.00,594.20L1106.00,542.20L1158.00,490.20L1210.00,438.20L1275.00,373.20L1327.00,321.20L1379.00,269.20L1431.00,217.20L1483.00,165.20L1535.00,113.20"
            fill="none"
            stroke="#721920"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1792"
            d="M1245.88,1207.80L1289.17,1160.61L1333.37,1115.11L1380.17,1115.11L1437.50,1115.11L1437.50,1076.11L1437.50,1049.98L1553.85,990.31L1670.20,930.64L1786.55,870.97L1902.90,811.30L1902.90,784.00L1902.90,732.00L1902.90,686.89L1902.90,634.89L1902.90,582.89L1902.90,543.89L1902.90,491.89L1902.90,426.89L1967.90,394.39L2032.90,361.89L2097.90,329.39L2162.90,298.19L2227.90,265.69"
            fill="none"
            stroke="#203082"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1795"
            d="M1076.62,1473.65L1005.90,1473.65L1005.90,1525.00L733.94,1525.00L712.10,1525.00L712.10,1491.59L712.10,1426.59L638.00,1331.95L601.60,1331.95L601.60,1401.24L581.32,1470.14L561.82,1470.14L522.82,1470.14L483.82,1470.14L444.82,1470.14L444.82,1538.00L444.82,1603.00L444.82,1668.00L405.82,1668.00L366.82,1668.00L314.82,1668.00L262.82,1668.00L262.82,1733.00L262.82,1785.00L262.82,1850.00L262.82,1915.00L287.00,1967.00L339.00,1967.00L391.00,1967.00"
            fill="none"
            stroke="#c9e887"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1798"
            d="M1076.62,1000.58L1100.02,1000.58L1100.02,1026.32L1100.02,1055.31L1100.02,1082.35L1100.02,1106.01L1100.02,1138.77L1100.02,1165.94L1100.02,1193.24L1100.02,1268.38L1076.62,1268.38"
            fill="none"
            stroke="#00a1cb"
            strokeWidth="8"
          ></path>
          <path
            id="svgjsPath1801"
            d="M1275.00,373.20L1369.77,333.94L1436.07,352.14L1501.98,383.34L1563.73,411.29L1630.94,443.14L1698.15,475.12L1766.53,507.62L1838.16,541.42L1902.90,543.89"
            fill="none"
            stroke="#721920"
            strokeWidth="8"
          ></path>
        </g>
      </svg>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;