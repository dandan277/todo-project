import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

function TodoPage({ goToAdd }) {
  return (
    <main className="todo-page">
      <Header title="Todo List" leftIcon="/icons/icon-menu.svg" />

      <section className="todo-content">
        <h1>Todo List Page</h1>
      </section>

      <BottomNav currentPage="todo" goToHome={() => {}} goToAdd={goToAdd} />
    </main>
  );
}

export default TodoPage;