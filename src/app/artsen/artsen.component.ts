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
    this.filterArtsen = this.listFilter ? this.performFilter(this.listFilter) : this.getArtsen();
    console.log(this.filterArtsen);
  }
  filterArtsen: Arts[];
  artsen: Arts[];
  /*selectedArts: Arts;*/

  getArtsen(): Arts[] {
    let doks = [];
    var dokters = this.artsService.getDokters().subscribe(artsen => {
      artsen.forEach(function(doc){
        doks.push(doc);
      })
      this.filterArtsen = doks;
      this.artsen = doks;
      console.log(doks);
    });
    return doks;
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
  selectedArts;
  onSelect(arts: Arts): void {
    console.log(arts);
    this.selectedArts = arts;
  } 
}
