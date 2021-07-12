// import React from 'react'

// function Dashboard() {
//     return(
//         <div style={{backgroundColor:'red'}} >
//             <h1>sdsadsad</h1>
//         </div>
//     )
// }
// export default Dashboard

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScreenOne from './screenOne'
import Logo from '../component/assets/logo.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root} >
 
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        >
    <div style={{margin:'20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img style={{width:'200px'}} src={Logo} alt="Logo" />
        <div style={{display:'flex', flexDirection:'row'}} >
        <button>Logout</button>
        <button>Logout</button>
        </div>
    </div>
        {/* <Tab label="Item One" {...a11yProps(0)} /> */}
        <Tab label="Dashboard" {...a11yProps(1)} />
        <Tab label="Shares" {...a11yProps(2)} />
        <Tab label="Transiction History" {...a11yProps(3)} />
        <Tab label="Withdrawal" {...a11yProps(4)} />
        <Tab label="Internal Transfer" {...a11yProps(5)} />
        <Tab label="Upline & Downline" {...a11yProps(6)} />
        <Tab label="Setting" {...a11yProps(7)} />
        <Tab label="KYC" {...a11yProps(8)} />
      </Tabs>
      
      {/* <TabPanel  value={value} index={0}>
        <ScreenOne/>
      </TabPanel> */}
      <TabPanel style={{flex:1,height:'100vh'}} value={value} index={1}>
      <ScreenOne/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Nine
      </TabPanel>
    </div>

  )
}
