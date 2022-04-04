import React from "react";
import styled from "styled-components";

function PortfolioBuisnesscard(props) {
  const {
    id,
    title,
    userStack,
    content,
    bookmarkCount,
    imageUrl,
    username,
    job,
    templateIdx,
  } = props;

  return (
    <>
      {templateIdx === 0 ||
        templateIdx === 7 ||
        templateIdx === 8 ||
        templateIdx === 9 ||
        templateIdx === 10 ||
        templateIdx === 11 ||
        templateIdx === 12 ? (
        <Portfolio
          background={
            templateIdx === 0
              ? "https://s3.amazonaws.com/www.poug.me/card/0.svg"
              : templateIdx === 1
                ? "https://s3.amazonaws.com/www.poug.me/card/1-1.svg"
                : templateIdx === 2
                  ? "https://s3.amazonaws.com/www.poug.me/card/1-2.svg"
                  : templateIdx === 3
                    ? "https://s3.amazonaws.com/www.poug.me/card/1-3.svg"
                    : templateIdx === 4
                      ? "https://s3.amazonaws.com/www.poug.me/card/2-1.svg"
                      : templateIdx === 5
                        ? "https://s3.amazonaws.com/www.poug.me/card/2-2.svg"
                        : templateIdx === 6
                          ? "https://s3.amazonaws.com/www.poug.me/card/2-3.svg"
                          : templateIdx === 7
                            ? "https://s3.amazonaws.com/www.poug.me/card/3-1.svg"
                            : templateIdx === 8
                              ? "https://s3.amazonaws.com/www.poug.me/card/3-2.svg"
                              : templateIdx === 9
                                ? "https://s3.amazonaws.com/www.poug.me/card/3-3.svg"
                                : templateIdx === 10
                                  ? "https://s3.amazonaws.com/www.poug.me/card/4-1.svg"
                                  : templateIdx === 11
                                    ? "https://s3.amazonaws.com/www.poug.me/card/4-2.svg"
                                    : templateIdx === 12
                                      ? "https://s3.amazonaws.com/www.poug.me/card/4-3.svg"
                                      : templateIdx === 13
                                        ? "https://s3.amazonaws.com/www.poug.me/card/1.svg"
                                        : null
          }
          templateIdx={templateIdx}
        >
          <NameCircle>{username ? username : "ㅡ"}</NameCircle>
          <JobCircle>{job ? job : "ㅡ"}</JobCircle>
          <TitleCircle>{title ? title : "ㅡ"}</TitleCircle>
          <ContentCircle templateIdx={templateIdx}>
            {userStack?.map((e, i) => {
              return <StackCircle key={`stack-${i}`} >{e}</StackCircle>;
            })}
          </ContentCircle>
        </Portfolio>
      ) : (
        <Portfolio
          background={
            templateIdx === 0
              ? "https://s3.amazonaws.com/www.poug.me/card/0.svg"
              : templateIdx === 1
                ? "https://s3.amazonaws.com/www.poug.me/card/1-1.svg"
                : templateIdx === 2
                  ? "https://s3.amazonaws.com/www.poug.me/card/1-2.svg"
                  : templateIdx === 3
                    ? "https://s3.amazonaws.com/www.poug.me/card/1-3.svg"
                    : templateIdx === 4
                      ? "https://s3.amazonaws.com/www.poug.me/card/2-1.svg"
                      : templateIdx === 5
                        ? "https://s3.amazonaws.com/www.poug.me/card/2-2.svg"
                        : templateIdx === 6
                          ? "https://s3.amazonaws.com/www.poug.me/card/2-3.svg"
                          : templateIdx === 7
                            ? "https://s3.amazonaws.com/www.poug.me/card/3-1.svg"
                            : templateIdx === 8
                              ? "https://s3.amazonaws.com/www.poug.me/card/3-2.svg"
                              : templateIdx === 9
                                ? "https://s3.amazonaws.com/www.poug.me/card/3-3.svg"
                                : templateIdx === 10
                                  ? "https://s3.amazonaws.com/www.poug.me/card/4-1.svg"
                                  : templateIdx === 11
                                    ? "https://s3.amazonaws.com/www.poug.me/card/4-2.svg"
                                    : templateIdx === 12
                                      ? "https://s3.amazonaws.com/www.poug.me/card/4-3.svg"
                                      : templateIdx === 13
                                        ? "https://s3.amazonaws.com/www.poug.me/card/1.svg"
                                        : null
          }
          templateIdx={templateIdx}
        >
          <Name>{username ? username : "ㅡ"}</Name>
          <Job>{job ? job : "ㅡ"}</Job>
          <Title>{title ? title : "ㅡ"}</Title>
          <Content>
            {userStack?.map((e, i) => {
              return <Stack key={`stack-${i}`} templateIdx={templateIdx}>{e}</Stack>;
            })}
          </Content>
        </Portfolio>
      )}
    </>
  );
}

const Stack = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #cfd3e2; */
  border: ${(props) =>
    props.templateIdx === 0 ||
      props.templateIdx === 4 ||
      props.templateIdx === 5 ||
      props.templateIdx === 6 ||
      props.templateIdx === 10 ||
      props.templateIdx === 11 ||
      props.templateIdx === 12
      ? "1px solid #fff"
      : "1px solid #000"};

  box-sizing: border-box;
  border-radius: 30px;
  padding: 7px 12px;
  width: fit-content;
  height: 100%;
  margin-right: 2.8%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin-bottom: 30px;
  margin-left: 25px;
  margin-right: 25px;
`;
const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin: 10px 0px;
  background-size: 100%;
  background-image: ${(props) => `url(${props.background})`};
  width: 327px;
  height: 369px;

  border-radius: 10px;
  color: ${(props) =>
    props.templateIdx === 0 ||
      props.templateIdx === 4 ||
      props.templateIdx === 5 ||
      props.templateIdx === 6 ||
      props.templateIdx === 10 ||
      props.templateIdx === 11 ||
      props.templateIdx === 12
      ? "#fff"
      : "#000"};
  @media only screen and (min-width: 1900px) {
  }
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  width: auto;
  height: auto;
  margin-top: 40px;
  margin-left: 25px;
  margin-right: 25px;
`;
const NameCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const ContentCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  margin-top: ${(props) =>
    props.templateIdx === 0
      ? "60px"
      : "40px"};
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  height: 120px;
`;

const StackCircle = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #cfd3e2; */
  border: 1px solid
    ${(props) =>
    props.templateIdx === 0 ||
      props.templateIdx === 4 ||
      props.templateIdx === 5 ||
      props.templateIdx === 6 ||
      props.templateIdx === 10 ||
      props.templateIdx === 11 ||
      props.templateIdx === 12
      ? "#000"
      : "#fff"};
  box-sizing: border-box;
  border-radius: 30px;
  padding: 7px 12px;
  width: fit-content;
  height: 100%;
  margin-top: 4.5%;
`;

const Job = styled.div`
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

const JobCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.div`
  margin-top: 51px;
  margin-left: 25px;
  margin-right: 25px;
  height: 150px;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  word-wrap: break-word;
`;

const TitleCircle = styled.div`
  display: flex;
  /* width: 100px; */
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  word-break: break-all;
  margin-top: 28px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export default PortfolioBuisnesscard;
