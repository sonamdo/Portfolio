import React from 'react';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import PortfolioPage from './PortfolioPage';
import SkillsPage from './SkillsPage';
import Footer from './Footer';

const Main = () => (
  <div className = "mainContainer">
    <Header />
    <HomePage />
    <PortfolioPage />
    <SkillsPage />
    <Footer />
  </div>
)

export default Main;
