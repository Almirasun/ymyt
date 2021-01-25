import * as Redux from 'redux';
import * as Strings from '../strings/strings';

export const AT_SET_LANGUAGE = 'SET_LANGUAGE';

const initialState = {
  strings: Strings,
  lang: 'ru',
}

const appReducer = (state = initialState, action) => {
  if (action.type === AT_SET_LANGUAGE) {
    const lang = action.lang;
    return { ...state, lang: lang };
  }
  return { ...state };
}

export const store = Redux.createStore(appReducer);

export const SetLanguageAction = (lang = 'en' | 'ru' | 'kg') => ({
  type: AT_SET_LANGUAGE,
  lang: lang,
});

// store.dispatch(SetLanguageAction('en'));
// store.dispatch(SetLanguageAction('ru'));
// store.dispatch(SetLanguageAction('kg'));
