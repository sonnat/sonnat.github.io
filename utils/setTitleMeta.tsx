const setTitleMeta = (title: string): JSX.Element => (
  <>
    <title>{title}</title>
    <meta name="og:title" content={title} />
  </>
);

export default setTitleMeta;
