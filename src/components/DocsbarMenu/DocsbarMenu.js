import { BiLock, BiVideo } from 'react-icons/bi';
import { MdOutlineComment } from 'react-icons/md';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import status from './icons/document-status.svg';
import move from './icons/move.svg';
import star from './icons/star.svg';
import profile from './icons/profile.png';
import home from './icons/docs-home.svg';
import './DocsbarMenu.css';

const DocsbarMenu = () => (
  <div className="docsbar-container">
    <div className="docsbar-content">
      <a href="https://docs.google.com/document/u/0/" target="blank">
        <img src={home} alt="Docsbar Menu" className="docsbar-logo" />
      </a>
      <div className="docsbar-header">
        <div className="docsbar-title">
          <h1>
            Untitled Document
          </h1>
          <div className="docsbar-title-icons">
            <img src={star} alt="Docs logo" className="icon" />
            <img src={move} alt="Docs move" className="icon" />
            <img src={status} alt="Docs Status" className="icon" />
          </div>
        </div>
        <ul className="docsbar-menu">
          <li className="icon">File</li>
          <li className="icon">Edit</li>
          <li className="icon">View</li>
          <li className="icon">Insert</li>
          <li className="icon">Format</li>
          <li className="icon">Tools</li>
          <li className="icon">Extensions</li>
          <li className="icon">Help</li>
        </ul>
      </div>
    </div>
    <div className="docsbar-footer">
      <a href="https://docs.google.com/document/u/0/" target="blank">
        <RxCounterClockwiseClock />
      </a>
      <a href="https://docs.google.com/document/u/0/" target="blank">
        <MdOutlineComment />
      </a>
      <a href="https://meet.google.com/" target="blank">
        <BiVideo />
      </a>
      <button type="button">
        <i className="lock-icon"><BiLock /></i>
        Share
      </button>
      <a href="https://rishavs-portfolio.vercel.app/" target="blank">
        <img src={profile} alt="Profile" className="profile" />
      </a>
    </div>
  </div>
);

export default DocsbarMenu;
