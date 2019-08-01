import { createStore } from 'redux'

import Reducer from './reducers/todo.reducer'

const store = createStore(Reducer)

export default store