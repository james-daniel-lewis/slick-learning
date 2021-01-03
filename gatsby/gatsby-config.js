// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv'

dotenv.config({path:'.env'});

// console.log(process.env.SANITY_TOKEN)

export default {
  siteMetadata: {
    title:'Slick slices',
    siteUrl:'https://gatsy.pizza',
    description: 'yeah boi',
    twitter:'@yeahboi',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      //name of plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '7kzbr8a8',
        dataset: 'production',
        watchMode:'true',
        token:process.env.SANITY_TOKEN,
      }
    }
  ]
}