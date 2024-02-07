import { Card, Grid, Pagination, Typography } from '@mui/material'
import React from 'react'
import Graph from '../Graph/Graph'
import Pie_Chart from '../Pie_Chart/Pie_Chart'
import Table_Chart from '../Table_Chart/Table_Chart'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function Dashboard() {
    return (
        <>
            <Grid container m={2} sx={{display:'flex',justifyContent:"space-between",alignItems:'center'}}>
                <Grid item  sx={{display:'flex',alignItems:'center',gap:"10px"}}><Grid><Typography fontSize={24}>Good Morning ! </Typography></Grid><Grid><WbSunnyIcon sx={{ color: "orange" }} /></Grid></Grid>
                <Grid item sx={{display:'flex',bgcolor:'white',gap:"10px",borderRadius:'10px'}} p={1} px={2}>
                    <Grid>
                        <Typography>John Doe</Typography>
                        <Typography>john@doe.com</Typography>
                    </Grid>
                    <Grid>
                        <img style={{width:"50px",height:"50px",borderRadius:'12px'}} src='https://www.picturecorrect.com/wp-content/uploads/2021/02/black-and-white-portrait.jpg'/>
                    </Grid>
                </Grid>

            </Grid>
            <Grid container mx={2} mt={2} rowGap={4} columnGap={2}>
                <Grid item lg={8.7} md={12} xs={11} sm={12} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", bgcolor: 'white' }}>
                    <Graph />
                </Grid>
                <Grid item lg={3.1} md={12} xs={11} sm={12} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", bgcolor: 'white' }}>
                    <Pie_Chart />
                </Grid>
                <Grid item lg={9.7} md={12} xs={11} sm={12} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", bgcolor: 'white' }}>
                    <Table_Chart />
                </Grid>
                <Grid item lg={2.1}  sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", bgcolor: 'white' }}>
                    <Grid container sx={{ gridTemplateRows: "70% 20% 10%" }}>
                        <Grid item sx={{width:"100%"}}><img style={{ width: "100%", height: "210px" }} src='https://www.picturecorrect.com/wp-content/uploads/2021/02/black-and-white-portrait.jpg' /></Grid>
                        <Grid item xs={12}>
                            <Typography>
                                John Doe
                            </Typography>
                            <Typography color={"gray"}>
                                CEO
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FacebookOutlinedIcon color='primary' />
                            <InstagramIcon color='primary' />
                            <TwitterIcon color='primary' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item m={"auto"} mt={2} mb={2} bgcolor={"white"}>
                    <Pagination count={5} variant="outlined" shape="rounded" />
                </Grid>
            </Grid>
        </>
    )
}
