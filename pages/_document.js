// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from 'content/config/config.json';

const { fonts } = config;

class MyDocument extends Document {
  renderCustomFonts() {
    const { customFontName } = fonts;

    if (!customFontName || customFontName.length === 0) return;

    return customFontName.map((font, index) => {
      if (!font || !font.fontName || !font.fontType) return;

      const fontFormat = font.fontType === 'otf' ? 'opentype' : 'truetype';

      return (
        <style key={`${font.fontName}-${index}`}>
          {`@font-face {
              font-family: '${font.fontName}';
              src: url('/fonts/${font.fontName}.${font.fontType}') format('${fontFormat}');
            }

            .carousel .slider-wrapper.axis-horizontal .slider .slide {
              z-index: 99999!important;
            }
          `}
        </style>
      );
    });
  }

  render() {
    const { googleFontsUrl } = fonts;

    return (
      <Html>
        <Head>
          {googleFontsUrl && <link href={googleFontsUrl} rel="stylesheet" />}
          {this.renderCustomFonts()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
