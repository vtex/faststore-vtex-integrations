import React from 'react'
import { useLazyFullSession } from 'vtex.session-client'

function MyComponent() {
  const [getSession, session] = useLazyFullSession()

  console.log({ session })

  return <button onClick={() => getSession()}>Get session</button>
}

export default MyComponent
