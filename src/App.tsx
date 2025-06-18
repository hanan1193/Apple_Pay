
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import TempletesSection from './components/TempletesSection';
import AttomsSecreen from './components/AttomsSecreen';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Section name="Atoms" />
      <AttomsSecreen/>
        <Section name="Templet" />
      <TempletesSection />   

    </>
  );
};

export default App;