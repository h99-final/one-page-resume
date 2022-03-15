import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Content,
  ErrorMessage,
  FormText,
  FormTitle,
  InputCustom,
  Label,
} from "../makeporf/shared/_sharedStyle";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { Font, FormContents, MultiContent } from "../makeporf/view/Introduce";
import ForProjUpload from "../makeporf/shared/ForPorjUpload";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  customStyles,
  options,
  SelectStack,
  StackBox,
} from "../makeporf/view/Stack";
import PreviousNextProject from "./shared/PreviousNextProject";
import { grey } from "@mui/material/colors";
import { apis } from "../../shared/axios";

function MakeProject() {
  const history = useHistory();
  //포트폴리오 프로젝트 생성
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // const [stacks, setStacks] = useState([]);
  const [addStack, setAddStack] = useState([]);
  const handleChange = (e) => {
    let stackArray = [];
    e.map((addStack) => {
      return stackArray.push(addStack.value);
    });
    setAddStack(stackArray);
  };

  //이미지 파일 prop으로 넘겨줌
  const [images, setImages] = useState([]);

  // form 제출
  const projectSubmit = (data) => {
    const { projectTitle, projectContent, gitRepoUrl } = data;
    const _gitRepoName = gitRepoUrl.split("/");
    const gitRepoName = _gitRepoName[_gitRepoName.length - 1];

    if (addStack.length < 2) {
      setError("stack", "2개 이상 골라주세요.");
      return;
    }

    const jsonFrm = {
      title: projectTitle,
      content: projectContent,
      stack: addStack,
      gitRepoUrl: gitRepoUrl,
      gitRepoName: gitRepoName,
    };
    console.log(jsonFrm);
    let frm = new FormData();
    frm.append(
      "data",
      new Blob([JSON.stringify(jsonFrm)], { type: "application/json" })
    );
    for (let i = 0; i < images.length; i++) {
      console.log(images[i]);
      frm.append("images", images[i]);
    }

    apis.createProject(frm).then((res) => {
      console.log(res.data.data);
      const { id } = res.data.data;
      history.push(`troubleShooting/${id}`);
    });
  };

  // const handleClick = () => {
  //   history.push("/write/project/troubleshooting/id");
  // };

  useEffect(() => {
    console.log("유저가 프로젝트를 수정하고 싶을 수도 있으니까");
  }, []);

  return (
    <>
      <FormTitle>
        <FormMainText>STEP 1</FormMainText>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormText>프로젝트 정보</FormText>
          <FormSubText>프로젝트의 전반적인 내용을 작성해주세요</FormSubText>
        </div>
      </FormTitle>
      <form onSubmit={handleSubmit(projectSubmit)}>
        <FormContents>
          <Content>
            <Label>
              <Font>
                *프로젝트 제목<br></br>(0/50)
              </Font>
            </Label>
            <InputCustom
              type="text"
              {...register("projectTitle", { required: "필수 항목 입니다." })}
            ></InputCustom>
          </Content>
          <ErrorMessage>{errors?.projectTitle?.message}</ErrorMessage>
          <Content>
            <Label>
              <Font>
                *Github<br></br>repository URL
              </Font>
            </Label>
            <InputCustom
              type="text"
              {...register("gitRepoUrl", { required: "필수 항목 입니다." })}
            />
          </Content>
          <ErrorMessage>{errors?.gitRepoUrl?.message}</ErrorMessage>
          <MultiContentFlex style={{ marginBottom: "30px" }}>
            <Label style={{ minWidth: "150px" }}>
              <Font>*프로젝트 이미지</Font>
            </Label>
            <ForProjUpload images={images} setImages={setImages} />
          </MultiContentFlex>
          {/* // 파일 여러개 받는 법 */}
          <MultiContent>
            <Label>
              <Font>기술 스택</Font>
            </Label>
            <Select
              styles={customStyles}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={options}
              isMulti
              onChange={handleChange}
            />
          </MultiContent>
          <MultiContent style={{ marginBottom: "30px" }}>
            <Label>
              <Font></Font>
            </Label>
            <StackBox>
              {addStack.map((addStack, index) => {
                return (
                  <SelectStack key={index} {...addStack}>
                    {addStack}
                    <ClearIcon
                      sx={{ fontSize: 14, color: grey[500], marginLeft: 1 }}
                      onClick={() => {
                        alert("@@");
                      }}
                    ></ClearIcon>
                  </SelectStack>
                );
              })}
            </StackBox>
          </MultiContent>
          <Content>
            <Label style={{ minWidth: "150px" }}>
              <Font>
                *프로젝트 내용 <br />
                (0/2000)
              </Font>
            </Label>
            <InputCustom
              style={{ height: "174px" }}
              type="text"
              {...register("projectContent", { required: "필수 항목 입니다." })}
            />
          </Content>
          <ErrorMessage>{errors?.projectContent?.message}</ErrorMessage>
        </FormContents>
      </form>
      <PreviousNextProject />
    </>
  );
}

export const FormSubText = styled.p`
  font-size: 12px;
  margin-left: 10px;
`;

export const FormMainText = styled(FormText)`
  padding: 10px 0;
`;

export const MultiContentFlex = styled(MultiContent)`
  width: 100%;
  display: flex;
`;

export default MakeProject;
