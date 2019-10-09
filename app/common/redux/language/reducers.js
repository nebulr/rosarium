import actions from './actions';

import AppLocale from '../../language';
import translation from 'react-simple-translation';

//const currentAppLocale = AppLocale[];

const initState = { locale: 'en_US', language: AppLocale['en_US'] };

export default function languageReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      translation.changeLanguage(action.payload.locale);
      return {
        locale: action.payload.locale,
        language: AppLocale[action.payload.locale]
      };
    default:
      return state;
  }
}
