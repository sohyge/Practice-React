import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState({
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    scrollDirection: '',
  });
  const [lastScrollTop, setLastScrollTop] = useState(scroll.scrollY);

  const onScroll = () => {
    setScroll({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      scrollDirection: lastScrollTop > -document.body.getBoundingClientRect().top ? 'scrollUp' : 'scrollDown',
    });
  };
  useEffect(() => {
    setLastScrollTop(scroll.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll.scrollY]);

  return {
    scrollY: scroll.scrollY,
    scrollX: scroll.scrollX,
    scrollDirection: scroll.scrollDirection,
  };
};

export default useScroll;
