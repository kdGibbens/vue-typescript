interface FetchCountCallback {
  (count: number): void;
}

export const fetchCount = (cb: FetchCountCallback) => cb(0);
