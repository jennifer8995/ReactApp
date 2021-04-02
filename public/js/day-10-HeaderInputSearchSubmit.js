
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
                    <SearchForm searchVisible={this.state.searchVisible} onSubmit={this.props.onSearch} />

                    <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon"></div>
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    onSearch: PropTypes.func
}
class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: data
        }
    }
    handleSearch(val) {
        if(val===''){
            this.setState({activities:data});
        }else{
            const {activities} = this.state;
            const filtered = activities.filter(
                a => a.actor && a.actor.login.match(val)
            );
            this.setState({
                activities:filtered
            })
        }
    }
    render() {
        const { activities } = this.state;
        return (
            <div>
                <Header title="Git" onSearch={this.handleSearch.bind(this)}></Header>
                <div className="content">
                    <div className="line"></div>
                    {activities.map((activity) => {
                        return (
                            <ActivityItem key={activity.id} activity={activity} />
                        )
                    })}
                </div>
            </div>
        );
    }
}
class ActivityItem extends React.Component {
    render() {
        const { activity } = this.props;
        return (
            <div className="item">

                <div className="avatar">
                    <img
                        alt='avatar'
                        src={activity.actor.avatar_url} />
                </div>

                <span className="time">
                    {moment(activity.created_at).fromNow()}
                </span>

                <p>
                    {activity.actor.display_login} {activity.payload.action}
                </p>
                <div className="right">{activity.repo.name}</div>
            </div>
        )
    }
}
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: '' };
    }
    updateSearchInput(e) {
        const val = e.target.value;
        this.setState({ searchText: val });
    }
    submitForm(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
        console.log("submitForm/searchText:" + this.state.searchText)
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
// SearchForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     searchVisible: PropTypes.bool
// }
// SearchForm.defaultProps = {
//     onSubmit: () => { },
//     searchVisible: false
// }
ReactDOM.render(<Panel />, document.getElementById("app"))