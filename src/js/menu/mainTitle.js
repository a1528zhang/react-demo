/**
 * Created by a1528zhang on 2016/5/20.
 */
/**
 * 主菜单分类名称和icon
 */
import {Component} from 'react';

class MainTitle extends Component{
    render(){
        let iconClass = this.props.iconClass;
        let icon;
        if (iconClass == "user"){
            icon = <span className="glyphicon glyphicon-user"></span>;
        };
        if  (iconClass == "goods"){
            icon = <span className="glyphicon glyphicon-shopping-cart"></span>;
        }
        return (
            <div className="want-main-title" aria-hidden="true">
                &nbsp;&nbsp;{icon}&nbsp;{this.props.title}
            </div>
        );
    }
};

export default MainTitle;