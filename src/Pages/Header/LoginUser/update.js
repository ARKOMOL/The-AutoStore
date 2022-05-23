import { updateProfile } from 'firebase/auth';
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
      <label htmlFor="">
        Name
      </label>
      <input
        type="displayName"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        required
      /> <br />
      <label htmlFor="">
        Photo
      </label>
      <input
        type="photoURL"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        required
      />  <br />
      <button
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