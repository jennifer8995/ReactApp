
// class App extends React.Component {
//     render() {
//         const activites = [
//             {
//                 timestamp: new Date().getTime(),
//                 text: "Ate lunch",
//                 user: {
//                     id: 1,
//                     name: "Nate",
//                     avater: "http://www.croop.cl/UI/twitter/images/doug.jpg"
//                 },
//                 comments: [{ from: "Ari", text: "Me too!" }]
//             },
//             {
//                 timestamp: new Date().getTime(),
//                 text: "Woke up early for a beautiful run",
//                 user: {
//                     id: 2,
//                     name: "Ari",
//                     avater: "http://www.croop.cl/UI/twitter/images/doug.jpg"
//                 },
//                 comments: [{ from: "Nate", text: "I am so jealous" }]
//             }
//         ]
//         return (
//             <div className='notificationsFrame'>
//                 <div className='panel'>
//                     <Header title='Timeline' />
//                     <Content activites={activites} />
//                 </div>
//             </div>
//         );
//     }
// }
class Header extends React.Component {
    render() {

        return (
            <div className="header">

                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">{this.props.title}</span>

                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search ..." />
                <div className="fa fa-search searchIcon"></div>
            </div>
        );
    }
}
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            loading: false
        }
    }
    updateData() {
        this.setState(
            {
                loading: false,
                activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
            },
            this.props.onComponentRefresh
        );
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.requestRefresh === true) {
            this.setState({ loading: true }, this.updateData);
        }
    }
    componentWillMount() {
        this.setState({ activities: data });
    }
    componentDidMount() {
        this.updateData();
    }
    render() {
        const { activities } = this.state;
        return (
            <div className="content">
                <div className="line"></div>
                {activities.map((activity) => {
                    return (
                        <ActivityItem activity={activity} />
                    )
                })}
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
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { refreshing: false };
    }
    refresh() {
        this.setState({ refreshing: true });
    }
    onComponentRefresh() {
        this.setState({ refreshing: false });
    }
    render() {
        const { refreshing } = this.state;
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Github activity"></Header>
                    <Content onComponentRefresh={this.onComponentRefresh.bind(this)}
                        requestRefresh={refreshing}
                    ></Content>
                    <Footer>
                        <button onClick={this.refresh.bind(this)}>
                            <i className="fa fa-refresh"></i>
                            Refresh
                        </button>
                    </Footer>
                </div>
            </div>
        );
    }
}
class Footer extends React.Component {
    render() {
        return <div className="footer">{this.props.children}</div>
    }
}
ReactDOM.render(<Container />, document.getElementById('app'));

