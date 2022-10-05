import 'bootstrap/dist/css/bootstrap.min.css';
import Bill from './components/Bill';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Products from './components/Products';
import "./app.css"
import Footer from './components/Footer';
function App() {

  return (
    <div className=" bg-light">
      <Header />
      <Bill />
      <NavBar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
