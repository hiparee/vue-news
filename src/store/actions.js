import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem, fetchList } from "../api/index";

export default {
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       console.log(response);
  //       // state.news = response.data; 불가능함 mustation을 통해서만 state값 접근
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //       return data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       console.log(data);
  //       commit("SET_JOBS", data);
  //       return data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then((response) => {
  //       console.log(response.data);
  //       commit("SET_USER", response.data);
  //       return response;
  //     })
  //     .catch();
  // },

  // async & await 사용
  async FETCH_USER({commit}, name) {
    try {
      const response = await fetchUserInfo(name);
      console.log( response );
      commit("SET_USER", response.data);
      return response;

    } catch (error) {
      console.log( error );
    }
  },


  async FETCH_ITEM({ commit }, id) {
    // const response.data = await fetchItem(id)
    // data destructuring
    const { data } = await fetchItem(id)

    try {
      commit("SET_ITEM", data);
      return data;

    } catch (error) {
      console.error(error); 
    }
  },

  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName); // 호출되는 api단에서 try/catch 사용
    commit("SET_LIST", response.data);
    return response;
  },
};
