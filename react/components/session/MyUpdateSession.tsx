import React from 'react'
import { useUpdateSession } from 'vtex.session-client'

function MyComponent() {
  const updateSession = useUpdateSession()

  return (
    <button
      onClick={() =>
        updateSession({
          variables: {
            fields: { foo: 'bar', baz: 123 },
          },
        })
      }
    >
      Update session
    </button>
  )
}

export default MyComponent
