import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyProfile } from 'src/app/model/user';

import { MatSort } from '@angular/material/sort';
import { HeroService } from 'src/app/api.service';
import { finalize } from 'rxjs';
import { Nutrient } from 'src/app/model/product/nutrient/nutrient';
import { ProductService } from 'src/app/services/api/product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: CompanyProfile[] = [];
  dataSource: any;

  constructor
    (private heroService: HeroService,
    private productService: ProductService) { }

  displayedColumns: string[] = ['companyName', 'phoneNo', 'email', 'website'];
  public total: any;
  nutrients: Nutrient[] | undefined = [];
  page = 1
  size = 5;
  pageLimit: number[] = [5, 10,20];
  currentPageIndex = 0;
  isLoading!: boolean;
 
  keyword!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
 // @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    //this.getHeroes();
  
  }
  ngAfterViewInit() {
    this.getList(true);
  }
  // getHeroes(): void {
  //   this.heroService.getCompanyList()
  //     .subscribe(heroes => {
  //       console.log(heroes)
  //       this.dataSource = new MatTableDataSource<CompanyProfile>(heroes);
  //       console.log(this.dataSource)
  //       this.heroes = heroes
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     });
   
  // }
  changePage(event: { pageIndex: number; pageSize: number; }) {
    this.page = event.pageIndex + 1;
    this.size = event.pageSize;
    this.currentPageIndex = event.pageIndex;
    this.getList();
  }
  onSearch() {
    if (this.keyword != null && this.keyword.length > 0) {
      this.getList(true, this.keyword);
    } else {
      this.getList(true);
    }
  }
  clear() {
    this.keyword = '';
      this.getList(true, this.keyword);
    
  }
  getList(reload?: boolean, keyword?: string) {
    this.isLoading = true;

    if (reload) {
      this.paginator.pageIndex = 0;
      this.page = 1;
    }

    this.productService.getNutrientList(this.page.toString(), this.size.toString(), keyword)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(data => {
        if (data!.data!.length > 0) {
          this.nutrients = data.data;
          this.dataSource = new MatTableDataSource<Nutrient>(data.data);
          this.total = data.total;
        } else {
          this.nutrients = [];
        }
      }, err => {
        console.error(err)
      });
  }

}

// const ELEMENT_DATA: CompanyProfile[] = [
//   { companyName : "yap",
//     phoneNo: "60129771576",
//     email: "yap@gmail.com",
//     website: "yap.com",
//     socialmedia: [
//       {
//         type: "Instagram",
//         link: "ig.com"
//       }
//     ] },
//   {
//     companyName: "yap",
//     phoneNo: "60129771576",
//     email: "yap@gmail.com",
//     website: "yap.com",
//     socialmedia: [
//       {
//         type: "Instagram",
//         link: "ig.com"
//       }
//     ]
//   },{ companyName : "sss",
//     phoneNo: "60129771576",
//     email: "yap@gmail.com",
//     website: "yap.com",
//     socialmedia: [
//       {
//         type: "Instagram",
//         link: "ig.com"
//       }
//     ] },{ companyName : "ysaasap",
//     phoneNo: "60129771576",
//     email: "yap@gmail.com",
//     website: "yap.com",
//     socialmedia: [
//       {
//         type: "Instagram",
//         link: "ig.com"
//       }
//     ] },{ companyName : "yasddsp",
//     phoneNo: "60129771576",
//     email: "yap@gmail.com",
//     website: "yap.com",
//     socialmedia: [
//       {
//         type: "Instagram",
//         link: "ig.com"
//       }
//     ] },
// ];