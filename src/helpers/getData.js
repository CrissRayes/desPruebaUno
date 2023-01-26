const getData = async () => {
  const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9b47a875a6bc074de5b57f236d551413&hash=e7637815b05b0eb7de0568b7ff3e924f'
  const response = await fetch( url )
  const data = await response.json()
  console.log( data )
}

export default getData