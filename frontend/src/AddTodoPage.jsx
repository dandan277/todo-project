import { useState } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

function AddTodoPage({ goToHome }) {
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("업무");

  const handleDateChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "").slice(0, 8);

    let formatted = onlyNumbers;

    if (onlyNumbers.length > 4) {
      formatted = `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(
        2,
        4
      )}/${onlyNumbers.slice(4)}`;
    } else if (onlyNumbers.length > 2) {
      formatted = `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2)}`;
    }

    setDueDate(formatted);
  };

  return (
    <main className="add-page">
      <Header
        title="Add Todo"
        leftIcon="/icons/icon-menu.svg"
        onLeftClick={goToHome}
      />

      <section className="add-content">
        <h1 className="add-title">
          오늘의 새로운 흐름을
          <br />
          기록하세요
        </h1>

        <p className="add-description">
          중요한 일들을 놓치지 않도록
          <br />
          세부 사항을 입력해 주세요.
        </p>

        <div className="add-field">
          <label className="add-label" htmlFor="todo-title">
            무엇을 해야 하나요?
          </label>

          <input
            id="todo-title"
            className="add-input"
            type="text"
            placeholder="예: 디자인 시스템 가이드라인 작성"
          />
        </div>

        <div className="add-field date-field">
          <label className="add-label" htmlFor="todo-date">
            마감일 설정
          </label>

          <div className="date-input-box">
            <img src="/icons/icon-calendar1.svg" alt="" />
            <input
              id="todo-date"
              type="text"
              inputMode="numeric"
              value={dueDate}
              onChange={handleDateChange}
              placeholder="mm/dd/yyyy"
              maxLength={10}
            />
          </div>
        </div>

        <div className="add-field category-field">
          <p className="add-label">카테고리</p>

          <div className="category-list">
            {["업무", "개인", "공부"].map((item) => (
              <button
                key={item}
                type="button"
                className={`category-button ${
                  category === item ? "active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="add-field detail-field">
          <label className="add-label" htmlFor="todo-detail">
            상세 내용 (선택)
          </label>

          <textarea
            id="todo-detail"
            className="detail-textarea"
            placeholder="작업에 필요한 세부 정보를 입력하세요..."
          />
        </div>

        <div className="tip-card">
          <div className="tip-text">
            <p className="tip-title">작은 습관의 힘</p>
            <p className="tip-desc">
              할 일을 구체적으로 쪼개서
              <br />
              적으면 실천하기가 훨씬 수월해집니다.
            </p>
          </div>

          <div className="tip-icon">
            <img src="/icons/icon-bulb.svg" alt="" />
          </div>
        </div>

        <button className="save-button" type="button">
          <img src="/icons/icon-check.svg" alt="" />
          저장하기
        </button>
      </section>

      <BottomNav currentPage="add" goToHome={goToHome} goToAdd={() => {}} />
    </main>
  );
}

export default AddTodoPage;