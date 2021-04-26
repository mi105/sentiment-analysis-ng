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

  getWordById(id: number) {
    return this.http.get<Word>(this._baseUrl + "/SingleWord/" + id);
  }

  addWord(word:Word){
    return this.http.post(this._baseUrl+"/AddWord", word);
  }

  updateWord(word: Word) {
    return this.http.put(this._baseUrl + "/UpdateWord/" + word.id, word);
  }

  deleteWord(id: number) {
    return this.http.delete<Word>(this._baseUrl + "/DeleteWord/" + id);
  }
}
