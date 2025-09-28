import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import useSiteMetadata from '../components/seo';

const classes = {
  title: 'text-lg font-bold',
  link: 'underline',
};

const NotFoundPage = () => (
  <Layout>
    {/* Head exported below for Gatsby Head API */}
    <h1 className={classes.title}>404: Not Found</h1>
    <p>
      You just hit a route that doesn't exist.{' '}
      <Link className={classes.link} to="/">
        Return to safety
      </Link>
      .
    </p>
  </Layout>
);

export default NotFoundPage;

export const Head = () => {
  const site = useSiteMetadata();
  const defaultTitle = site?.title || '';
  const title = `Not found${defaultTitle ? ` | ${defaultTitle}` : ''}`;
  const description = site?.description || '';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};
