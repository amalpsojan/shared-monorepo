const useDidMount = (callback) => {
  const executed = useRef(false);
  useEffect(() => {
    if (!executed.current) {
      executed.current = callback();
    }
  }, [callback]);
};

export default useDidMount;
