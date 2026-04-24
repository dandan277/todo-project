import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

function AddTodoPage({ goToHome }) {
  return (
    <main className="add-page">
      <Header
        title="Add Todo"
        leftIcon="/icons/icon-menu.svg"
        onLeftClick={goToHome}
      />

      <section className="add-content">
        <h1>Add Todo Page</h1>
      </section>

      <BottomNav currentPage="add" goToHome={goToHome} goToAdd={() => {}} />
    </main>
  );
}

export default AddTodoPage;