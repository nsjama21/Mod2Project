import sendRequest from './send-request';


const BASE_URL = '/api/reviews';

// Retrieve an unpaid order for the logged in user
export function listing() {
  return sendRequest(`${BASE_URL}/listing`);
}

// Add an item to the cart
export function addToReviews(tvshowId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/listing/tvshows/${tvshowId}`, 'POST');
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function history() {
  return sendRequest(`${BASE_URL}/history`)
}

