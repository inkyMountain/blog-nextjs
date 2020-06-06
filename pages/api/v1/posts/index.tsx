import {NextApiHandler} from 'next';

const TestApi: NextApiHandler = async (req, res) => {
  res.write('test');
  res.end();
};

export default TestApi;
