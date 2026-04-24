function Header({ title, leftIcon, onLeftClick }) {
  return (
    <header className="header">
      <button className="header-left" onClick={onLeftClick}>
        <img src={leftIcon} alt="" />
      </button>

      <h2 className="header-title">{title}</h2>

      <div className="header-right">
        <img src="/icons/icon-profile.svg" alt="profile" />
      </div>
    </header>
  );
}

export default Header;