import React, { Suspense } from 'react';
import ShadowComponent from './ShadowComponent';

// @ts-ignore
const SupersetAdminPanel = React.lazy(() => import('superset-management-app/SupersetAdminPanel'));





function Superset() {
  return (
    <div className='w-full'>

      <Suspense fallback="Loading...">
        <ShadowComponent windowModuleCSS='css__superset-management-app__./SupersetAdminPanel'>
          <SupersetAdminPanel />
        </ShadowComponent>
      </Suspense>
    </div>
  );
}

export default Superset;
