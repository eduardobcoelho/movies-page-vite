import helper from '../helper'
import { ActionContext } from 'vuex'
import { IMovieState } from './types'

export default {
  getMovies({ commit }: ActionContext<IMovieState, any>) {
    commit('setMovies', helper.movies)
  },
}
