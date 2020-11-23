const useCurrentUser = () => ({
  currentUser: localStorage.getItem('user')
})

export default useCurrentUser
