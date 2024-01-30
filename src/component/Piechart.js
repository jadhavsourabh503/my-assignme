import React from 'react'
import Chart from "react-apexcharts";


const Piechart = () => {
    var chartData={
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      }
    // var {stats,setStats}=useState();
      console.log(chartData);
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white z-1">
        <div className="max-w-screen-lg mx-auto flex  items-center justify-center">
        <div class="border-2 border-solid border-black p-6">

        <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              width="500"
            />           
        </div>
        </div>
    </div>

  )
}

export default Piechart;
