import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import portada from "../src/assets/Group 12.png"
import testimonios from "../src/assets/Group 13.png"
import serenidad from "../src/assets/Frame 83.png"
import rectangle from "../src/assets/Rectangle 24.png"
import apoyo from "../src/assets/Group 14.png"
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App" sx={{backgroundColor:"#D9D9D9"}}>
      <header className="App-header">
        <ResponsiveAppBar></ResponsiveAppBar>
        <div>
            <img src={portada} alt="Logo" />
          </div>
          <div>
            <img src={testimonios} alt="Logo" />
          </div>
          <div>
            <img src={serenidad} alt="Logo" />
          </div>

          <br></br>
          <iframe
    src="https://mandalas.dibujos.net/mandala-planetaria.html"
    width="75%"
    height="600px"
    frameborder="0"
    allowfullscreen
></iframe>
<div>
            <img src={rectangle} alt="Logo" />
          </div>
<div>
            <img src={apoyo} alt="Logo" />
          </div>

      </header>
      <br></br>
      <Button variant="contained" sx={{ borderRadius: 30, backgroundColor: "#EC744A" }}>
  <a href="https://principal.url.edu.gt/acerca-de/servicios/centro-landivariano-de-practica-y-servicios-de-psicologia/" style={{ textDecoration: "none", color: "inherit" }}>
    Contacto
  </a>
</Button>

<div>
            <img src={rectangle} alt="Logo" />
          </div>
           </div>
  );
}

export default App;
