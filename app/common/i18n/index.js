
import en_US from './en_US.json';
import es_ES from './es_ES.json';
import la_LA from './la_LA.json';
import translation from 'react-simple-translation';

translation
  .init({
    language: 'en_US',
    resources: {
      en_US,
      es_ES,
      la_LA
    }
  })

export default translation;
