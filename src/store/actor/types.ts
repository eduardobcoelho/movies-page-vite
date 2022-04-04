export interface IStateActor {
  currentActors: IActor[]
}

export interface IActor {
  name: string
  age: number
  photo?: URL
}
