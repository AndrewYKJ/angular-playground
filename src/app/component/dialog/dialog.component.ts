import { group } from '@angular/animations';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { HeroService } from 'src/app/api.service';
import { CompanyProfile, Socialmedia } from 'src/app/model/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  selectedProductList: CompanyProfile;
  constructor(
    public dialogInfoRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
    private formBuilder: FormBuilder,
    private heroService: HeroService,
  ) {
    dialogInfoRef.disableClose = false;
    this.selectedProductList = this.dialogData.products;
  
  }
  currentData: CompanyProfile = this.dialogData.products;
  submitted = false;
  submitData!: CompanyProfile;
  registerForm!: FormGroup;
  phoneRegex: RegExp = /^(\+?6?01)[0|1|2|3|4|6|7|8|9]\-*[0-9]{7,8}$/
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;


  ngOnInit(): void {
   // console.log(this.selectedProductList);
    this.registerForm = this.formBuilder.group({
      companyName: this.formBuilder.control(this.currentData.companyName, [Validators.required]),
      phoneNo: this.formBuilder.control(this.currentData.phoneNo, [Validators.required, Validators.pattern(this.phoneRegex)]),
      email: this.formBuilder.control(this.currentData.email, [Validators.required, Validators.email]),
      website: this.formBuilder.control(this.currentData.website, [Validators.required, Validators.pattern(this.urlRegex)]),

      socialmedia: this.formBuilder.array([...this.createSocialForm(this.currentData.socialmedia!)])
    });
   
  }

  get socialmedia() {
    return this.registerForm.get("socialmedia") as FormArray;
  }
   createSocialForm(count: Socialmedia[]) {
     const arr : any=[];
     count.forEach(obj => {
       arr.push(this.socialForm(obj.link!, obj.type!));
     
     });
    //  console.log(arr)
    return arr;
  }
  socialForm(link: String, type: String): FormGroup {
    const sgroup =this.formBuilder.group(
      {
        type: this.formBuilder.control(type, Validators.required),
        link: this.formBuilder.control(link, [Validators.required, Validators.pattern(this.urlRegex)
        ]),
      }
    );
    
   //console.log(sgroup);
    return sgroup;
  }

  addSocialAcc() {
    this.socialmedia.push(this.socialForm('',''));
  }

  removeSocialAcc(i: Required<number>) {
    if (i == 0) {
      alert("At least one social account is needed!!");
      return;
    }
    this.socialmedia.removeAt(i);
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
    this.heroService.updateHero(myBody,this.currentData.id).subscribe();
    this.dialogInfoRef.close();
    }

  get f() { return this.registerForm.controls; }
  closeDialog() {
    this.dialogInfoRef.close();
  }
}
