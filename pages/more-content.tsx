import Link from 'next/link'

export default function () {
  return (
    <main>
      <h1>More content</h1>
      <p>
        This is some more content. This content is also pre-rendered, but note
        that there's a flash in the source layout.
      </p>

      <Link href={'/'}>Go back to the home page.</Link>
    </main>
  )
}
