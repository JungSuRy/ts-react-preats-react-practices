# 리엑트-타입스크립트 APP 학습 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" height='20'> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"  height='20'> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"  height='20'>

## 1.간단한 Gallery 만들기

### 2023-12-18

간단한 Gallery 앱 프로젝트 시작

REACT TYPSCRIPT에서 props에 type 설정하기

```javascript
export interface imageProps {
  id: number;
  width: number;
  height: number;
  title: string;
  content: string;
}

function Gallery({ images }: { images: imageProps[] }): JSX.Element {
    //개인적인 생각으로 props는 객체이기에 각 객체마다 명시해줘야 하는데
    //interface를 사용하여 명시
    //JSX.Element는 return되는 jsx 타입을 명시

....

```
