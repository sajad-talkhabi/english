import qs from "qs";

const TOKEN_KEY = "access_token";
const USER = "user";
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenStorage = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  saveToken(accessToken = null) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  hasToken() {
    return localStorage.getItem(TOKEN_KEY) ? true : false;
  },
};

const UserStorage = {
  get() {
    if (localStorage.getItem(USER)) {
      return qs.parse(localStorage.getItem(USER));
    }
    return null;
  },
  getRole() {
    return this.get() ? this.get().role : null;
  },
  save(user = null) {
    user = qs.stringify(user);
    localStorage.setItem(USER, user);
  },
  remove() {
    localStorage.removeItem(USER);
  },
};

export { TokenStorage, UserStorage };
