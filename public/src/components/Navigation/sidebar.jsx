import React from 'react';
import './navigation.scss';

// assets
import { ReactComponent as Behance } from '../../../dist/assets/behance.svg';
import { ReactComponent as Instagram } from '../../../dist/assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../../dist/assets/linkedin.svg';
import { ReactComponent as Dribbble } from '../../../dist/assets/dribbble.svg';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href=""><Behance/></a></li>
        <li><a href=""><Instagram/></a></li>
        <li><a href=""><Linkedin/></a></li>
        <li><a href=""><Dribbble/></a></li>
      </ul>
    </div>
  )
};

export default Sidebar;