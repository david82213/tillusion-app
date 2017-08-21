import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  name:string = "Location Page";
  location:Location;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getLocations().subscribe((locations) => {
      console.log(locations);
    });
  }

  addLocation(location) {
    console.log(location);
    return false;
  }

}

interface Location {
  locationName:string,
  description:string,
  zipCode:string,
  province:string,
  country:string,
  city:string,
  address:string
}
