import axios from 'axios'
import PaginatedResponse from './types/paginatedResponse'
import SingleResponse from './types/singleResponse'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export const findAll = async (page: number) => {
  const limit = 10
  const offset = (page * limit) - limit

  return await api.get<PaginatedResponse>('pokemon', {
    params: {
      limit,
      offset
    }
  })
}

export const findOne = async (name: string) => {
  return await api.get<SingleResponse>(`pokemon/${name}`)
}
