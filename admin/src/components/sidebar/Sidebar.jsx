import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analises
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Vendas
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu usuarios</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            <Link to="/newuser" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Criar usuarios
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu produtos</h3>
          <ul className="sidebarList">
          <Link to="/products" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
             Produtos
            </li>
          </Link>
          <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Criar produto
            </li>
          </Link>  
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu ordens</h3>
          <ul className="sidebarList">           
          <Link to="/order" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Lista de ordens
            </li>
          </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
