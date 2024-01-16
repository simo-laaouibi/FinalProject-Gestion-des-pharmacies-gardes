import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import SideBar from "../pages/SideBar";
import Swal from 'sweetalert2'

export default function HomePharmacie() {
  let navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      process.env.React_App_URLf + "pharmacies/add/1", pharmacie)
    navigate("/AddPharmacie");
    ;
  };

  const [latitude, setlat] = React.useState(0.0);
  const [logitude, setlog] = React.useState(0.0);
    useEffect(() => {
    loadVilles();
    navigator.geolocation.getCurrentPosition((position) => {
      setlat(position.coords.latitude);
      setlog(position.coords.longitude);
      console.log(latitude);
      console.log(logitude);
    });
  }, []);
  useEffect(() => {
    setPharmacie((prevPharmacie) => ({
      ...prevPharmacie,
      lat: latitude,
      log: logitude,
    }));
  }, [latitude, logitude]);
  const [pharmacie, setPharmacie] = useState({
    nom: "",
    adresse: "",
    lat: latitude,  
    log: logitude,
    telephone: "",
    etat: 0,
    zone: {
      id: 1,
    },
  });
  const [zones, setZones] = useState([]);
  const [villes, setVilles] = useState([]);

  const { nom, adresse, telephone, lat, log, zone } = pharmacie;
  const onInputChange = (e) => {
    setPharmacie({ ...pharmacie, [e.target.name]: e.target.value });
  };
  const loadVilles = async () => {
    const result = await axios.get(process.env.React_App_URLf + "villes/all");
    setVilles(result.data);
  };
  const loadAllZoneByVille = async (id) => {
    const result = await axios.get(
      process.env.React_App_URLf + `zones/zone/ville=${id}`
    );
    setZones(result.data);
  };
  const popSuccess = () => {
    Swal.fire({
      title: 'Info!!',
      text: "La pharmacie a été ajoutée avec succès. Attendez l'acceptation de l'administrateur.",
      icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            document.location = '/AddPharmacie'
        }
    })
}


  return (
    <div class="layout-wrapper layout-content-navbar">
      <SideBar />
      <div class="layout-container">
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="col-md-8 mx-auto">
                  <div class="nav-align-top mb-4">
                    <div class="tab-content">
                      <div class="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                          <div
                            class=""
                            style={{ margin: 10, padding: -10 }}
                          >
                            <h5 class="">Ajouter une nouvelle Pharmacie</h5>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Nom de pharmacie
                            </label>
                            <div class="col-sm-10">
                              <input
                                type={"text"}
                                name="nom"
                                class="form-control"
                                id="basic-default-name"
                                value={nom}
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Adresse
                            </label>
                            <div class="col-sm-10">
                              <input
                                type={"text"}
                                name="adresse"
                                class="form-control"
                                id="basic-default-name"
                                value={adresse}
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              telephone
                            </label>
                            <div class="col-sm-10">
                              <input
                                type={"text"}
                                name="telephone"
                                class="form-control"
                                id="basic-default-name"
                                value={telephone}
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div>
                            <p>
                              Accédez à Google Maps, effectuez un clic droit
                              pour placer précisément les coordonnées de la
                              pharmacie ou laissez celles de votre position
                              actuelle:
                            </p>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              lat
                            </label>
                            <div class="col-sm-10">
                              <input
                                type={"text"}
                                name="lat"
                                class="form-control"
                                id="basic-default-name"
                                value={lat}
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              log
                            </label>
                            <div class="col-sm-10">
                              <input
                                type={"text"}
                                name="log"
                                class="form-control"
                                id="basic-default-name"
                                value={log}
                                onChange={(e) => onInputChange(e)}
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Ville
                            </label>
                            <div class="col-sm-10">
                              <select
                                class="form-select placement-dropdown mx-1"
                                name="ville"
                                onChange={(e) => {
                                  loadAllZoneByVille(e.target.value);
                                }}
                              >
                                <option></option>
                                {villes.map((ville, index) => (
                                  <option value={ville.id}>{ville.nom}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Zone
                            </label>
                            <div class="col-sm-10">
                              <select
                                class="form-select placement-dropdown mx-1"
                                name="zone"
                                onChange={(e) => {
                                  pharmacie.zone.id = e.target.value;
                                }}
                              >
                                <option></option>
                                {zones.map((zone, index) => (
                                  <option value={zone.id}>{zone.nom}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-sm-10"><button type="submit" class="btn btn-primary" onClick={() => { popSuccess() }}><i class='bx bx-save'></i> Save</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
