import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LexiconComponent,
    DeleteWordComponent,
    NewWordComponent,
    ShowWordComponent,
    UpdateWordComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,      
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-30bhys60.eu.auth0.com',
      clientId: '5cysUvYspnvkxWaBW3XcIKrjeTEteimj'
    }),
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'lexicon', component: LexiconComponent, canActivate: [AuthGuard] },
    { path: 'new-word', component: NewWordComponent, canActivate: [AuthGuard] },
    { path: 'show-word/:id', component: ShowWordComponent, canActivate: [AuthGuard] },
    { path: 'update-word/:id', component: UpdateWordComponent, canActivate: [AuthGuard] },
    { path: 'delete-word/:id', component: DeleteWordComponent, canActivate: [AuthGuard] },
    { path: 'calculator', component: CalculatorComponent, canActivate: [AuthGuard] }
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [LexiconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
