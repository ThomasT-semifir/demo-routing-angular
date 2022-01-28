import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { UserListPage } from './pages/user/user.page';

const routes: Routes = [
  {path: "", component: HomePage},
  {path: "users", component: UserListPage, children: [
    {path: "detail/:id", component: UserDetailComponent}
  ]},
  // {path: "users/:id", component: UserDetailComponent},
  // {path: "**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
