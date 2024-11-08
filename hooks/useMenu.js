import { useEffect, useState } from 'react';
import config from 'content/config/config.json';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

const useMenu = (bizId, poweredList = 1) => {
  const businessId = bizId || config?.businessId || '';
  const poweredId = config?.poweredId || '';

  if (!businessId) {
    return { menu: {}, isLoading: false };
  }

  const [clientFetchedMenu, setClientFetchedMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      try {
        const { menuInventoryData } = await fetchGoNationData({
          menuInventory: true,
          useJSONP: true,
          businessId: poweredId || businessId,
          menuPL: poweredList,
        });

        if (menuInventoryData) {
          setClientFetchedMenu(menuInventoryData);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, [businessId, poweredId, poweredList]);

  return {
    menu: clientFetchedMenu,
    isLoading,
  };
};

export default useMenu;
