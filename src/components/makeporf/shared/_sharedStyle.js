import styled from "styled-components";

export const FormText = styled.div`
  width: 150px;
  height: 24px;
  left: 0px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #fff;
`;

export const ButtonBucket = styled.div`
  display: inline-block;
  height: 60px;
  width: 100%;
`;

export const Next = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 115px;
  background: #333333;
  border-radius: 43px;
  & > span {
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-width: 150px;
  height: 49px;
  left: 0px;
`;
export const Star = styled.span`
  margin-left: 2px;
  font-size: 20px;
  color: #00c4b4;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 50px 0px 50px;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`;

export const Inner = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
`;

export const Line = styled.hr``;

export const ButtonTextTS = styled(FormText)`
  width: fit-content;
  font-size: 20px;
  font-style: normal;
  margin-right: 50px;
  cursor: pointer;
  float: right;
  /* :hover{
    background-color: black;
  } */
`;
export const ButtonText = styled(FormText)`
  width: 100%;
  font-size: 20px;
  font-style: normal;
  cursor: pointer;
`;

export const AddButton = styled.div`
  width: 350px;
  height: 80px;
  background: #696b7b;
  border-radius: 50px;
`;

export const ContentCareer = styled(Content)`
  display: flex;
  margin: 25px 0px;
  text-align: center;
`;

export const MakeCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* flex-direction: row; */
  /* vertical-align: middle; */
`;

export const IconBox = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 100%;
  height: 45px;
  background-color: #ffffff;
  border-radius: 50px;
`;

export const ErrorMessage = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  color: orange;
  display: flex;
  justify-content: right;
  padding: 0px 0px;
  padding-top: 10px;
  /* width: 1120px; */
  margin-bottom: 20px;
  margin-right: 50px;
`;

export const Font = styled.div`
  /* body1 */
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.01em;
  color: white;
  margin: 10px;
`;

export const Icon = styled.div`
  background-color: #fff;
  border-radius: 50px;
`;

export const FormTitle = styled.div`
  margin: 50px 60px;
  justify-content: center;
`;

export const InputCustom = styled.textarea`
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    /* background: #696b7b; */
  }
  width: 1120px;
  height: 19px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  resize: none;
  /* border: 1px solid #393a47; */
  background-color: #393a47;
  color: ${(props) => (props.readOnly ? "white" : "white")};
  &:focus {
    outline: #00c4b4 !important;
    border: 1px solid #00c4b4 !important;
  }
  border: ${(props) =>
    props.errors ? "1px solid orange" : "1px solid #393a47"};
`;

export const InputStack = styled.input`
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #696b7b;
  }
  width: 1120px;
  height: 19px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  resize: none;
  border: 1px solid #393a47;
  background-color: #393a47;
  color: ${(props) => (props.readOnly ? "white" : "white")};
  &:focus {
    outline: #00c4b4 !important;
    border: 1px solid #00c4b4 !important;
  }
`;
export const StyledInput = styled(({ errors, ...rest }) => (
  <InputCustom {...rest} />
))`
  &&& {
    border: ${(props) => (props.errors ? "1px solid orange" : "none")};
  }
`;
