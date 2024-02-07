import { Grid,Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
export default function Table_Chart() {
    const [state, setState] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(`http://localhost:3001/api/table`).then(res => res.json()).then((res) => { 
            setState(res)
            console.log(res)
         }).catch(err => console.log(err));
    }
  return (
    <Grid container>
    {
        state.length > 0 
        ? 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>id</StyledTableCell>
            <StyledTableCell align="center">name</StyledTableCell>
            <StyledTableCell align="center">quantity</StyledTableCell>
            <StyledTableCell align="center">price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.length >0 ? 
            state.map((el,ind)=>{
                return <StyledTableRow key={ind+1} >
                <StyledTableCell component="th" align='center' scope="row">
                  {el.id}
                </StyledTableCell>
                <StyledTableCell align="center">{el.name}</StyledTableCell>
                <StyledTableCell align="center">{el.quantity}</StyledTableCell>
                <StyledTableCell align="center">{el.price}</StyledTableCell>
              </StyledTableRow>
            })
            : ""
          }
            
        </TableBody>
      </Table>
    </TableContainer>
        : <Skeleton variant="rounded" style={{width:"100%",height:"350px"}} animation={'wave'}/>
    }
        
    </Grid>
  )
}
