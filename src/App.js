import React, { Component } from 'react';
import Particles from './components/Particles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'YOUR_API_KEY'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputeChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App" >
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputeChange={this.onInputeChange} onButtonSubmit={this.onButtonSubmit} />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}


export default App;
