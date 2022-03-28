import {useEffect, useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../styles/BarChart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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

const BarChart = () => {
    //Set inital state
    const [data, setData] = useState({
        datasets: [],
});
    useEffect(()=> {
       const fetchData = async() => {
           const url = 'https://ghibliapi.herokuapp.com/films'
           const rt = [];
           const title = [];
         await fetch(url)
         .then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res

         })
         .then((res) => {
             console.log("response", res)
            for (const obj of res) {
                rt.push(obj.rt_score);
                title.push(obj.title);
             
            }
            setData({
                labels: title.map((data) => data),
                datasets: [
                  {
                    label: 'Scores out of 100',
                    data:rt,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 9, 100, .5)',
                    
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
        <div className='bar'>
          <h1>Rotten Tomato Scores</h1>
            <Bar 
                data={data} 
                options={options}
            />
         </div>
         )
}
export default BarChart;