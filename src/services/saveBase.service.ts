import axiosInstance from "../http/backend";

const SaveBaseService = {
  saveData: (ids: any, names: any, majors: string, sums: string) => {
    return axiosInstance
      .post<any>("/api/save-base", {
        id: ids,
        name: names,
        major: majors,
        sum: sums,
      })
      .then((response) => response.data);
  },
};

export default SaveBaseService;
