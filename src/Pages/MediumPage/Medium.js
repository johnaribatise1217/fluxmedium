import React from 'react'
import './medium.css'
import MainNavbar from '../../Components/MainNavbar'
import { Avatar, Container, Grid } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import {AiOutlinePlus} from 'react-icons/ai'
import { articleData } from '../../ArticlesData';

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
    },
    {
        name : "Relationships",
        id :7
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

const MyTab = styled(Tab)({
    color : "gray",
    fontFamily : "sans-serif",
    textTransform : "lowercase",
    fontSize : "0.8rem"
})

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
            <Container className='container' >
                <div className='tabs' style={{position : "sticky"}}>
                    <AiOutlinePlus style={{fontSize : "2rem", cursor : "pointer"}}/>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        style={{borderBottom : "1px solid lightgray", paddingRight : "1rem", marginRight : "3rem"}}
                    >
                        {
                    
                            tabs.map((tab) => (
                                <MyTab className='tabs' label={tab.name} {...a11yProps(tab.id)}/>
                            ))
                        }
                    </Tabs>
                </div>
                <div className="articles-section">
                    <Container>
                        {
                            articleData.map((data) => {
                                const {title, article, name, avatarUrl, save, showLess, showMore, date, time, image, section} = data
                                return (
                                    <Articles data={data}/>
                                )
                            })
                            }
                    </Container>
                </div>
            </Container>
            <div className="right">
            </div>
        </div>
    </>
  )
}

const Articles = (props) => {
    const {title, article, name, avatarUrl, save, showLess, showMore, date, time, image, section} = props.data

    const truncateArticle = (string) => {
        if(string.length > 150){
            return string.slice(0, 150) + "..."
        }
        return string
    }

    return (
        <div className="article-card">
            <Grid 
                container
                spacing={10}
                direction='row' 
                justifyContent='center' 
                alignItems='center'
                xs={12}
            >
                <Grid item xs={12} sm direction='column' style={{gap : "1.5rem"}} container>
                    <div className="top">
                        <Avatar src={avatarUrl} alt='user avatar'/>
                        <Typography style={{fontSize : "0.8rem", fontFamily : "Montserrat"}} variant='h6'>{name}</Typography>
                        <h5>{date}</h5>
                        <span></span>
                    </div>
                    <div className="middle">
                        <Typography variant='h4' style={{fontSize : "1.4rem", fontWeight : "700", fontFamily : "Tahoma"}}>{title}</Typography>
                        <Typography variant='h6' style={{fontSize : "0.9rem"}}>{truncateArticle(article)}</Typography>
                    </div>
                    <div className="bottom">
                        <div className='bef'>
                            <span className="span" style={{background : "lightgray", padding : "5px" , borderRadius : "12px", border : "none"}}>{section}</span>
                            <h4>{time}</h4>
                        </div>
                        <div className="actions">
                            {save}
                            {showLess}
                            {showMore}
                        </div>
                    </div>
                </Grid>
                <div className="image">
                    <img src={image} style={{height : "5.5rem", width : "5.5rem"}} alt="article image" />
                </div>
            </Grid>
        </div>
    )
}


export default Medium
