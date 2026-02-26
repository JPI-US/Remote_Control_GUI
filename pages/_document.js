import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Minimal Pages Router document. Required so that when Next.js prerenders
 * the default 404 / _error pages (Pages Router fallback), it has a valid
 * _document that defines Html. Without this, the build fails with:
 * "<Html> should not be imported outside of pages/_document".
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
