import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListPageComponent } from './pages/game-list-page/game-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home',              component: HomePageComponent},
      { path: 'games',             component: GameListPageComponent},
      { path: 'user/:id',          component: UserPageComponent},
      { path: 'game/:id',          component: GamePageComponent},
      { path: 'user/:id/post/:id', component: PostPageComponent},
      { path: '**',                redirectTo: 'home' }
      // reviews and review id under game/:id  

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
