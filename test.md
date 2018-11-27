## 이력
1. 2018.11.13 : 생성

## 설명
접속 토큰을 발급한다. 로그인으로 사용 하면 된다. 유저는 여러 회사에 여러 권한을 가질 수 있다. 일반적으로 단일 회사에 단일 권한으로 사용 한다.
접속 토큰을 발급 받으며 소속된 회사와 회사에서의 Role(group) 을 확인 할 수 있다.

Role 별로 사용 할 수 있는 메뉴는 다르며 할당된 메뉴를 검색하여 아래 항목으로 체크로 설정된 유저 Role 을 확인 할 수 있다.

- company.groups.menus.name 이 Root 인 메뉴를 가지고 있으면 시스템 관리자
- company.groups.menus.name 이 CAdmin 인 메뉴를 가지고 있으면 중간 관리자
- company.groups.menus.name 이 Normal 인 메뉴를 가지고 있으면 일반 유저

Root, CAdmin, Normal 은 대소문자 구별하지 않으니 toUpper 로 모두 대문자를 만들어서 비교 한다.

## 요청
### 메소드
POST 방식으로 요청 해야 한다.

### 헤더
다음 헤더를 포함해야 한다.

- Accept: application/json
- Content-Type: application/json
- H-Authorization : Open api_key:signature 값
- H-Date : The date and time that the message was originated (in "HTTP-date" format as defined by [RFC 7231](https://tools.ietf.org/html/rfc7231))
- Ck-Service : 서비스에 맞는 값을 사용. 값을 모르면 서버 담당자에게 문의

NOTE:

- H-Date 형식 : Date: Tue, 15 Nov 1994 08:12:31 GMT
- H-Authorization 는 [Authorization 규격](Authorization-규격) 을 참고 한다.

### 요청 URL

```html
http://<domain>/token
```

### Query
- tid : (optional) {string} transaction id

### 요청 JSON
요청시 전달되는 값은 JSON 형태로 전달해야 하며 다음 값을 사용 할 수 있다.

- userId : (mandatory) {string} 토큰 발급할 사용자 아이디
- password : (mandatory) {string} 사용자 패스워드. sha256 으로 hash 한 값

## 응답
### 응답 결과
JSON 값으로 응답 한다. ckError 값이 S000001 이 아니면 실패 이다.

- ckTid : {string} 요청시 전달한 transaction id
- ckError : {string} 응답 코드
- ckMessage : {string} 응답 메시지
- token : {object} 접속 토큰 정보
   + token : {string} 발급된 접속 토큰
   + expireDate : {numeric} 접속 토큰 만료 시간. sec 단위의 timestamp
- [유저 정보](유저-형태1)

### 성공
```json
{
    "ckTid": "1542080764",
    "ckError": "S000001",
    "ckMessage": "성공",
    "token": {
        "token": "4b2aaba0e6ef11e8a5d2dd603901032f",
        "expireDate": 1542087965
    },
    "user": {
        "id": "010f29495e4c706d735f61646d040957",
        "userId": "pms_admin@ckstack.com",
        "name": "PMS 관리자",
        "nickname": "",
        "address1": "",
        "address2": "",
        "zipCode": "",
        "emailAddress": "pms_admin@ckstack.com",
        "phoneNumber": "",
        "mobilePhoneNumber": "‭010-2086-1942‬",
        "faxNumber": "",
        "emailConfirm": true,
        "description": "Root 관리자",
        "status": 1,
        "file": {},
        "lastLoginDate": 0,
        "changePasswordDate": 1541739476,
        "loginFailCount": 0,
        "extra": {},
        "create": 1541739476,
        "update": 0
    },
    "company": [{
        "id": "05bfdb50e3dc11e8940d2fa3223f4d68",
        "name": "DY System",
        "managerName": "root",
        "address1": "",
        "address2": "",
        "zipCode": "",
        "emailAddress": "dhkim@ckstack.com",
        "phoneNumber": "",
        "mobilePhoneNumber": "",
        "faxNumber": "",
        "description": "",
        "status": 1,
        "file": {},
        "extra": {},
        "create": 1541739476,
        "update": 0,
        "groups": [{
            "id": "05c13ae0e3dc11e8940d2fa3223f4d68",
            "name": "Root 그룹",
            "description": "가장 최상위 관리자 그룹",
            "status": 1,
            "create": 1541739476,
            "update": 0,
            "menus": [{
                "id": "05c18900e3dc11e8940d2fa3223f4d68",
                "menuType": 4,
                "name": "Root",
                "alias": "",
                "domain": "",
                "urlPath": "",
                "status": 1,
                "listOrder": 0,
                "extra": {},
                "create": 1541739476,
                "update": 0
            }]
        }]
    }]
}
```

### 실패
```json
```

## 에러
### 에러 코드
[에러 코드](에러-코드) 문서 참조
