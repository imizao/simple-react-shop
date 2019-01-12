const defaultState ={
  inputValue: '',
  list: [],
  sale: false
}

export default (state = defaultState, action) => {
  if(action.type === 'change_sale'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.sale = action.sale
    return newState
  }

  if(action.type === 'switch_change_sale') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sale = action.sale
    return newState
  }

  return state;
}