import React, { useState } from 'react';
import './styles/App.scss';
import TopNavigation from './components/TopNavigation';

import { Pages } from './util';

import { Home } from './pages/Home';
import { Accommodations } from './pages/Accomodations';
import { OurStory } from './pages/OurStory';
import { Bios } from './pages/Bios';

function App() {
  const [currentPage, setPage] = useState(Pages.Main);
  
  const updatePage = (newPage) => {
    setPage(newPage);
  }

  const renderPage = () => {
    switch(currentPage) {
      case Pages.Main:
        return <Home/>;
      case Pages.Hotel:
        return <Accommodations/>;
      case Pages.Self:
        return <OurStory/>;
      case Pages.Bios:
        return <Bios/>;
      default:
        return <p/>
    }
  }
  return (
    <>
      <TopNavigation updatePage={updatePage}/>
      {renderPage()}
    </>
  );
}

export default App;
