import { IDirectorState, IDirector } from './types'

export default {
  currentDirector: (state: IDirectorState): IDirector | null =>
    state.currentDirector,
}
