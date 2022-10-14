import React from 'react';

const Search = ({filter, setFilter}) => {

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Поиск"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value)
        }
      }
      />
    </div>
  );
};

export default Search;