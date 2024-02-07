import { Grid, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
export default function Graph() {
    const [state, setState] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(`http://localhost:3001/api/graph`).then(res => res.json()).then((res) => {
            setState(res)
            console.log(res)
        }).catch(err => console.log(err));
    }
    if (state.length > 0) {

        var options = {
            chart: {
                type: 'line'
            },
            series: [
                {
                    name: 'sales',
                    data: [state[0].y, state[1].y, state[2].y, state[3].y, state[4].y]
                }
            ],
            xaxis: {
                categories: [state[0].x, state[1].x, state[2].x, state[3].x, state[4].x]
            },
            stroke: {
                curve: 'smooth',
            }, markers: {
                size: 10,
            }
        }
    }
    const chartStyle = {
        width: '95%',
        margin: "auto"
    };
    return (
        <Grid container>

            {
                state.length > 0 ?
                    <ReactApexChart
                        options={options}
                        series={options.series}
                        type="line"
                        height={350}
                        style={chartStyle}
                    /> : <Skeleton variant="rounded" style={{width:"100%",height:"350px"}} animation={'wave'}/>
            }
        </Grid>
    )
}
