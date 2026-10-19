import { useState, useEffect } from 'react';
import { Home } from '../pages/Home.tsx';

/**
 * Lightweight route configuration.
 * Configured so that the root route '/' renders the Home page.
 */
export function AppRoutes() {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  switch (currentPath) {
    case '/':
    default:
      return <Home />;
  }
}

export default AppRoutes;
