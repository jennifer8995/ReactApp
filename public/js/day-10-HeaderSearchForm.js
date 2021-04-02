
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        }
    }
    showSearch() {
        this.setState({ searchVisible: !this.state.searchVisible });
    }
    render() {

        return (
            <div className="notificationsFrame">
                <div className="header">
                    <div className="menuIcon">
                        <div className="dashTop"></div>
                        <div className="dashBottom"></div>
                        <div className="circle"></div>
                    </div>

                    <span className="title">{this.props.title}</span>
                    <SearchForm searchVisible={this.state.searchVisible}/>

                    <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon"></div>
                </div>
            </div>
        );
    }
}
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: '' };
    }
    render() {
        const { searchVisible } = this.props;
        let searchClasses = ["searchInput"];
        if (searchVisible) {
            searchClasses.push("active");
        }
        return (
            <form>
                <input
                    type="text"
                    className={searchClasses.join(' ')}
                    placeholder="Search ..." />
            </form>
        )
    }
}
SearchForm.propTypes = {
    searchVisible: PropTypes.bool
}
SearchForm.defaultProps = {
    searchVisible: false
}
ReactDOM.render(<Header title="Orange header" />, document.getElementById("app"))