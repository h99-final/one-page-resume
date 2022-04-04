import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteCookie } from "./cookie";
import { Link, useHistory } from "react-router-dom";
// JS파일

const Pnav = (props) => {
  const history = useHistory();
  const user = document.cookie;
  // props.nav (false or true)
  const navState = props.pnav;
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  // NavBar 설정
  const [pnav, setPnav] = useState(false);

  // useEffect로 navState가 바뀔때마다 렌더링
  useEffect(() => {
    setPnav(navState);
  }, [navState]);

  // SignOut
  const signOut = () => {
    setPnav(false);
    deleteCookie("token");
    window.location.reload();
  };

  return (
    <React.Fragment>
      {pnav ? (
        <NavBar>
          <NavLog>
            <Logout
              onClick={() => {
                history.replace(
                  `/write/portfolio/introduce/${userInfo.porfId}`
                );
              }}
            >

              <img
                style={{ marginRight: "8px" }}
                alt="" src={process.env.PUBLIC_URL + "/img/porf.svg"} />
              <h1>내 포트폴리오</h1>
            </Logout>
            <Logout
              onClick={() => {
                history.replace("/write/project/info");
              }}
            >

              <img
                style={{ marginRight: "8px" }}
                alt="" src={process.env.PUBLIC_URL + "/img/proj.svg"} />
              <h1>새 프로젝트</h1>
            </Logout>
          </NavLog>
        </NavBar>
      ) : null}
    </React.Fragment>
  );
};
// NavBar component
const NavBar = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2C2E39;
  position: absolute;
  border-radius: 5px;
  width: auto;
  top: 75px;
  margin-right: 30px;
  right: 0;
`;
// NavList component
const NavLog = styled.div`
  border: 1px solid #2C2E39;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 16px;
  width: 250px;
  height: 120px;
  cursor: pointer;
  &:hover {
  }
`;

const Logout = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 10px;
  background: #393A47;
  color: #FFFFFF;
  border: 1px solid #393A47;
  box-sizing: border-box;
  border-radius: 30px;
  h1{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin-top: 3px;
  }
  :hover {
    color: white;
    border: 1px solid #696B7B;
    background-color: #696B7B;
  }
`;
export default Pnav;
