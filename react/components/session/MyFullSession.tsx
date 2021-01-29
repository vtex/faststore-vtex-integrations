import React from 'react'
import { useFullSession } from 'vtex.session-client'

function MyComponent() {
  const { loading, data, error } = useFullSession()

  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  }

  console.log({ session: data?.session })

  return <>Session is ready</>
}

export default MyComponent
