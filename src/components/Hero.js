import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import socialLinks from "../constants/social_links"
import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header>
      <div className="section-center hero-center">
        <article className="article-info">
          <div>
            <div className="underline"></div>
            <h1>iam ben </h1>
            <h4>freelance web and mobile UI/UX</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
