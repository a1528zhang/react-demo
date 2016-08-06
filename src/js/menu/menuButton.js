/**
 * Created by a1528zhang on 2016/5/18.
 */
/**
 * 主菜单按钮
 */
import {Component} from 'react';

class MenuButton extends Component{
    render(){
        return (
            <button type="button" id="myButton" data-loading-text="Loading..." className="btn btn-default" autocomplete="off">
                {this.props.text}
            </button>
        );
    }
};
$(document).on('click','#myButton', function () {
    let $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
})
export default MenuButton;