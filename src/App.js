import "../styles/App.css";
import List from "../pages/List";
import Details from "../pages/Details";
import AddInfo from "../pages/AddInfo";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (

        <div className="App">

            {/* Hey front end coder! */}
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/add" element={<AddInfo />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </Router>
        </div>

    );


}

modules.export = App;