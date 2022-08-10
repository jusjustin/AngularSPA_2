import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/core/services/genre.service';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres!:Genre[];
  flag:boolean = false;
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(g => {
      this.genres = g;
      console.log(this.genres);
    });
  }

  //deleteGenre(genreId:number){
  //  this.genreService.deleteGenre(genreId).subscribe(g => {
  //   console.log(g);
  //    this.flag = true;
    //});
  //}

  // This is a Mock Funtion, real functionality would be similar to above ^^
  deleteGenre(){
    this.flag = true;
  }

}
