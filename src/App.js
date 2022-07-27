import "./App.css";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
// import { Navigate } from 'react-router-dom';
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from '@mui/icons-material/Info';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import JSONDATA from "./mockdata.json";
// import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { Search } from "./Search";
import { Mobiles } from "./Mobiles";


export const mobiles = [
  {
    id: "1",
    img: "https://rukminim1.flixcart.com/image/312/312/l1dwknk0/mobile/f/t/x/-original-imagcyj4unsxhadw.jpeg?q=70",
    title: "realme C31 (Light Silver, 32 GB)",
    rating: "4.6",
    price: "10,999",
    final_price: "8,999",
  },
  {
    id: "2",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
    title: "POCO C31 (Royal Blue, 64 GB)",
    rating: "4.4",
    price: "11,999",
    final_price: "7,999",
  },
  {
    id: "3",
    img: "https://rukminim1.flixcart.com/image/312/312/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70",
    title: "SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)",
    rating: "4.1",
    price: "14,999",
    final_price: "11,999",
  },
  {
    id: "4",
    img: "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
    title: "APPLE iPhone 12 (Black, 128 GB)",
    rating: "4.6",
    price: "70,900",
    final_price: "56,999",
  },
  {
    id: "5",
    img: "https://m.media-amazon.com/images/I/81OZGH4fZiL._SX522_.jpg",
    title: "Redmi 10 Power (Sporty Orange, 8GB RAM, 128GB Storage)",
    rating: "3.6",
    price: "18,999",
    final_price: "14,999",
  },
  {
    id: "6",
    img: "https://m.media-amazon.com/images/I/71geVdy6-OS._SX522_.jpg",
    title: "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)",
    rating: "4.2",
    price: "20,990",
    final_price: "14,990",
  },
  {
    id: "7",
    img: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX522_.jpg",
    title: "OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)",
    rating: "4.3",
    price: "33,999",
    final_price: "24,999",
  },
  {
    id: "8",
    img: "https://m.media-amazon.com/images/I/71BZ2hz0IZL._SX522_.jpg",
    title: "Nokia G21 Android Smartphone",
    rating: "4.1",
    price: "15,999",
    final_price: "11,999",
  },
  {
    id: "9",
    img: "https://m.media-amazon.com/images/I/41+sLJHyA8L._SY300_SX300_.jpg",
    title: "Vivo Y21G (Midnight Blue, 4GB RAM, 64GB ROM)",
    rating: "4",
    price: "17,990",
    final_price: "13,499",
  },
  {
    id: "10",
    img: "https://m.media-amazon.com/images/I/413iZjGV3cL._SX522_.jpg",
    title: "Lava Agni 5G |64 MP AI Quad Camera| (8GB RAM/128 GB ROM)",
    rating: "4.3",
    price: "23,999",
    final_price: "15,999",
  },
];

function App() {

  // const navigate = useNavigate();

  // const [searchText, setSearchText] = useState("");

  return (
    <div className="App">

      {/* <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate(`/`)} color="inherit"><HomeIcon></HomeIcon>Home</Button>
          <Button onClick={() => navigate(`/electronics`)} color="inherit">Electronics</Button>
          <Button onClick={() => navigate(`/fashion`)} color="inherit">Fashion</Button>  
               

        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/electronics" element={<Electronics/>} />
      </Routes> */}

      <Navbar />
      <Home />
      <Electronics />
      <Search />     

      
    </div>
  );
}

export default App;

function Home() {
  return (
    <div class="card bg-dark text-dark border-0">
      <img
        src="https://guardianlv.com/wp-content/uploads/2014/04/online-shopping.jpg"
        class="card-img"
        alt="Background img"
      />
      <div class="card-img-overlay d-flex flex-column justify-content">
        <div className="container">
          <h5 class="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </h5>
          <p class="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
        </div>
      </div>
    </div>

    
  );
}

// function NotFound(){
//   return(
//     <div>
//       <img src="https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png"></img>
//     </div>
//   )
// }

function Electronics() {
  

  const [mobileList, setMobileList] = useState([]);

  const getMobiles = () => {
    fetch(`https://6251286d977373573f44d46e.mockapi.io/myapi/electronics`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mb) => setMobileList(mb));
  };

  useEffect(() => getMobiles(), []);

  return (
    <div className="phone-list-container">
      {mobileList.map((mb) => (
        <Mobiles mobile={mb} />
      ))}
    </div>
  );
}


