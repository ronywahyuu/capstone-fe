import PropTypes from 'prop-types'

const Input = ({placeholder}) => {
  return (
    <div>
      <input type="text" className='border rounded-lg' placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input