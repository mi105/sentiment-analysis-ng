import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LexiconService } from '../../services/lexicon.service';

@Component({
  selector: 'app-delete-word',
  templateUrl: './delete-word.component.html',
  styleUrls: ['./delete-word.component.css']
})
export class DeleteWordComponent implements OnInit {

  word: Word;
  showError: boolean;
  error: string;

  constructor(private service: LexiconService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getWordById(this.route.snapshot.params.id).subscribe((data: Word) =>
    {
      this.word = data;
    })
  }

  deleteBook(id: number) {
    this.service.deleteWord(id).subscribe(data =>{
      this.router.navigate(["/lexicon"]);
    },
      error =>
      {
        this.showError = true;
        this.error = error.statusText;
      }

    )
  }
}
