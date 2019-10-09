import Enlang from './locales/en_US.json';
import EsLang from './locales/es_ES.json';
import LaLang from './locales/la_LA.json';

import translation from 'react-simple-translation';

const AppLocale = {
  en_US: Enlang,
  es_ES: EsLang,
  la_LA: LaLang
};

translation.init({
  language: 'en_US',
  resources: AppLocale
});

export default translation;
