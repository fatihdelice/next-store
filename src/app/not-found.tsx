"use client";

import { useProperties } from '@/hooks/useProperties';
const NotFound = () => {
  const { t } = useProperties();
    return (
      <div>
        <h1>{t('global.notFound.title')}</h1>
        <p>{t('global.notFound.description')}</p>
      </div>
    );
  };
  
  export default NotFound;
  