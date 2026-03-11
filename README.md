## BeCareFul 

BeCareful은 분실 위험도를 알려주는 서비스로, 인공지능 모델을 활용합니다. 

이 모델은 광주 지역에서 사용자의 IP 주소를 통해 위치를 파악하고, 분실 위험도와 가장 많이 분실된 물건, 총 분실 개수 등을 알려줍니다. 
<br/>

## :computer: Project 
공공데이터포탈에서 수집한 분실물 데이터를 바탕으로, GoogleMaps의 GeoCoding을 이용하여 위치 데이터를 위도와 경도로 변환했습니다. 또한, 각 자치구의 인구밀도를 반영하여 분실 위험도의 신뢰성을 높였습니다.

KakaoMaps의 API를 사용해 자치구 정보를 데이터에 추가하고, 이 데이터를 L-means 군집화하여 예측 결과를 dataset에 추가했습니다. 이 dataset을 .xlsx 파일로 변환하여 백엔드에서 사용할 수 있게 했습니다. 사용자의 현재 위치 IP를 기반으로 위도와 경도를 추출하고, 이를 바탕으로 분실 위험도를 측정했습니다. 
<br/>

웹 페이지 개발에서 프론트엔드 부분을 담당하며 JavaScript와 React를 활용했습니다.
<br/>

#### 👩‍💻Chaemina 
- FrontEnd & AI 개발

#### 👩‍💻 Kimyuseon
- BackEnd & AI 개발
- [BackEnd & AI api git hub](https://github.com/yuseonkim/BeCareful_BE)
<br/>

## 🤳🏻 FE 
`Python` `JavaScript` `React` `CRA` `axios`
#### directory structure
```
src
├── components (아토믹 컴포넌트 디자인 패턴 사용)
├── layouts
├── pages
├── services
├── App.js
└── index.js
```

### :alarm_clock: Develop period
- AI : 2022-06-05 ~ 2022-06-15
- FrontEnd : 2023-08-31 ~
<br/>

### 🔎 Purpose
- 2023 공개 개발자 대회 출품
<br/>

## :rocket: How to Start?  

```
git clone https://github.com/chaemina/BeCareFul_FE.git
cd my-app
```

##### Node.js v18.14.0
```
npm install
npm start
```

<br/>

## 💬 Retrospective
React를 선택한 이유는 컴포넌트의 재사용성을 통해 UI의 일관성을 높이고, 카카오 테크 캠퍼스에서 배운 내용을 실무에 적용하기 위함이었습니다. 

사이트의 디자인은 단순함에 중점을 두고, 정보 제공 목적에 맞게 애니메이션 효과를 추가하여 사용자의 접근성을 높였습니다. 

로그인 페이지에서는 '카카오 계정으로 로그인' 버튼을 통해 사용자가 백엔드에서 제공하는 카카오 로그인 페이지로 이동하도록 구성했습니다. 이는 향후 모바일 서비스 제공을 고려하여 사용자 경험을 간소화하기 위한 전략이었습니다. 로그인 후 발급되는 토큰은 로컬 스토리지에 저장하고, 이를 사용하여 사용자 인증 여부를 판단했습니다. 

인증된 사용자에게는 메인 페이지에서 axios를 사용하여 JSON 데이터를 자동 파싱하는 기능을 활용, get 요청을 통해 분실 위험 정보를 가져오고 리액트 쿼리로 데이터를 관리했습니다.
 
플랫폼의 특성을 고려하지 못한 점이 아쉽습니다. 분실물에 대한 위험도는 이동하면서 확인 하는 것이기 때문에 웹이 아니라 앱으로 개발 되었어야 합니다. 나중에 해당 프로젝트를 앱에서 재개발하여 ‘사용자의 데이터 분석’ 과 ‘네이티브’ 기능을 추가하려고 합니다. 
