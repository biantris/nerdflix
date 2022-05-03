import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageDefault from './components/PageDefault';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => (
        <PageDefault>
          <div>
            <h1>Página 404</h1>
            <span>
              Acho que você se perdeu no caminho.
              <br />
              Clique no título acima e volte para a página inicial.
            </span>
          </div>
        </PageDefault>
      )}
      />
    </Switch>
  </BrowserRouter>
  </React.StrictMode>
);
