export default function() {

  //Bug: Currently name space doesn't work with show routes. - Greg
  //this.namespace = 'api';

  this.get('/api/stories');
  this.get('/api/stories/:id');
  this.get('/api/lessons');
  this.get('/api/lessons/:id');

   //this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

}
