
import { group } from 'k6';
import Login from '../request/login.request';
import data from '../data/usuarios.json'
import Products from '../request/products.request';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 20 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  } 
}

export default function () {

  let login = new Login()
  let products = new Products()

  group('login and get token', () => {
    login.access(data.usuarioOk.user, data.usuarioOk.pass)
  })
  group('list users', () => {
    user.list(login.getToken())
  })
} 
