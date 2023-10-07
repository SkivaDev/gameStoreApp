import axiosClient from "./axiosClient";

// export const movieType = {
//   upcoming: 'upcoming',
//   popular: 'popular',
// }

const rawgApi = {
  // getMoviesList: (type, params) => {
  //     const url = 'movie/' + movieType[type];
  //     return axiosClient.get(url, params);
  // },
  getGamesList: (params) => {
      const url = 'games';
      return axiosClient.get(url, params);
  },
  detail: (id, params) => {
      const url = `games/${id}`;
      return axiosClient.get(url, params);
  },
  genres: (params) => {
    const url = 'genres';
    return axiosClient.get(url, params);
  },
  getPlatformsList: (params) => {
      const url = 'platforms';
      return axiosClient.get(url, params);
  },
  getStoresList: (params) => {
      const url = 'platforms';
      return axiosClient.get(url, params);
  },
  getTagsList: (params) => {
      const url = 'platforms';
      return axiosClient.get(url, params);
  },

  // getVideos: (id, params) => {
  //     const url = 'movie/' + id + '/videos';
  //     return axiosClient.get(url, params);
  // },

  // search: (params) => {
  //     const url = 'search/movie';
  //     return axiosClient.get(url, params);
  // },
  // detail: (id, params) => {
  //     const url = 'movie/' + id;
  //     return axiosClient.get(url, params);
  // },
 
  // similar: (id, params) => {
  //     const url = 'movie/' + id + '/similar';
  //     return axiosClient.get(url, params);
  // },
  // getMoviesByCategory: (id, params) => {
  //   const url = 'discover/movie'
  //   return axiosClient.get(url, {params: {...params.params, with_genres: id}})
  // }
}

export default rawgApi;