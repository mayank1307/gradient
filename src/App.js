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
      <div className="justify-content-center px-2 py-2">
      <div className="box" id="boxG" style={{background:this.state.colors,height:"520px"}}><h5 className="font-weight-bold text-light px-5 py-5" style={{fontSize:this.state.textSizes+"px",alignItems:"center",justifyContent: "center",textShadow:"2px 2px 8px #000000",display: "flex"}}>{this.state.textData}</h5></div><br/>
      <Button className="mx-1 px-2" variant="outline-light" onClick={this.GenerateG}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg></Button>
      <Button className="mx-1 px-2" variant="outline-light" onClick={this.ChangeDir}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z"/></svg></Button>
      <Button className="mx-1 px-2" variant="outline-light" onClick={this.ImageC}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 13v-13h-2v5h-2v-3h-2v7h-2v-9h-2v13h-6l11 11 11-11z"/></svg></Button>
      <Button className="mx-1 px-2" variant="outline-light" onClick={() => this.copyCodeToClipboard()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg></Button>
      <Button variant="outline-light" onClick={this.handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/></svg>
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><svg width="150px" viewBox="0 0 364 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.936 7.088V49.424C8.936 55.376 10.376 59.792 13.256 62.672C16.2 65.552 20.264 66.992 25.448 66.992C30.568 66.992 34.568 65.552 37.448 62.672C40.392 59.792 41.864 55.376 41.864 49.424V7.088H50.6V49.328C50.6 54.896 49.48 59.6 47.24 63.44C45 67.216 41.96 70.032 38.12 71.888C34.344 73.744 30.088 74.672 25.352 74.672C20.616 74.672 16.328 73.744 12.488 71.888C8.712 70.032 5.704 67.216 3.464 63.44C1.288 59.6 0.2 54.896 0.2 49.328V7.088H8.936ZM69.6853 12.848C68.0213 12.848 66.6133 12.272 65.4613 11.12C64.3093 9.968 63.7333 8.56 63.7333 6.89599C63.7333 5.232 64.3093 3.824 65.4613 2.672C66.6133 1.52 68.0213 0.943996 69.6853 0.943996C71.2853 0.943996 72.6293 1.52 73.7173 2.672C74.8693 3.824 75.4453 5.232 75.4453 6.89599C75.4453 8.56 74.8693 9.968 73.7173 11.12C72.6293 12.272 71.2853 12.848 69.6853 12.848ZM73.9093 21.392V74H65.1733V21.392H73.9093ZM165.08 26.48C163.224 22.576 160.536 19.568 157.016 17.456C153.496 15.28 149.4 14.192 144.728 14.192C140.056 14.192 135.832 15.28 132.056 17.456C128.344 19.568 125.4 22.64 123.224 26.672C121.112 30.64 120.056 35.248 120.056 40.496C120.056 45.744 121.112 50.352 123.224 54.32C125.4 58.288 128.344 61.36 132.056 63.536C135.832 65.648 140.056 66.704 144.728 66.704C151.256 66.704 156.632 64.752 160.856 60.848C165.08 56.944 167.544 51.664 168.248 45.008H141.56V37.904H177.56V44.624C177.048 50.128 175.32 55.184 172.376 59.792C169.432 64.336 165.56 67.952 160.76 70.64C155.96 73.264 150.616 74.576 144.728 74.576C138.52 74.576 132.856 73.136 127.736 70.256C122.616 67.312 118.552 63.248 115.544 58.064C112.6 52.88 111.128 47.024 111.128 40.496C111.128 33.968 112.6 28.112 115.544 22.928C118.552 17.68 122.616 13.616 127.736 10.736C132.856 7.792 138.52 6.32 144.728 6.32C151.832 6.32 158.104 8.08 163.544 11.6C169.048 15.12 173.048 20.08 175.544 26.48H165.08ZM197.847 29.936C199.383 26.928 201.559 24.592 204.375 22.928C207.255 21.264 210.743 20.432 214.839 20.432V29.456H212.535C202.743 29.456 197.847 34.768 197.847 45.392V74H189.111V21.392H197.847V29.936ZM221.659 47.504C221.659 42.128 222.747 37.424 224.923 33.392C227.099 29.296 230.075 26.128 233.851 23.888C237.691 21.648 241.947 20.528 246.619 20.528C251.227 20.528 255.227 21.52 258.619 23.504C262.011 25.488 264.539 27.984 266.203 30.992V21.392H275.035V74H266.203V64.208C264.475 67.28 261.883 69.84 258.427 71.888C255.035 73.872 251.067 74.864 246.523 74.864C241.851 74.864 237.627 73.712 233.851 71.408C230.075 69.104 227.099 65.872 224.923 61.712C222.747 57.552 221.659 52.816 221.659 47.504ZM266.203 47.6C266.203 43.632 265.403 40.176 263.803 37.232C262.203 34.288 260.027 32.048 257.275 30.512C254.587 28.912 251.611 28.112 248.347 28.112C245.083 28.112 242.107 28.88 239.419 30.416C236.731 31.952 234.587 34.192 232.987 37.136C231.387 40.08 230.587 43.536 230.587 47.504C230.587 51.536 231.387 55.056 232.987 58.064C234.587 61.008 236.731 63.28 239.419 64.88C242.107 66.416 245.083 67.184 248.347 67.184C251.611 67.184 254.587 66.416 257.275 64.88C260.027 63.28 262.203 61.008 263.803 58.064C265.403 55.056 266.203 51.568 266.203 47.6ZM286.534 47.504C286.534 42.128 287.622 37.424 289.798 33.392C291.974 29.296 294.95 26.128 298.726 23.888C302.566 21.648 306.854 20.528 311.59 20.528C315.686 20.528 319.494 21.488 323.014 23.408C326.534 25.264 329.222 27.728 331.078 30.8V2.96H339.91V74H331.078V64.112C329.35 67.248 326.79 69.84 323.398 71.888C320.006 73.872 316.038 74.864 311.494 74.864C306.822 74.864 302.566 73.712 298.726 71.408C294.95 69.104 291.974 65.872 289.798 61.712C287.622 57.552 286.534 52.816 286.534 47.504ZM331.078 47.6C331.078 43.632 330.278 40.176 328.678 37.232C327.078 34.288 324.902 32.048 322.15 30.512C319.462 28.912 316.486 28.112 313.222 28.112C309.958 28.112 306.982 28.88 304.294 30.416C301.606 31.952 299.462 34.192 297.862 37.136C296.262 40.08 295.462 43.536 295.462 47.504C295.462 51.536 296.262 55.056 297.862 58.064C299.462 61.008 301.606 63.28 304.294 64.88C306.982 66.416 309.958 67.184 313.222 67.184C316.486 67.184 319.462 66.416 322.15 64.88C324.902 63.28 327.078 61.008 328.678 58.064C330.278 55.056 331.078 51.568 331.078 47.6ZM357.457 74.576C355.793 74.576 354.385 74 353.233 72.848C352.081 71.696 351.505 70.288 351.505 68.624C351.505 66.96 352.081 65.552 353.233 64.4C354.385 63.248 355.793 62.672 357.457 62.672C359.057 62.672 360.401 63.248 361.489 64.4C362.641 65.552 363.217 66.96 363.217 68.624C363.217 70.288 362.641 71.696 361.489 72.848C360.401 74 359.057 74.576 357.457 74.576Z" fill="black"/></svg></Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to UI Grad, the web app for random gradient generation...<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>{"   "}You can generate Random Gradient using this icon.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z"/></svg>{"   "}You can change direction of light scheme using this icon.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 13v-13h-2v5h-2v-3h-2v7h-2v-9h-2v13h-6l11 11 11-11z"/></svg>{"   "}Download your Gradients using this button.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>{"   "}Copy CSS code of the on screen gradient using this icon.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" fill="red"/></svg>{"   "}Delete the entire text field using this one.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" fill="teal" /></svg>{"   "}Increase text size.<br/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" fill="teal" /></svg>{"   "}Decrease text size.</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={this.handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" fill="red"/></svg>{" "}Close
          </Button>
        </Modal.Footer>
      </Modal>
      <InputGroup className="px-1 py-2 row">
        <div className="col-12 py-1 col-md-6"><FormControl placeholder="Add text" onChange={this.ChangeText} id="textBox"/></div>
        <div className="py-1 px-3"><Button onClick={this.DeleteText} variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" fill="red"/></svg></Button></div>
        <div className="py-1"><Button onClick={this.DecText} variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" fill="teal" /></svg></Button></div>
        <div className="py-1"><Button onClick={this.IncText} variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" fill="teal" /></svg></Button></div>
      </InputGroup>
      <textarea ref={(textarea) => this.textArea = textarea} style={{opacity:"0",width:"0"}} value={"background:"+this.state.colors+";"}/>
    </div>
  );
}}

export default App;
