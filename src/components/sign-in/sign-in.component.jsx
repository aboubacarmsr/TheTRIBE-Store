import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  //En cas de changement, recuperer la nouvelle valeur et mettre a jour le state correspondant dynamiquement
  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };

    return (
      <div className='sign-in'>
        <h2>Vous avez déjà un compte ?</h2>
        <span>Saisissez votre e-mail et mot de passe</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='Mot de passe'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Connexion </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Connexion avec Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
