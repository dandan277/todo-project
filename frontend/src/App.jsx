import { useState } from "react";
import "./App.css";

import TodoPage from "./TodoPage";
import AddTodoPage from "./AddTodoPage";
import SignupPage from "./SignupPage";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [page, setPage] = useState("login"); // 일단 편의를 위해 페이지 바꿔둠 !! 다 하면 login 으로 바꿀 것!

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "1111" && password === "1111") {
      setPage("todo");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  if (page === "todo") {
    return <TodoPage goToAdd={() => setPage("add")} />;
  }

  if (page === "add") {
    return <AddTodoPage goToHome={() => setPage("todo")} />;
  }

  if (page === "signup") {
  return <SignupPage goToLogin={() => setPage("login")} />;
}

  return (
    <main className="login-page">
      <section className="login-card">
        <img
          className="logo-img"
          src="/icons/check-logo.svg"
          alt="Todo App Logo"
        />

        <h1>Todo App</h1>
        <p>당신의 하루를 더 유연하게 관리하세요</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-panel">
            <label className="input-label" htmlFor="email">
              이메일 주소
            </label>

            <div className="input-box">
              <img className="input-icon" src="/icons/icon-email.svg" alt="" />
              <input id="email" type="text" placeholder="example@todo.com" />
            </div>

            <label className="input-label password-label" htmlFor="password">
              비밀번호
            </label>

            <div className="input-box">
              <img className="input-icon" src="/icons/icon-lock.svg" alt="" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />

              <button
                className="eye-button"
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="비밀번호 보기"
              >
                <img src="/icons/icon-eye.svg" alt="" />
              </button>
            </div>

            <button className="forgot-button" type="button">
              비밀번호를 잊으셨나요?
            </button>

            <button className="login-button" type="submit">
              로그인
            </button>
          </div>

          <div className="signup-guide">
            <span>계정이 없으신가요?</span>
             <button type="button" onClick={() => setPage("signup")}>
               회원가입
             </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;