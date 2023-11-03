import './page.css'

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import FileViewer from './FileViewer/FileViewer';
import DocumentDetails from './DocumentDetails/DocumentDetails';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main_container">
        <Sidebar />
        <FileViewer />
        <DocumentDetails />
      </main>
    </>
  )
}
