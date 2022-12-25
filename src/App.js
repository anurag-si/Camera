import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header";
import Display from "./Display/Display";
import Stream from "./Stream/Stream";
import './App.css'

function App() {
  const [img, setImg] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      <Routes>
          <Route path="/" element={<Stream
          img={img}
          setImg={setImg}
          />
        } />
          <Route path="/display" element={<Display
          img={img}
          setImg={setImg}
            />} />
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
