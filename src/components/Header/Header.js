import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from "react-intl";
import { LOCALES } from "./../../i18n/locales";
import messages from "./../../i18n/message/index";

import styles from "./styles.module.css";

const Header = ({ children }) => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={styles.wrapper}>
        <nav>
          <Link to={"/zebra"}>
            <FormattedMessage id={"name_zebra"} />
          </Link>
          <Link to={"/giraffe"}>
            <FormattedMessage id={"name_giraffe"} />
          </Link>
          <Link to={"/lion"}>
            <FormattedMessage id={"name_lion"} />
          </Link>
          <Link to={"/leopard"}>
            <FormattedMessage id={"name_leopard"} />
          </Link>
        </nav>
        <div>{children}</div>
      </div>
      <div className={styles.button}>
          <button onClick={() => setLocale(LOCALES.ENGLISH)}>ENGLISH</button>
          <button onClick={() => setLocale(LOCALES.SWEDISH)}>SWEDISH</button>
          <button onClick={() => setLocale(LOCALES.RUSSIAN)}>RUSSIAN</button>
        </div>
    </IntlProvider>
  );
};

export default Header;
