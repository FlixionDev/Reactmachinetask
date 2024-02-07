import { Grid,Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
export default function Pie_Chart() {
    const [state, setState] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(`http://localhost:3001/api/pie-chart`).then(res => res.json()).then((res) => {
            setState(res)
            console.log(res)
        }).catch(err => console.log(err));
    }
    if (state.length > 0) {

        var options = {
            chart: {
                type: 'pie'
            },
            series: [state[0].value, state[1].value, state[2].value, state[3].value, state[4].value],
            label: [state[0].label, state[1].label, state[2].label, state[3].label, state[4].label],
            legend: {
                position: 'bottom',
            },
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
                        type="pie"
                        height={350}
                        style={chartStyle}
                    /> :  <Skeleton variant="rounded" style={{width:"100%",height:"350px"}} animation={'wave'}/>
            }
        </Grid>
    )
}
