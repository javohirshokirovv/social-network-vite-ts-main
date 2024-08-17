import { Navbar, List, WhatsNew, History, Postliked, Repostliked } from "../../components"; 
import { Header } from "../../components/UI/Header/Header";
import "./MainPage.scss";
import { SCMainPage } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <SCMainPage>
      <Header/>
      <aside className="LeftSide">
        <Navbar />
        <List listType="subscribes" />
      </aside>
      <main className="Main">
        <WhatsNew />
        <History />
        <Postliked />
        <Repostliked />
      </main>
      <aside className="RightSide">
        <List listType="closeFriends" />
        <List listType="music" />
      </aside>
    </SCMainPage>
  );
};
