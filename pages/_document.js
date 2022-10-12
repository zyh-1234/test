import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // 数据预请求
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="format-detection" content="telephone=no"></meta>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
          <meta name="keywords" content="佛隆首饰，佛隆，首饰"></meta>
        </Head>
        <body id="global_body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
