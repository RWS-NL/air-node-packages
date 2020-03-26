import { go, goBack, goForward, push, replace } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import * as configActions from 'store/config/configActions';

const routerActions = {
  push: typeof push,
  replace: typeof replace,
  go: typeof go,
  goBack: typeof goBack,
  goForward: typeof goForward
};

const ToastrActions = {
  add: typeof toastrActions.add,
  clean: typeof toastrActions.clean,
  hideConfirm: typeof toastrActions.hideConfirm,
  remove: typeof toastrActions.remove,
  removeByType: typeof toastrActions.removeByType,
  showConfirm: typeof toastrActions.showConfirm
};

export default {
  router: routerActions,
  toastr: ToastrActions,
  config: configActions
};
