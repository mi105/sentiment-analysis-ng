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

  addWordForm: FormGroup;
  word: Word;
  showError: boolean;
  error: string;

  constructor(private service : LexiconService, private fb:FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.addWordForm = this.fb.group({
      id:[Math.floor(Math.random()*1000)],
      text:[null,Validators.required],
      sentiment:[null,Validators.compose([Validators.required, Validators.min(-1), Validators.max(1)])]
    })
  }

  onSubmit() {
    this.word = this.addWordForm.value;
    if (this.addWordForm.valid)
      this.service.addWord(this.word)
        .subscribe(data => {
          this.router.navigate(["/lexicon"])
        },
          error => {
            this.showError = true;
            this.error = error.statusText;
          }
        )
    else
      this.showError = true;
  }

}
