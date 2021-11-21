import PropTypes from 'prop-types'

const InputField = ({
                    identifier,
                    extraClass,
                    value,
                    handleChange,
                    handleInput,
                    type,
                    error,
                    errorText,
                    placeholder}) => {
    return (
        <div className='form-input-wrapper'>
            <input name={ identifier } type={ type } className={ `form-input ${ extraClass || '' }` }
                   value={ value } onChange={ handleChange } onInput={ handleInput } placeholder={ placeholder }
                   style={ (error) ? {borderColor: 'red'} : {} }
            />
            <span className={ `form-input-placeholder ${ error ? 'text-danger': '' }` }>{ placeholder }</span>
            <div className='mt-1'>
                <small className='form-hint text-danger'>{ error ? errorText : ''}</small>
            </div>
        </div>
    )
}

InputField.propTypes = {
    identifier: PropTypes.string,
    type: PropTypes.string,
    extraClass: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleInput: PropTypes.func,
    placeholder: PropTypes.string,
    errorText: PropTypes.string,
    error: PropTypes.bool
}

export default InputField