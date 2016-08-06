/**
 * Created by a1528zhang on 2016/5/17.
 */
import {Component} from 'react';

class NewTable extends Component{
    render(){
        return (<table data-striped="true" data-toggle="table" className="table">
                    <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item 1</td>
                        <td>$1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Item 2</td>
                        <td>$2</td>
                    </tr>
                    </tbody>
                </table>);
    }
};

export default NewTable;