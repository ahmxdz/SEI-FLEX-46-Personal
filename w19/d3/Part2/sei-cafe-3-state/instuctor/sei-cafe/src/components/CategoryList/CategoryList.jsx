// When using JSX, React must be in scope
import React from 'react';

function CategoryList(props) {
  return (
      <div>
        <ul className='CategoryList'>
          {props.menuCategories.map(
            category => <li>{category}</li>
          )}
        </ul>
      </div>
  );
}

export default CategoryList;