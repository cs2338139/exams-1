import { useEffect, useRef } from 'react';

const SearchBox = () => {
  const debounceTimeout = useRef(null);

  const handleOnChange = (event) => {
    const value = event.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      console.log('make ajax call', value);
      // make ajax call
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <input
      type="search"
      name="p"
      onChange={handleOnChange}
    />
  );
};

function App() {

  return (
    <>
      <SearchBox />
    </>
  )
}

export default App
