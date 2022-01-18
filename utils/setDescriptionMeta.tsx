const setDescriptionMeta = (description: string): JSX.Element => (
  <>
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
  </>
);

export default setDescriptionMeta;
