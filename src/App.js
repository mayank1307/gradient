import React from 'react';
import Button from 'react-bootstrap/Button';
import htmlToImage from 'html-to-image';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      NumberHolder:0,
      dirC:0,
      show:true,
      setShow:false,
      textSizes:50,
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
  this.setState({textData:"",textSizes:"50"});
}
DecText=()=>{
    this.setState({textSizes:this.state.textSizes-10})
  }
  IncText=()=>{
    this.setState({textSizes:this.state.textSizes+10});
  }
  handleClose = () => {this.setState({show:false})};
  handleShow = () => {this.setState({show:true})};
  
  render(){
    return (
      <div className="App">
      <div className="box" id="boxG" style={{background:this.state.colors,height:"450px"}}><h5 className="font-weight-bold text-light px-5 py-5" style={{fontSize:this.state.textSizes+"px",alignItems:"center",justifyContent: "center",textShadow:"2px 2px 8px #000000",display: "flex"}}>{this.state.textData}</h5></div><br/>
      <Button className="mx-1 px-2" variant="outline-light" onClick={this.GenerateG}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg></Button>
      <Button className="mx-1 px-2" variant="outline-light" onClick={this.ChangeDir}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z"/></svg></Button>
      <Button className="mx-1 px-2" variant="outline-light" onClick={this.ImageC}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 13v-13h-2v5h-2v-3h-2v7h-2v-9h-2v13h-6l11 11 11-11z"/></svg></Button>
      <Button className="mx-1 px-2" variant="outline-light" onClick={() => this.copyCodeToClipboard()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg></Button>
      <Button variant="outline-light" onClick={this.handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/></svg>
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UI Grad</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to UI Grad, the web app for random gradient generation...<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>{"   "}You can generate Random Gradient using this icon.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z"/></svg>{"   "}You can change direction of light scheme using this icon.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 13v-13h-2v5h-2v-3h-2v7h-2v-9h-2v13h-6l11 11 11-11z"/></svg>{"   "}Download your Gradients using this button.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>{"   "}Copy CSS code of the on screen gradient using this icon.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" fill="red"/></svg>{"   "}Delete the entire text field using this one.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" fill="teal" /></svg>{"   "}Increase text size.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" fill="teal" /></svg>{"   "}Decrease text size.</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={this.handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" fill="red"/></svg>{" "}Close
          </Button>
        </Modal.Footer>
      </Modal>
      <InputGroup className="px-1 row">
        <div className="col-6 py-1 col-md-6"><FormControl placeholder="Add text" onChange={this.ChangeText} id="textBox"/></div>
        <div className="py-1"><Button onClick={this.DeleteText} variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" fill="red"/></svg></Button></div>
        <div className="py-1"><Button onClick={this.DecText} variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" fill="teal" /></svg></Button></div>
        <div className="py-1"><Button onClick={this.IncText} variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" fill="teal" /></svg></Button></div>
      </InputGroup>
      <textarea ref={(textarea) => this.textArea = textarea} style={{opacity:"0",width:"0"}} value={"background:"+this.state.colors+";"}/>
    </div>
  );
}}

export default App;
