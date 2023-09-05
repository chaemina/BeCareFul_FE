import axios from "axios";

export const PythonInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 응답 인터셉터
PythonInstance.interceptors.response.use((response) => {
  // 응답 데이터가 있는 작업 수행
  let accessToken = response.headers["authorization"];
  console.log("access 토큰 :", accessToken);

  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  return response;
});

// //백앤드 API

// export const BEInstance = axios.create({
//   baseURL: process.env.REACT_APP_OTHER_API_URL,
//   timeout: 1000,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// // 응답 인터셉터
// BEInstance.interceptors.response.use((response) => {
//   // 응답 데이터가 있는 작업 수행
//   let accessToken = response.headers["authorization"];
//   console.log("access 토큰 :", accessToken);

//   if (accessToken) {
//     localStorage.setItem("access_token", accessToken);
//     axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   }

//   return response;
// });
