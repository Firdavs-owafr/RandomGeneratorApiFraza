import React,{Component} from 'react';
import './App.css';
import rectangular from './img/rectangular.svg'
import img from './img/box.png'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
          id: 0
    }
  }


  componentDidMount(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(json => {
      this.setState(() => {
        return {
            name: json.slip.advice, 
            id: json.slip.id,
        }
    })
    })
  }
  
  refresh = () => {
      this.setState(this.componentDidMount())
  }
  
  render(){

    const {id,name} = this.state;

      return (
        
          this.state.id ? <div className='App'>
          <div className="wrapper">
            <h1 className='id'>Advice #{id}</h1>
            <div className='title'>"{name}"</div>
              <div className="linie">
              <div className="lini"></div>
              <img src={img} alt="" />
              <div className="lini"></div>
              </div>
        </div>
        <button onClick={this.refresh}><img src={rectangular} alt="" /></button>
    </div> : <div className="App">
    <div className="wrapper">
    <div class="loadingio-spinner-ellipsis-e29679tarsf"><div class="ldio-46imby4dpuq">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>  
    </div>
    </div>
      )
    }

}

export default App;
