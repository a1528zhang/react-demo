/**
 * 主菜单大icon
 */
import {Component} from 'react';

class MainIcon extends Component{
    render(){
        return (
            <div className="want-main-icon-frame ">
                <img className="want-main-icon" src ={require('../../../resources/img/1172135.png')}/>
            </div>
        );
    }
};

export default MainIcon;