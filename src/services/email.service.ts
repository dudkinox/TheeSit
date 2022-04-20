import axiosInstance from "../http/backend";

const EmailService = {
  sendEmail: (major: string, email: any, point: string) => {
    return axiosInstance
      .post<any>(`/api/send-email`, {
        major: major,
        email: email,
        point: point,
      })
      .then((response) => response.data);
  },
};

export default EmailService;
