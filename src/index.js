import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageDefault from './components/PageDefault';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => (
        <PageDefault>
          <div class="tenor-gif-embed" data-postid="10902527" data-share-method="host" data-width="100%" data-aspect-ratio="0.8508771929824561"><a href="https://tenor.com/view/no-results-404-gif-10902527">No Results GIF</a> from <a href="https://tenor.com/search/no-gifs">No GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
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
  </BrowserRouter>,
  document.getElementById('root')
);
