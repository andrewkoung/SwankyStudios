import './style.css';

function Home() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <p>Hi: {process.env.REACT_APP_apiKey}</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;
