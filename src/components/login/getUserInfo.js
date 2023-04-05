export const getUserInfo = async(input) => {
  const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  const isEmail = regexExp.test(input);
  const paramKey = isEmail ? "mail" : "username"

  try {
    const response = await fetch(`http://localhost:8081/v1/api/user/get-by-${paramKey}?${paramKey}=${input}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "GET",
        redirect: 'follow'
      }
    );
    const userObject = await response.json()
    if (response.status === 200) {
      console.log(response)
      return userObject
    }
    } catch (err) {
    console.log(err);
  }
}

