import React from 'react'
import { useCustomClasses } from 'vtex.css-handles'
import {
  Newsletter as StoreNewsletter,
  FormEmailInput,
  FormSubmit,
} from 'vtex.store-newsletter'

import styles from './Newsletter.module.css'

function Newsletter() {
  const formSubmitClasses = useCustomClasses(() => ({
    formSubmitContainer: styles.formSubmitContainer,
  }))

  const formEmailInputSubmitClasses = useCustomClasses(() => ({
    emailInputContainer: styles.emailInputContainer,
  }))

  const newsletterFormClasses = useCustomClasses(() => ({
    newsletterForm: styles.newsletterForm,
  }))

  return (
    <div className="bg-emphasis flex flex-column flex-row-ns justify-between items-center ph5 ph6-ns pt3 pb6 pv6-ns">
      <p className={`c-on-base--inverted tc fw5 ${styles['newsletter-cta']}`}>
        Get news and special offers
      </p>
      <StoreNewsletter classes={newsletterFormClasses}>
        <FormEmailInput
          placeholderText="Email address"
          classes={formEmailInputSubmitClasses}
        />
        <FormSubmit submitButtonLabel="Submit" classes={formSubmitClasses} />
      </StoreNewsletter>
    </div>
  )
}

Newsletter.schema = {
  title: 'Newsletter',
}

export default Newsletter
