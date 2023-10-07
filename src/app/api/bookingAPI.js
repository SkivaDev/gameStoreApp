import axiosClient from "./axiosClient";



const bookingApi = {

  getBooksList: (params) => {
      const url = 'currency/get-exchange-rates';
      return axiosClient.get(url, params);
  },

}

export default bookingApi;