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

    // 여기에서 원하는 방식으로 에러를 처리할 수 있습니다.
    // 예를 들어, 특정 상황에 따라 리다이렉트를 수행하거나 에러 메시지를 표시할 수 있습니다.
    // 또는 다른 처리 로직을 추가할 수 있습니다.

    return Promise.reject(error); // 이 부분에서 Promise.reject를 사용하여 에러를 전파합니다.
  }
);

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
