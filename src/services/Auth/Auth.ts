import { get, set, remove } from 'js-cookie'

let isAuthenticated = (): boolean => !!get('token');

let authenticate = (token: string, cb: () => void): void => {
  remove('token');
  set('token', token);
  setTimeout(() => cb(), 0);
}

let logout = (cb: () => void): void => {
  remove('token');
  setTimeout(() => cb(), 200);
}

export { isAuthenticated, authenticate, logout };
