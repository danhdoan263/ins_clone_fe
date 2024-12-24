import { useNavigate } from 'react-router-dom';

const ShowSignOut = ({ onClick }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="sign-out-button" onClick={handleSignOut}>
      SignOut
    </div>
  );
};

export default ShowSignOut;
