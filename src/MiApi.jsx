import { useState } from 'react'
import Card from './components/Card'
import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, loading } = useGetData()

  const [search, setSearch] = useState('')
  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const searchResult = !search
    ? data
    : data.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <div className='container mt-3'>
      <nav className='d-flex justify-content-between align-items-center'>
        <h1> Personajes de Marvel</h1>
        <hr />
        <div>
          <input
            className='form-control'
            style={{ width: '18rem' }}
            type='text'
            placeholder='Buscar personaje'
            aria-label='search'
            value={search}
            onChange={handleSearch}
          />
        </div>
      </nav>
      <p className='text-end'>
        La búsqueda se hace con los nombres en inglés. Ejemplo: Captain America
      </p>
      {loading && (
        <div className='bg-info text-white text-center fs-3'>
          <span className='spinner-border spinner-border-sm mr-2'></span>
          🤪 Cargando...
        </div>
      )}
      <div className='row d-flex justify-content-between'>
        {searchResult.map(character => (
          <Card
            key={character.id}
            {...character}
          />
        ))}
      </div>
    </div>
  )
}
export default MiApi
