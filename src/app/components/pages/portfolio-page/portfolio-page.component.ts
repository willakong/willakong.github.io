import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PortfolioItem } from '../../../models/PortfolioItem';
import PortfolioJson from '../../../../assets/data/portfolio.json';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class PortfolioPageComponent implements OnInit {

  public portfolioItems: PortfolioItem[];

  public displayModal = false;
  public currPortfolioItem: PortfolioItem;

  constructor() { }

  ngOnInit(): void {
    this.portfolioItems = PortfolioJson.portfolio;
  }

  public showModal(item: PortfolioItem): void {
    console.log(item);
    this.currPortfolioItem = item;
    this.displayModal = true;
  }

  public hideModal(): void {
    this.currPortfolioItem = null;
    this.displayModal = false;
  }

}
