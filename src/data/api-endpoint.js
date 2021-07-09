const API_ENDPOINT = {
    baseUrl:`https://themealdb.com/api/json/v1/1/lookup.php?i=52772`,
    foodlist: (name) =>  `https://themealdb.com/api/json/v1/1/filter.php?c=${name}`,
    detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  };
  
  export default API_ENDPOINT;