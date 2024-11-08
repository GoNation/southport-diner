import { useEffect, useState } from 'react';
import config from 'content/config/config.json';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

const useShout = bizId => {
  const businessId = bizId || config?.businessId || '';
  const poweredId = config?.poweredId || '';

  if (!businessId) {
    return { shout: {}, isLoading: false };
  }

  const [clientFetchedShout, setClientFetchedShout] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShout = async () => {
      setIsLoading(true);
      try {
        const { shoutData } = await fetchGoNationData({
          shout: true,
          useJSONP: true,
          businessId: poweredId || businessId,
          poweredId: poweredId,
        });

        if (shoutData) {
          setClientFetchedShout(shoutData);
        }
      } catch (error) {
        console.error('Error fetching shout:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShout();
  }, [poweredId]);

  return {
    shout: clientFetchedShout,
    isLoading,
  };
};

export default useShout;
