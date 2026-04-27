import { useState } from "react";

function SignupPage({ goToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  return (
    <main className="signup-page">
      <section className="signup-card">
        <img className="logo-img" src="/icons/check-logo.svg" alt="logo" />

        <h1 className="signup-title">새로운 시작을 함께해요</h1>
        <p className="signup-description">
          Todo App으로 하루를 더 유연하게 관리하세요
        </p>

        <form className="signup-form">
          <div className="form-panel signup-panel">
            <label className="input-label" htmlFor="signup-email">
              이메일 주소
            </label>

            <div className="input-box">
              <img className="input-icon" src="/icons/icon-email.svg" alt="" />
              <input
                id="signup-email"
                type="text"
                placeholder="example@todo.com"
              />
            </div>

            <label
              className="input-label password-label"
              htmlFor="signup-password"
            >
              비밀번호
            </label>

            <div className="input-box">
              <img className="input-icon" src="/icons/icon-lock.svg" alt="" />
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />

              <button
                className="eye-button"
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <img src="/icons/icon-eye.svg" alt="" />
              </button>
            </div>

            <label
              className="input-label password-label"
              htmlFor="signup-password-check"
            >
              비밀번호 확인
            </label>

            <div className="input-box">
              <img className="input-icon" src="/icons/icon-lock.svg" alt="" />
              <input
                id="signup-password-check"
                type={showPasswordCheck ? "text" : "password"}
                placeholder="••••••••"
              />

              <button
                className="eye-button"
                type="button"
                onClick={() => setShowPasswordCheck((prev) => !prev)}
              >
                <img src="/icons/icon-eye.svg" alt="" />
              </button>
            </div>

            <button className="login-button signup-submit-button" type="button">
              가입하기
            </button>
          </div>

          <div className="signup-guide">
            <span>이미 계정이 있으신가요?</span>
            <button type="button" onClick={goToLogin}>
              로그인
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignupPage;