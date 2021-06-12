// const ORDERS_API = `http://api.interview.staging.foodieorders.com/v3/orders/search`;
// DUE to CORS issue, using json-server to serve the API data.
const ORDERS_API_TEMP = 'http://localhost:4001/orders';

const fetchAllOrdersAPI = () => (
  fetch(ORDERS_API_TEMP)
);

const fetchPaginatedOrdersAPI = (page, limit) => (
  fetch(`${ORDERS_API_TEMP}?_page=${page}&_limit=${limit}`)
)

export {
  fetchAllOrdersAPI,
  fetchPaginatedOrdersAPI,
}