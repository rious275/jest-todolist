import { AtomEffect, DefaultValue } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  key =>
  ({ setSelf, onSet }) => {
    const value = window.localStorage.getItem(key);

    if (value !== null) {
      setSelf(JSON.parse(value));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export default localStorageEffect;
