import { store } from './store';
import authActions from 'src/../../common/frontend/redux/auth/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
