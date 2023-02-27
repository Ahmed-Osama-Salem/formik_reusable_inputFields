import { fetchUsers } from "./fetchData";
import ApiClient from "@/app/utils/ApiClient";

describe("Mock api.ts", () => {
  it("should get data", async () => {
    const Expected = { status: 200, data: {} };

    jest.spyOn(ApiClient, "get").mockResolvedValue(Expected);

    const result = await fetchUsers();

    expect(result).toEqual(Expected);
  });
});

//firts case
// import axios from "axios";

// import { BASE_URL, fetchUsers } from "./fetchData";

// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("fetchUsers", () => {
//   describe("when API call is successful", () => {
//     it("should return users list", async () => {
//       // given
//       const users = [
//         {
//           id: 10,
//           name: "Clementina DuBuque",
//         },
//       ];
//       mockedAxios.get.mockImplementationOnce(() => Promise.resolve(users));

//       // when
//       const result = await fetchUsers();

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//       expect(result).toEqual(users);
//     });
//   });

//   describe("when API call fails", () => {
//     it("should return empty users list", async () => {
//       // given
//       const message = "Network Error";
//       mockedAxios.get.mockRejectedValueOnce(new Error(message));

//       // when
//       const result = await fetchUsers();

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//       expect(result).toEqual([]);
//     });
//   });
// });
