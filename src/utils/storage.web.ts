import { AppStorage } from '../types';

const YEAR = 365 * 24 * 60 * 60;

class StorageWeb implements AppStorage {
  get(key: string) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  set(key: string, value: any, options: { [key: string]: any } = {}) {
    const expires = options.expires || YEAR;
    if (typeof expires === 'number') {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      options.expires = d;
    }

    if (options.expires.toUTCString) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = key + '=' + encodeURIComponent(value);

    (Object as any).entries(options).forEach(([k, v]: [string, any]) => {
      updatedCookie += '; ' + k;

      if (v !== true) {
        updatedCookie += '=' + v;
      }
    });

    updatedCookie += '; path=/';

    document.cookie = updatedCookie;
  }

  delete(key: string, options: any = {}) {
    this.set(key, '', {
      expires: -1,
      ...options,
    });
  }
}

export default new StorageWeb();
