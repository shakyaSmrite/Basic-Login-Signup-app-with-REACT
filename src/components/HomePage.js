import './homepage.css'

const HomePage = ({loggedIn}) => {
  return (
    <div className="homepage">
      <h1> Welcome {loggedIn[1]}</h1>
    </div>
  );
};

export default HomePage;
