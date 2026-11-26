# 프로젝트 작업 규칙

이 프로젝트는 Vanilla JavaScript와 Vite를 사용한다. 코드 작업을 시작하기 전에 이 문서와 기존 파일 및 설정을 확인하고, 필요한 부분만 수정한다.

1. HTML, CSS, JavaScript는 각각 별도 파일에 작성한다.
2. `index.html`과 `vite.config.js` 등 설정 파일은 프로젝트 루트에 둔다. 애플리케이션 CSS와 JavaScript는 `src`에 둔다.
3. JavaScript 진입 파일은 `index.html`에서 ES 모듈로 연결한다. CSS는 JavaScript 진입 파일에서 import하여 Vite 빌드에 포함한다.
4. 외부 JavaScript 라이브러리는 `npm install`로 설치한 뒤 모듈로 import한다. CDN 스크립트는 사용하지 않는다.

## 빌드 및 배포

Vite의 기본 진입점인 루트의 `index.html`과 기본 출력 폴더인 `dist`를 사용한다. 변경 후 `npm run build`로 빌드를 확인한다.

GitHub 저장소를 Netlify에 연결할 때 Build command는 `npm run build`, Publish directory는 `dist`로 지정한다.
