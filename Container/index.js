import React,{Component} from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer'

class Index extends Component{
  render(){
    return(
      <div>
      <Header />
     <Home />
     <Footer />
      </div>
    )
  }
}

export default Index