import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {

  const {user, isLoading} = useSelector((state)=> state.auth)

  if (isLoading) return <p>Checking authentication...</p>;

  if (user) return <Navigate to="/" replace />;

  return <Outlet/>
}

export default PublicRoutes