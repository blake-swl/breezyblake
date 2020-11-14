import React from 'react';
import './navigation.scss';

// assets
import { ReactComponent as Behance } from '../../../dist/assets/behance.svg';
import { ReactComponent as Instagram } from '../../../dist/assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../../dist/assets/linkedin-in.svg';
import { ReactComponent as Dribbble } from '../../../dist/assets/dribbble.svg';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="https://www.behance.net/blakelee3" target="_blank"><Behance/></a></li>
        <li><a href="https://www.instagram.com/breezyyblake/" target="_blank"><Instagram/></a></li>
        <li><a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" target="_blank"><Linkedin/></a></li>
        <li><a href="https://dribbble.com/blakeswl" target="_blank"><Dribbble/></a></li>
      </ul>
    </div>
  )
};

export default Sidebar;