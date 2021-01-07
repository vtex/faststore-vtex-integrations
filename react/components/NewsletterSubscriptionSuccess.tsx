import React from 'react'

import styles from '../Newsletter.module.css'

interface Props {
  subscribedUserData?: {
    email: string
  }
}

function NewsletterSubscriptionSuccess({ subscribedUserData }: Props) {
  return (
    <p className={`${styles.subscriptionSuccess} tc c-on-base--inverted`}>
      <strong>{subscribedUserData?.email}</strong> <br className="dn-ns" />
      is subscribed to the newsletter
    </p>
  )
}

export default NewsletterSubscriptionSuccess
