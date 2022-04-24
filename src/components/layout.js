import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let header

  const navigation = useStaticQuery(graphql`
    query Query {
      site {
        siteMetadata {
          title
          menuLink {
            name
            link
          }
        }
      }
    }
  `)
  const menu = navigation.site.siteMetadata.menuLink

  header = (
    <h1 className="main-heading">
      <Link to="/">
        <StaticImage
          className="logo"
          formats={["auto", "webp", "avif"]}
          src="../images/logo_Black.png"
          width={250}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <nav className="main-nav">
        <li key="item">
          <Link to="/">Home</Link>
        </li>
        {menu.map(el => {
          const item = el.name
          return (
            <li key="item">
              <Link key={item} to={el.link}>
                {item}
              </Link>
            </li>
          )
        })}
      </nav>
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
