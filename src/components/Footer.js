import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={7} className="text-center text-sm-end">
            <br/>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/awais-sajid/" target="_blank"><img src={navIcon1} alt="" /></a>
            <a href="https://twitter.com/4specialsome1" target="_blank"><img src={navIcon2} alt="" /></a>
            <a href="awaissajid@cyberdude.com" target="_blank"><img src={navIcon3} alt="" /></a>
            <a href="https://medium.com/@black_Diamond" target="_blank"><img src={navIcon4} alt="" /></a>
            <a href="https://hashnode.com/@blackdiamond92260" target="_blank"><img src={navIcon5} alt="" /></a>
            </div>
            <p><b><u> Thank you for attention  </u></b></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
