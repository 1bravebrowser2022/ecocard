// BASEURL path
// const BASEURL = 'https://wa09u6nxid.execute-api.ap-south-1.amazonaws.com/v1/ecocard-resource/api';
const BASEURL = 'http://localhost:5000/api';
// user api end-point path
const USERURl = BASEURL + '/users';

// card api end-point path
const CARDURL = BASEURL + '/cards';

// card search api end-point path
const SEARCHURL = CARDURL + '/search';

// user api end-point path
export const userApi = {
  myprofile: USERURl + '/myprofile',
  updateprofile: USERURl + '/updateprofile',
  deleteprofile: USERURl + '/deleteprofile',
  locationUpdation: USERURl + '/locationUpdation',
};

// card api end-point path
export const cardApi = {
  recivecards: CARDURL + '/recivecards',
  createcard: CARDURL + '/createcard',
  mycards: CARDURL + '/mycards',
  sharedcard: CARDURL + '/sharedcard',
  updatecard: CARDURL + '/updatecard',
  deletecard: CARDURL + '/deletecard',
  findNearByUser: CARDURL + '/findNearByUser',
  updateRecivedCard: CARDURL + '/updateRecivedCard',
};

// search api end-point path
export const searchApi = {
  category: SEARCHURL + '/category',
  allCards: SEARCHURL + '/allCards',
  searchBaseApi: SEARCHURL + '?',
};

// auth api end-point path
export const authApi = {
  login: USERURl + '/login',
  signup: USERURl + '/signup',
  forgotpassword: USERURl + '/forgotpassword',
  resetpassword: USERURl + '/resetpassword',
};