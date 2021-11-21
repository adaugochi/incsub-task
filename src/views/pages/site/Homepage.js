import React, { useState } from 'react'
import InputField from "../../components/forms/InputField";
import {NavLink} from "react-router-dom";
import validator from 'validator'


const Homepage = () => {
    const [input, setValidity] = useState( {email: '', name: '', password: '', type: ''});
    const enabledBtn = () => {
        return !!(input.email && input.name && input.password && input.type);
    };

    const validateForm = (e) => {
        let value = e.target.value;
        let identifier = e.target.name;

        if (identifier === 'email') {
            setValidity({email: !!validator.isEmail(value), name: input?.name, password: input?.password, type: input?.type})
        }

        if (identifier === 'name') {
            const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
            // if validation passes return true
            setValidity({name: !!pattern.test(value), email: input?.email, password: input?.password, type: input?.type})
        }

        if (identifier === 'type') {
            setValidity({type: !validator.isEmpty(value), name: input?.name, email: input?.email, password: input?.password})
        }

        if (identifier === 'password') {
            setValidity({password: !!validator.isLength(value, {min: 8}), email: input?.email, name: input?.name, type: input?.type})
        }
    }

    return (
        <>
            <section className='content__wrapper'>
                <div className='content__col-7'>
                    <div className='content_steps'>
                        Step 1 of 3
                        <span className="dot active"/>
                        <span className="dot"/>
                        <span className="dot"/>
                    </div>
                    <div className='content__container'>
                        <h1 className='content__white-body-header fs-header'>
                            Let’s set up your account
                        </h1>
                        <p className='content__white-body-text'>
                            Already have an account? <span className='text-primary fw-bold'>Sign in</span>
                        </p>
                        <form className='form-wrapper'>
                            <InputField
                                type='text'
                                placeholder='Your name'
                                identifier='name'
                                handleChange={(e) => validateForm(e)}
                                handleInput={(e) => validateForm(e)}
                                error={input.name === '' ? false : !input.name}
                                errorText='Please enter your full name'
                            />
                            <InputField
                                type='text'
                                placeholder='Email address'
                                identifier='email'
                                handleChange={(e) => validateForm(e)}
                                handleInput={(e) => validateForm(e)}
                                error={input.email === '' ? false : !input.email}
                                errorText='Please enter a valid email address'
                            />

                            <div className='form-input-wrapper'>
                                <select
                                    style={ (input.type === false) ? {borderColor: 'red'} : {} }
                                    className="form-input"
                                    name='type'
                                    onChange={(e) => validateForm(e)}
                                >
                                    <option value=''>I would describe my user type as</option>
                                    <option value='developer'>Developer</option>
                                </select>
                                <div className='mt-1'>
                                    <small className='form-hint text-danger'>
                                        {input.type === false ? 'Please describe your user type': ''}
                                    </small>
                                </div>
                            </div>

                            <InputField
                                type='password'
                                placeholder='Password'
                                identifier='password'
                                extraClass='mb-0 form-password'
                                handleChange={(e) => validateForm(e)}
                                handleInput={(e) => validateForm(e)}
                                error={input.password === '' ? false : !input.password}
                                errorText='Please enter a minimum of 8 characters'
                            />
                            <div className='mt-1'>
                                <small className='form-hint'>Minimum 8 character</small>
                            </div>

                            <div className='form-btn-wrap'>
                                <button type='submit'
                                        className='btn btn-primary'
                                        disabled={!enabledBtn()}>
                                    Next
                                </button>
                            </div>

                            <p className='form-footer'>
                                By clicking the “Next” button, you agree to creating a free account, and to
                                <NavLink to='/terms-of-service' className='text-primary'> Terms of Service</NavLink> and
                                <NavLink to='/privacy-policy' className='text-primary'> Privacy Policy</NavLink>.
                            </p>
                        </form>
                    </div>
                </div>
                <div className='content__col-5 bg-primary'>
                    <div className='content__color-body text-white'>
                        <h1 className='content__color-body-header fs-header'>Dummy Heading</h1>
                        <p className='content__color-body-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage