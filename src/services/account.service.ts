import axiosInstance from "../http/backend";
import accountModel from "../models/accountModel";

const AccountService = {
  getLoginAdmin: (username: string | null, password: string | null) => {
    const payload = {
      username: username,
      password: password,
    };
    return axiosInstance
      .post<accountModel>(`/api/login`, payload)
      .then((response) => response.data);
  },
};

export default AccountService;
