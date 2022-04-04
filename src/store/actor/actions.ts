import helper from '../helper'
import { ActionContext } from 'vuex'
import { IMovie } from '../movie/types'
import { IActor, IStateActor } from './types'

export default {
  getMovieActors(
    { commit }: ActionContext<IStateActor, any>,
    movieName: string
  ) {
    try {
      const actors: IActor[] = helper.movies.filter((item: IMovie) => {
        return item.name === movieName
      })[0].actors
      commit('setCurrentActors', actors)
      return Promise.resolve(actors)
    } catch (err) {
      return Promise.reject(err)
    }
  },
}
