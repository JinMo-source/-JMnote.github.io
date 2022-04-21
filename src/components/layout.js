import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
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
          {/* {title} */}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, JM's Note
        {` `}
      </footer>
    </div>
  )
}

export default Layout
