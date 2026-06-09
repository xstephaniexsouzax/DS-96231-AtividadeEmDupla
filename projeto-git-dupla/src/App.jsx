import './App.css';
import Home from './pages/Home/index';
import Servicos from './pages/Servicos/index';
import Produtos from './pages/Produtos/index';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  <>
    {/* O Header fica fixo no topo em todas as páginas */}
    <Header />

    {/* O gerenciador de rotas decide qual página exibir no meio */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/servicos" element={<Servicos />} />
    </Routes>

    {/* O Footer fica fixo no rodapé em todas as páginas */}
    <Footer />
  </>
}

  export default App;