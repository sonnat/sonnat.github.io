const setCanonicalMeta = (canonical: string): JSX.Element => (
  <>
    <link rel="canonical" href={canonical} />
    <meta name="og:url" content={canonical} />
  </>
);

export default setCanonicalMeta;
