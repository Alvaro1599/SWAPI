import { UserFavoriteFilm } from '../domain/entities/userFavoriteFilm'

export interface UserFavoriteFilmRepository {
  addFavoriteFilm(userFavoriteFilm: UserFavoriteFilm): Promise<void>
  removeFavoriteFilm(userFavoriteFilm: UserFavoriteFilm): Promise<void>
  isFavoriteFilm(userFavoriteFilm: UserFavoriteFilm): Promise<boolean>
}
