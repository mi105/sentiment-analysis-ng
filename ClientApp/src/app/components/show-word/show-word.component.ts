import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LexiconService } from '../../services/lexicon.service';

@Component({
  selector: 'app-show-word',
  templateUrl: './show-word.component.html',
  styleUrls: ['./show-word.component.css']
})
export class ShowWordComponent implements OnInit {

  word: Word;
  showError: boolean;
  error: string;

  constructor(private service: LexiconService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getWordById(this.route.snapshot.params.id).subscribe((data: Word) => {
      this.word = data;
    },
      error => {
        this.showError = true;
        this.error = error.statusText;
      }
    )
  }

}
