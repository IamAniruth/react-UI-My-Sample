import React,{Component} from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
});

class Home extends Component{
  render(){
    const classes = this.props
    return(
      <div>
      <Grid container className={classes.root} spacing={2}>
     <div>
      <hr style={{marginTop:'30px'}} />
      <Grid
       container
      direction="row"
      justify="center"
      alignItems="center"
       item xs={12}>
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
       <hr />
      </div>
      </Grid>

     
      </div>
    )
  }
}

export default Home