import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CompanyProfile } from './model/user';


@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const companyList  :CompanyProfile[]= [
            {   id: 1,
                companyName: "yap",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }
                ]
            },
            
            {
                id: 2,
                companyName: "yap",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }
                ]
            }, {
                id: 3,
                companyName: "sss",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }, {
                        type: "Twitter",
                        link: "igdd.com"
                    }
                ]
            }, {
                   id: 4,
                companyName: "ysaasap",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }
                ]
            }, {
                   id: 5,
                companyName: "yasddsp",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }
                ]
            },
            {
                id: 6,
                companyName: "yap",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }
                ]
            },
            {
                id: 7,
                companyName: "yap",
                phoneNo: "129771576",
                email: "yap@gmail.com",
                website: "yap.com",
                socialmedia: [
                    {
                        type: "Instagram",
                        link: "ig.com"
                    }
                ]
            },
        ];
        return { companyList };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: CompanyProfile[]): number |undefined{
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id!)) + 1 : 11;
    }
   
}


