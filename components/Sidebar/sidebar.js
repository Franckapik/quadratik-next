import Image from "next/image";
import {
  Nav,
  NavItem,
  NavLink,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

export const Sidebar = () => {
  return (
    <Nav>
      <OverlayTrigger
        placement="right"
        key={"home"}
        overlay={<Tooltip id="button-tooltip-2">Back to Home</Tooltip>}
      >
        <NavItem key="customer_link">
          <NavLink href="/" title="Logo">
            <Image src="/img/logo_cercle.svg" width={500} height={500}></Image>
          </NavLink>
        </NavItem>
      </OverlayTrigger>

      <OverlayTrigger
        placement="right"
        key={"clients"}
        overlay={<Tooltip id="button-tooltip-2">Clients</Tooltip>}
      >
        <NavItem key="customer_link">
          <NavLink href="/admin/customer" title="Clients">
            <i className="fas fa-users"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"profil"}
        overlay={<Tooltip id="button-tooltip-2">Profil</Tooltip>}
      >
        <NavItem key="profile_link">
          <NavLink href="/admin/profile" title="Profil">
            <i className="far fa-user-circle"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"données"}
        overlay={<Tooltip id="button-tooltip-2">Données</Tooltip>}
      >
        <NavItem key="database_link">
          <NavLink href="/admin/database" title="Données">
            <i className="fas fa-database"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"factures"}
        overlay={<Tooltip id="button-tooltip-2">Factures</Tooltip>}
      >
        <NavItem key="invoice_link">
          <NavLink href="/admin/invoice" title="Factures">
            <i className="fas fa-file-invoice-dollar"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"colis"}
        overlay={<Tooltip id="button-tooltip-2">Colis</Tooltip>}
      >
        <NavItem key="colis_link">
          <NavLink href="/admin/parcel" title="Colis">
            <i className="fas fa-box-open"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"prix"}
        overlay={<Tooltip id="button-tooltip-2">Prix</Tooltip>}
      >
        <NavItem key="price_link">
          <NavLink href="/admin/price" title="Prix">
            <i className="fas fa-tags"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"produits"}
        overlay={<Tooltip id="button-tooltip-2">Produits</Tooltip>}
      >
        <NavItem key="product_link">
          <NavLink href="/admin/product" title="Produits">
            <i className="fab fa-product-hunt"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"livraison"}
        overlay={<Tooltip id="button-tooltip-2">Livraisons</Tooltip>}
      >
        <NavItem key="delivery_link">
          <NavLink href="/admin/product" title="Livraison">
            <i className="fas fa-truck"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        key={"relais"}
        overlay={<Tooltip id="button-tooltip-2">Relais</Tooltip>}
      >
        <NavItem key="invoice_link">
          <NavLink href="/admin/relais" title="Relais">
            <i className="fas fa-map-marked-alt"></i>
          </NavLink>
        </NavItem>
      </OverlayTrigger>
    </Nav>
  );
};
