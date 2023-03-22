import React from 'react';
import ItemList from '../../components/Menu/ItemList/ItemList';
import MenuSummary from '../../components/Menu/MenuSummary/MenuSummary';

const Menu = () => {
    return (
        <div>
            <MenuSummary />
            <ItemList />
        </div>
    );
}

export default Menu;
