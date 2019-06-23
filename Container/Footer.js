import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';

class Footer extends Component{
  render(){
    return(
      <div>
      <Grid  container
      direction="row"
      justify="center"
      alignItems="center" >
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
      </Grid>
      </div>
    )
  }
}

export default Footer