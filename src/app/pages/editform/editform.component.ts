import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/api.service';
import { PopupType } from 'src/app/component/alertdialog/alert-type.enum';
import { AlertdialogComponent } from 'src/app/component/alertdialog/alertdialog.component';

import { CompanyProfile, Socialmedia } from 'src/app/model/user';
interface SocialTYPE {
  name: string;
  value: string;
}
@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
  
export class EditformComponent implements OnInit {


  constructor(private cf: ChangeDetectorRef, private dialog: MatDialog, private heroService: HeroService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }


  currentData!: CompanyProfile;
  submitted = false;
  submitData!: CompanyProfile;
  registerForm!: FormGroup;
  public file: any;
  urls: any[] = [];
  multiples: any[] = [];
  dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  phoneRegex: RegExp = /^(\+?1)[0|1|2|3|4|6|7|8|9]\-*[0-9]{7,8}$/
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  id = this.route.snapshot.params['id'];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  companyFormControl = new FormControl('', [Validators.required]);

  dialogRef!: MatDialogRef<AlertdialogComponent>;
  telFormControl = new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex)]);
 //mediaArr = new FormArray([...this.createSocialForm(this.currentData.socialmedia!)])
  socialtype: SocialTYPE[] = [
    { name: 'Facebook', value: 'Facebook' },
    { name: 'Instagram', value: 'Instagram' },
    { name: 'Twitter', value: 'Twitter' },
    { name: 'Telegram', value: 'Telegram' },
  ];
  
  ngOnInit(): void {

    console.log(this.id);
    this.heroService.getHero(this.id).subscribe((data) => {
      this.currentData = data;
      this.registerForm = this.formBuilder.group({
        date: this.formBuilder.control('', [Validators.required]),
         companyName: this.formBuilder.control(this.currentData.companyName, [Validators.required]),
         phoneNo: this.formBuilder.control(this.currentData.phoneNo, [Validators.required, Validators.pattern(this.phoneRegex)]),
         email: this.formBuilder.control(this.currentData.email, [Validators.required, Validators.email]),
         website: this.formBuilder.control(this.currentData.website, [Validators.required, Validators.pattern(this.urlRegex)]),

      socialmedia: this.formBuilder.array([...this.createSocialForm(this.currentData.socialmedia!)])
    }, {

    });
    })
 
   
  }

  onSelectFile(event : any) {
    this.file = event.target.files && event.target.files.length;
    if (this.file > 0 && this.file < 15) {
      let i: number = 0;
      for (const singlefile of event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(singlefile);
        this.urls.push(singlefile);
        this.cf.detectChanges();
        i++;
        console.log(this.urls);
        reader.onload = (event) => {
          const url = (<FileReader>event.target).result as string;
          this.multiples.push(url);
          this.cf.detectChanges();
        };
        console.log(singlefile);
      }
    }
  }
  removeimage(index :number) {
    this.multiples.splice(index, 1);
  }
  openInfoDialog(title: string, message: string, goBack: boolean = false) {
    this.dialogRef = this.dialog.open(AlertdialogComponent, {
      disableClose: true
    });
    this.dialogRef.componentInstance.type = PopupType.alert;
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    // this.dialogRef.afterClosed().subscribe((result: boolean) => {
    //   if (result)
    //     this.heroService.deleteHero(id).subscribe(() => {
    //       this.getHeroes();
    //     });
    // })
  }

  get socialmedia() {
    return this.registerForm.get("socialmedia") as FormArray;
  }
  createSocialForm(count: Socialmedia[]) {
    const arr: any = [];
    
    count.forEach(obj => {
      console.log(obj)
      arr.push(this.socialForm(obj.link!, obj.type!));

    });
    //  console.log(arr)
    return arr;
  }
  socialForm(link: String, type: String): FormGroup {
    const sgroup = this.formBuilder.group(
      {
        type: this.formBuilder.control(type, Validators.required),
        link: this.formBuilder.control(link, [Validators.required, Validators.pattern(this.urlRegex)
        ]),
      }
    );

    //console.log(sgroup);
    return sgroup;
  }
  removeSocialAcc(i: Required<number>) {
    if (i == 0) {
      this.openInfoDialog('Info', 'At least one social account is needed!!');
      // alert("At least one social account is needed!!");
      return;
    }
    this.socialmedia.removeAt(i);
  }

  addSocialAcc() {
    this.socialmedia.push(this.socialForm('',''));
  }
  onSubmit(post: CompanyProfile, isValid: any) {
    this.submitted = true;
    console.log(post);
    console.log('this.registerForm')
    if (!isValid) {
      console.log("invalid")
      return;
    }
    const myBody = { companyName: post.companyName, phoneNo: post.phoneNo, email: post.email, website: post.website, socialmedia: post!.socialmedia, id: this.currentData.id } as CompanyProfile;
    // this.heroService.updateHero(myBody, this.currentData.id).subscribe();
    // this.dialogInfoRef.close();
  }

  get f() { return this.registerForm.controls; }
}
