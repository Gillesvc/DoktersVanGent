import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Arts } from '../arts';
import { ArtsService } from '../arts.service';
@Component({
  selector: 'app-arts-detail',
  templateUrl: './arts-detail.component.html',
  styleUrls: ['./arts-detail.component.css']
})
export class ArtsDetailComponent implements OnInit {
  @Input() arts: Arts;
  constructor(  private route: ActivatedRoute,
    private artsenService: ArtsService,
    private location: Location) { }

  ngOnInit() {
    this.getArts();
  }
  getArts(): void{
    const id = +this.route.snapshot.paramMap.get('fid');
    console.log(id);
    this.artsenService.getArts(id.toString())
       .subscribe(arts => this.arts = arts);
  }

  getMapsUrl(arts): string{
    let url = "https://maps.google.com/maps?q="+arts.lat+","+arts.long+"&hl=es;z=14&amp;output=embed";
    return url;
  }

}
