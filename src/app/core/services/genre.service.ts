import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>("https://localhost:7079/api/Genres/all");
  }
  addGenre(genre:Genre):Observable<Genre>{
    return this.httpClient.post<Genre>("https://localhost:7079/api/Genres/add", genre);
  }

  //deleteGenre(genreId:number):Observable<boolean>{
  //  return this.httpClient.delete<boolean>("https://localhost:7079/api/Genres/Delete" + genreId);
  //}

}
