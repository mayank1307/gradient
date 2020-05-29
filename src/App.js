import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      NumberHolder:0,
      value: '',
      copied: false,
      colors:"rgb(0,0,0)"
    }
  }
  myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  Generate=()=>{
    var colorCode='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
    this.setState({
      colors:colorCode
    })
  }
  GenerateG=()=>{
    var colorCode='linear-gradient(rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+'),rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+'))';
    this.setState({
      colors:colorCode
    })
  }
  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }
  render(){
  return (
    <div className="App mx-5 my-5">
      <div  style={{background:this.state.colors,height:"400px"}}></div><br/>
      <button onClick={this.GenerateG}>Generate Gradient</button>
      <button onClick={this.Generate}>Generate Color</button>
      <textarea ref={(textarea) => this.textArea = textarea} value={this.state.colors}/>
      <button onClick={() => this.copyCodeToClipboard()}>Copy CSS</button>
    </div>
  );
}}

export default App;
