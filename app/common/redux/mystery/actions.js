const actions = {
  CHANGE_MYSTERY: 'CHANGE_MYSTERY',
  changeMystery: payload => ({
    type: actions.CHANGE_MYSTERY,
    payload
  })
};

export default actions;
