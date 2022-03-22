import { IMovie } from '../movie/types'

export interface IDirector {
  name: string
  age: number
  movies: IMovie[]
}
