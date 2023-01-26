const Card = ({ id, name, src, description }) => {
  return (
    <div
      className='card m-2 shadow-sm'
      style={{ width: '18rem' }}
    >
      <img
        className='card-img-top'
        src={src}
        alt={name}
        style={{ height: '18rem' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text texto-truncado'>
          {description || 'Descripción no disponible'}
        </p>
      </div>
    </div>
  )
}

export default Card
