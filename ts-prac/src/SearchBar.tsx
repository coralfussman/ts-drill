import React from 'react';

interface SearchBarProps {
  setFiltered: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        func: () => string;
      }[]
    >
  >;
  searchable: {
    name: string;
    func: () => string;
  }[];
}

function SearchBar({ setFiltered, searchable }: SearchBarProps) {
  const setSearch = (val: string, list: typeof searchable) => {
    let found = list.filter((el) => {
      return Object.values(el)
        .join('')
        .toLowerCase()
        .includes(val.toLowerCase());
    });
    setFiltered(found);
  };

  return (
    <div>
      <label>SearchBar : </label>
      <input
        placeholder="search"
        onChange={(e) => setSearch(e.target.value, searchable)}
      />
    </div>
  );
}
export default SearchBar;
