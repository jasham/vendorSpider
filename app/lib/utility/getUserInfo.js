const userinfo = () => {
  const uInfo = localStorage.getItem('userInfo');
  return JSON.parse(uInfo);
};

export default userinfo;
