
import './App.css';
import SideBar from './pages/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeVille from './Pharmacie/HomeVille';
import EditVille from './Pharmacie/EditVille';
import HomeZone from './Pharmacie/HomeZone';
import EditZone from './Pharmacie/EditZone';
import HomePharmacie from './Pharmacie/HomePharmacie';
import MyMap from './Pharmacie/MyMap';
import Chart from './Pharmacie/Chart';
import AddGarde from './Pharmacie/AddGarde';
import ListPharmacieGarde from './Pharmacie/ListPharmacieGarde';
import Historique from './Pharmacie/Historique';
import MapFiltre from './Pharmacie/MapFiltre';
import HomeGarde from './Pharmacie/HomeGarde';
import EditGarde from './Pharmacie/EditGarde';
import PrivateRoute from './route/PrivateRoute'
import Login from './Pharmacie/Login';
import AddPharmacie from './Pharmacie/AddPharmacie';
function App() {
  return (

    // <Router>
    //   <Routes>
    //     <Route index exact path="/ville" element={<HomeVille />} />
    //     <Route exact path="/editville/:id" element={< EditVille />} />

    //     <Route exact path="/zone" element={<HomeZone />} />
    //     <Route exact path="/editzone/:id" element={< EditZone />} />

    //     <Route exact path="/garde" element={<HomeGarde />} />
    //     <Route exact path="/editGarde/:id" element={< EditGarde />} />

    //     <Route exact path="/pharmacie" element={<HomePharmacie />} />
    //     <Route exact path="/map/:id" element={<MyMap />} />
    //     <Route exact path="/chart" element={<Chart />} />
    //     <Route exact path='/addGarde' element={<AddGarde />} />
    //     <Route exact path='/listPharmacieGarde' element={<ListPharmacieGarde />} />
    //     <Route exact path='/historique/:id' element={<Historique />} />
    //     <Route exact path='/map' element={<MapFiltre />} />
// <Route exact path="/AddPharmacie" element={<AddPharmacie />} />
    //   </Routes>
    // </Router>

    <>
    <Router>
      <div className="App">
        
        <Routes>

        <Route index exact path="/AddPharmacie" element={<PrivateRoute Component={AddPharmacie} />} />

          <Route index exact path="/ville" element={<PrivateRoute Component={HomeVille} />} />

        {/* <Route index exact path="/ville" element={<HomeVille />} /> */}

        <Route exact path="/editville/:id" element={<PrivateRoute Component={EditVille} />} />

        <Route exact path="/zone" element={<PrivateRoute Component={HomeZone} />} />
         <Route exact path="/editzone/:id" element={<PrivateRoute Component={EditZone} />} />

         <Route exact path="/garde" element={<PrivateRoute Component={HomeGarde} />} />
         <Route exact path="/editGarde/:id" element={<PrivateRoute Component={EditGarde} />} />


         <Route exact path="/pharmacie" element={<PrivateRoute Component={HomePharmacie} />} />
         <Route exact path="/map/:id" element={<PrivateRoute Component={MyMap} />} />
         <Route exact path="/chart" element={<PrivateRoute Component={Chart} />} />
         <Route exact path='/addGarde' element={<PrivateRoute Component={AddGarde} />} />
         <Route exact path='/listPharmacieGarde' element={<PrivateRoute Component={ListPharmacieGarde} />} />
         <Route exact path='/historique/:id' element={<PrivateRoute Component={Historique} />}/>
         <Route exact path='/map' element={<PrivateRoute Component={MapFiltre} />} />
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />


        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
