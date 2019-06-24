import React,{Component} from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

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
      <Hidden smUp >
      <Grid  container
      direction="row"
      wrap
      >
      <Grid item xs={11} >
       <Paper style={{padding:'2px 2px 4px 2px'}}>
       
      
      <Typography component="p">
      <b>Home > Stories</b>
      </Typography>
     
      
     
       </Paper>
        </Grid>
        <Grid item xs={1}>
        <Icon color="disabled" fontSize="large">
        add_circle
      </Icon>
      </Grid>
         </Grid>
      </Hidden>
    
      </div>
    )
  }
}

export default withStyles(Styles)(Header)