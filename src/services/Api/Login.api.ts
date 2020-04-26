import Api from './Api';

// Should handle errors here
const LoginRequest = async ({ email, password }: any): Promise<any> => {
  return await Api.post('/auth/in', { email, password });

    
  // } catch (err) {
  //   console.log(err);
  // }
};

export default LoginRequest;
