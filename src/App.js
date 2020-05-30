import React from 'react';
import Button from 'react-bootstrap/Button';
import htmlToImage from 'html-to-image';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      NumberHolder:0,
      dirC:0,
      textData:"",
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
  ImageC=()=>{
  htmlToImage.toJpeg(document.getElementById('boxG'), { quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'ui-grad.jpeg';
    link.href = dataUrl;
    link.click();
  });
  } 
  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }
  ChangeText=()=>{
    var newText=document.getElementById('textBox').value;
    this.setState({
      textData:newText
    });
  }
  DeleteText=()=>{
    document.getElementById('textBox').value="";
    this.setState({textData:""});
  }
  render(){
  return (
    <div className="App mx-4 my-4">
      <div className="box" id="boxG" style={{background:this.state.colors,height:"450px"}}><h5 className="font-weight-bold text-light px-5 py-5" style={{alignItems:"center",justifyContent: "center",display: "flex"}}>{this.state.textData}</h5></div><br/>
      <Button className="mx-1 px-3" variant="outline-danger" onClick={this.GenerateG}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z"/></svg></Button>
      <Button className="mx-1 px-3" variant="outline-dark" onClick={this.ChangeDir}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z"/></svg></Button>
      <Button className="mx-1 px-3" variant="outline-success" onClick={this.ImageC}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 13v-13h-2v5h-2v-3h-2v7h-2v-9h-2v13h-6l11 11 11-11z"/></svg></Button>
      <Button className="mx-1 px-3" variant="outline-info" onClick={() => this.copyCodeToClipboard()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg></Button>
      <InputGroup className="row">
        <div className="col-12 py-1 col-xl-6"><FormControl placeholder="Add text" id="textBox"/></div>
        <div className="py-1 px-3"><Button className="px-3" onClick={this.ChangeText} variant="success">Change Text</Button></div>
        <div className="py-1 px-3"><Button className="px-3" onClick={this.DeleteText} variant="danger">Delete Text</Button></div>
      </InputGroup>
      <textarea ref={(textarea) => this.textArea = textarea} style={{opacity:"0",width:"0"}} value={"background:"+this.state.colors+";"}/>
    </div>
  );
}}

export default App;
