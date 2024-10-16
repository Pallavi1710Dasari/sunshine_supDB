import axios from "axios";
 
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
 
export const registerYojana = async (data) => {
  const formData = new FormData();
 
  formData.append("yojanaName", data.yojanaName);
  formData.append("fullName", data.fullName);
  formData.append("guardianName", data.guardianName);
  formData.append("motherName", data.motherName);
  formData.append("dob", data.dateOfBirth);
  formData.append("gender", data.gender);
  formData.append("category", data.category);
  formData.append("mobileNumber", data.mobile);
  formData.append("email", data.email);
  formData.append("documentNumber", data.documentNo);
 
  if (data.photo) formData.append("photo", data.personPhoto);
  if (data.signature) formData.append("signature", data.signature);
  if (data.identityDocument) formData.append("identityDocument", data.identity);
 
  if (data.address) {
    formData.append("address[state]", data.address.state);
    formData.append("address[city]", data.address.city);
    formData.append("address[village]", data.address.gram);
    formData.append("address[post]", data.address.post);
    formData.append("address[policeStation]", data.address.policeStation);
    formData.append("address[tehsil]", data.address.tehsil);
    formData.append("address[district]", data.address.district);
    formData.append("address[pincode]", data.address.pinCode);
  }
 
  if (data.correspondenceAddress) {
    formData.append(
      "correspondenceAddress[village]",
      data.correspondenceAddress.gram
    );
    formData.append(
      "correspondenceAddress[post]",
      data.correspondenceAddress.post
    );
    formData.append(
      "correspondenceAddress[policeStation]",
      data.correspondenceAddress.policeStation
    );
    formData.append(
      "correspondenceAddress[tehsil]",
      data.correspondenceAddress.tehsil
    );
    formData.append(
      "correspondenceAddress[district]",
      data.correspondenceAddress.district
    );
    formData.append(
      "correspondenceAddress[pincode]",
      data.correspondenceAddress.pinCode
    );
  }
 
  formData.append("guardianAnnualIncome", data.guardianAnnualIncome || "");
  formData.append("rationCard", data.rationCard || "");
  formData.append("villageHeadName", data.villageHeadName || "");
  formData.append(
    "previousTrainingInstitute",
    data.previousTrainingInstitute || ""
  );
  formData.append("workDuration", data.workDuration || "");
  formData.append("preferredPanchayat", data.preferredPanchayat || "");
 
  const token = localStorage.getItem("token");
 
  const response = await api.post("/yojana/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
 
  return response.data;
};
 