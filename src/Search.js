import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { mobiles } from "./App";

export function Search() {

  const [searchText, setSearchText] = useState("");

  return (
    <div>

      <input className='input'
        type="text"
        placeholder='Search..'
        onChange={event => { setSearchText(event.target.value); }}>

      </input>

      <IconButton><SearchIcon></SearchIcon></IconButton>


      {mobiles.filter((val) => {
        if (searchText === "") {
          return val;
        }
        else if (val.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
          return val;
        }

      }).map((val, key) => {
        return (
          <div className='product' key={key}>
            {/* <p>{val.title}</p> */}
            <img className="phone-img" src={val.img} alt={val.title}></img>
            <h2 className="phone-name"> {val.title} </h2>
            <p className="phone-rating"> ⭐ {val.rating} </p>
            <h5 className="phone-price">{val.price} </h5>
            <h4 className="final-price"> {val.final_price} </h4>
          </div>
        );
      })}

    </div>
  );
}
