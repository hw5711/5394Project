import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login/login.service";

interface josbtype {
  value: string;
  viewValue: string;
}

interface location {
  value: string;
  viewValue: string;
}

interface industry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-jobspage',
  templateUrl: './jobspage.component.html',
  styleUrls: ['./jobspage.component.css']
})
export class JobspageComponent implements OnInit {

  panelOpenState = false;
  jobtype = new FormControl();
  location = new FormControl();

  jobtypes: josbtype[] = [
    {value: 'Internship-0', viewValue: 'Internship'},
    {value: 'Co-op-1', viewValue: 'Co-op'},
    {value: 'Full Time-2', viewValue: 'Full Time'},
    {value: 'Part Time-3', viewValue: 'Part Time'}
  ];
  
  locations: location[] = [
    {value: 'Alabama-0', viewValue: 'Alabama'},
    {value:  'Alaska-1', viewValue: 'Alaska'},
    {value:  'Arizona-2', viewValue: 'Arizona'},
    {value:  'Arkansas-3', viewValue: 'Arkansas'},
    {value:  'California-4', viewValue: 'California'},
    {value: 'Colorado-5', viewValue: 'Colorado'},
    {value:  'Connecticut-6', viewValue: 'Connecticut'},
    {value:  'Delaware-7', viewValue: 'Delaware'},
    {value:  'Florida-8', viewValue: 'Florida'},
    {value:  'Georgia-9', viewValue: 'Georgia'},
    {value:  'Hawaii-10', viewValue: 'Hawaii'},
    {value:  'Idaho-11', viewValue: 'Idaho'},
    {value:  'Illinois-12', viewValue: 'Illinois'},
    {value: 'Indiana-13', viewValue: 'Indiana'},
    {value:  'Iowa-14', viewValue: 'Iowa'},
    {value:  'Kansas-15', viewValue: 'kanas'},
    {value:  'Kentucky-16', viewValue: 'Kentucky'},
    {value:  'Louisiana-17', viewValue: 'Louisiana'},
    {value:  'Maine-18', viewValue: 'Maine'},
    {value:  'Maryland-19', viewValue: 'Maryland'},
    {value:  'Massachusetts-20', viewValue: 'Massachusette' },
    {value: 'Michigan-21', viewValue: 'Michigan'},
    {value:  'Minnesota-22', viewValue: 'Minnesota'},
    {value:  'Mississippi-23', viewValue: 'Mississippi'},
    {value:  'Missouri-24', viewValue: 'Missouri'},
    {value:  'Montana-25', viewValue: 'Montana'},
    {value:  'Nebraska-26', viewValue: 'Nebraska'},
    {value:  'Nevada-27', viewValue: 'Neveda'},
    {value: 'New Hampshire-28', viewValue: 'New Hampshire'}, 
    {value:  'New Jersey-29', viewValue: 'New Jersey'},
    {value:  'New Mexico-30', viewValue: 'New Mexico'},
    {value:  'New York-31', viewValue: 'New York'},
    {value:  'North Carolina-32', viewValue: 'North Carolina'},
    {value:  'North Dakota-33', viewValue: 'North Dakota'},
    {value: 'Ohio-34', viewValue: 'Ohio'},
    {value:  'Oklahoma-35', viewValue: 'Oklahoma'},
    {value:  'Oregon-36', viewValue: 'Oregon'},
    {value:  'Pennsylvania-37', viewValue: 'Pennsylvania'},
    {value:  'Rhode Island-38', viewValue: 'Rhode Island'},
    {value:  'South Carolina-39', viewValue: 'South Carolina'},
    {value:  'South Dakota-40', viewValue: 'South Dakota'},
    {value: 'Tennessee-41', viewValue: 'Tennessee'},
    {value:  'Texas-42', viewValue: 'Texas'},
    {value:  'Utah-43', viewValue: 'Utah'},
    {value:  'Vermont-44', viewValue: 'Vermont'},
    {value:  'Virginia-45', viewValue: 'Virginia'},
    {value:  'Washington-46', viewValue: 'Washington'},
    {value:  'West Virginia-47', viewValue: 'West Viriginia'},
    {value:  'Wisconsin-48', viewValue: 'Wisconsin'},
    {value:  'Wyoming-49', viewValue: 'Wyoming'}
  ];

  industries: industry[] = [
    {value: 'Financial Service-0', viewValue: 'Financial Service'},
    {value: 'Accounting-1', viewValue: 'Accounting'},
    {value: 'Manufacturing-2', viewValue: 'Manufacturing'},
     {value: 'Real estate/ Construction-3', viewValue: 'Real estate/Construction'},
    {value: 'Marketing/Advertising/PR-4', viewValue: 'Marketing/Advertising/PR'},
    {value: 'Government/Education-5', viewValue: 'Government/Education'},
     {value: 'Consulting-6', viewValue: 'Consulting'},
    {value: 'Pharma/Biotech-7', viewValue: 'Pharma/Biotech'},
    {value: 'Technology/Science-8', viewValue: 'Technology/Science'},
     {value: 'Healthcare-9', viewValue: 'Healthcare'},
    {value: 'Aerospace-10', viewValue: 'Aerospace'},
    {value: 'Legal-11', viewValue: 'Legal'},
    {value: 'Transportation/Logistics-12', viewValue: 'Transportation/Logistics'},
    {value: 'Energy-13', viewValue: 'Energy'},
    {value: 'Sports/leisure-14', viewValue: 'Sports/leisure'},
    {value: 'Others-15', viewValue: 'Others'}
  ];

  // can_id: String;
  // fnamd: String;
  // lname: String;
  // phone: Number;
  // work_experience: [{
  //   company: String,
  //   title: String,
  //   start_date: Date,
  //   end_date: Date,
  //   description: String,
  // }];
  // education: [{
  //   school: String,
  //   dgree: String,
  //   major: String,
  //   start_year: Number,
  //   end_year: Number,
  // }];
  // updated: Boolean;

  constructor(
    // private http: HttpClient,
    // private loginService: LoginService,
    // public route: ActivatedRoute
  ) { }

  ngOnInit() {
   // this.can_id = this.loginService.getUserId();
  }

  //get candidate profile history
// getCandidateProfile(){
//   this.http
//     .get("http://localhost:3000/cand-profile/" + this.can_id)
//     .subscribe(CanData => {
//       this.fnamd = CanData["fname"];
//       this.lname = CanData["lname"];
//       this.phone = CanData["phone"];
//       this.work_experience = CanData["work_experience"];
//       this.education = CanData["education"];
//     })
// }

  //Update account info
  // SaveUpdate() {
  //   let candidateInfo = {
  //     _id: this.can_id,
  //     fnamd: this.fnamd,
  //     lname: this.lname,
  //     pnone: this.phone,
  //     work_experience: this.work_experience,
  //     eucation: this.education,
  //   };
  //   console.log("id is:", this.can_id);

  //   this.http
  //     .put("http://localhost:3000/cand-profile/" + this.can_id, candidateInfo)
  //     .subscribe(response => {
  //       console.log("res is :", response);
  //     });
  //   this.updated = true;
  // }

}


