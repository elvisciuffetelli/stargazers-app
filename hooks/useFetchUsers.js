import { useState } from "react";

const useFetchUsers = () => {
  const [isLoading, setLoading] = useState(false);
  const [owner, onChangeOwner] = useState();
  const [repo, onChangeRepo] = useState();
  const [users, setUsers] = useState([]);
  const [fieldError, setFieldError] = useState();
  const [errorMessage, setErrorMessage] = useState();

  async function fetchUsers(url) {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      const message = `An error has occured: ${
        res.status === 404 ? "repository not found" : res.status
      }`;
      throw new Error(message);
    }

    const json = await res.json();
    console.log(json);
    const data = json.map((user) => ({
      id: user.id,
      avatar_url: user.avatar_url,
      name: user.login,
    }));
    console.log("users", data);
    setUsers(data);
  }

  const handlePress = () => {
    setUsers([]);
    if (owner && repo) {
      setFieldError();
      setLoading(true);
      const API_URL = `https://api.github.com/repos/${owner.trim()}/${repo.trim()}/stargazers`;
      fetchUsers(API_URL)
        .then(() => {
          setErrorMessage("");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => setLoading(false));
      return;
    }

    if (!owner || !repo) {
      setFieldError("This field is required");
    }
  };

  return {
    isLoading,
    users,
    owner,
    repo,
    fieldError,
    errorMessage,
    handlePress,
    onChangeOwner,
    onChangeRepo,
  };
};

export default useFetchUsers;
