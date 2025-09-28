require('dotenv').config();

const googleGtagId = process.env.GOOGLE_GTAG_ID || '';

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://calebcross.github.io`,
    // Your Name
    name: 'Caleb Cross',
    // Main Site Title
    title: `Caleb Cross | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Frontend Focused Fullstack Developer`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/calebcross`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/calebacross/`,
    // Content of the About Me section
    about: `Full Stack Software Engineer with 4+ years of experience building and optimizing marketing and e-commerce websites with React, Next.js, and Contentful. Skilled in Core Web Vitals optimization, SEO enhancements, accessibility (WCAG 2.1), and scalable component design. Partnered closely with marketing, growth, and design teams to deliver high-converting, high-performing websites. Recently launched a Next.js + Shopify marketing site, drove CRO experiments and A/B testing with experimentation tools, and reduced accessibility violations by 97%. Experienced with analytics tagging (Google Tag Manager), QA testing, and rapid deployments with Vercel. Customer-facing engineer with strong communication and documentation skills.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'UpriseArt',
        description:
          'Rebuilt UpriseArt’s marketing site with Next.js, Contentful, and Shopify, creating a high-performing, SEO-optimized, and accessible platform. Partnered with marketing and design teams to implement scalable components and CRO experiments, driving growth for both the brand and its artists.',
        link: 'https://www.upriseart.com',
      },
      {
        name: 'ForaTravel',
        description:
          'ForATravel.com, a marketing site developed with Next.js, Tailwind CSS, and Contentful. Designed reusable components and scalable content models to empower the marketing team to launch new campaigns quickly. Focused on performance, accessibility, and Core Web Vitals, ensuring a fast, engaging experience that supported brand growth.',
        link: 'https://www.foratravel.com',
      },
      {
        name: 'North Park Transportation',
        description:
          'Marketing and Customer Portal site built for 75 year old trucking company based in Denver, Colorado. Also built company first API for tracking shipments and building shipment agreements/contracts',
        link: 'https://www.nopk.com',
      },
      {
        name: 'Brightline Health',
        description:
          'Marketing site built for Healtcare Startup built using React with Next.js and Strapi CMS and API based career site using Greenhouse API',
        link: 'https://www.hellobrightline.com',
      },
      {
        name: 'Breastcancer.org',
        description:
          'Marketing site built for Non-profit built using React and TailwindCSS',
        link: 'https://www.breastcancer.org',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Shiftlab',
        description: 'Full-Stack Developer, July 2020 - Present',
        link: 'https://shiftlab.co',
      },
      {
        name: 'WeWork',
        description: 'Senior Technology Lead, January 2018 - May 2020',
        link: '',
      },
      {
        name: 'Amazon',
        description: 'IT Support Engineer, September 2015 - March 2017',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), TypeScript, React, Next.js (Page Router & App Router), Node.js, Express.js, GraphQL, Tailwind CSS, Shopify',
      },
      {
        name: 'Databases & Data',
        description: 'PostgreSQL, Prisma ORM, MySQL, MongoDB',
      },
      {
        name: 'CMS & Marketing Tech',
        description:
          'Contentful (Headless CMS + Content Modeling), Google Tag Manager (GTM), Conversion Rate Optimization (CRO), A/B Testing & Experimentation Tools, SEO Enhancements',
      },
      {
        name: 'Tools & Workflow',
        description:
          'Vercel (CI/CD & Edge Deployment), Amazon Web Services (AWS), Docker, GitHub Actions, QA / Browser & Device Testing, Accessibility (WCAG 2.1), Figma, Agile / Scrum, Storybook',
      },
    ],
  },
  plugins: [
    // react-helmet removed: using Gatsby Head API instead
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              })),
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  edges {
                    node {
                      excerpt
                      fields { slug }
                      frontmatter { title date description }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Devfolio RSS Feed',
          },
        ],
      },
    },
    // Conditionally include Google gtag plugin if GOOGLE_GTAG_ID is provided
    ...(googleGtagId
      ? [
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [googleGtagId],
              gtagConfig: {
                anonymize_ip: true,
                send_page_view: true,
              },
              pluginConfig: {
                head: true,
              },
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

//
