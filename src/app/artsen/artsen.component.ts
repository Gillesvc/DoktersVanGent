import { Component, OnInit } from '@angular/core';
import { Arts } from '../arts';
import { ArtsService } from '../arts.service'
@Component({
  selector: 'app-artsen',
  templateUrl: './artsen.component.html',
  styleUrls: ['./artsen.component.css']
})
export class ArtsenComponent implements OnInit {

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterArtsen = this.listFilter ? this.performFilter(this.listFilter) : this.artsen;
  }
  filterArtsen: Arts[];
  artsen: Arts[];
  /*selectedArts: Arts;*/

  getArtsen(): void {
    let result;
    var dokters = this.artsService.getDokters().subscribe(data => {
      result = data;
      console.log(result[5]);
    });
    // console.log("test " + dokters.forEach);
    // .subscribe(artsen => {
    //   this.artsen = artsen;
    //     this.filterArtsen = this.artsen;
    // }); 
    console.log(result);
  }
  constructor(private artsService: ArtsService) { }
  performFilter(filterBy: string): Arts[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.artsen.filter((arts: Arts) =>
      arts.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit() {
    this.getArtsen();
  }
  /* onSelect(arts: Arts): void {
    this.selectedArts = arts;
  } */
}
