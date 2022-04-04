import { IStateActor, IActor } from './types'

export default {
  setCurrentActors(state: IStateActor, payload: IActor[]) {
    state.currentActors = payload
  },
}
