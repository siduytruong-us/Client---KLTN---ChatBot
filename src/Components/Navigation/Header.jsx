import React, { Component } from 'react';
import LeftMenu from './HeaderComponent/LeftMenu'
import RightMenu from './HeaderComponent/RightMenu'
import { Drawer, Button, Menu, Col } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>



      //   <nav className = "">
          

      //   <Menu mode="horizontal" theme="light" style = {{textAlign:"right"}}>
      //   <img src = "/assets/img/logo.png" className = "float-left ml-3"/>
      //   <Menu.Item key="mail">
      //      <a href="">Home</a>
      //    </Menu.Item>
      //    <SubMenu title={<span>Blogs</span>}>
      //      <MenuItemGroup title="Item 1">
      //        <Menu.Item key="setting:1">Option 1</Menu.Item>
      //        <Menu.Item key="setting:2">Option 2</Menu.Item>
      //      </MenuItemGroup>
      //      <MenuItemGroup title="Item 2">
      //        <Menu.Item key="setting:3">Option 3</Menu.Item>
      //        <Menu.Item key="setting:4">Option 4</Menu.Item>
      //      </MenuItemGroup>
      //    </SubMenu>
      //    <Menu.Item key="alipay">
      //      <a href="">Contact Us</a>
      //    </Menu.Item>
      //  <Menu.Item key="asd">
      //     <a href="">Signin</a>
      //   </Menu.Item>
      //   <Menu.Item key="app">
      //     <a href="">Signup</a>
      //   </Menu.Item>
      //    <SubMenu title={<span>Blogs</span>}>
      //      <MenuItemGroup title="Item 1">
      //        <Menu.Item key="setting:1">Option 1</Menu.Item>
      //        <Menu.Item key="setting:2">Option 2</Menu.Item>
      //      </MenuItemGroup>
      //      <MenuItemGroup title="Item 2">
      //        <Menu.Item key="setting:3">Option 3</Menu.Item>
      //        <Menu.Item key="setting:4">Option 4</Menu.Item>
      //      </MenuItemGroup>
      //    </SubMenu>
      //    <Menu.Item key="alipay">
      //      <a href="">Contact Us</a>
      //    </Menu.Item>
      //    </Menu>
      //  </nav>
      <div></div>
      
    );
  }
}
export default Header;