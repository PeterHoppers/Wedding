import React, { useState } from 'react';
import './styles/app.scss';
import TopNavigation from './components/TopNavigation';

import { Pages } from './util';

import { Home } from './pages/Home';
import { Accommodations } from './pages/Accomodations';
import { OurStory } from './pages/OurStory';
import { Bios } from './pages/Bios';
import { Rsvp } from './pages/Rsvp';

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
      case Pages.RSVP:
        return <Rsvp/>
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
