import { useStaticQuery, graphql } from 'gatsby';

// Small helper hook to access site metadata for Head implementations.
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
