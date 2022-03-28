import { IDirectorState, IDirector } from './types'

export default {
  setCurrentDirector(state: IDirectorState, payload: IDirector) {
    state.currentDirector = payload
  },
}
