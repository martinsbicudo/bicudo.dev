import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

import CONSTANTS from '~/constants'

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/images/favicon.ico" />
          <meta name="lang" content={this.props.locale} />
          <meta name="author" content={CONSTANTS.PERSON.NAME} />
          <meta property="og:site_name" content={CONSTANTS.PERSON.NAME} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@martinsbicudo" />
          <meta name="twitter:site" content="@martinsbicudo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
