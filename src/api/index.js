import axios from 'axios';

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 하이 오더 컴포넌트 구현 -> fetchList(pageName) 하나의 함수로
// 아래의 fetchNewsList(), fetchJobsList(), fetchAskList() 중복 공통 처리
async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.error( error );
  }
}

function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList(){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo( name ) {
  return axios.get(`${config.baseUrl}user/${name}.json`);
}

function fetchItem( id ) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}


export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem, fetchList };