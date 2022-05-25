// When using JSX, React must be in scope
import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';

function MenuList(props) {

  return (
      <div  className="MenuList">
        {
          props.menuItems.map(
            (item, idx) => <MenuListItem key={idx} name={item.name} price={item.price} emoji={item.emoji} />
          )
        }


      </div>
  );
}

export default MenuList;