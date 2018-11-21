import React, { Component } from 'react';
import './App.css';
import rightLogo from './arrow-right.svg';
import leftLogo from './arrow-left.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:['Page1-text','Page2-text','Page3-text'],
      currentPage:0
    };
    this.onClickPastPage = this.onClickPastPage.bind(this);
    this.onClickNextPage = this.onClickNextPage.bind(this);
  }

  onClickNextPage(){
    if(this.state.currentPage+1 >= this.state.text.length){
      return;
    }
    this.setState({currentPage: this.state.currentPage+1});
  }

  onClickPastPage(){
    if(this.state.currentPage-1 < 0){
      return;
    }
    this.setState({currentPage: this.state.currentPage-1});
  }

  render() {
    let pictureName = this.state.picture;
    return (
      <div className="App">
        <h1>{this.state.text[this.state.currentPage]}</h1>
        <img src={leftLogo} onClick={this.onClickPastPage}></img>
        <img src={rightLogo} onClick={this.onClickNextPage}></img>
      </div>
    );
  }
}

export default App;
