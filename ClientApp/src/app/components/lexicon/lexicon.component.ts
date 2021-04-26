import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LexiconService } from 'src/app/services/lexicon.service';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {

  lexicon : Lexicon = { words:[] };
  showError: boolean;
  error: string;

  constructor(private service: LexiconService, private router:Router) { }

  ngOnInit() {
    this.service.getAllWords().subscribe(
      data => { 
        this.lexicon.words = data;
      },
      error => {
        this.showError = true;
        this.error = error.statusText;
      }
    )
  }

  showWord(id: number) {
    this.router.navigate(["/show-word/" + id]);
  }

  updateWord(id: number) {
    this.router.navigate(["/update-word/" + id]);
  }

  deleteWord(id: number) {
    this.router.navigate(["/delete-word/" + id]);
  }

}
