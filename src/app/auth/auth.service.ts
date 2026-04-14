import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

interface ILoginResponse {
   access_token: string
   id: string
}

interface IResponse<T = any> {
  status_code: number
  message: string
  data: T
}

interface IVIDEO {
    _id?: any
    name?: string
    name_ar?: string
    title?: string
    extention?: string
    url?: string
    secure_url?: string
    size?: number
    mime?: string
    type?: string
    cover?: string
    secure_cover?: string
    width?: number
    height?: number
    isChecked?: boolean
    isView?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)
  private url = environment.apiUrl
  private router = inject(Router)


  async login(email: string , password: string) {
    return await this.http.post<IResponse<ILoginResponse>>(`${this.url}/auth/login`, {email, password})
  }

  async getVideos(){
    return await this.http.get<IResponse<IVIDEO[]>>(`${this.url}/videos/all`)
  }

}
