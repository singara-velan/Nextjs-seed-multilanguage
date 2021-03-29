import useSWR from 'swr'

import fetcher from "../utils/fetcher";

const useLocale = (lang, initialValue = null) => {
  const { data, error } = useSWR(`/locale/${lang}.json`, fetcher, { initialData: initialValue });
  return {
    content: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useLocale;
