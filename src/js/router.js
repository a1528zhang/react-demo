/**
 * Created by a1528zhang on 2016/5/24.
 */
import {Component} from 'react';
import UserList from './user/userList'
import GoodsList from './goods/goodsList';

class Routers extends Component{
    render(){
        return(
            <div>
                <Link activeClassName="active" to="/userList"><button>UserList</button></Link>
                <Link activeClassName="active" to="/goodsList"><button>GoodsList</button></Link>
            </div>
        )
    }
}

export default Routers;