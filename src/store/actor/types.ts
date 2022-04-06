export interface IStateActor {
  currentActors: IActor[]
}

export interface IActor {
  name: string
  age: number
  birthday: string
  photo: URL
}
