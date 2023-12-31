import axios from "axios";

var params = new URLSearchParams(window.location.search);

var token = params.get("token");

if (token) {
  localStorage.setItem("access_token", token);
}

export const PythonInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 응답 인터셉터
PythonInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터가 있는 작업 수행
    let accessToken = response.headers["authorization"];
    console.log("access 토큰 :", accessToken);

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    return response;
  },
  (error) => {
    // 에러 처리
    console.error("에러 발생:", error);

    return Promise.reject(error);
  }
);

// // 로컬스토리지에 저장한 토큰을 꺼내서 , 요청헤더담아 보냄
// export const authorizationInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   timeout: 1000,
//   headers: {
//     "Content-Type": "application/json",
//     // Authorization: localStorage.getItem("access_token"),
//   },
//   withCredentials: true,
// });

// // 요청 인터셉터 추가
// authorizationInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers["Authorization"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
