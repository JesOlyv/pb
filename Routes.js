import React, { useState } from 'react';
import Welcome from './Welcome';
import LoginCadastro from './LoginCadastro';
import Perfil from './Perfil';
import { DatabaseConnection } from './Pages/conexao.js';

const db = DatabaseConnection.getConnection();
const Routes = () => {
  const [currentPage, setCurrentPage] = useState('Welcome');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome handleNavigation={handleNavigation} />;
      case 'LoginCadastro':
        return <LoginCadastro handleNavigation={handleNavigation} />;
      case 'Perfil':
        return <Perfil handleNavigation={handleNavigation} />;
      default:
        return <Welcome handleNavigation={handleNavigation} />;
    }
  };

  return renderPage();
};

export default Routes;
