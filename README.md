### 파일 구조

- Cart.tsx : 장바구니 UI를 렌더링하고, 상태를 관리하는 컴포넌트입니다.
- data.json : 상품 정보를 담고 있는 샘플 데이터 파일입니다.
- cart.css : 장바구니 페이지의 스타일을 정의한 css 파일입니다.

### 상태 관리

상품은 useState 훅을 사용해서 상태로 관리하고, data.json에서 데이터를 가져왔습니다.

### 장바구니 렌더링

items.map()으로 각 상품의 이미지, 이름, 가격, 수량 버튼을 표시했습니다.

### 문제점

1. 커밋 할 때 Git: husky - DEPRECATED, Git: env: unknown option -- / 에러 발생  
   결국 새로 프로젝트를 구성해서 코드 작성을 했는데 해결법을 찾지 못했습니다.

2. tailwindcss를 설치 후 init 실행 시  
   npm error Cannot read properties of null (reading 'matches') 에러 발생  
   \<hr className="my-2" /> 이 동작하는 것을 보면 tailwind가 정상적으로 동작하는 것으로 보이는데  
   안 되는 부분이 있어서 일단 별도로 css 파일을 분리해서 작성했는데 해결은 못 했습니다.
