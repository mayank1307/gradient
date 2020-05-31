
import React from "react";
import Home from './App';
import Social from './App2';
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane
} from "reactstrap";
// core components

function Navbar(){
  const [iconTabs, setIconTabs] = React.useState("1");
  return (
      <Card className="bg-light">
        <CardHeader className="bg-light">
          <Nav className="justify-content-center nav-pills row">
            <div className="col-4 col-md-2 px-2 d-block"><NavItem className="" >
              <NavLink className={iconTabs === "1" ? "active bg-dark" : ""} href="#pablo" onClick={e => {e.preventDefault(); setIconTabs("1");}}>
              <div className="row justify-content-center">
              Home</div>
              </NavLink>
            </NavItem></div>
            <div className="col-4 col-md-2 px-2 d-block"><NavItem className="">
                <NavLink className={iconTabs === "2" ? "active bg-dark" : ""} href="#pablo" onClick={e => {e.preventDefault(); setIconTabs("2");}}>
              <div className="row justify-content-center">
              Works</div>
              </NavLink>
            </NavItem></div>
          </Nav>
        </CardHeader>
        <CardBody  style={{padding:"0",margin:"0"}}>
          <TabContent
            className="text-center"
            activeTab={"iconTabs" + iconTabs}
          >
            <TabPane tabId="iconTabs1">
              <Home/>
            </TabPane>
            <TabPane tabId="iconTabs2">
              <Social/>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
  );
}

export default Navbar;