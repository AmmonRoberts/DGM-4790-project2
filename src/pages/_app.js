import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import { Amplify, Auth } from 'aws-amplify'
import awsExports from "../aws-exports"
import { Authenticator } from '@aws-amplify/ui-react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(awsExports)
Amplify.configure(process.env.AWS_EXPORTS);

// const formFields = {
//   signUp: {
//     email: {
//       placeholder: 'Email',
//       order: 1
//     },
//     name: {
//       placeholder: 'First Name',
//       order: 2
//     },
//     family_name: {
//       placeholder: 'Last Name',
//       order: 3
//     },
//     password: {
//       order: 4
//     },
//     confirm_password: {
//       order: 5
//     }
//   },
// }

function MyApp({ Component, pageProps }) {
  return (<Authenticator variation="modal"
  //  formFields={formFields}
  >
    {({ signOut, user }) => (
      <>
        <Head>
          <title>Magic: The Gathering Deck Builder</title>
          <link rel="icon" href="/favicon.jpg" />
        </Head>
        <ResponsiveAppBar user={user} signOut={signOut} />
        <Component {...pageProps} />
      </>
    )}
  </Authenticator>)
}

export default MyApp
