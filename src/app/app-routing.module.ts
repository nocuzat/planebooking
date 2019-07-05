import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [{path:"", component:HomeComponent},
                         {path:"contact",component:ContactComponent},
                         {path:"reservations",component:ReservationsComponent},
                         {path:"message",component:MessageComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
