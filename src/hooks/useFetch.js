import { useCallback, useEffect, useState } from 'react';

/**
 * Hook gọi API dùng chung, tự quản lý trạng thái loading/error/data - Tuần 8
 * fetcher: hàm trả về Promise (thường là 1 hàm trong services/api.js)
 * deps: mảng phụ thuộc, thay đổi thì gọi lại API (giống useEffect)
 */
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const reload = useCallback(() => setReloadKey((k) => k + 1), []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetcher()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Đã có lỗi xảy ra.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, reloadKey]);

  return { data, loading, error, reload };
}
