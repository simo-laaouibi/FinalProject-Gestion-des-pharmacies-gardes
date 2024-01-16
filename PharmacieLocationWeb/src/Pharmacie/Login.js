import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const data = {
    userName: username,
    userPassword: password,
  };
  const navigate = useNavigate();
  const popSuccess = () => {
    Swal.fire({
      title: "Info!!",
      text: "Le mot de passe ou le nom d'utilisateur est incorrect. Veuillez consulter les informations ci-dessus pour vous connecter.",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        document.location = "/Pharmacie";
      }
    });
  };
  const handleClient = async () => {
    sessionStorage.setItem("isAuthenticated", true);
    sessionStorage.setItem("role", "client");
    console.log("Valide");
    navigate("/map");
  };
  const handleLogin = async () => {
    console.log(data);
    if (data.userName == "admin@admin" && data.userPassword == "admin@admin") {
      sessionStorage.setItem("isAuthenticated", true);
      sessionStorage.setItem("role", "ADMIN");
      console.log("Valide");
      navigate("/pharmacie");
    } else if (data.userName == "user@user" && data.userPassword == "user@user") {
      sessionStorage.setItem("isAuthenticated", true);
      sessionStorage.setItem("role", "user");
      console.log("Valide");
      navigate("/AddPharmacie");
    } else {
      popSuccess();
    }
  };

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/zone");
    }
  });
  return (
    <div className="card col-md-4 offset-md-4 mt-3">
      <div className="card-header">
        <div className="card-title">
          <h6>Welcome to Pharmacies! </h6>
        </div>
      </div>

      <div className="card-body">
        <div>
          <label className="form-label">Username</label>
          <input
            className="form-control"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="form-label">password</label>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="text-align-center justify-content-center d-flex text-danger">
          <span>{error}</span>
        </div>

        <div>
          <button className="btn btn-primary mt-3" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
      <div>
        <div>
          Pour se connecter en tant qu'administrateur :
          <br />
          Nom d'utilisateur : <b>admin@admin</b>
          <br />
          Mot de passe : <b>admin@admin</b>
        </div>
        <br />
        <div>
          Pour se connecter en tant qu'utilisateur :
          <br />
          Nom d'utilisateur : <b>user@user</b>
          <br />
          Mot de passe : <b>user@user</b>
        </div>
        <br />
        <div>
          <button className="btn btn-success mt-3" onClick={handleClient}>
            Espace client
          </button>
        </div>
      </div>
    </div>
  );
}
