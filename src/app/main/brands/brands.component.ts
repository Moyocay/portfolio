import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesCloud!: any[];
  public slidesWeb!: any[];
  public slidesLanguage!: any[];
  public slidesDatabase!: any[];

  // public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesCloud = [
      {
        id: 1,
        src: "assets/img/firebase-logo.png",
        alt: "Firebase",
        title: "Firebase",
        style: {
          width: "15%",
          height: "15%"
        }
      },
      {
        id: 2,
        src: "assets/img/aws-logo.png",
        alt: "AWS",
        title: "AWS",
        style: {
          width: "8%",
          height: "8%"
        }
      },
      {
        id: 3,
        src: "assets/img/google-logo.png",
        alt: "GoogleCloud",
        title: "Google Cloud",
        style: {
          width: "15%",
          height: "15%"
        }
      }
    ];

    this.slidesWeb = [
      {
        id: 5,
        src: "assets/img/react-logo.png",
        alt: "React",
        title: "React",
        style: {
          width: "15%",
          height: "15%"
        }
      },
      {
        id: 6,
        src: "assets/img/angular-logo.png",
        alt: "Angular",
        title: "Angular",
        style: {
          width: "15%",
          height: "15%"
        }
      },
      {
        id: 7,
        src: "assets/img/web-logo.png",
        alt: "Web",
        title: "Web",
        style: {
          width: "15%",
          height: "15%"
        }
      },
      
    ];

    this.slidesLanguage = [
      {
        id: 1,
        src: "assets/img/flutter-logo.png",
        alt: "Flutter",
        title: "Flutter",
        style: {
          width: "15%",
          height: "15%"
        }
      },
      {
        id: 11,
        src: "assets/img/dotnet-logo.svg",
        alt: "DotNetCore",
        title: "Microsoft .NET Core",
        style: {
          width: "10%",
          height: "10%"
        }
      },
      {
        id: 11,
        src: "assets/img/java-logo.png",
        alt: "Java",
        title: "Java",
        style: {
          width: "8%",
          height: "8%"
        }
      },
    ];

    this.slidesDatabase = [
      {
        id: 8,
        src: "assets/img/mysql-logo.png",
        alt: "MySQL",
        title: "MySQL",
        style: {
          width: "10%",
          height: "10%"
        }
      },
      {
        id: 9,
        src: "assets/img/mssql-logo.png",
        alt: "MSSQL",
        title: "Microsoft SQL Server",
        style: {
          width: "15%",
          height: "15%"
        }
      },
      {
        id: 10,
        src: "assets/img/mongodb-logo.png",
        alt: "MongoDB",
        title: "MongoDB",
        style: {
          width: "15%",
          height: "15%"
        }
      },
    ];
  }
}
