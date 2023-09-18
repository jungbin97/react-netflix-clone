import axios from "axios";

const instance = axios.create({
    // 계속 반복되는 부분
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: "e1fc24bd62e201ce8b4a01c7218ec19f",
        language: "ko-KR",
    },
});

export default instance;

