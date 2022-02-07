import { Nav, NavItem, NavLink } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <Nav>
      <NavItem key="customer_link">
        <NavLink href="/admin/customer">Clients</NavLink>
      </NavItem>
      <NavItem key="profile_link">
        <NavLink href="/admin/profile">Profil</NavLink>
      </NavItem>
      <NavItem key="database_link">
        <NavLink href="/admin/database">Données</NavLink>
      </NavItem>
      <NavItem key="invoice_link">
        <NavLink href="/admin/invoice">Facture</NavLink>
      </NavItem>
      <NavItem key="invoice_link">
        <NavLink href="/admin/invoice">Colis</NavLink>
      </NavItem>
      <NavItem key="invoice_link">
        <NavLink href="/admin/price">Prix</NavLink>
      </NavItem>
      <NavItem key="invoice_link">
        <NavLink href="/admin/product">Produit</NavLink>
      </NavItem>
    </Nav>
  );
};
