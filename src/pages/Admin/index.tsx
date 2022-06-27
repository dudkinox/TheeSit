import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import accountModel from "../../models/accountModel";
import dataStudentModel from "../../models/dataStudentModel";
import AccountService from "../../services/account.service";

export default function AdminPage() {
  const username = window.sessionStorage.getItem("username");
  const password = window.sessionStorage.getItem("password");
  const { state } = useLocation() as any;
  const navigate = useNavigate();

  useEffect(() => {
    if (!username || !password) {
      navigate("/login");
    }
    AccountService.getLoginAdmin(username, password)
      .then((res: accountModel) => {
        if (res.username === null || res.password === null) {
          navigate("/login");
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, [username, password, navigate]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css"
      />
      <Container fluid="md mt-5">
        <table
          id="example"
          className="display nowrap table table-striped table-dark"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID STUDENT</th>
              <th>NAME LASTNAME</th>
              <th>MAJOR</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item: dataStudentModel) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.major}</td>
                <td>{item.sum ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
