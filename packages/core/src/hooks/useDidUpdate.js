const useDidUpdate = (effect, dependencies) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    effect();
  }, dependencies);
};

export default useDidUpdate;
