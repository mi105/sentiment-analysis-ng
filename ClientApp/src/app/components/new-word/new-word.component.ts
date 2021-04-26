import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LexiconService } from 'src/app/services/lexicon.service';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewWordComponent implements OnInit {

  addWordForm:FormGroup;

  constructor(private service : LexiconService, private fb:FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.addWordForm = this.fb.group({
      id:[Math.floor(Math.random()*1000)],
      text:[null,Validators.required],
      sentiment:[null,Validators.compose([Validators.required, Validators.min(-1), Validators.max(1)])]
    })
  }

  onSubmit(){
    console.log("submitted");
    this.service.addWord(this.addWordForm.value)
    .subscribe(data => {this.router.navigate(["/lexicon"])})
  }

}
