import NavBar from "../_component/nav/NavBar";
export const metadata = {
  title: "Editor",
};

export default function EditorLayout({ children }) {
  return (
    <div className=" bg-light-gray h-[100vh] py-4 overflow-x-hidden relative">
      <NavBar />
      {children}
    </div>
  );
}
