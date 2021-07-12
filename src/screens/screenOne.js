import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import { DataGrid } from '@material-ui/data-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
      },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

const theData = [ 
    {
        img:"Hello",
        title:'Account balance',
        icon:<MonetizationOnIcon fontSize="large" />,
        amount:'0'
    },
    {
        img:"Hello",
        title:'Network Wallet',
        amount:'0',
        icon:<LocalAtmIcon fontSize="large" />
    },
    {
        img:"Hello",
        title:'Total Withdrawal',
        amount:'0',
        icon:<AttachMoneyIcon fontSize="large" />
    },
    {
        img:"Hello",
        title:'Total Deposit',
        amount:'0',
        icon:<MonetizationOnOutlinedIcon fontSize="large" />,
        bg:`#28a745`
    },
    {
        img:"Hello",
        title:'Total Network',
        amount:'0',
        icon:<MonetizationOnOutlinedIcon fontSize="large" />,
        bg:`#28a745`
        
    },
]



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];




export default function ScreenOne() {
  const classes = useStyles();

  return (

    <div style={{justifyContent:'space-evenly',flexWrap:'wrap',border:'1px solid #ddd'}} >
        <div style={{display:'flex'}} >

        {
            theData.map((e,key)=>{
                return <div key={key} style={{width:'25%',paddingTop:'20px',margin:'20px'}} >
            <Paper elevation={3} style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:e.bg,paddingTop:'20px'}} >
            {e.icon}
            <p>
            {e.title}
            </p>
            <h3>${e.amount}</h3>
            </Paper>  
          </div>
    })
}
    </div>
    <div style={{ height:'70vh' }}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h5>Package</h5></TableCell>
            <TableCell align="right"><h5>Amount</h5></TableCell>
            <TableCell align="right"><h5>Purchased</h5></TableCell>
            <TableCell align="right"><h5>Expiry</h5></TableCell>
            <TableCell align="right"><h5>Note</h5></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>


    </div>   
  );
}
