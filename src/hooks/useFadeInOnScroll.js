import { useEffect } from 'react';

/**
 * Hiệu ứng xuất hiện dần (fade-in) khi cuộn trang bằng IntersectionObserver - Tuần 7
 * Gắn class "fade-in" cho phần tử cần hiệu ứng, hook sẽ thêm class "is-visible"
 * khi phần tử xuất hiện trong viewport.
 */
export function useFadeInOnScroll(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in:not(.is-visible)');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
