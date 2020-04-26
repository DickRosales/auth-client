import axios from 'axios';
import Cookies from 'js-cookie'

// Set config defaults when creating the instance
const Api = axios.create({
  baseURL: 'http://localhost:7010/',
  timeout: 1000,
  withCredentials: false,
  headers: {'Authorization': `token ${Cookies.get('token')}`}
});

export default Api;

// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });


// {
//   // `data` is the response that was provided by the server
//   data: {},

//   // `status` is the HTTP status code from the server response
//   status: 200,

//   // `statusText` is the HTTP status message from the server response
//   statusText: 'OK',

//   // `headers` the HTTP headers that the server responded with
//   // All header names are lower cased and can be accessed using the bracket notation.
//   // Example: `response.headers['content-type']`
//   headers: {},

//   // `config` is the config that was provided to `axios` for the request
//   config: {},

//   // `request` is the request that generated this response
//   // It is the last ClientRequest instance in node.js (in redirects)
//   // and an XMLHttpRequest instance in the browser
//   request: {}
// }