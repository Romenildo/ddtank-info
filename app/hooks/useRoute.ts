import { useMemo } from "react";
import { useLocation } from "react-router-dom"

//cria um array na memoria ja com as informacoes das rotas
const useRoutes = () => {
  const pathname = useLocation().pathname
  const routes = useMemo(() => [
    { 
      label: 'Principal', 
      href: '/', 
      active: pathname === '/'
    },
    { 
      label: 'Calendário', 
      href: '/calender', 
      active: pathname === '/calender'
    },
  ], [pathname]);

  return routes;
};

export default useRoutes;