module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `calebcross.github.io`,
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
    about: `Self-driven and motivated Full Stack Software Engineer with 4 years of experience implementing pixel perfect UI/UX design systems
and crafting full stack web experiences using React with Next.js and Node.js with Prisma. Recently launched a E-commerce site built
using Next.js and Shopify and led an initiative to bring a website up to WCAG2 standard.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'UpriseArt',
        description:
          'Marketing site built with React, Next.js, TailwindCSS and GraphQL API from Contentful and shopify site for a art gallery based in NYC',
        link: 'https://www.upriseart.com',
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
          'JavaScript (ES6+), Typescript, GraphQL, Node.js, Shopify, Express.js, React, Next.js, TailwindCSS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum, Vercel, Storybook , Figma',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
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
