import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LexiconService } from 'src/app/services/lexicon.service';
import { Lexicon } from '../../interfaces/lexicon';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {

  lexicon : Lexicon = { words:[], filteredWords:[] };
  showError: boolean;
  error: string;
  filter : string;

  constructor(private service: LexiconService, private router:Router) { }

  ngOnInit() {
    this.service.getAllWords().subscribe(
      data => { 
        this.lexicon.words = data;
        this.lexicon.filteredWords = data;
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
  
  changeFilter(e)
  {
    if(e.target.value == "all")
      this.lexicon.filteredWords = this.lexicon.words;
    else if(e.target.value == "positive")
      this.lexicon.filteredWords = this.lexicon.words.filter(x=>x.sentiment>=0);
    else
      this.lexicon.filteredWords = this.lexicon.words.filter(x=>x.sentiment<0);
  }
}
