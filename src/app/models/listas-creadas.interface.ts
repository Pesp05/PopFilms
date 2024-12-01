export interface ListasCreadasResponse {
  page: number
  results: ListaCreada[]
  total_pages: number
  total_results: number
}

export interface ListaCreada {
  description: string
  favorite_count: number
  id: number
  item_count: number
  iso_639_1: string
  list_type: string
  name: string
  poster_path: any
}

export interface DetalleListaCreada {
  created_by: string
  description: string
  favorite_count: number
  id: number
  iso_639_1: string
  item_count: number
  items: any[]
  name: string
  page: number
  poster_path: any
  total_pages: number
  total_results: number
}
