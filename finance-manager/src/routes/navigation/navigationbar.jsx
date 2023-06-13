import { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
const NavigationBar = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container style={{ marginLeft: "2%" }}>
          <Navbar.Brand href="/">
            <BarChartIcon fontSize="large" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
