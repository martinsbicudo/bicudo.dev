import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { CodeBlockProps } from './interface'
import * as S from './styles'

const CODE_STYLE = {
  display: 'block',
  overflowX: 'auto' as const,
  margin: 0,
  padding: '18px 20px',
  background: 'transparent',
  fontSize: '1.4rem',
  lineHeight: 1.7,
}

const LINE_NUMBER_STYLE = {
  minWidth: '2.5em',
  color: 'rgba(244, 244, 245, 0.22)',
}

const CodeBlock = ({ className, children }: CodeBlockProps) => {
  const isBlock = Boolean(className) || children.includes('\n')

  if (!isBlock) {
    return <S.InlineCode>{children}</S.InlineCode>
  }

  const language = className ? className.replace(/language-/, '') : 'text'

  return (
    <S.CodeBlock>
      {className && <S.CodeBlockLanguage>{language}</S.CodeBlockLanguage>}
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={CODE_STYLE}
        lineNumberStyle={LINE_NUMBER_STYLE}
        showLineNumbers={Boolean(className)}
        PreTag="span"
      >
        {children.trim()}
      </SyntaxHighlighter>
    </S.CodeBlock>
  )
}

export default CodeBlock
