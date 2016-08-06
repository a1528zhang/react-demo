import MainMenu from "./js/menu/mainMenu";
import NewTable from  "./js/table";

let Menu = React.createClass({
    render() {
        return (
            <div>
                <MainMenu/>
                <NewTable/>
            </div>
        );
    }
});

ReactDOM.render(React.createElement(Menu),document.getElementById('content'));

//let Content = React.createClass({
//    render() {
//        return (
//
//        )
//    }
//})




