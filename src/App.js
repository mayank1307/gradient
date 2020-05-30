import React from 'react';
import Button from 'react-bootstrap/Button';
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
  GenerateG=()=>{
    var Grading='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+'),rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+'))';
    var colorCode='linear-gradient('+Grading;
    this.setState({
      GradCol:Grading,
      colors:colorCode
    })
  }
  ChangeDir=()=>{
    var dirs=['to top,','to right,','to bottom,',"to left,"];
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
      <div className="box"  style={{background:this.state.colors,height:"400px"}}></div><br/>
      <Button className="mx-2 my-1 px-3" variant="outline-danger" onClick={this.GenerateG}>Generate Gradient</Button>
      <Button className="mx-2 my-1 px-3" variant="outline-dark" onClick={this.ChangeDir}>Change Direction</Button>
      <Button className="mx-2 my-1 px-3" variant="outline-info" onClick={() => this.copyCodeToClipboard()}>Copy CSS</Button>
      <textarea ref={(textarea) => this.textArea = textarea} style={{opacity:"0",width:"0"}} value={"background:"+this.state.colors+";"}/>
    </div>
  );
}}

export default App;
