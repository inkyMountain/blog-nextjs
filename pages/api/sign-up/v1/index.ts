import {NextApiHandler} from 'next';

const SignUp: NextApiHandler = (req, res) => {
  res.json({
    success: true,
    data: {}
  });
};

export default SignUp;
