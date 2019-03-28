import Api from '@/services/Api'

export default{
    register (credentials){
        return Api().post('auth/register', credentials)
    },

    login (credentials){
      return Api().post('auth/login', credentials)
  }
}

//AuthenticatioService.register({
  //  email: 'testing@gmail.com',
   // password: '123456'
//})
