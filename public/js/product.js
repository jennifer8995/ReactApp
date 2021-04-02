class Product extends React.component{
    renden(){
        return (
            <div className='item'>
                <div className='image'>
                    <img src="images/products/image-aqua.png"></img>
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Fort knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks</p>
                    </div>
                    <div className='extra'>
                        <span> Submmited by:</span>
                        <img  className='ui avatar image' src='images/avatars/daniel.jpg'></img>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render();
