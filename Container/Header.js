import React,{Component} from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Styles = theme => 
 ({
       contentPadding : {
            padding: '100px'
        }
 })





class Header extends Component{
  render(){
     const classes = this.props;
    return(
      <div>
     <Grid  container
      direction="row"
      wrap
      >
      <Grid sm={2} xs={3} style={{padding: '10px'}} >
     <b> 3M </b> Innovation
      </Grid>
      <Grid sm={2} xs={3} style={{padding: '10px'}} >
      Home
      </Grid>
       <Grid sm={2} xs={3} style={{padding: '10px'}} >
      Innovation Stories
      </Grid>
       <Grid sm={2} xs={3} style={{padding: '10px'}} >
      Technology
      </Grid>
      <Grid sm={2} xs={3} style={{padding: '10px'}} >
      Convert with 3M
      </Grid>
     </Grid>
    
      </div>
    )
  }
}

export default withStyles(Styles)(Header)