import Head from 'next/head';

const PageHead = ({
  title = '',
  description = '',
  avatar = '',
  image,
  domain,
}) => {
  const metaURL = title => `${domain}/${slugifyLower(title)}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || avatar} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={metaURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || avatar} />
    </Head>
  );
};

export default PageHead;
