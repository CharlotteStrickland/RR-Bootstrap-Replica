import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (

        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexDirection: "row-reverse" }}>
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav style={{ padding: "20px 40px 20px 20px", lineHeight: "25px", fontWeight: "bolder", display: "flex" }} ></Nav>
                    <Nav.Link style={{ color: "#343538", margin: "0 22px", fontSize: "18px" }} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{ fontSize: "18px", borderRadius: "20px", border: "none", backgroundColor: "#0AAD0A" }}>Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}