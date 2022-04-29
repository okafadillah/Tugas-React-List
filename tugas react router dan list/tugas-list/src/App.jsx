import { Link, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Keranjang from './pages/Keranjang';
import Event from './pages/Event';
import './App.css';

function App() {
  return (
    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div className="w-full">
        <div className="flex items-center justify-center mb-4 text-xs text-gray-300 font-semibold uppercase tracking-wide">
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
            to="/Gallery">
            Gallery
          </Link>
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
            to="/Keranjang">
            Keranjang
          </Link>
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
            to="/Event">
            Event
          </Link>
          
        </div>

        <div className="p-6 w-full bg-white rounded-xl shadow-lg">
          <Routes>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/Keranjang" element={<Keranjang />}></Route>
            <Route path="/Event" element={<Event />}></Route>
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default App;