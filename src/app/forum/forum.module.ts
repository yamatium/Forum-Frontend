import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { GameListPageComponent } from './pages/game-list-page/game-list-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { Ssw2Component } from './pages/ssw2/ssw2.component';



@NgModule({
  declarations: [
    HomePageComponent,
    UserPageComponent,
    GameListPageComponent,
    LayoutPageComponent,
    GamePageComponent,
    PostPageComponent,
    ReviewPageComponent,
    Ssw2Component,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
  ]
})
export class ForumModule { }
