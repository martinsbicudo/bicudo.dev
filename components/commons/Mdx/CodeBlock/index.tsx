import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { CodeBlockProps } from './interface'

const CodeBlock = ({ className, children }: CodeBlockProps) => {
  const language = className ? className.replace(/language-/, '') : 'javascript'

  return (
    <SyntaxHighlighter language={language} style={gradientDark} showLineNumbers>
      {children.trim()}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
