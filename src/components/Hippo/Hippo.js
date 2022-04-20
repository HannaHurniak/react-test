import { FormattedMessage, useIntl } from "react-intl";

import hippo from './../../assets/hippo.jpg';

const Hippo = () => {
  const intl = useIntl();

  return (
    <div>
        <h2 data-testid="name"><FormattedMessage id={'text_hippo'} values={{  }}/></h2>
        <img src={hippo} alt={hippo} />
        <h3>{intl.formatMessage({id: 'name_hippo'})}</h3>
    </div>
  );
};

export default Hippo;
