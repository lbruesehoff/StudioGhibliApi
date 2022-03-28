import {useEffect, useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  
const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

const DoughnutChart = () => {
    //Set inital state
    const [data, setData] = useState({
        datasets: [],
      });
    useEffect(()=> {
       const fetchData = async() => {
           const url = 'https://ghibliapi.herokuapp.com/films'
           const rt = [];
           const title = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const obj of res) {
                rt.push(obj.running_time);
                title.push(obj.title);
             
            }
            setData({
                labels: title.map((data) => data),
                datasets: [
                  {
                    label: 'Rotten Tomato Score',
                    data:rt,
                    backgroundColor:[
                        'rgba(255, 99, 132)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 205, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(54, 162, 235)',
                        'rgba(153, 102, 255)',
                        'rgba(201, 203, 207)'
                    ]
                    
                  },
                  
                ],
              })
            console.log("arrData", rt)
         }).catch(err => {
                console.log("error", err)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div>
            <Doughnut 
                data={data} 
                options={options}
            />
         </div>
         )
}
export default DoughnutChart;