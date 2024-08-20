export const checkValidData = ( email, password) => {
   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
//    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName)

//    if(!isNameValid ) return "enter a valid name"
   if(!isEmailValid) return "enter a valid email id"
   if(!isPasswordValid) return "enter a valid password"
   

   return null
}