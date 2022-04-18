import { FormattedMessage, useIntl } from 'react-intl';

import giraffe from "./../../assets/giraffe.jpg";

const Giraffe = () => {
  const intl = useIntl();

  return (
    <div>
        <h2><FormattedMessage id={'text_giraffe'} values={{  }}/></h2>
        <img src={giraffe} />
        <h3>{intl.formatMessage({id: 'name_giraffe'})}</h3>
    </div>
  );
};

export default Giraffe;