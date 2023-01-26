import Card from './components/Card'
import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, loading } = useGetData()

  return (
    <div className='container mt-3'>
      <h1> Personajes de Marvel</h1>
      {loading && (
        <div className='bg-info text-white text-center fs-3'>
          <span className='spinner-border spinner-border-sm mr-2'></span>
          🤪 Cargando...
        </div>
      )}
      <div className='row'>
        {data.map(character => (
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
