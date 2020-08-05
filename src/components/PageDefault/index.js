import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
`;

function PageDefault({ children }) {
    return (
      <>
        <Menu />
          <Main>
            {children}
          </Main>
        <Footer />
      </>
    );
  }

  export default PageDefault;
