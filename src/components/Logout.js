import {Navigate} from 'react-router-dom';
function Logout() {
    return (
        <div>
            <Navigate to="/" msg="Logged Out Successfully!! Re Login Again!!!"/>
        </div>
    );
  }
  
  export default Logout;
  