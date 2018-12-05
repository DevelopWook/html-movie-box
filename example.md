# html-movie-box

## 개요

이 프로젝트에서 무엇을 하였다.  
그래서 무엇을 성취하였다.

## 제작과정

-   프로젝트 명 : Movie Box
-   수행기간 : 10월~20월
-   프로젝트 인원 : 0명
-   나의 기여도 : 50%
-   담당 :
    -   게시판, 데이터베이스

## 주요 기술

-   HTML, CSS, JavsScript(ES6)
-   React.js (ver 17.5)
    -   Redux (ver 1.1)
    -   Router (ver 1.3)
    -   Immutable.js (ver 1.6)

## 개발 환경

-   **OS**
    -   Window
-   `IDE`: Notepad++
-   **Browser** : Chrome

## 세부내용

### 데이터베이스 설계

### 주요 코드 및 기능

---

# Nanuri

### 개요

-   렌탈 서비스를 제공하는 가상의 사업체를 위한 웹사이트(소셜커머스)를 제작

### 제작과정

-   프로젝트명 : 나누리 (소셜커머스 렌탈 사이트)
-   수행기간 : 2018년 10월 05일 ~ 2018년 11월 05일
-   프로젝트 인원 : 5명
-   나의 기여도 : 35%
-   담당역 : 렌탈게시판 , 데이터베이스 설계 , 디자인

### 개발환경

-   **언어**  
     JAVA 8 { JSP , MVC2 }
-   **프레임워크**  
     Spring { Mybatis , tiles }
-   **DB**  
     ORACLE 11g
-   HTML / CSS / JavaScript  
     JQuery / bootstrap
-   **IDE**  
     WebStorm

*   abc
    -   dd
        -   plus

### 데이터 베이스 설계

![db](https://user-images.githubusercontent.com/24869943/47962601-8bb34a80-e062-11e8-80c1-51114b32150b.jpg)

-   최대한 테이블의 중복을 없애며 각각 테이블마다의 고유 성격들만
    컬럼을 만드는식으로 데이터베이스를 설계
-   테이블마다의 기본키 설정
-   inner join 을 활용한 테이블 참조이용

### 프로젝트 소개

> 담당 view

![view](https://user-images.githubusercontent.com/24869943/47962959-dbe0db80-e067-11e8-9bc4-a4b3b9e5d98f.png)

### 구현기능소개

#### Ajax를 통한 검색 기능

> 타일즈를 이용하여 모든 뷰의 공통된 헤더영역에서 보일수있는 영역입니다.

> 상품을 검색하면 상품이 등록되어있는지의 여부를 검색결과 박스로 보여질수 있도록 구현했습니다.

![default](https://user-images.githubusercontent.com/24869943/47962647-1d22bc80-e063-11e8-8c0c-5509783b4f07.jpg)

검색바(input)에 onkeyup 속성을 주어서 검색어 를 입력할때마다 Ajax 로 데이터를 검색을 합니다  
검색어와 맞는 데이터가 없다면 검색결과가 없다는 텍스트의 태그를 append 시켰고,  
맞는 데이터가 있다면 리스트로 받아온 데이터들을 jQuery 안에서 each 문을 돌려  
각각의 데이터들을 append 시키는 방식으로 구현했습니다.

#### Ajax를 통한 스크롤 더보기 기능

> 상품리스트 뷰입니다.

> 상품리스트뷰의 페이징처리를 스크롤형식의 더보기 버튼으로 구현했습니다.

![default](https://user-images.githubusercontent.com/24869943/47962649-1f851680-e063-11e8-90d5-16109b4d7f85.jpg)

상품 리스트페이지의 상품을 받아올때 index번호를 1 과 4로 정해놓습니다.  
Mybatis 쿼리문을 통해 rownum 로 데이터들에게 순서를 준후 인덱스 번호를 이용해서 4개의데이터만 끊어서 가져옵니다.  
더보기 버튼을 누르면 제이쿼리를 통해 index 번호를  
다음 데이터의 번호로 변경해주며 데이터를 뿌려줄수있도록 구현했습니다.

#### Ajax를 통한 옵션 검색기능

> 상품리스트 뷰입니다.

> 상품검색시 select 박스로 여러옵션을 상품제목과 함께 검색할수 있도록 구현했습니다.

![default](https://user-images.githubusercontent.com/24869943/47962650-214eda00-e063-11e8-9fce-4856e5108209.jpg)

select 박스들의 옵션마다의 값과 검색바(input) 값을 Ajax를 통해 데이터베이스와  
비교를 한후 리스트에 append 시키는 식으로 구현하였습니다.  
만약 검색바(input) 에 값이 없고 select 박스만 클릭을하였을경우  
Mybatis 동적쿼리를 이용하여 검색바(input)의 값이 없을경우를  
체크하여 select박스의 값들로만 정렬시키는 방식으로 구현했습니다.

## 제목2

### 제목3

#### 제목4

##### 제목5

> 안녕하세요 pbw 입니다

## 목차

---

내용1

**내용2**

코드1

```
markdown {
    lineNumber: true;
}
```

```js
console.log('pbw');
const a = () => {
    const b = [];
    b.map(1, (item) => {});
};
function func() {
    var a = 'AAA';
    return a;
}
```

::: tip
abcd
:::

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

:tada: :100:

[[toc]]

| 값         |                     의미                     |   기본값 |
| ---------- | :------------------------------------------: | -------: |
| `static`   |        유형(기준) 없음 / 배치 불가능         | `static` |
| `relative` |        요소 **자신**을 기준으로 배치         |
| `absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
| `fixed`    |       **브라우저 창**을 기준으로 배치        |

인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>
> > 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
> >
> > > 중중첩된 인용문 1
> > > 중중첩된 인용문 2
> > > 중중첩된 인용문 3
