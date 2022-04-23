import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          path
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <h1 className="main-heading">
      <Link to="/">
        <StaticImage
          className="logo"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/logo_Black.png"
          width={300}
          height={60}
          quality={95}
          alt="Profile picture"
        />
      </Link>
    </h1>
  )

  return (
    <div>
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, JM's Note
          {` `}
        </footer>
      </div>
    </div>
  )
}

export default Layout
