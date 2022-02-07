import { Nav, NavItem, NavLink } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <Nav>
      <NavItem key="customer_link">
        <NavLink href="/admin/customer">Customer</NavLink>
      </NavItem>
      <NavItem key="profile_link">
        <NavLink href="/admin/profile">Profile</NavLink>
      </NavItem>
    </Nav>
  );
};
