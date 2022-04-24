import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  console.log(posts)
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div>
        <h1>INTRODUCE</h1>
        <ol style={{ listStyle: `none` }} className="introduce">
          <li>
            <p style={{ lineHeight: "3rem" }}>
              안녕하세요, 발전하는 프론트 엔드 개발자 박진모입니다.
              <br />
              해당 사이트는 개발 공부를 하면서 정리하는 공간을 위해
              만들었습니다. 혹시 저에게 관심이 있으시거나 궁금한 점, 정리한
              내용중 틀린 내용이 있으면 옆의 연락처를 통해 저에게 연락을 주세요.
              <br />
              감사합니다. 😄
              <br />
              <span style={{ color: "#4aa8d8" }}>
                #HTML #CSS #Javascript #Typescript #React
              </span>
            </p>
          </li>
          <li className="intro-tags">
            <article>
              <h6>경력</h6>
              <span>웹 퍼블리셔 1년</span>
            </article>
            <article>
              <h6>포트폴리오</h6>
              <span>웹 퍼블리셔 1년</span>
            </article>
            <article>
              <h6>전화번호</h6>
              <span>010-2477-1240</span>
            </article>
            <article>
              <h6>이메일</h6>
              <span>qkrwslah12342@gmail.com</span>
            </article>
          </li>
        </ol>
        <h1>Front-End Stack</h1>
        <ol className="front-stack">
          <li>
            <StaticImage
              className="stackImg"
              src="../images/HTMLLOGO.png"
              formats={["auto", "webp", "avif"]}
              quality={95}
              alt="Stack Logo"
            />
          </li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ol>
      </div>
      <h1 className="post-title">Note</h1>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
