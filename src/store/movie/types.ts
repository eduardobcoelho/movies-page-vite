import { IActor } from '../actor/types'
import { IDirector } from '../director/types'

export interface IMovieState {
  movies: IMovie[]
}

export interface IMovie {
  name: string
  sinopse: string
  year: number
  imdb: number
  imdbLink: URL
  actors: IActor[]
  poster?: URL
  director: IDirector
}
