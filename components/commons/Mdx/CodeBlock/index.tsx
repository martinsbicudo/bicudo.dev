import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { CodeBlockProps } from './interface'

const CodeBlock = ({ className, children }: CodeBlockProps) => {
  if (!className) {
    return <code>{children}</code>
  }

  const language = className.replace(/language-/, '')

  return (
    <SyntaxHighlighter language={language} style={gradientDark} showLineNumbers>
      {children.trim()}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
