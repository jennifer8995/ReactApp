
class App extends React.Component {
    render() {
        const activites = [
            {
                timestamp: new Date().getTime(),
                text: "Ate lunch",
                user: {
                    id: 1,
                    name: "Nate",
                    avater: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                comments: [{ from: "Ari", text: "Me too!" }]
            },
            {
                timestamp: new Date().getTime(),
                text: "Woke up early for a beautiful run",
                user: {
                    id: 2,
                    name: "Ari",
                    avater: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                comments: [{ from: "Nate", text: "I am so jealous" }]
            }
        ]
        return (
            <div className='notificationsFrame'>
                <div className='panel'>
                    <Header title='Timeline' />
                    {/* <Header title="Profile" />
                    <Header title="Settings" />
                    <Header title="Chat" /> */}
                    <Content activites={activites} />
                </div>
            </div>
        );
    }
}
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
    render() {
        const { activites } = this.props;
        return (
            <div className="content">
                <div className="line"></div>
                {activites.map((activity) => {
                    return (
                        <ActivityItem activity={activity}/>
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
                    alt={activity.text}
                    src={activity.user.avater} />
            </div>

            <span className="time">{activity.timestamp}</span>
            <p>{activity.text}</p>
            <div className="commentCount">{activity.comments.length}</div>
        </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));

