import connection from '../database/connection'
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from '@aws-sdk/lib-dynamodb'
import { databaseConfig } from '../../config/database'
import { UserFavoriteFilmRepository } from '../../core/repositories/user-favorite-film.repository'
import { UserFavoriteFilm } from '../../core/domain/entities/userFavoriteFilm'

export class UserFavoriteFilmImpl implements UserFavoriteFilmRepository {
  private readonly db: DynamoDBDocumentClient
  private readonly tableName: string

  constructor() {
    this.db = connection
    this.tableName = databaseConfig.tableName
  }

  private getPrimaryKeys(userId: string): string {
    return 'USER#' + userId
  }
  private getSecondaryKeys(filmId: string): string {
    return 'FILM#' + filmId
  }

  async addFavoriteFilm(userFilmData: UserFavoriteFilm): Promise<void> {
    const PK = this.getPrimaryKeys(userFilmData.userId)
    const SK = this.getSecondaryKeys(userFilmData.userId)
    const params = {
      TableName: this.tableName,
      Item: { ...userFilmData, PK, SK },
    }
    await this.db.send(new PutCommand(params))
  }

  async getFavoriteFilms(userId: string) {
    const PK = this.getPrimaryKeys(userId)
    const params = {
      TableName: this.tableName,
      Key: {
        PK,
      },
    }
    const response = await this.db.send(new GetCommand(params))
    console.log(response)
  }
}
