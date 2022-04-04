import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const FetchMore = ({ is_loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((page) => page + 1);
  });
  useEffect(() => {
    let observerRefValue = null;
    if (fetchMoreTrigger.current) {
      fetchMoreObserver.observe(fetchMoreTrigger.current);
      observerRefValue = fetchMoreTrigger.current;
    }
    return () => {
      if (observerRefValue) fetchMoreObserver.unobserve(observerRefValue);
      setPage(0);
    };
  }, [fetchMoreTrigger]);

  return (
    <Fetch
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      ref={fetchMoreTrigger}
    >
      <img alt="" src={process.env.PUBLIC_URL + "/img/top.svg"} />
    </Fetch>
  );
};

export const Fetch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 80px;
  cursor: pointer;
`;

export default FetchMore;
