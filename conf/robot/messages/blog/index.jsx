import Link from 'next/link';

import * as posts from '@Conf/posts';

import { StyledPostsList, StyledPostsPost } from './styled';

export default () => ({
  message: (() => {
    const postsEntries = Object.entries(posts);
    const postsLength = postsEntries.length;

    return (
      <div>
        Atualmente{postsLength > 3 ? ' ' : ' só '}
        {postsLength}{' '}
        {postsLength > 1 ? 'posts foram publicados' : 'post foi publicado'},
        {postsLength > 3 ? ' segue alguns abaixo:' : ' segue:'}
        <StyledPostsList>
          {postsEntries.map(([name, { meta }]) => (
            <Link key={name} href="/blog/[pid]" as={`/blog/${name}`}>
              <StyledPostsPost>{meta.title}</StyledPostsPost>
            </Link>
          ))}
        </StyledPostsList>
      </div>
    );
  })(),
  choices: [
    {
      message: 'to zuandooo',
      answer: {
        message: 'ahhhh de boa então',
      },
    },
    {
      message: 'sai fora',
      answer: {
        message: 'Ok',
      },
    },
  ],
});
