async function fetchUsers(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error has occured: ${
      res.status === 404 ? "repository not found, please try again with an existing owner and repo name" : res.status
    }`;
    throw new Error(message);
  }

  const json = await res.json();
  const data = json.map((user) => ({
    id: user.id,
    avatar_url: user.avatar_url,
    name: user.login,
  }));
  return data;
}

export default fetchUsers;
