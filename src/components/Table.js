import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import '../styles/Table.css'

function TableApi(){
    const[tableData, setTableData] = useState({ghibli: []});

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("https://ghibliapi.herokuapp.com/films")

            setTableData({ghibli: data})
            console.log("Data",data);
        }
        fetchPostList()
    }, [setTableData] )
        return (
            <div className='table'>
                <h1>Information On Movies</h1>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Run Time</th>
                    <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.ghibli && tableData.ghibli.map((item) => (
                            <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.director}</td>
                            <td>{item.running_time} Min</td>
                            <td>{item.release_date}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </Table>
            </div>
        );
    }

export default TableApi;