import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      NumberHolder:0,
      dirC:0,
      value: '',
      copied: false,
      GradCol:"rgb(7,66,193),rgb(87,190,160))",
      dir:"to left,",
      colors:"linear-gradient(rgb(7,66,193),rgb(87,190,160))"
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
    var Grading='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+'),rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+'))';
    var colorCode='linear-gradient('+Grading;
    this.setState({
      GradCol:Grading,
      colors:colorCode
    })
  }
  ChangeDir=()=>{
    var dirs=['to right,','to top,','to bottom,',"to left,"];
    if(this.state.dirC===4){
      this.setState({
        dir:dirs[0],
        colors:'linear-gradient('+this.state.dir+this.state.GradCol,
        dirC:1
      })
    }
    else{
      this.setState({
        dirC:this.state.dirC+1,
        dir:dirs[this.state.dirC],
        colors:'linear-gradient('+this.state.dir+this.state.GradCol
      })
    }
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
      <button onClick={this.ChangeDir}>Change Direction</button>
      <button onClick={() => this.copyCodeToClipboard()}>Copy CSS</button>
      <textarea ref={(textarea) => this.textArea = textarea} style={{opacity:"0"}} value={"background:"+this.state.colors+";"}/>
    </div>
  );
}}

export default App;
