import React from 'react'
import { useRenderSession } from 'vtex.session-client'

function MyComponent() {
  const { loading, session, error } = useRenderSession()

  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  }

  console.log({ session })

  return <>Session is ready</>
}

export default MyComponent
