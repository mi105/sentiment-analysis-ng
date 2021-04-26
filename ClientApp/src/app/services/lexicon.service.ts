import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LexiconService {

  _baseUrl : string = "api/Lexicon"

  constructor(private http: HttpClient) { }

  getAllWords(){
    return this.http.get<Word[]>(this._baseUrl + "/GetLexicon");
  }

  addWord(word:Word){
    return this.http.post(this._baseUrl+"/AddWord", word);
  }
  
}
