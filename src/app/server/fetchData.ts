import axios from "axios";
import ApiClient from "../utils/ApiClient";
import { date } from "yup";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  return ApiClient.get(`${BASE_URL}/uesrs`)
    .then((data) => {
      console.log(data);

      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
// try {
//     return await axios.get(`${BASE_URL}/users`);
//   } catch (e) {
//     return [];
//   }
