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
    //Set inital state of empty dataset
    const [data, setData] = useState({
        datasets: [],
});
    useEffect(()=> {
       const fetchData = async() => {
           const url = 'https://ghibliapi.herokuapp.com/films'
           const rottenTomato = [];
           const title = [];
         await fetch(url)
         .then((data)=> {
            //Turn response into a json obj
             const res = data.json();
             return res;

         })
         .then((res) => {
           //Push all rotten tomato scores and titles into the empty arrays 
            for (const obj of res) {
              rottenTomato.push(obj.rt_score);
                title.push(obj.title);
             
            }
            setData({
              //Map over titles and display them all
                labels: title.map((data) => data),
                datasets: [
                  {
                    label: 'Scores out of 100',
                    data:rottenTomato,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 0, 0, .7)',
                    
                  },
                  
                ],
              })
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