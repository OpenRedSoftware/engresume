import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      {url ? <meta property="og:url" content={url} /> : <></>}
    </Helmet>
  );
};

export default SEO;
