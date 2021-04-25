import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LexiconComponent } from './components/lexicon/lexicon.component';
import { DeleteWordComponent } from './components/delete-word/delete-word.component';
import { NewWordComponent } from './components/new-word/new-word.component';
import { ShowWordComponent } from './components/show-word/show-word.component';
import { UpdateWordComponent } from './components/update-word/update-word.component';
import { LexiconService } from './services/lexicon.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LexiconComponent,
    DeleteWordComponent,
    NewWordComponent,
    ShowWordComponent,
    UpdateWordComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lexicon', component: LexiconComponent },
      { path: 'new-word', component: NewWordComponent },
      { path: 'show-word:/id', component: ShowWordComponent },
      { path: 'update-word/:id', component: UpdateWordComponent },
      { path: 'delete-word/:id', component: DeleteWordComponent },

    ])
  ],
  providers: [LexiconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
