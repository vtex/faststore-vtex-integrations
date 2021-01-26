import React from 'react'
import { useCustomClasses } from 'vtex.css-handles'
import {
  Newsletter as StoreNewsletter,
  FormEmailInput,
  FormSubmit,
} from 'vtex.store-newsletter'

import NewsletterSubscriptionSuccess from './components/NewsletterSubscriptionSuccess'
import styles from './Newsletter.module.css'

function Newsletter() {
  const formSubmitClasses = useCustomClasses(() => ({
    formSubmitContainer: {
      name: styles.formSubmitContainer,
      applyModifiers: true,
    },
  }))

  const formEmailInputSubmitClasses = useCustomClasses(() => ({
    emailInputContainer: {
      name: styles.emailInputContainer,
      applyModifiers: true,
    },
  }))

  const newsletterFormClasses = useCustomClasses(() => ({
    newsletterForm: { name: styles.newsletterForm, applyModifiers: true },
  }))

  return (
    <section className="bg-emphasis flex justify-center">
      <div
        className={`flex flex-column flex-row-ns justify-between w-100 ${styles.newsletterSectionContent}`}
      >
        <p className={`c-on-base--inverted tc fw5 ${styles['newsletter-cta']}`}>
          Get news and special offers!
        </p>
        <StoreNewsletter
          classes={newsletterFormClasses}
          SuccessState={NewsletterSubscriptionSuccess}
        >
          <FormEmailInput
            placeholderText="Email address"
            classes={formEmailInputSubmitClasses}
            errorMessage="This address is not valid, please verify"
          />
          <FormSubmit submitButtonLabel="Submit" classes={formSubmitClasses} />
        </StoreNewsletter>
      </div>
    </section>
  )
}

Newsletter.schema = {
  title: 'Newsletter',
}

export default Newsletter
