import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

export default function Index({ markdownFile }) {
  // Create the Form
  const [homePage, homePageForm] = useMarkdownForm(markdownFile)

  // Register it with the CMS
  usePlugin(homePageForm)

  return (
    <>
      <h1>{homePage.title}</h1>
      <ReactMarkdown>{homePage.markdownBody}</ReactMarkdown>
    </>
  )
}

export async function getStaticProps() {
  const infoData = await import(`../../content/articles/info.md`)
  const data = matter(infoData.default)

  return {
    props: {
      markdownFile: {
        fileRelativePath: `content/info.md`,
        frontmatter: data.data,
        markdownBody: data.content,
      }
    },
  }
}