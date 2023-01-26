import Card from './components/Card'
import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, loading } = useGetData()

  return (
    <div className='container'>
      <h1> Mi Api</h1>
      {loading && <p>Loading...</p>}
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
