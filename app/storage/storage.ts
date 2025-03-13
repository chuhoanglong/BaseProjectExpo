import {MMKV} from 'react-native-mmkv';

export const mmkv = new MMKV();

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function loadString(key: string) {
  return mmkv.getString(key) ?? '';
}

export function getBool(key: string) {
  return mmkv.getBoolean(key);
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveString(key: string, value: string) {
  mmkv.set(key, value);
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load(key: string) {
  const almostThere = mmkv.getString(key);
  if (almostThere) {
    return JSON.parse(almostThere);
  }

  return undefined;
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save(key: string, value: unknown) {
  mmkv.set(key, JSON.stringify(value));
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string) {
  mmkv.delete(key);
}

/**
 * Burn it all to the ground.
 */
export function clear() {
  mmkv.clearAll();
}
