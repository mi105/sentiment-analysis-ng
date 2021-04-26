import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LexiconService } from '../../services/lexicon.service';
import {Word} from '../../interfaces/word';

@Component({
  selector: 'app-update-word',
  templateUrl: './update-word.component.html',
  styleUrls: ['./update-word.component.css']
})
export class UpdateWordComponent implements OnInit {

  word: Word;
  newWord: Word;
  updateWordForm: FormGroup;
  showError: boolean;
  error: string;



  constructor(private service: LexiconService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.service.getWordById(this.route.snapshot.params.id)
      .subscribe((data: Word) => {

        this.word = data;

        this.updateWordForm = this.fb.group({
          id: [data.id],
          text: [data.text, Validators.required],
          sentiment: [data.sentiment, Validators.compose([Validators.required, Validators.min(-1), Validators.max(1)])]
        })

      });
  }

  onSubmit() {
    this.newWord = this.updateWordForm.value;
    if (this.updateWordForm.valid)
      this.service.updateWord(this.newWord).subscribe(
        data => {
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
