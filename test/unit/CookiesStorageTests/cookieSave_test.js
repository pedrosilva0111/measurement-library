goog.module('measurementLibrary.storage.CookiesStorage.testing.cookieSave');
goog.setTestOnly();

const CookiesStorage = goog.require('measurementLibrary.storage.CookiesStorage');

describe('The save method for cookiesStorage', () => {
  const storage = new CookiesStorage({});

  const removeCookie = (key) => {
    const pastDate = 'Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie =
      `ml_${key}=;expires=${pastDate}`;
  };

  it('Saves cookies with string values', () => {
    storage.save('Hello', 'World');

    expect(document.cookie.includes('ml_Hello="World"')).toBe(true);

    removeCookie('Hello');
  });

  it('Saves cookies with object values', () => {
    storage.save('obj', {'hello': 'world'});

    const objString = '{"hello":"world"}';

    expect(document.cookie.includes(`ml_obj=${objString}`)).toBe(true);

    removeCookie('obj');
  });

  it('Saves cookies with number values', () => {
    storage.save('num', 10);

    const objString = '10';

    expect(document.cookie.includes(`ml_num=${objString}`)).toBe(true);

    removeCookie('num');
  });

  it('Saves cookies with boolean values', () => {
    storage.save('bool', true);

    const objString = 'true';

    expect(document.cookie.includes(`ml_bool=${objString}`)).toBe(true);

    removeCookie('bool');
  });
});