import React, {useState} from 'react';
import { StyledMenu } from './Menu.styled';
import Auth from '../../utils/auth';
import Button from '../styles/pinkButton.styled'
import { bool } from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Menu = ({open}) => {
    const handleLogout = async (e) => {
        e.preventDefault();
        try{
            await Auth.logout
        } catch (error) {
            console.log(error)
        }
    };
    const [page, setPage] = useState('about');

    function handleClick(event) {
        setPage(event.target.name);
    }
  return (
    <Router>
      <StyledMenu open={open}>
        <ul>
          <li><Link style={{ textDecoration: 'none' }} to={{pathname: "/Discover"}} onClick={handleClick}>Discover</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to={{pathname: "/Profile"}} onClick={handleClick}>Profile</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to={{pathname: "/Matches"}} onClick={handleClick}>Matches</Link></li>
                    
        </ul>
        <Button onClick={handleLogout}>
            Logout
        </Button>
      
      </StyledMenu>
    </Router>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;