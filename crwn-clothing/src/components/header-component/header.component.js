import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import classes from  "./header.module.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utis";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink, OptionDiv } from "./header.styles";

const HeaderComponent = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">SHOP</OptionLink>
      <OptionLink className="option" to="/shop">CONTACT</OptionLink>
      {
        currentUser
        ? (<OptionDiv
            onClick={() => auth.signOut()}
          >SIGN OUT</OptionDiv>)
        : (<OptionLink className="option" to="/signin">SIGN IN</OptionLink>)
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden
      ? null
      : <CartDropdown />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(HeaderComponent)
