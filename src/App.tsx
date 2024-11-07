import React from 'react';
import { Outlet } from 'react-router-dom';
// @ts-ignore
const SupersetAdminPanel = React.lazy(() => import('superset-management-app/SupersetAdminPanel'));

function App() {

  return (
    <div className=''>
      <Outlet />
    </div>
  )
}

export default App
