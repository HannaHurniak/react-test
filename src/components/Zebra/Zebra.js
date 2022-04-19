import { FormattedMessage, useIntl } from 'react-intl';

import zebra from "./../../assets/zebra.jpeg";

const Zebra = () => {
  const intl = useIntl();
  
  return (
    <div>
        <h2><FormattedMessage id={'text_zebra'} values={{  }}/></h2>
        <img src={zebra} alt="zebra" />
        <h3>{intl.formatMessage({id: 'name_zebra'})}</h3>
    </div>
  );
};

export default Zebra;