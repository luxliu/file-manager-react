import React, { useState, useEffect } from 'react';

import 'antd/dist/antd.css';
import { FileManager } from './pages/fileManager';

import intl from 'react-intl-universal';
// common locale data
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');

// app locale data
const locales = {
  'en-US': require('./assets/i18n/en-US.json'),
  'zh-CN': require('./assets/i18n/zh-CN.json'),
};

const App = () => {
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl
      .init({
        currentLocale: 'en-US', // TODO: determine locale here
        locales,
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        setInitDone(true);
      });
  }, []);
  return (
    initDone && (
      <div className="App">
        <FileManager />
      </div>
    )
  );
};

export default App;
