import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AInormal from "../../assets/png/นั่ง1.svg";
import dataStudentModel from "../../models/dataStudentModel";
import AccountService from "../../services/account.service";
import DataStudentService from "../../services/saveBase.service";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAdmin = () => {
    AccountService.getLoginAdmin(username, password)
      .then(() => {
        window.sessionStorage.setItem("username", username);
        window.sessionStorage.setItem("password", password);

        DataStudentService.getDataStudent()
          .then((res: dataStudentModel[]) => {
            navigate("/admin", { state: res });
          })
          .catch((err: any) => {
            console.log(err);
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={AInormal} alt="AI" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">เฉพาะเจ้าหน้าที่</p>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">LOGIN</p>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Username
                  </label>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg col-6"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={loginAdmin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2022. All rights reserved. Suphanat Chinnarach
            6111500143 CRU.
          </div>
        </div>
      </section>
    </>
  );
}
