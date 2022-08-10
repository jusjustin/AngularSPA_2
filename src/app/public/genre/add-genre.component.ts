import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenreService } from 'src/app/core/services/genre.service';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  name:string = '';
  tnc:boolean = false;
  flag:boolean = false;
  genre:Genre = {id: 0, name: ''};
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
  }

  addGenre(genreForm:NgForm){
    this.genre.name = genreForm.value.name;
    this.genreService.addGenre(this.genre).subscribe(p => {
      console.log(p);
      this.flag = true;
    });
  }

}
