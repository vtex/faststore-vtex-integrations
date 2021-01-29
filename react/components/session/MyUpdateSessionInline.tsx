import React from 'react'
import { useUpdateSessionInline } from 'vtex.session-client'

function MyComponent() {
  const [updateSession, updatedSession] = useUpdateSessionInline()

  console.log({ updatedSession })

  return (
    <button
      onClick={() =>
        updateSession({
          variables: {
            fields: { foo: 'bar', baz: 123 },
            items: ['store.channel', 'store.countryCode'],
          },
        })
      }
    >
      Update session
    </button>
  )
}

export default MyComponent
