import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext(null);

function currentPath() {
  return window.location.pathname || '/';
}

export function BrowserRouter({ children }) {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const handlePopState = () => setPath(currentPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo(
    () => ({
      path,
      navigate(to) {
        if (to === path) return;
        window.history.pushState({}, '', to);
        setPath(currentPath());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    }),
    [path]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const router = useContext(RouterContext);

  function handleClick(event) {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    router.navigate(to);
  }

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, className, children, ...props }) {
  const { path } = useContext(RouterContext);
  const isActive = path === to;
  const resolvedClassName =
    typeof className === 'function' ? className({ isActive }) : className || '';

  return (
    <Link to={to} className={resolvedClassName} {...props}>
      {children}
    </Link>
  );
}

export function Routes({ children }) {
  const { path } = useContext(RouterContext);
  const routes = Array.isArray(children) ? children : [children];
  const match = routes.find((route) => route.props.path === path) || routes[0];
  return match.props.element;
}

export function Route() {
  return null;
}
