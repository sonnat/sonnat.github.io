const setKeywordsMeta = (keywords: string[]): JSX.Element => (
  <meta name="keywords" content={keywords.join(", ")} />
);

export default setKeywordsMeta;
