import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          type='text/javascript'
          src='https://cdn.weglot.com/weglot.min.js'
        ></script>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `Weglot.initialize({
        api_key: 'wg_784c9e31bbb1808e3a69b6e4e65649fa5'
    });`
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
