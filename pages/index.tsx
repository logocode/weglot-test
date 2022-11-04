import { NextPage } from 'next'
import Link from 'next/link'

const IndexPage: NextPage<{}> = () => {
  return (
    <main>
      <h1>Problem description</h1>
      <p>
        This is a demo of a problem with NextJS and WeGlot. The repro is as
        follows:
      </p>

      <ol>
        <li>Load the home page</li>
        <li>Switch the language to "French" in the bottom corner.</li>
        <li>Hard reload the page.</li>
        <li>
          Take note that the content is shown immediately in French. This is
          working as expected.
        </li>
        <li>Next, click the "More content" link.</li>
        <li>
          Take note that the content briefly shows in english before it is
          translated fully. This is not working as expected.
        </li>
      </ol>

      <p>
        TLDR: First page load works, navigation flashes source language prior to
        showing translated language.
      </p>

      <Link href={'/more-content'}>Check out the other content.</Link>
    </main>
  )
}

export default IndexPage
