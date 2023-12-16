import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: { key: "AIzaSyDya1FF1fx3Vw34BKCPHGiLQpf0ypTWcVU" },
});

export default request;
