import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { SensorsComponent }  from './sensors/sensors.component';

const appRoutes: Routes = [
	{
	 	path: '',
	 	component: MainComponent,
	 	children: [
            { path: 'sensors', component: SensorsComponent },
			{ path: '', component: SensorsComponent }
	 	]
  	}
];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
