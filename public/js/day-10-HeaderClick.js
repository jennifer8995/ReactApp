
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchVisible :false
        }
    }
    showSearch(){
        this.setState({searchVisible:!this.state.searchVisible});
    }
    render() {
        let searchInputClasses = ["searchInput"];
        if(this.state.searchVisible){
            searchInputClasses.push("active");
        }
        return (
            <div className="notificationsFrame">
                <div className="header">
                    <div className="menuIcon">
                        <div className="dashTop"></div>
                        <div className="dashBottom"></div>
                        <div className="circle"></div>
                    </div>

                    <span className="title">{this.props.title}</span>

                    <input
                        type="text"
                        className={searchInputClasses.join(' ')}
                        placeholder="Search ..." />
                    <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Header title="Orange header" />, document.getElementById("app"))