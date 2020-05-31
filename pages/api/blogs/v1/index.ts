import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import {promisify} from 'util';
import marked from 'marked';

const readFile = promisify(fs.readFile);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  const blogName = JSON.parse(req.body).blogName;
  const content = await readFile(`markdown/${blogName}`).then(buffer => buffer.toString()).catch(() => '');
  const markedContent = marked(content);
  const body = {
    requestTime: Date.now(),
    blog: {
      title: '博客标题',
      content: markedContent
    }
  };
  res.end(JSON.stringify(body));
}
