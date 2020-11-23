const useLogin = () => ({
  login: async user => localStorage.setItem('user', user)
})

export default useLogin
