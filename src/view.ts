import { Response } from 'express';

export default class View {
  constructor(private readonly res: Response) { }
  displayWithoutOffers(message: string): void {
    this.res.send({
      message
    })
  }
  displayOffers(menu: object): void {
    this.res.send(menu)
  }
  displayTimeHasExpired(message: string): void {
    this.res.send({
      message
    })
  }
}