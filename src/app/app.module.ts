import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SortablejsModule, SortablejsOptions} from "angular-sortablejs";
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { CKEditorModule } from 'ng2-ckeditor';
import {ColorPickerModule} from 'ngx-color-picker';
import { MdNativeDateModule } from '@angular/material';
import {Ng2BreadcrumbModule, BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';
import 'hammerjs';

import { GeneAppComponent} from './app.component';
import { RoutingModule } from "./app-routing.module";
import { MainComponent }   from './main/main.component';
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { MenuItems } from './core/menu/menu-items/menu-items';
import { PageTitleService } from './core/page-title/page-title.service';
import { D3ChartService } from "./core/nvD3/nvD3.service";
import { nvD3 } from "./core/nvD3/nvD3.component";

import { SensorsComponent } from './sensors/sensors.component';
import { MaterialIconComponent}  from './material-icons/icons.component';

import { CardsComponent }   from './components/cards/cards.component';
import { ButtonsComponent }   from './components/buttons/buttons.component';
import { GridListComponent }  from './components/grid-list/gridlist.component';
import { ListOverviewComponent }  from './components/list/list.component';
import { MenuOverviewComponent }  from './components/menu/menu.component';
import { SliderOverviewComponent }  from './components/slider/slider.component';
import { SnackbarOverviewComponent }  from './components/snackbar/snackbar.component';
import { TooltipOverviewComponent }  from './components/tooltip/tooltip.component';
import { DialogOverviewComponent, DemoDialog}  from './components/dialog/dialog.component';
import { SelectComponent}  from './components/select/select.component';
import { InputComponent}  from './components/input/input.component';
import { CheckboxComponent}  from './components/checkbox/checkbox.component';
import { RadioComponent}  from './components/radio/radio.component';
import { ToolbarComponent}  from './components/toolbar/toolbar.component';
import { ProgressComponent}  from './components/progress/progress.component';
import { TabsComponent}  from './components/tabs/tabs.component';
import { ColorpickerComponent}  from './components/colorpicker/colorpicker.component';
import { DatepickerComponent}  from './components/datepicker/datepicker.component';

import { MediaComponent } from './custom-pages/media/media.component';
import { PricingComponent } from './custom-pages/pricing/pricing.component';
import { BlankComponent } from './custom-pages/blank/blank.component';

import { LineChartComponent } from './widgets/line-chart/line-chart.component';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';
import { StackedAreaChartComponent } from './widgets/stacked-area-chart/stacked-area-chart.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    Ng2BreadcrumbModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' }),
    QuillModule,
    CKEditorModule,
    DragulaModule,
    SortablejsModule,
    FileUploadModule,
    NgxDatatableModule,
    MdNativeDateModule,
    TreeModule,
    ChartsModule,
    EasyPieChartModule,
    ColorPickerModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    MenuToggleModule,
    HttpModule,
    TranslateModule.forRoot({
		    provide: TranslateLoader,
		    useFactory: (createTranslateLoader),
		    deps: [Http]
    }),
  ],
  declarations: [
    GeneAppComponent,
    MainComponent,
    SensorsComponent,
    MaterialIconComponent,
    ButtonsComponent,
    CardsComponent,
    GridListComponent,
    ListOverviewComponent,
    MenuOverviewComponent,
    SliderOverviewComponent,
    SnackbarOverviewComponent,
    TooltipOverviewComponent,
    DialogOverviewComponent,
    DemoDialog,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    ToolbarComponent,
    ProgressComponent,
    TabsComponent,
    ColorpickerComponent,
    DatepickerComponent,
    MediaComponent,
    PricingComponent,
    BlankComponent,

    LineChartComponent,
    PieChartComponent,
    StackedAreaChartComponent,
    nvD3
  ],
  entryComponents: [
    DemoDialog,
  ],
  bootstrap: [GeneAppComponent],
  providers: [
    D3ChartService,
    MenuItems,
    BreadcrumbService,
    PageTitleService
  ]
})
export class GeneAppModule { }
