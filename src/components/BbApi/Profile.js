import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Profile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  let { username } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters/${username}`)
      .then((res) => {
        setProfile(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <div>
          <img className="Profile-image" src={profile[0].img} alt="" />
        </div>
        <div>
          <h3>Name: {profile[0].name}</h3>
          <p>Birthday: {profile[0].birthday}</p>
          <p>Occupation: {profile[0].occupation}</p>
          <p>Status: {profile[0].status}</p>
          <p>Nickname: {profile[0].nickname}</p>
          <p>Appearance: {profile[0].appearance}</p>
          <p>Portrayed: {profile[0].portrayed}</p>
          <p>Category: {profile[0].category}</p>
        </div>
      </div>
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default Profile;
