import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  createMovieForm:FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createMovieForm = this.fb.group({
      title: ['', Validators.required],
      posterUrl: ['', Validators.required],
      releaseDate: ['', Validators.required],
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.createMovieForm.valid){
      alert('Form Submitted Successfully!! \n Check the values in browser console');
      console.table(this.createMovieForm.value);
    }
  }

}
