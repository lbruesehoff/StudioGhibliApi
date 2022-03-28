import React, { useEffect, useState } from 'react';
import '../styles/ImgGrid.css';
import axios from 'axios';

function ImgGrid() {
    const[moviePoster, setMoviePoster] = useState({ghibli: []});

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("https://ghibliapi.herokuapp.com/films")
            setMoviePoster({ghibli: data});
            console.log("Data",data);
        }
        fetchPostList()
    }, [setMoviePoster] )

        return (
            <div className='images'>
                <h1>Movie Posters</h1>
                {
                    moviePoster.ghibli.map((poster) => (
                    <img key={poster.id} src={poster.image}/>
                    ))
                }
            </div>
        );
    }


export default ImgGrid;