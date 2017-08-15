import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import {fadeInAnimation} from "../core/route-animation/route.animation";

@Component({
  selector: 'ms-sensors',
  templateUrl:'./sensors-component.html',
  styleUrls: ['./sensors-component.scss'],
  encapsulation: ViewEncapsulation.None,
    host: {
        "[@fadeInAnimation]": 'true'
    },
    animations: [ fadeInAnimation ]
})
export class SensorsComponent implements OnInit  {

  sensors: any;
  sensorsOptions: any;
  public customStyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

  lat: number = 50.937531;
  lng: number = 6.960278600000038;
  constructor( 
      private pageTitleService: PageTitleService
  ) { }
  
  ngOnInit() {
    this.pageTitleService.setTitle("Home");

    this.sensors = [
      {sensor_id:64, sensor_name_tx:"Curtain5 status", sensor_value_tx:"Overloaded open", serialnum_tx:"9386", mod_dt:"2017-05-13 23:41:48"},
      {sensor_id:12, sensor_name_tx:"Curtain 2 status T1", sensor_value_tx:"Disconnected", serialnum_tx:"2416", mod_dt:"2017-05-13 17:41:48"},
      {sensor_id:36, sensor_name_tx:"Curtain 4 status T2", sensor_value_tx:"Disconnected", serialnum_tx:"4234", mod_dt:"2017-05-13 13:41:47"},
      {sensor_id:63, sensor_name_tx:"MPH", sensor_value_tx:"8.4", serialnum_tx:"7357", mod_dt:"2017-05-13 2:41:33"},
      {sensor_id:74, sensor_name_tx:"Precipitation", sensor_value_tx:"No rain", serialnum_tx:"3491", mod_dt:"2017-05-13 10:41:36"},
      {sensor_id:21, sensor_name_tx:"Probe#1", sensor_value_tx:" 55.8", serialnum_tx:"4809", mod_dt:"2017-05-13 7:41:31"},
      {sensor_id:33, sensor_name_tx:" Probe 2 A01", sensor_value_tx:" 41.1", serialnum_tx:"6693", mod_dt:"2017-05-13 23:41:31"},
      {sensor_id:23, sensor_name_tx:"Probe 3 A02", sensor_value_tx:" 28.9", serialnum_tx:"4404", mod_dt:"2017-05-13 8:41:32"},
      {sensor_id:56, sensor_name_tx:"T14", sensor_value_tx:"Working", serialnum_tx:"9773", mod_dt:"2017-05-13 10:41:38"},
      {sensor_id:51, sensor_name_tx:"Wind direction", sensor_value_tx:"N", serialnum_tx:"9585", mod_dt:"2017-05-13 12:41:36"}
    ];

    this.sensorsOptions = [
      {class:"mat-blue-800", icon: "remove_red_eye"},
      {class:"mat-red-600", icon: "whatshot"},
      {class:"mat-cyan", icon: "assessment"},
      {class:"mat-green", icon: "new_releases"},
      {class:"mat-brown", icon: "wb_sunny"},
      {class:"mat-blue-800", icon: "notifications_none"},
      {class:"mat-red-600", icon: "notifications"},
      {class:"mat-cyan", icon: "notifications_active"},
      {class:"mat-green", icon: "not_interested"},
      {class:"mat-brown", icon: "arrow_forward"}
    ];
  }
}
