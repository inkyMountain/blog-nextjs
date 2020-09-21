import {NextApiHandler} from 'next';

const SignUp: NextApiHandler = (req, res) => {
  req.body
  res.json({
    success: true,
    data: {}
  });
};

export default SignUp;
