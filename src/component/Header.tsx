import React from 'react';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../service/useAuth';


function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const login = () => {
    navigate('/login');
  }

  const logoutUser = () => {
    logout();
  }

  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>Money Manager</Navbar.Brand>
        <Nav>
          {user ?
            <React.Fragment>
              <Navbar.Text>{`${user?.firstName}, ${user?.lastName}`}</Navbar.Text>
              <Nav.Link onClick={logoutUser}><CiLogout /></Nav.Link>
            </React.Fragment>
            : <Nav.Link onClick={login} > <CiLogin /></Nav.Link>}
        </Nav>
      </Container>
    </Navbar >
  )
}

export default Header;
