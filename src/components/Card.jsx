const Card = ({ id, name, src, description }) => {
  return (
    <div
      className='card'
      style={{ width: '18rem' }}
    >
      <img
        className='card-img-top'
        src={src}
        alt={name}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          {description || 'Descripción no disponible'}
        </p>
      </div>
    </div>
  )
}

export default Card
