import React from 'react';
import Header from './header'
import Footer from './footer'
import Content from './content'
import { Table } from './Table';
class Home extends React.Component{
    render(){
        return(
            <div>
<Header></Header>
<Content></Content>
<Table></Table>
            <Footer></Footer>
        
            </div>
            
        )
     
    }
}

export default Home;