import { IMovie } from '../movie/types'

export interface IActor {
  name: string
  age: number
  movies: IMovie[]
}
