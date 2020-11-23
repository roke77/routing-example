const useLogout = () => ({
  logout: async user => localStorage.removeItem('user')
})

export default useLogout
