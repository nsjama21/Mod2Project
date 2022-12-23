import sendRequest from "./send-request";




const BASE_URL = '/api/tvshows'; // express router will pass this to the controller

export function addTVShow(tvshowInfo) {
  // console.log(tvshowInfo);
  return sendRequest(BASE_URL, 'POST', tvshowInfo);
}

export function getTVShows() {
  return sendRequest(BASE_URL);
}

export function showTVShow(id) {
  // console.log(id)
  return sendRequest(`${BASE_URL}/listing/${id}`);
}

export function deleteTVShow(id) {
  return sendRequest(`${BASE_URL}/listing/${id}`, 'DELETE');
}

export function updateTVShow(id, tvshowInfo) {
  return sendRequest(`${BASE_URL}/listing/${id}`, 'PUT', tvshowInfo);
}