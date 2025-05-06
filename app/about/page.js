import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
        <h1>This is about page.</h1>
        <Link href="/">Back</Link>
    </div>
  )
}

export default page