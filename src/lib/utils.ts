import clsx, { ClassValue } from 'clsx';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';
const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token: string, refresh_token: string) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
export const clearAuthCookie = () => {
  const access_token = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export function formatDate(date: Date | string | number) {
  return dayjs(date).format("MMMM D, YYYY");
}

export function isMacOs() {
  if (typeof window === "undefined") return false;

  return window.navigator.userAgent.includes("Mac");
}
export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files);
  if (!isArray) return false;
  return files.every((file) => file instanceof File);
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
