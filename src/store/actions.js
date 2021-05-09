import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem } from "../api/index";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response);
        // state.news = response.data; 불가능함 mustation을 통해서만 state값 접근
        context.commit("SET_NEWS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_JOBS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  FETCH_USER({ commit }, name ) {
    fetchUserInfo( name )
      .then( response => {
        console.log( response.data );
        commit('SET_USER', response.data );
      })
      .catch()
  },

  FETCH_ITEM({ commit }, id ) {
    fetchItem( id )
      .then(({ data }) => {
        commit( 'SET_ITEM', data );
      })
      .catch( error => {
        console.log( error );
      })
  }
};
