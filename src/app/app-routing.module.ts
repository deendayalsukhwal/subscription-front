import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { BuyProductResolverService } from "./buy-product-resolver.service";
import { BuyProductComponent } from "./buy-product/buy-product.component";
import { ForbiddenComponent } from "./forbidden/forbidden.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";
import { AuthGuard } from "./_auth/auth.guard";
import { AddNewPlanComponent } from "./add-new-plan/add-new-plan.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { NormalUserComponent } from "./normal-user/normal-user.component";
import { PrimiumUserComponent } from "./primium-user/primium-user.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
  },
  {
  path: "addNewPlan",
  component: AddNewPlanComponent,
  canActivate: [AuthGuard],
  data: { roles: ["Admin"] },
},
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
  },
  {
    path: "prime",
    component: PrimiumUserComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
  },

  {
    path: "normalUser",
    component: NormalUserComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
  },
  
  {
    path: "subscribe",
    component: SubscribeComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
  },
  { path: "login", component: LoginComponent },
  { path: "forbidden", component: ForbiddenComponent },
  
  {
    path: "buyProduct",
    component: BuyProductComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
    resolve: {
      productDetails: BuyProductResolverService,
    },
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
