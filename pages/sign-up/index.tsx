import {NextPage} from 'next';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useCallback,
  useState
} from 'react';
import axios from 'axios';

const SignUp: NextPage = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: ''
  });

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      axios.post('/api/sign-up/v1', {
        ...formData
      })
        .then((res) => {
          console.log('res', typeof res, res);
        })
        .catch((error) => {
          console.log('error', error);
        });
      console.log('formData', formData);
    },
    [formData]
  );

  const onUsernameChange: ChangeEventHandler<HTMLInputElement> = event => {
    setFormData({
      ...formData,
      username: event.target.value
    });
  };
  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = event => {
    setFormData({
      ...formData,
      password: event.target.value
    });
  };

  const onPasswordConfirmationChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({
      ...formData,
      passwordConfirmation: event.target.value
    });
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={onSubmit}>
        <label>用户名
          <input type="text" className="username"
                 value={formData.username}
                 onChange={onUsernameChange}/>
        </label>

        <label>
          密码
          <input type="text" className="password"
                 value={formData.password}
                 onChange={onPasswordChange}/>
        </label>

        <label>密码确认
          <input type="text" className="password-confirmation"
                 value={formData.passwordConfirmation}
                 onChange={onPasswordConfirmationChange}/>
        </label>
        <input type="submit" value={'xxx'}/>
      </form>

      <style jsx>{`
        label {
          margin-right: 20px;
        }
        
        input {
          background-color: lightblue;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
