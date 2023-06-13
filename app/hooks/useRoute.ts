import { useMemo } from "react";
import { usePathname } from "next/navigation";


const useRoutes = () => {
 
  const pathname = usePathname();

  const routes = useMemo(() => [
    { 
      label: 'Principal',
      href: '/main',  
      active: pathname === '/main'
    },
    { 
      label: 'Calendário', 
      href:'/calender',
      active: pathname === '/calender'
    },
    { 
      label: 'Guias', 
      href:'/guides',
      active: pathname === '/guides'
    },
  ], [pathname]);

  return routes
};


export default useRoutes;