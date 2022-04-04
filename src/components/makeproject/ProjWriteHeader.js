import React from "react";
import styled from "styled-components";

function PorjWriteHeader() {
  return (
    <>
      <Header>
        <LayoutHeader>
          <WritePorf>새 프로젝트 작성하기</WritePorf>
        </LayoutHeader>
        <LayoutDetail>
          <Detail>Github repository에서 불러와 프로젝트를 작성해보세요.</Detail>
        </LayoutDetail>
      </Header>
    </>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  margin-top: 100px;
`;

const LayoutHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 400px;
  height: 63px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const WritePorf = styled.div`
  width: 400px;
  height: 43px;
  left: 10px;
  top: 10px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.01em;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const LayoutDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;  
  width: 400px;
  height: 39px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Detail = styled.div`
  width: 400px;
  height: 19px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.01em;
  color: #CFD3E2;

  /* Inside auto layout */
`;

export default PorjWriteHeader;
