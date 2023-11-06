import React from 'react';

//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES 
import Home from "./pages/Home";
import AddInfo from "./pages/AddInfo";
import Details from "./pages/Details";
import List from "./pages/List";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

//COMPONENTS
import AddTransactionForm from './components/AddTransactionForm';
import TransactionCard from './components/TransactionCard';
import TransactionDetails from './components/TransactionDetails';
import TransactionList from './components/TransactionList';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/songs" element={<Index />} />
                        <Route path="/songs/new" element={<New />} />
                        <Route path="/songs/:index" element={<Show />} />
                        <Route path="/songs/:index/edit" element={<Edit />} />
                        <Route path="*" element={<FourOFour />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;