import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  
  const isAdminAuthenticated = localStorage.getItem('admin');

  if (isAdminAuthenticated) {
    return true; // Allow access to the route
  } else {
    // Redirect to the login page or handle unauthorized access
    console.log('Unauthorized access to admin-auth route');
    // You can redirect or handle unauthorized access as per your requirement
    return false;
  }
};
