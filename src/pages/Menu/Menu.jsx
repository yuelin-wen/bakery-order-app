import React from 'react';
import ItemList from '../../components/Menu/ItemList/ItemList';
import MenuSummary from '../../components/Menu/MenuSummary/MenuSummary';
import './menu.css'

const Menu = () => {
    return (
        <div className='menu' >
            <MenuSummary />
            <ItemList />
        </div>
    );
}

export default Menu;
