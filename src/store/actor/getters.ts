import { IActor, IStateActor } from './types'

export default {
  currentActors: (state: IStateActor): IActor[] => state.currentActors,
}
