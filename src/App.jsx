import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TitlePage from "./pages/TitlePage/TitlePage";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";

 function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}> 
            <Route path="/" element={<HomePage/>} index/>
            <Route path="/title" element={<TitlePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
     
   );
 }
 
 export default App;