export const sendMail = async(mail) => {
  try {
    const res = await fetch("http://localhost:8080/v1/api/user/send-activate-code?mail=" + mail,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
          method: "POST",
      }
    )
    return res
  } catch (err) {
   console.log(err);
  }
}