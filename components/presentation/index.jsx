import { useRouter } from 'next/router';

import { Aside, Page as PageContainer, Photo } from '@Container';

import Chat from './Chat';
import Post from './Post';

function Presentation() {
  const router = useRouter();

  function renderComponent() {
    const { title } = router.query;

    if (title) return <Post />;

    return <Chat />;
  }

  return (
    <PageContainer>
      <Photo />
      <Aside />
      {renderComponent()}
    </PageContainer>
  );
}

export default Presentation;
