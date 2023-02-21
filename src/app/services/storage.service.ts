import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get accessToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  set accessToken(accessToken: string | null) {
    if (accessToken === null)
      localStorage.setItem("accessToken", "");
    else
      localStorage.setItem("accessToken", accessToken);
  }

  get refreshToken(): string| null {
    return localStorage.getItem("refreshToken");
  }

  set refreshToken(refreshToken: string| null) {
    if (refreshToken === null)
      localStorage.setItem("refreshToken", "");
    else
      localStorage.setItem("refreshToken", refreshToken);
  }

  get userProfile(): string| null {
    return localStorage.getItem("userProfile");
  }

  set userProfile(userProfile: string| null) {
    if (userProfile === null)
      localStorage.setItem("userProfile", "");
    else
      localStorage.setItem("userProfile", userProfile);
  }

  get userCountry(): string | null{
    return localStorage.getItem("country");
  }

  set userCountry(country: string | null) {
    if (country === null)
      localStorage.setItem("country", "");
    else
      localStorage.setItem("country", country);
  }

  clear(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.userProfile = null;
    this.userCountry = null;
  }
}
