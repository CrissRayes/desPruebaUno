import Card from './components/Card'
import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, loading } = useGetData()

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h1> Mi Api</h1>
      {data.map(character => (
        <Card
          key={character.id}
          {...character}
        />
      ))}
    </div>
  )
}
export default MiApi
