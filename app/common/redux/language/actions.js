const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  changeLanguage: payload => ({
    type: actions.CHANGE_LANGUAGE,
    payload
  })
};

export default actions;
