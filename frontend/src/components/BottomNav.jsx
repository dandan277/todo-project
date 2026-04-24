function BottomNav({ currentPage, goToHome, goToAdd }) {
  const isHome = currentPage === "todo";
  const isAdd = currentPage === "add";

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${isHome ? "active" : ""}`}
        type="button"
        onClick={goToHome}
      >
        <img
          src={isHome ? "/icons/icon-home-active.svg" : "/icons/icon-home.svg"}
          alt=""
        />
        <span>홈</span>
      </button>

      <button
        className={`nav-item ${isAdd ? "active" : ""}`}
        type="button"
        onClick={goToAdd}
      >
        <img
          src={isAdd ? "/icons/icon-add-active.svg" : "/icons/icon-add.svg"}
          alt=""
        />
        <span>추가</span>
      </button>
    </nav>
  );
}

export default BottomNav;