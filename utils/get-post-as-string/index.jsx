import { renderToString } from 'react-dom/server';

import stripHtml from 'string-strip-html';

export default (PostComponent, resume = false) => {
  const Component = <PostComponent />;
  const postHtmlString = renderToString(Component);
  const postString = stripHtml(postHtmlString);

  return resume ? `${postString.substr(0, 100)}...` : postString;
};
