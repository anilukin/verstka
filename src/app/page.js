import './page.css'

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PageViewer from './PageViewer/PageViewer';
import DocumentDetails from './DocumentDetails/DocumentDetails';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main_container">
        <Sidebar />
        <PageViewer />
        <DocumentDetails />
      </main>
    </>
  )
}
