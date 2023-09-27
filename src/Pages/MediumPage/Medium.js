import React from 'react'
import './medium.css'
import MainNavbar from '../../Components/MainNavbar'
import { Container } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const tabs = [
    {
        name : "For You",
        id : 1,
    },
    {
        name : "Javascript",
        id : 2,
    },
    {
        name : "Programming",
        id: 3,
    },
    {
        name : "Java",
        id : 4,
    },
    {
        name : "Software Development",
        id : 5,
    },
    {
        name : "Productivity",
        id : 6,
    }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Medium = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <div className="container">
            <MainNavbar/>
        </div>
        <div className="main">
            <Container className='container'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    style={{borderBottom : "1px solid lightgray", paddingBottom : "1rem"}}
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {
                        tabs.map((tab) => (
                            <Tab className='tabs' label={tab.name} {...a11yProps(tab.id)}/>
                        ))
                    }
                </Tabs>
            </Container>
            <div className="right">
            </div>
        </div>
    </>
  )
}



export default Medium
