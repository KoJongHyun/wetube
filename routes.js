// Global
const HOME = '/';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';
const JOIN = '/join';

// User 
const USER = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/:id/change-password';

// Video
const VIDEO = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  join: JOIN,
  user: USER,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  upload: UPLOAD,
  editVideo: id => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  }
}

export default routes;