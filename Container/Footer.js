import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Footer extends Component{
  render(){
    return(
      <div>
      <Grid  container
      direction="row"
      justify="center"
      alignItems="center" >
       <Hidden xsDown>
      <Grid  xs={9}>
      <span style={{padding:'10px'}}>
      <span>
      <b>3M </b>
      home | 
      </span>
      <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
       <span>
       Contact |
      </span>
      </span>
      </Grid>
      <Grid xs={3}>
      <b>@ 3M 2012. All Right Recerved</b>
      </Grid>
      </Hidden>
       <Hidden smUp >
       <Grid  sm={12}>
       <Paper style={{padding:'20px 20px 40px 20px'}}>
        <Typography variant="h5" component="h3">
         Recommenttion Test 1
        </Typography>
        <Typography component="p">
          Recommenttion can be used to build surface
        </Typography>
         <Typography component="p">
         <Button variant="contained" >
             View
          </Button>
        </Typography>
      </Paper>
      <Typography component="p" style={{textAlign:'center'}}>
       <b> ^ Back to Top ^</b>
        </Typography>
       </Grid>
       </Hidden>
      </Grid>
      </div>
    )
  }
}

export default Footer