import axiosInstance from "../http/backend";
import dataStudentModel from "../models/dataStudentModel";

const DataStudentService = {
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
  getDataStudent: () => {
    return axiosInstance
      .get<dataStudentModel[]>("/api/all-data")
      .then((response) => response.data);
  },
};

export default DataStudentService;
