import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import { useState } from "react";
import Story from "./Story";
function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  // const [te, settes] = useState(()=>{});
  // const [tte, settt] = useState(rev=>{});
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8
    border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
