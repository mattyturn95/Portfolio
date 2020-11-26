import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Card,
    Grid,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/image.png';
import project2 from '../images/hangerlogo.png';
import project3 from '../images/openweather.png';
import project4 from '../images/aot.png';
import project5 from '../images/whiskeydrop.png';
import project6 from '../images/hikeroutes.png';
import project7 from '../images/portfolio.png';
import project8 from '../images/myrecipe.png';
import project9 from '../images/snakegame.png';
import project10 from '../images/profileavatar.png';
import project11 from '../images/travel.png';
import project12 from '../images/quizz.png';
import project13 from '../images/movie1.png';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,

        margin: "5rem auto"
    },
    a: {
        textDecoration: "none"
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        // PORTFOLIO CARDS 
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* project-1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Covid-19 Tracker App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This site was built with React and made use of Material-ui as well as Axios and Chart-js.
                                    The site fetches the data from an API called "https://covid19.mathdro.id/api". The user is able to relay the relevent data by clicking on the desired country and filter through the available options.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://covid-19-tracker-app-19.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/covid-19-react-app" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project7}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Wordpress Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is my old portfolio which was built using Wordpress.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://matthewturnerwebdesign.com/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project2"
                                height="auto"
                                image={project10}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    React Portfolio
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is my current portfolio which was built with React and a few other dependancies such as @material-ui, react-dom, react-particles
                                    & react-scripts. It utilises components in order to switch from page to page whilst maintaining an easy user experience.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://matthew-turner-react-portfolio-12.netlify.app" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/my-portfolio-react" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="primary">
                                    Source Code
                                </Button></a>



                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* project-2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project2"
                                height="auto"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    The Hanger Boutqiue
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A website for a local clothing store based in Waterford. The site is built using WordPress to allow the client to manage their own content (cms).
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://thehanger.ie/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* project-3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project12}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    React Quiz App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This site was built with React.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://quizz-app-react-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project13}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Movie Database / React
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This site was built with react which makes use of the open Movie-database API. 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://movie-database-01.netlify.app/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/movie-database-new" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather App / React
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This site was built with react which makes use of the open weather API. one has to enter the city/town name as well as the regions abreviation there after.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://weather-app-react-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://mattyturn95.github.io/react-weather-app/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* project-4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    August Oak Tree
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A simple website comprised of Html5 & Css3.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://mattyturn95.github.io/august-oak-tree-milestone-project/index.html" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/august-oak-tree-milestone-project" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project5}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Whiskey Drop Test Landing
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This site was built with Html5 & Css3.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://mattyturn95.github.io/whiskey-drop/" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/whiskey-drop" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project6}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Hike Routes - Rate and insert your own
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    An app created using MySQL and Python to rate hiking trails and routes. It also allows a user to review their own personal favorite route.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://hike-routes-ms3-code-institute.herokuapp.com/" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/august-oak-tree-milestone-project" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project8}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    React Recipe App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This App was built using React. It fetches the data from an open source API. Users can search for recipes and find out the methods behind the dish.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://food-recipes-app-react.herokuapp.com/" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>


                            </CardActions>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project1"
                                height="auto"
                                image={project9}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Simple Snake Game
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This Site/Game was built with Java-Script es6.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://mattyturn95.github.io/Snake-Game/" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/Snake-Game" rel="noopener noreferrer" target="_blank" className={classes.navlink}><Button size="small" color="secondary">
                                    Source Code
                                </Button></a>

                            </CardActions>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project2"
                                height="auto"
                                image={project11}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Travel Site
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    The routeRep travel application uses the Google Maps and Places APIs to allow users to select a location and find places to visit, stay and dine. Users may then add these results to an itinerary. They may then continue to edit this itinerary to help plan their perfect trip.

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://stiofaneimeid.github.io/travel-app/" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Live Preview
                                </Button></a>
                                <a href="https://github.com/mattyturn95/travel-app" target="_blank" rel="noopener noreferrer" className={classes.navlink}><Button size="small" color="primary">
                                    Source Code
                                </Button></a>


                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
