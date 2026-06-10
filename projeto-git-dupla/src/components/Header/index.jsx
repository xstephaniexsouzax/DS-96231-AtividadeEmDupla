import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <h2>Psicologia <span>Online</span></h2>
      </div>
      
      <nav className="menu-navegacao">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/servicos">Serviços</Link>
      </nav>
    </header>
  );
}

export default Header;