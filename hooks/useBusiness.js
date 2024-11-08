import { useEffect, useState } from 'react';
import config from 'content/config/config.json';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

const useBusiness = bizId => {
  const businessId = bizId || config?.businessId || '';

  if (!businessId) {
    return { business: {}, isLoading: false };
  }

  const [clientFetchedBusiness, setClientFetchedBusiness] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBusiness = async () => {
      setIsLoading(true);
      try {
        const { aboutData } = await fetchGoNationData({
          about: true,
          useJSONP: true,
          businessId,
        });

        if (aboutData) {
          setClientFetchedBusiness(aboutData);
        }
      } catch (error) {
        console.error('Error fetching business:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusiness();
  }, [businessId]);

  return {
    business: clientFetchedBusiness,
    isLoading,
  };
};

export default useBusiness;
