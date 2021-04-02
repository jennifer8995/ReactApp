
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
                    <SearchForm searchVisible={this.state.searchVisible} onSubmit={this.props.onSearch}/>

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
    updateSearchInput(e){
        const val =  e.target.value;
        this.setState({searchText:val});
    }
    submitForm(event){
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
        console.log("sda----------" + this.state.searchText)
    }
    render() {
        const { searchVisible } = this.props;
        let searchClasses = ["searchInput"];
        if (searchVisible) {
            searchClasses.push("active");
        }
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <input
                    type="search"
                    className={searchClasses.join(' ')}
                    onChange={this.updateSearchInput.bind(this)}
                    placeholder="Search ..." />
            </form>
        )
    }
}
SearchForm.propTypes = {
    onSubmit:PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
}
SearchForm.defaultProps = {
    onSubmit:()=>{},
    searchVisible: false
}
ReactDOM.render(<Header title="Orange header" />, document.getElementById("app"))