import { useState } from "react";
import fetchUsers from "../api/fetchUsers";

const useFetchUsers = () => {
  const [isLoading, setLoading] = useState(false);
  const [owner, onChangeOwner] = useState("");
  const [repo, onChangeRepo] = useState("");
  const [users, setUsers] = useState([]);
  const [fieldError, setFieldError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePress = () => {
    setUsers([]);
    if (owner && repo) {
      setFieldError();
      setLoading(true);
      const API_URL = `https://api.github.com/repos/${owner.trim()}/${repo.trim()}/stargazers`;
      fetchUsers(API_URL)
        .then((data) => {
          setUsers(data);
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
