import { Injectable } from '@angular/core';
import * as  data from '../data.json';
import { AuthModel } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  checkAuth(req: AuthModel): boolean {
    let result = false;
    if (req.username === data.username && req.password === data.password) {
      result = true;
    }

    return result;
  }

}
