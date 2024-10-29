export class UserFavoriteFilm {
  userId: string
  filmId: number

  constructor(userId: string, filmId: number) {
    this.userId = userId
    this.filmId = filmId
  }
}
