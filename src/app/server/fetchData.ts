import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  try {
    const data = await axios.get(`${BASE_URL}/users`);
    console.log(data);
    return data;
  } catch (e) {
    return [];
  }
};
// fetchUsers();
// return ApiClient.get(`${BASE_URL}/uesrs`)
// .then((data) => {
//   console.log(data);

//   return data.data;
// })
// .catch((err) => {
//   return err;
// });
