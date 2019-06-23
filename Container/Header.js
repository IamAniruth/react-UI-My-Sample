import React,{Component} from 'react';
import { withStyles  } from '@material-ui/core/styles';

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
     <span>
      <span style={{padding: '100px'}} >
     <b> 3M </b> Innovation
      </span>
      <span style={{padding: '50px'}}>
      Home
      </span>
      <span style={{padding: '50px'}}>
      Innovation Stories
      </span>
      <span style={{padding: '50px'}}>
      Technology
      </span>
      <span style={{padding: '50px'}}>
      Convert with 3M
      </span>
     </span>
    
      </div>
    )
  }
}

export default withStyles(Styles)(Header)