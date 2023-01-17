

function Search({setSearch, search}) {
  
    
  return (
    <div >
        <form className="d-flex" role="search">
        <button className="btn btn-outline-dark bg-success" type="submit">Search</button>
    <input value = {search} onInput = {(e)=>{
      setSearch(e.target.value)
    }} className="form-control me-2" type="search" placeholder="Search Recent Transctions" aria-label="Search" />
      </form>
    </div>
  );
}

export default Search;