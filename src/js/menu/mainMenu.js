/**
 * Created by a1528zhang on 2016/5/18.
 */
/**
 * 主菜单
 */
import {Component} from 'react';
import MenuButton from './menuButton';
import MainIcon from  './mainIcon';
import MainTitle from './mainTitle';

class MainMenu extends Component{
    render(){
        return (
            <div name="main-menu" className="want-main-menu">
                <MainIcon />
                <MainTitle title="用户" iconClass="user"/>
                <div className="btn-group-vertical btn-block" role="group">
                    <MenuButton text="用户列表"/>
                    <MenuButton text="用户权限"/>
                </div>
                <MainTitle title="商品" iconClass="goods"/>
                <div className="btn-group-vertical btn-block" role="group">
                    <MenuButton text="商品列表"/>
                </div>
            </div>
        );
    }
};

export default MainMenu;
