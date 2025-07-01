export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PHOTO_URL ="https://loodibee.com/wp-content/uploads/Netflix-avatar-9.png"
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY, 
  }
};
export const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular?page=1";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const BACKGROUND_IMAGE ="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;