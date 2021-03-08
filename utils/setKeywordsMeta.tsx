export default function setKeywordsMeta(keywords: string[]) {
  return <meta name="keywords" content={keywords.join(", ")} />;
}
