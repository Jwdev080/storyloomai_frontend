import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/process/view';

// ----------------------------------------------------------------------

export default function ProcessPage() {
  return (
    <>
      <Helmet>
        <title> Story Loom AI </title>
      </Helmet>

      <AppView />
    </>
  );
}
