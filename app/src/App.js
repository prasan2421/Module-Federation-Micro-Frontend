import './App.css';
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import RightSidebar from "./modules/RightSidebar";
import LeftSidebar from './modules/LeftSidebar';
import {ReactComponent as ReactLogo} from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div>
        <div  className="main-app">
          <h2>Host Application in</h2>
          <ReactLogo className="react-logo"/>
        </div>
        
        <div style={{margin:'20px'}}>
          <header className="header-container">
            <Header></Header>
          </header>

          <div className="content">
            <div style={{margin:'10px',borderRadius:'20px', overflow:'hidden'}}> 
              <LeftSidebar></LeftSidebar>
            </div>
            <div style={{margin:'10px',borderRadius:'20px', overflow:'hidden'}}> 
            <RightSidebar></RightSidebar>
            </div>
          </div>

          <footer className="footer-container">
            <Footer></Footer>
          </footer>
        </div>
        

      </div>
      
    </div>
  );
}

export default App;
