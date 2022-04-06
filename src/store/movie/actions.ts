import helper from '../helper'
import { ActionContext } from 'vuex'
import { IMovieState } from './types'

export default {
  getMovies({ commit }: ActionContext<IMovieState, any>) {
    try {
      commit('setMovies', helper.movies)
      return Promise.resolve(helper.movies)
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
