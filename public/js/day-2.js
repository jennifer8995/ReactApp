class HelloWorld extends React.Component{
    render(){
        return(
            React.createElement('h1',{className:'large'},'HelloWorld')
        );
    }
}
ReactDOM.render(<HelloWorld/>,document.getElementById('app'));