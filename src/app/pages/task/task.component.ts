import { Component, HostListener, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HeroService } from 'src/app/api.service';
import { CompanyProfile } from 'src/app/model/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertdialogComponent } from 'src/app/component/alertdialog/alertdialog.component';
import { PopupType } from 'src/app/component/alertdialog/alert-type.enum';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  submitData!: CompanyProfile;
  registerForm!: FormGroup;
  isLoading: boolean = false;
  submitted = false;
  social!: FormGroup;
  result: any;
  phoneRegex: RegExp = /^(\+?6?01)[0|1|2|3|4|6|7|8|9]\-*[0-9]{7,8}$/
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  editDetailDialog!: MatDialogRef<DialogComponent>;
  dialogRef!: MatDialogRef<AlertdialogComponent>;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder, private heroService: HeroService,
    private dialog: MatDialog,) { }



  ngOnInit() {
    this.getHeroes();
    this.registerForm = this.formBuilder.group({
     
      companyName: this.formBuilder.control('',[ Validators.required]),
      phoneNo: this.formBuilder.control('',[ Validators.required,Validators.pattern(this.phoneRegex)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      website: this.formBuilder.control('', [Validators.required, Validators.pattern(this.urlRegex)]),
     
      socialmedia: this.formBuilder.array([this.socialForm()])
    }, {
     
    });
  }


  get socialmedia() {
    return this.registerForm.get("socialmedia") as FormArray;
  }

  socialForm() {
    return this.formBuilder.group(
      {
        type: this.formBuilder.control('', Validators.required),
        link: this.formBuilder.control('', [Validators.required, Validators.pattern(this.urlRegex)
        ]),
      }
    );
  }

  addSocialAcc() {
    this.socialmedia.push(this.socialForm());
  }

  removeSocialAcc(i: Required<number>) {
    if (i == 0) {
      alert("At least one social account is needed!!");
      return;
    }
    this.socialmedia.removeAt(i);
  }


  get f() { return this.registerForm.controls; }

  onSubmit(post: any, isValid: any) {
    this.submitted = true;
    this.result = post;
    console.log(JSON.stringify(this.registerForm.value, null, 4))
    // stop here if form is invalid
    if (!isValid) {
      console.log("invalid")
      return;
    }
    
    this.add(post);
    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  add(name: CompanyProfile): void {
    this.submitData = name;
    console.log('name')
    console.log(name);
    if (!this.submitData) {
      console.log('failed');
      
      return;
    }
    this.heroService.addHero(name.companyName!, name.phoneNo!, name.email!, name.website!, name.socialmedia!).subscribe(
    ()=> { this.getHeroes();}
    );
    
    console.log('done');
  }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  heroes: CompanyProfile[] = [];
  dataSource: any;

  displayedColumns: string[] = ['companyName', 'phoneNo', 'email', 'website','action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getHeroes(): void {
    this.heroService.getCompanyList()
      .subscribe(heroes => {
        console.log(heroes)
        this.dataSource = new MatTableDataSource<CompanyProfile>(heroes);
        console.log(this.dataSource)
        this.heroes = heroes
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }
  @HostListener('window:keyup.esc') onKeyUp() {
    this.editDetailDialog.close();
    console.log('sdsadadsa');
  }

  onDelete(hero: CompanyProfile) {
    console.log(hero); 
    this.heroes = this.heroes.filter(h => h != hero);
    this.openInfoDialog('Confirmation', 'Once delete it will disapper',hero.id!);
   
  }

  openInfoDialog(title: string, message: string,id:number, goBack: boolean = false) {
    this.dialogRef = this.dialog.open(AlertdialogComponent, {
      disableClose: true
    });
    this.dialogRef.componentInstance.type = PopupType.confirm;
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    this.dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result)
      this.heroService.deleteHero(id).subscribe(() => {
      this.getHeroes();
      }); else {
        
    }
    })
  }

  editDetail(hero: CompanyProfile) {
  
    const myBody = {
      companyName: hero.companyName,
      phoneNo: hero.phoneNo,
      email: hero.email,
      website: hero.website,
      socialmedia: hero.socialmedia,
      id : hero.id
    };
    console.log('toEdit');
    this.router.navigate(['editform/' + hero.id]);
    // if (this.dialog.openDialogs.length > 0) {
    //   return;
    // }
   
    // this.editDetailDialog = this.dialog.open(DialogComponent, {
    //   panelClass: 'my-custom-dialog-class',
    //   data: {
    //     products: hero,
    //   },
    //   disableClose: false
      
    // });
    
   

    // this.editDetailDialog.afterClosed().subscribe((data) => {
    //   console.log('done edit')
    //   console.log(data);
    //   this.getHeroes();
    //   if (data != null) {
    //     console.log(data)
    //     // this.productList.push(data.data);
    //   }
    // });
  }
}
