# 리엑트-타입스크립트 APP 학습 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" height='20'> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"  height='20'> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"  height='20'>

## 1.간단한 Gallery 만들기

### 2023-12-18

간단한 Gallery 앱 프로젝트 시작

REACT TYPSCRIPT에서 props에 type 설정하기

```javascript

App.js
function App() {
  return (
    <div className="App">
      <Gallery images={images}>갤러리 테스트</Gallery>
    </div>
  );
}


export interface imageProps {
  id: number;
  width: number;
  height: number;
  title: string;
  content: string;
}

function Gallery({
  children,
  images,
}: {
  children: string;
  images: imageProps[];
}): JSX.Element {
    //개인적인 생각으로 props는 객체이기에 각 객체마다 명시해줘야 하는데
    //interface를 사용하여 명시
    //JSX.Element는 return되는 jsx 타입을 명시
    {children}
    ...
}
```

## 2. REACT TYPESCRIPT TODOList 앱 만들기

#### typescript에서는 useState 사용 방법

```javascript
//기본
//보통 초기값을 정해주면  타입을 유추하기때문에 굳이 제릭을 지정하지 않아도 된다.
useState<number>()

//다음같은 경우일 때 사용하는게 좋다.
//1.상태가 null일수도 있고 아닐수도 있을때
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);

export interface IUserInfo {
  userid: string | undefined;
  username: string | undefined;
}
const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

//2.상태의 타입이 까다로운 구조을 가진 객체이거나 배열일때<br/>
//배열인 경우에는 해당 배열이 어떤 타입으로 이루어진 배열인지 추론할 수 있도록 <Generics>을 명시하는 것이 좋다.
export interface todoProps {
  id: number;
  content: string;
  toggle: boolean;
}
 const [todos, setTodo] = useState<todoProps[]>([]);
```

##### setState에서 push 사용시 에러 발생

```javascript
//typscript 전에는 문제 없이 사용가능하였는데
//도입후에는 에러 발생
//"Argument of type 'number' is not assignable to parameter of type 'SetStateAction<string[]>'.ts(xxx)"
setTodo(
  newState.push({
    id: maxid,
    content: content,
    toggle: false,
  })
);
//stackoverflow 참고
//push함수는 숫자를 반환한다고한다. setTodo함수는 void이다
//아래처럼 변경하니 잘된다.
setTodo([...todos, { id: maxid, content: content, toggle: false }]);
```

#### li태그 onClick ={핸들러명} 설정 시에러

li onclick에 마우스를 가져다 되보면

```javascipt

'(id: number) => void' 형식은 'MouseEventHandler<HTMLLIElement>' 형식에 할당할 수 없습니다.
  'id' 및 'event' 매개 변수의 형식이 호환되지 않습니다.
    'MouseEvent<HTMLLIElement, MouseEvent>' 형식은 'number' 형식에 할당할 수 없습니다.
```

에러 발생
검색을 통해 아래 방법을 통해 해결

##### ※ event에 어떤타입을 설정해줘야하는지 확인하는 가장 쉬운 방법

```javascript
//이벤트 핸드러를 함수표현식으로 따로 선언하지 않고 인라인으로 작성한 후 이벤트 핸들러의 event 매개변수 위로 마우스를 가져다대면 TS는 이벤트 타입이 무엇인지 표시해준다.
 <li onClick={(event) => console.log(event)}>
```
