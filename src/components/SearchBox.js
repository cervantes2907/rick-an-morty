import { useForm } from "react-hook-form";
import { Fragment, useState } from 'react'

const SearchBox = ({ onSearchLocation }) => {
  const {  handleSubmit, reset } = useForm();
  const [search, setSearch] = useState("",);

  const handleChange = event => {
    setSearch(
  
        event.target.value
    )
}
  
  const onSubmitSearch = () => {
    onSearchLocation(search);
    reset({
      search: "",
    });
  };

  return (
    <Fragment>
    <h1>app rick and morty</h1>
    <form
      
      onSubmit={handleSubmit(onSubmitSearch)}
    >
      <div className="form">
        <input
          type="text"
          name="search"
          placeholder="  search Location"
          value={search}
          onChange={handleChange} 
        />
        <button type="submit">search</button>
      </div>        
    </form>
    </Fragment>
  );
};

export default SearchBox;