import axiosInstance from "../http/client";

const FaceServices = {
  uploadImage(fileImage: File) {
    const data = {
      file: fileImage,
    };
    return axiosInstance.post(
      `/aiplatform/views/pages/facetraining/php/upload_test_img.php`,
      data
    );
  },
  detectFace() {},
};

export default FaceServices;
