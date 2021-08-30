export default function setKeywordsMeta(keywords: string[]): JSX.Element {
  return <meta name="keywords" content={keywords.join(", ")} />;
}
