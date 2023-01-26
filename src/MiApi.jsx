import Card from './components/Card'
import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, loading } = useGetData()

  return (
    <div className='container'>
      <h1> Personajes de Marvel</h1>
      {loading && <p>🤪 Cargando...</p>}
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
