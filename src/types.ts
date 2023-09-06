export type TodoType = {
  id: number,
  title: string,
  completed: boolean,
  userId? : number
}

export enum Development {
  FrontEnd = 'Front-end',
  BackEnd = 'Back-end',
  DevOps = 'DevOps'
}
