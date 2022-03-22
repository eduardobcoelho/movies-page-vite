import { IMovieState, IMovie } from './types'

export default {
  setMovies(state: IMovieState, payload: IMovie[]) {
    state.movies = payload
  },
}
