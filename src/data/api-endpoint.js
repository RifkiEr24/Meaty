const baseUrl = `https://themealdb.com/api/json/v1/1`;
const API_ENDPOINT = {
    foodlist: (name) =>  `${baseUrl}/filter.php?c=${name}`,
    detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  };
  
  export default API_ENDPOINT;