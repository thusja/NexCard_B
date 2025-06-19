# 🕵️‍♂️ NexCard
> **디지털 명함 생성기**

![page](https://github.com/thusja/NexCard_F/blob/main/docs/indexPage.PNG)

<br>

## 🔗 Links

- 🔗 **Homepage**: [NexCard](https://nex-card-one.vercel.app/)
- 💻 **GitHub**: [Frontend](https://github.com/thusja/NexCard_F) [Backend](https://github.com/thusja/NexCard_B)
- 📄 **발표 자료**: [notion](https://rough-lime-f80.notion.site/js-api-1b92d24c870d80418662e4c3c79b1fc0)

---

## 📌 프로젝트 소개
-기간: 2025.03.28 ~ 2025.04.09
-목적: 사용자가 입력한 정보를 바탕으로 QR 코드, 로고 등을 자동으로 포함한 명함을 웹앱에서 생성하고 다운로드 또는 공유할 수 있는 플랫폼입니다.
> 정보를 입력하고 나만의 디지털 명함을 만들어보세요!

### 🛠 기술 스택
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: node.js
- **Deployment**: Vercel(F), Render(B)
- **Version Control**: Git & GitHub

---

## 📺 서비스 화면

1. **정보 입력** - 정보를 입력하여 당신만의 명함을 만들어 보세요.
2. **QR 코드** - 당신의 회사 웹사이트를 입력하면 QR코드가 생성됩니다.
3. **다운로드** - 명함을 다운로드 해보세요.
4. **공유** - 카카오톡 공유로 당신만의 명함을 공유하세요.
5. **이메일 전송** - GMAIL로 나에게 보내기를 하세요.

---

### 📁 폴더 구조

| ![Frontend](https://github.com/thusja/NexCard_F/blob/main/docs/front.PNG) | ![Backend](https://github.com/thusja/NexCard_F/blob/main/docs/back.PNG) |

---

## ✅ 추후 작업 및 이슈
- 이메일 클릭 시 앱 연결(mailto): QR로 인코딩하면 QR 찍는 사람이 바로 연락처 저장 가능, 이메일도 포함
- vCard를 수정: outlook말고 다른 모바일 전용으로 연락처나 그런걸 바로 저장할 수 있게끔 하거나 버튼 삭제
- QR 코드 디자인 커스터마이징: 회사 로고 삽입 이나 명함 테마에 맞춘 QR 디자인을 함으로서 브랜드의 아이덴티티가 향상된다
- 명함 인쇄용 PDF 다운로드 기능
- DB를 사용: 로그인 및 회원가입을 만든뒤 사용자의 명함 갯수를 3개로 제한, Cloud Storage나 Firebase Storage에 이미지 파일을 저장,
- 사용자의 정보나 갯수제약은 오라클이나 SQL로 관리하는 하이브리드 방식을 생각
- React Native: DB까지 완성이 된다면 어플로 만들어 확장이 가능
