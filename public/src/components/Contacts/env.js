const axios = require('axios');

exports.handler = function(event, context, callback) {

  const { REACT_APP_MAILJS_SERVICE, REACT_APP_MAILJS_TEMPLATE, REACT_APP_MAILJS_USER } = process.env;



}
const get = () => {
  axios
    .get(REACT_APP_MAILJS_SERVICE, REACT_APP_MAILJS_TEMPLATE, REACT_APP_MAILJS_USER)
    .then((response) => {
      console.log(response.data)
    })
}