
import { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Components/Firebase/Firebase.init';


const UpdateProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return <p>Updating...</p>;
  }
  return (
    <div className="App">
    
      <input
        type="displayName"
        placeholder='Your Name'
        value={displayName}
        className="input input-bordered w-full max-w-xs my-5"
        onChange={(e) => setDisplayName(e.target.value)}
        required
      /> <br />
     
      <input
        type="photoURL"
        value={photoURL}
      placeholder="Your Photo"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setPhotoURL(e.target.value)}
        required
      /> 
      <br />
      <button className='btn btn-info justify-center my-4 max-w-xs'
        onClick={async () => {
          await updateProfile({ displayName, photoURL });
          toast('Updated profile');
        }}
      >
        Update profile
      </button>
    </div>
  );
};
export default UpdateProfile;