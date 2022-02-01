import React from 'react';
import axios from 'axios';
import imageList from './imageList';
import SearchInput from './SearchInput';
import ImageList from './imageList';
class App extends React.Component{
    state={images:[] }
  
  onSearchSubmit = async(entry)=>{
         
        const response = await axios.get(`https://pixabay.com/api/?key=25188046-b0af5fea667f6d55a7184966c&q=${entry}&image_type=photo`)
        console.log(entry);
        console.log(response.data.hits);
        this.setState({images:response.data.hits})

    }
    render(){    
    return (
        <div className='ui container' style={{marginTop:'20px'}}>
             <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    )
    }
}
export default App;