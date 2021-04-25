import { Component, OnInit } from '@angular/core';
import { LexiconService } from 'src/app/services/lexicon.service';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {

  public lexicon : Lexicon = { words:[] };

  constructor(private service: LexiconService ) { }

  ngOnInit() {
    this.service.getAllWords().subscribe(
      data => { 
        this.lexicon.words = data; }
    )
  }

}
