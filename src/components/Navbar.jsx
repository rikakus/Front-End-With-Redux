import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	Nav
} from 'reactstrap';

function App() {

	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block', width: "100%", padding: 30
		}}>
			<Navbar light expand="md">
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar style={{backgroundColor: "white"}}>
					<Nav className="mr-auto" navbar>
						<NavItem>
            <Link to="/" style={{marginRight: "30px", textDecoration: "none", color: "#2E266F", fontSize: "20px"}}>Home</Link>
						</NavItem>
						<NavItem>
            <Link to="/new" style={{marginRight: "30px", textDecoration: "none", color: "#2E266F", fontSize: "20px"}}>Add Recipe</Link>
						</NavItem>
						<NavItem>
            <Link to="/profile" style={{marginRight: "30px", textDecoration: "none", color: "#2E266F", fontSize: "20px"}}>Profile</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default App;
