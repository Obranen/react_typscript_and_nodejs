import axios from "axios";

axios.post('/api/review/create', {
  nameReview: 'Fred',
  descReview: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});