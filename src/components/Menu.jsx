import React from 'react';
import List from './List';
import Flexx from './Flexx';
const Menu = () => {
    return (
        <div>
              <ul>
                <Flexx >
                    <List  href='#' text='Man'/>
                    <List href='#' text='Woman'/>
                    <List href='#' text='Kids'/>
                    <List href='#' text='Collection'/>
                    <List href='#' text='Trends'/>
                    
                 </Flexx>
                 
                </ul>
        </div>
    );
};

export default Menu;