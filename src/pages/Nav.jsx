import React from 'react';
import ListOfTabs from '../components/ListOfTabs';
import navListData from '../navdata/navListData';
import './nav.css';

function Nav() {
  return (
    <header>
        <a href="/" className="logo">
            cineplus
        </a>
        <ul className='tabs'>
            {navListData.map(tabNames => (
                <ListOfTabs key={tabNames._id} tabNames={tabNames} />
            ))}
        </ul>
 
    </header>
  )
}

export default Nav