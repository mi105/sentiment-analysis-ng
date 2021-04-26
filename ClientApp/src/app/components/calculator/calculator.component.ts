import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LexiconService } from 'src/app/services/lexicon.service';
import {Word} from '../../interfaces/word';
import {Score} from '../../interfaces/score';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorForm :FormGroup;
  text: any;
  showError: boolean;
  error: string;
  score: Score = { value: 0};

  constructor( private service:LexiconService, private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.calculatorForm = this.fb.group({
      text:[null,Validators.required]     
    })
  }

  onSubmit() {
    this.text = this.calculatorForm.value;
    console.log(JSON.stringify(this.text));
    if (this.calculatorForm.valid)
      this.service.getAllWords()
        .subscribe((data : Word[]) => {
          let txt : String = this.text.text;
          let words = txt.replace( /\n/g, " " ).split(' ');
          let groupByText  = words.reduce((acc, it) => {
            acc[it] = acc[it] + 1 || 1;
            return acc;
            }, []);
          let result = Math.round(data.map(word=> (groupByText[word.text] ? groupByText[word.text] : 0) * word.sentiment)
          .reduce((x,y) => x+y, 0) *100)/100;
          this.score.value = result;
            
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
