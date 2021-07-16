import React, { Component } from "react";
import { SiWhatsapp } from 'react-icons/si';
import { MdCall } from 'react-icons/md';
import {SiGmail} from 'react-icons/si'
 
class Contact extends Component {
  render() {
    return (
      <div classname="linkclass">
        <p><b>You Get in Touch Through Social or Call</b></p>
        <span style={{cursor: "pointer"}}>
        <a id="link1" href="https://wa.me/+918892341964"><br></br><SiWhatsapp color="#25D366"size="2em"/> <b>Whatsapp</b></a>
        <br></br>
        <a id="link2" href="tel:+918892341964"><br></br><MdCall color="#1e90ff"size="2em"/><b>Call Me</b></a>
        <br></br>
        <a id="link3" href = "mailto: 201810100710@presidencyuniversity.in"><br></br><SiGmail color="#EA4335"size="2em"/> <b>Gmail</b></a></span>
      </div>
    );
  }
}
 
export default Contact;
