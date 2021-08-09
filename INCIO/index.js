const BUY_CAKE = 'BUY_CAKE'

function buyBake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

// (prevousState, action) => newState

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state, //se copian todos los objetos pero solo se actualiza numOfCakes
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}