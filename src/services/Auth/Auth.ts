import { get, set, remove } from 'js-cookie'

let isAuthenticated = (): boolean => !!get('token');

let authenticate = (token: string, cb: () => void): void => {
  remove('token');
  set('token', token);
  setTimeout(() => cb(), 0);
}

let signout = (cb: () => void) => {
  remove('token');
  setTimeout(() => cb(), 0);
  // let history = useHistory();

  // history.push("/");
}

export { isAuthenticated, authenticate, signout };
