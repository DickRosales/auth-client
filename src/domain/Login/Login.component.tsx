import React, { FunctionComponent, Fragment, useState, FormEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LoginRequest } from '../../services/Api'
import { authenticate } from '../../services/Auth'
import Checkbox from '../../components/Checkbox'

let LoginPage: FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ checked, setChecked ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>('');

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    
    try {
      event.preventDefault();
      let { data } = await LoginRequest({ email, password });
      let { from }: any = location.state || { from: { pathname: "/" } };
      authenticate(data.token, () => { history.replace(from) });
    } catch (err) {
      setError('Error: 434 - Oops, Try again later')
    }
  }

  return (
    <Fragment>
      <AppLogin>
        <LoginWrapper>
          <LoginForm onSubmit={handleSubmit}>
            <LoginLogo>mix<span>Labs</span></LoginLogo>
            <LoginTitle>Discover how are other services can aid you hit a broader audience</LoginTitle>
            <LoginMessage>Welcome Back, Please login to your account</LoginMessage>
            
            {error && <LoginMessage>{error}</LoginMessage>}

            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type='text' placeholder='john.doe@gmail.com' value={email} onChange={(event) => setEmail(event.target.value)} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormInput type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
            </FormGroup>

            <PasswordGroup>
              <div onClick={() => setChecked(!checked)}>
                <RememberPassword onChange={() => {}} checked={checked} />
                <FormLabel>Remember me</FormLabel>
              </div>

              <ForgotPassword>Forgot Password?</ForgotPassword>
            </PasswordGroup>
            <ButtonGroup>
              <FormButton type='submit'>Login</FormButton>
              <FormButton>Sign up</FormButton>
            </ButtonGroup>

          </LoginForm>
        </LoginWrapper>

        <LoginAd />

      </AppLogin>
    </Fragment>
  );
}

export default LoginPage;

const AppLogin = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100vh;
`;
const LoginWrapper = styled.div`
  width: 550px;
  min-width: 33%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutral['900']};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
`;
const LoginForm = styled.form`
  width: 350px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;
const LoginLogo = styled.span`
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 18.5vh;

  span {
    /* color: ${({ theme }) => theme.colors.primary['600']}; */
  }
`;
const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 15px;
`;
const LoginMessage = styled.p`
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  margin-bottom: 40px;
`;
const FormGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-width: 2px 2px 0 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutral['400']};
  
  &:nth-child(2) {
    border-width: 2px 2px 2px 2px;
  }
`;
const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  user-select: none;
  padding: 5px 0 0 10px;
`;
const FormInput = styled.input`
  font-size: 16px;
  background-color: transparent;
  border: 0;
  padding: 10px 15px;

  &:focus,
  &:active {
    border: 0;
    outline: 0;
  }
`;
const PasswordGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 30px;
  padding: 0 2px;
`;
const RememberPassword = styled(Checkbox)`
  margin-right: 4px;
`;
const ForgotPassword = styled.a`
  font-size: 14px;
  font-weight: 400;
  user-select: none;
`;
const ButtonGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
`;
const FormButton = styled.button`
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  margin-right: 15px;
  user-select: none;
  border: 1px solid #E8E7EC;
  padding: 0 2px;
  outline: 0;
  /* border-radius: 3px; */

  &:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    /* background-color: ${({ theme }) => theme.colors.primary['600']};
    border: 1px solid ${({ theme }) => theme.colors.primary['600']}; */
  }
`;
const LoginAd = styled.div`
  flex-grow: 2;
`;

 