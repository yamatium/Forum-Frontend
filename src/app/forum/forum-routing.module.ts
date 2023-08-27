import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListPageComponent } from './pages/game-list-page/game-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../auth/pages/register-page/register-page.component';
import { AuthLayoutPageComponent } from '../auth/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home',              component: HomePageComponent},
      { path: 'games',             component: GameListPageComponent},

      // these paths should show the user instead of id EX:  game/pikmin4;  user/yamatium; user/yamatium/post/4,  where 4 is the id of the post;
      { path: 'game/:id',          component: GamePageComponent},
      { path: 'user/:id',          component: UserPageComponent},
      { path: 'user/:id/post/:id', component: PostPageComponent},
      {path: 'login',              component: LoginPageComponent},
      {path: 'register',           component: RegisterPageComponent},

      { path: '**', redirectTo: 'home'}

      // these paths dont use the father path auth EX: auth/register, auth/login; they use forum/login, forum/register;  
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
