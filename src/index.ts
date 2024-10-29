import { HttpAdapter } from './http.adapter'
import { Films } from './getFilms.interface'

export const getFilms = async () => {
  const response = await HttpAdapter.get<Films>(
    'https://swapi.py4e.com/api/films',
  )
  return response.data
}
