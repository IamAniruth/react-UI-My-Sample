import React,{Component} from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
   button: {
    margin: theme.spacing(1),
  },
});

class Home extends Component{
  render(){
    const classes = this.props
    return(
      <div>
      <Grid container className={classes.root} spacing={2}>
     <div>
      <hr style={{marginTop:'30px'}} />
         <Hidden xsDown>
      <Grid
       container
      direction="row"
      justify="center"
      alignItems="center"
       item xs={12}
      
       >

       <Typography variant="h1" component="h2" gutterBottom style={{padding:'30px'}}>
     <b> Innovation story Landing </b>
      </Typography>
      </Grid>
      <Grid 
       container
      direction="row"
      justify="center"
      alignItems="center"
      item xs={12}>
       <Typography variant="h6" component="h6" gutterBottom style={{padding:'30px',margin:'0px 50px 120px 120px'}}>
      These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
      </Typography>

      </Grid>
       </Hidden>
       <Hidden xlUp>
        <Grid
       container
      direction="row"
      justify="center"
      alignItems="center"
       item xs={12}
      
       >

       <Typography variant="h6" component="h2" gutterBottom style={{padding:'30px'}}>
     <b> Innovation story Landing </b>
      </Typography>
      </Grid>
      <Grid 
       container
      direction="row"
     
      item xs={12}>
       <Typography variant="h6" component="h6" gutterBottom style={{padding:'5px',margin:'0px 25px 30px 30px'}}>
      These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
      </Typography>

      </Grid>
       </Hidden>
       <hr />
      </div>
      <Grid container
  direction="row"
  justify="space-around"
  alignItems="center" xs={12}  style={{marginBottom:'50px'}} >
         <Grid item sm={3} xs={11}>
          <Grid item xs={12}>
          <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'}  height="100%" width="100%" />
          </Grid>
           <Grid item xs={12}>
           <div>
            These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
            </div>
            <div>
            <Button variant="contained" className={classes.button}>
             View full story
          </Button>
            </div>
          </Grid>
         </Grid>
         <Grid item sm={3} xs={11}>
          <Grid item xs={12}>
          <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'}  height="100%" width="100%" />
          </Grid>
           <Grid item xs={12}>
          <div>
            These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
            </div>
            <div>
            <Button variant="contained" className={classes.button}>
             View full story
          </Button>
            </div>
          </Grid>
         </Grid>
           <Grid item sm={3} xs={11}>
          <Grid item xs={12}>
          <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'}  height="100%" width="100%" />
          </Grid>
           <Grid item xs={12}>
           <div>
            These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
            </div>
            <div>
            <Button variant="contained" className={classes.button}>
             View full story
          </Button>
            </div>
          </Grid>
         </Grid>
          
         
      </Grid>

      <Grid container
  direction="row"
  justify="space-around"
  alignItems="center" xs={12} style={{marginBottom:'50px'}} >
         <Grid item sm={3} xs={11}>
          <Grid item xs={12}>
          <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'}  height="100%" width="100%" />
          </Grid>
           <Grid item xs={12}>
           <div>
            These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
            </div>
            <div>
            <Button variant="contained" className={classes.button}>
             View full story
          </Button>
            </div>
          </Grid>
         </Grid>
         <Grid item sm={3} xs={11}>
          <Grid item xs={12}>
          <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'}  height="100%" width="100%" />
          </Grid>
           <Grid item xs={12}>
           <div>
            These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
            </div>
            <div>
            <Button variant="contained" className={classes.button}>
             View full story
          </Button>
            </div>
          </Grid>
         </Grid>
           <Grid item sm={3} xs={11}>
          <Grid item xs={12}>
          <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'}  height="100%" width="100%" />
          </Grid>
           <Grid item xs={12}>
           <div>
            These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media
            </div>
            <div>
            <Button variant="contained" className={classes.button}>
             View full story
          </Button>
            </div>
          </Grid>
         </Grid>
          
         
      </Grid>
      
      </Grid>
<hr />

    <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="center"
    wrap
  >

  <Grid sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap
    >
  <Grid  xs={3}>
  <div style={{marginLeft:'15px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'15px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid  xs={7} >
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>

    <Grid sm={4} xs={11}   container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>
  <Grid xs={3}>
  <div style={{marginLeft:'15px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'15px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid xs={7}>
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>

    <Grid  sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>
  <Grid xs={3}>
  <div style={{marginLeft:'25px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'50px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid xs={7}>
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>

     <Grid  sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>
  <Grid xs={3}>
  <div style={{marginLeft:'25px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'50px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid xs={7}>
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>

     <Grid  sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>
  <Grid xs={3}>
  <div style={{marginLeft:'25px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'50px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid xs={7}>
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>

     <Grid  sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>
  <Grid xs={3}>
  <div style={{marginLeft:'25px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'50px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid xs={7}>
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>

     <Grid  sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>
  <Grid xs={3}>
  <div style={{marginLeft:'25px',marginBottom:'25px',}} >
  <div>
   <img src={'https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png'} style={{marginTop:'50px'}} height="100%" width="100%" />
   </div>
   <div>
    <Button variant="contained" className={classes.button} style={{size:"small"}} >
             View
          </Button>
   </div>
   </div>
  </Grid>
  <Grid xs={7}>
  <div>
  <div>
  <b> Tire 2 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
   </div>
  </Grid>
  </Grid>
     <Grid  sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>

  <Grid xs={10}>
  <div>
  <div>
  <b> Tire 3 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
      <div>
    <Button variant="contained" className={classes.button}>
             View
          </Button>
   </div>
   </div>
  </Grid>
  </Grid>

       <Grid sm={4} xs={11}  container
    direction="row"
     justify="space-around"
    alignItems="center"
    wrap>

  <Grid xs={10}>
  <div>
  <div>
  <b> Tire 3 story Headline </b>
  </div>
  <div>
   These cookies are used to collect information about how you interact with our website 
   </div>
      <div>
    <Button variant="contained" className={classes.button}>
             View
          </Button>
   </div>
   </div>
  </Grid>
  </Grid>
  </Grid>
     
      </div>
    )
  }
}

export default Home