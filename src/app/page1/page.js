import Sidebar from './Sidebar/Sidebar';
import PagePreViewer from './PagePreViewer/PagePreViewer';
import PageViewer from './PageViewer/PageViewer';
import DocumentDetails from './DocumentDetails/DocumentDetails';

export default function Page1() {
  const list = ['', '', '', '', '', ''];
  return (
    <>
      <Sidebar />
      <PagePreViewer list={list} />
      <PageViewer />
      <DocumentDetails />
    </>
  )
}
