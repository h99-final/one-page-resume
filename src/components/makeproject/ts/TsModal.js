import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  Content,
  FormText,
  FormTitle,
  IconBox,
  Inner,
  InputCustom,
  Label,
} from "../../makeporf/shared/_sharedStyle";
import { Font, FormContents } from "../../makeporf/view/Introduce";
import styled from "styled-components";
import PreviousNextProject from "../PreviousNextProject";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../redux/modules/patchcode";
import { apis } from "../../../shared/axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "90vw",
    height: "90%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    background: "#2C2E39",
    // overflow: "hidden",
  },
};

function TsModal(props) {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const { modalIsOpen, setIsOpen, message_list, projectId, setMessage_list } =
    props;
  const [selectedSha, setSelectedSha] = useState("");
  const [page, setPage] = useState(2);
  const [token, setToken] = React.useState("");
  const file_list = useSelector((state) => state.patchcode.patchcode);
  const [selectedFileName, setSelectedFileName] = useState("");
  //file 중복 선택이 가능하게 만들기 위해
  // const [selectedFileName_list, setSelectedFileName_list] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalWithoutPatchcode() {
    dispatch(actionCreators.resetSelectPatchCode());
    setIsOpen(false);
  }

  // commit message 고르기
  const handleCommitClick = (e) => {
    setSelectedSha(e.currentTarget.id);
    let commit = message_list.filter(
      (commit) => commit.sha === e.currentTarget.id
    );
    console.log(commit);
    dispatch(actionCreators.setCommit(commit[0]));
  };

  // file 고르기
  const handleFileClick = (e) => {
    setSelectedFileName(e.currentTarget.id);
  };

  // 싱크 맞추기
  const handlesync = () => {
    apis.gitsync(projectId).then((res) => {
      apis.gitCommit(projectId).then((res) => {
        setMessage_list(res.data.data);
      });
    });
  };

  useEffect(() => {
    if (page === 0) {
      apis.gitCommit(projectId).then((res) => {
        setMessage_list(res.data.data);
      });
    }
    if (page === 1) {
      dispatch(actionCreators.setPatchCodeAPI(projectId, selectedSha));
    }
  }, [page]);

  useEffect(() => {
    if (userInfo.isToken) {
      setPage(0);
    }
  }, [userInfo.isToken]);


  const submitToken = () => {
    const _token = { token: token }
    apis.gitToken(_token).then((res) => {
      setPage(0);
      apis.userInfo().then((res) => {
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
      })
    })
  }

  console.log(token)
  Modal.setAppElement("#root");

  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <IconBoxLeft onClick={closeModalWithoutPatchcode}>
        <img
          alt=''
          src={process.env.PUBLIC_URL + "/img/close.svg"}
        />
      </IconBoxLeft>
      <FormContentsModal>
        {page === 2 ? (
          <>
            <FormTitleFlex>
              <FormTextCenter>토큰 가져오기</FormTextCenter>
              <FormTextLight >
                github에서 토큰을 가져와서 입력해주세요.
              </FormTextLight>
            </FormTitleFlex>
            <GetTokenBox>
              <InputBox>
                <InputCustom style={{ width: "90%", margin: "30px 0px" }}
                  placeholder="여기에 토큰을 입력해주세요"
                  onChange={(e) => {
                    setToken(e.target.value);
                  }} />

                <button onClick={() => { submitToken() }}>토큰 불러오기</button>
              </InputBox>

            </GetTokenBox>

          </>
        )
          :
          (
            <>
              {page === 0 ? (
                <>
                  <FormTitleFlex>
                    <FormTextCenter>Commit 선택하기</FormTextCenter>
                    <FormTextLight>
                      프로젝트에 첨부할 commit을 선택해 주세요.
                    </FormTextLight>
                  </FormTitleFlex>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        marginRight: "100px",
                        marginBottom: "10px",
                      }}
                      onClick={handlesync}
                    >
                      <img
                        width="30px"
                        alt="새로고침"
                        height="auto"
                        src={process.env.PUBLIC_URL + "/img/rotate.svg"}
                      />
                    </div>
                    <Ulist>

                      {message_list.map((e, i) => {
                        if (selectedSha === e.sha) {
                          return (
                            <>
                              <List
                                selected
                                onClick={handleCommitClick}
                                key={e.sha + `${i}`}
                                id={e.sha}
                                value={e.message}
                              >
                                <div style={{ display: "flex" }}>
                                  <img
                                    width="30"
                                    height="auto"
                                    src={process.env.PUBLIC_URL + "/img/check.svg"}
                                    alt="checked"
                                  />
                                  <Font>{e.message}</Font>
                                </div>
                              </List>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <List
                                onClick={handleCommitClick}
                                key={e.sha + `${i}`}
                                id={e.sha}
                              >
                                <Font>{e.message}</Font>
                              </List>
                            </>
                          );
                        }
                      })}
                    </Ulist>
                  </div>
                </>
              ) : (
                <>
                  <FormTitleFlex>
                    <FormTextCenter>파일 선택 하기</FormTextCenter>
                    <FormTextLight>
                      트러블슈팅을 설명할 Patch Code 파일을 모두 골라주세요.
                    </FormTextLight>
                  </FormTitleFlex>
                  <div>
                    <Ulist>
                      {file_list?.map((e, i) => {
                        if (selectedFileName === e.name) {
                          return (
                            <>
                              <List
                                selected
                                onClick={handleFileClick}
                                key={e.name + `${i}`}
                                id={e.name}
                              >
                                <div style={{ display: "flex" }}>
                                  <img
                                    width="30"
                                    height="auto"
                                    src={process.env.PUBLIC_URL + "/img/check.svg"}
                                    alt="checked"
                                  />
                                  <Font>{e.name}</Font>
                                </div>
                              </List>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <List
                                onClick={handleFileClick}
                                key={e.sha + `${i}`}
                                id={e.name}
                              >
                                <Font>{e.name}</Font>
                              </List>
                            </>
                          );
                        }
                      })}
                    </Ulist>
                  </div>
                </>
              )}
            </>
          )
        }

        <PreviousNextProject
          closeModal={closeModal}
          selectedFileName={selectedFileName}
          selected={selectedSha}
          setPage={setPage}
          page={page}
        />
      </FormContentsModal>
    </Modal>
  );
}

const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  margin: 0px 30px 0px 40px;
  border-bottom: solid 1px #cccccc;
  ${Font} {
    color: ${(props) => (props.selected ? "#00C4B4" : "white")};
  }
`;
const Footer = styled.div`

`;

const FormContentsModal = styled(FormContents)`
  height: 50vh;
  padding-bottom: 0px;
`;

const Ulist = styled.ul`
  margin: auto 100px;
  height: 50vh;
  overflow: auto;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;

const GetTokenBox = styled.div`
  margin: auto 100px;
  height: 50vh;
  overflow: auto;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;

const InputBox = styled.div`
  width: 70%;
  margin: 150px auto;
  align-items: center;
  text-align: center;
  button{
    background-color: black;
    color:white;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 5px;
  }
`;
const FormTextCenter = styled(FormText)`
  width: auto;
  height: 63px;
  justify-content: center;
  padding: 10px;
  font-size: 36px;
  line-height: 43px;
`;

const FormTitleFlex = styled(FormTitle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 300px;
  margin: 10px auto;
`;

export const FormTextLight = styled(FormText)`
  justify-content: center;
  font-size: 15px;
  font-weight: 100;
  width: auto;
`;

const IconBoxLeft = styled(IconBox)`
  width: 50px;
  margin-left: auto;
  background-color: #2C2E39;
`;

export default TsModal;
