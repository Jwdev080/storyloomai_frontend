import { Helmet } from 'react-helmet-async';

import { LandingView } from 'src/sections/landing';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Story | Loom AI </title>
      </Helmet>

      <LandingView />
    </>
  );
}
