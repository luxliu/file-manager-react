This test uses [styled-component](https://styled-components.com/) to do a sort of **_css-in-js_** style to handle styling, with at least two advantages:

1. Props can be used with some logic in the css code;
2. No more class naming issues (usually we can use css module or BEM to do this);

Additionally, I used [react-intl-universal](https://github.com/alibaba/react-intl-universal) to handle i18n, you can go to `App.js` file and modify current locale by changing `currentLocale` (`en-US` or `zh-CN`) in the following code:

```js
intl
  .init({
    currentLocale: 'en-US', // TODO: determine locale here
    locales,
  })
  .then(() => {
    // After loading CLDR locale data, start to render
    setInitDone(true);
  });
```

I just created one translation object for the **FILES** title, you can find it in `/assets/i18n/en-US.json` or `/assets/i18n/zh-CN.json` to find them.
