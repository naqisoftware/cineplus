import React from 'react';
import './listOfTabs.css';

function ListOfTabs({tabNames}) {
  return (
    //Lists the tabs
    <li>
        <a href={tabNames.link}>{tabNames.name}</a>
    </li>
  )
}

export default ListOfTabs 