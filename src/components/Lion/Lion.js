import { FormattedMessage, useIntl } from 'react-intl';

import lion from "./../../assets/lion.webp";

const Lion = () => {
  const intl = useIntl();

  return (
    <>
        <h2><FormattedMessage id={'text_lion'} values={{  }}/></h2>
        <img src={lion} alt={lion} />
        <h3>{intl.formatMessage({id: 'name_lion'})}</h3>
    </>
  );
};

export default Lion;