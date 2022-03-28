import helper from '../helper'
import { ActionContext } from 'vuex'
import { IDirectorState, IDirector } from './types'

export default {
  getDirectorByName(
    { commit }: ActionContext<IDirectorState, any>,
    payload: string
  ) {
    const director: IDirector = helper.directors.filter(
      (item: IDirector) =>
        item.name.replaceAll('', ' ') === payload.replaceAll('', ' ')
    )
    commit('setCurrentDirector', director)
  },
}
