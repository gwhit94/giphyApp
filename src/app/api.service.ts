import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "";
  data: Object;
  constructor(private http: HttpClient) { }
  apiSearch(val){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=e5uf2rIxWH3gCtHRVZluwYtXYKaDaqv8&q=${val}&limit=25&offset=0&rating=R&lang=en`)
    .pipe(
      map(res => res["data"])
    )    
  }
}
