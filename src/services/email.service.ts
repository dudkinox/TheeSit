import axiosInstance from "../http/backend";

const EmailService = {
  sendEmail: (email: string, point: string) => {
    return axiosInstance
      .post<any>(`/send-email`, {
        email: email,
        point: point,
      })
      .then((response) => response.data);
  },
};

export default EmailService;
