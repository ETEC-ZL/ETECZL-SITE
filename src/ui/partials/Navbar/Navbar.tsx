import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarContainer } from '../../styles/Navbar/Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBootstrap expand="lg" className="w-100">
        <Container>
          <NavbarBootstrap.Brand>ETEC Zona Leste</NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="navbar" />
          <NavbarBootstrap.Collapse id="navbar" className="justify-content-end ">
            <Nav className="ml-auto">
              <Nav.Link>Início</Nav.Link>
              <Nav.Link>Cursos</Nav.Link>
              <NavDropdown title="Instituição" id="instituicao">
                <NavDropdown.Item>História & Infraestrutura</NavDropdown.Item>
                <NavDropdown.Item>Plano Plurianual de Gestão</NavDropdown.Item>
                <NavDropdown.Item>Manual do Aluno</NavDropdown.Item>
                <NavDropdown.Item>Regimento Comum das Etecs</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Departamentos" id="departamentos">
                <NavDropdown.Item>APM - Assosiação de Pais e Mestres</NavDropdown.Item>
                <NavDropdown.Item>Coordenação de Cursos</NavDropdown.Item>
                <NavDropdown.Item>Direção</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Oportunidades</Nav.Link>
              <Nav.Link>Vestibulino</Nav.Link>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </NavbarContainer>
  );
};

export default Navbar;
