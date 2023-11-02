import './page.css'

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main_container">
        <Sidebar />
        <Sidebar />
        <Sidebar />
        {/* <Content />  */}
      </main>
    </>
  )
}
