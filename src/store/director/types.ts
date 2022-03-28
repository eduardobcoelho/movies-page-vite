export interface IDirectorState {
  currentDirector: IDirector | null
}

export interface IDirector {
  name: string
  age: number
  photo?: URL
}
