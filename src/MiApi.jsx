import useGetData from './hooks/useGetData'

const MiApi = () => {
  const { data, loading } = useGetData()

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h1> Mi Api</h1>
      <div>
        {data.map(character => (
          <div key={character.id}>
            <p>{character.name}</p>
            <img
              src={character.src}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default MiApi
