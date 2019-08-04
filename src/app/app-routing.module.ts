import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { DetailsComponent } from './details/details.component'
import { PostsComponent } from './posts/posts.component'
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

const routes: Routes = [
{
  path:'',
  component: UsersComponent
},
{
  path:'details/:id',
  component: DetailsComponent
},
{
  path:'posts',
  component: PostsComponent
},
{
  path:'posts/:id',
  component: PostdetailsComponent
},
{
  path:'invoices',
  component: InvoicesComponent
},
{
  path:'invoiceDetails/:id',
  component:InvoiceDetailsComponent
},
{
  path:'newInvoice',
  component:NewInvoiceComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
