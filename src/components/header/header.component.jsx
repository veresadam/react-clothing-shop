import React from 'react';
import { auth } from '../../firebase/firebase.utils';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to = '/'>
            <Logo className = 'logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to = '/shop'>
                SHOP
            </OptionLink>
            <OptionLink to = '/contact'>
                CONTACT
            </OptionLink>
            {
                // NOTE: <OptionDiv> can be replaced with <OptionLink>, if the ' as = "div" parameter is added to the component'
                currentUser ? 
                (<OptionDiv onClick = {() => {
                    auth.signOut()
                }
                }>SIGN OUT</OptionDiv>)
                :
                (<OptionLink to = '/signin'>SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown />}
    </HeaderContainer>
);


// 'state' in this case represents the rootReducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect (mapStateToProps)(Header);