import { useMemo } from "react";
import { usePathname } from "next/navigation";


const useRoutes = () => {
 
  const pathname = usePathname();

  const routes = useMemo(() => [
    { 
      label: 'Principal',
      href: '/main',  
      active: pathname === '/main',
      special: false
    },
    { 
      label: 'Calendário', 
      href:'/calender',
      active: pathname === '/calender',
      special: false
    },
    { 
      label: 'Guias', 
      href:'/guides',
      active: pathname === '/guides',
      special: false
    },
    { 
      label: 'Pináculo', 
      href:'/pinnacle',
      active: pathname === '/pinnacle',
      special: false
    },
    { 
      label: 'Roleta', 
      href:'/wheel',
      active: pathname === '/wheel',
      special: true
    },
  ], [pathname]);

  return routes
};


export default useRoutes;