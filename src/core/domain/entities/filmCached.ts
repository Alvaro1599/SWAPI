import { Film } from './film'

export class FilmCached extends Film {
  cachedAt: Date

  constructor(id: number, title: string, director: string, cachedAt: Date) {
    super(id, title, director)
    this.cachedAt = cachedAt
  }
}
