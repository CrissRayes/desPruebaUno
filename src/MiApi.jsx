import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, isLoading } = useGetData()

  return (
    <div>
      <h1> Mi Api</h1>

      {isLoading && <p>Cargando...</p>}
      <div>
        {data.map(character => (
          <div key={character.id}>
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MiApi
