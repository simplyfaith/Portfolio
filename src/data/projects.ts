import eatsnowImage from "../assets/images/eatsnow-1.png";
import eatsnow1 from "../assets/images/eatsnow-1.png";
import eatsnow2 from "../assets/images/eatsnow-2.png";
import eatsnow3 from "../assets/images/eatsnow-3.png";

import gotelafricaImage from "../assets/images/gotelafrica-1.png";
import gotelafrica1 from "../assets/images/gotelafrica-1.png";
import gotelafrica2 from "../assets/images/gotelafrica-2.png";
import gotelafrica3 from "../assets/images/gotelafrica-3.png";

import farmtofirmImage from "../assets/images/sav.png";
import farmtofirm1 from "../assets/images/sav-2.png";
import farmtofirm2 from "../assets/images/sav-1.png";
import farmtofirm3 from "../assets/images/sav-1.png";

import brandingImage from "../assets/images/jet.jpg";
import branding1 from "../assets/images/Jet-1.jpg";
import branding2 from "../assets/images/jet.jpg";
import branding3 from "../assets/images/wire-2.jpg";

export const projects = [
  {
    id: "eatsnow",
    title: "EatsNow (Final Year Project)",
    description: "Food delivery platform with vendor dashboards and payment systems",
    image: eatsnowImage,
    tags: ["Product Management", "Development", "UX Design"],
    link: "https://github.com/simplyfaith",
    longDescription: `EatsNow is a  food delivery platform developed as my final year project. 
    The platform connects local restaurants with students and staffs in the campus environment , providing a seamless ordering experience of healthy meals.`,
    features: [
      "Display of meals from local vendors around the campus",
      "Vendor dashboard for restaurant management",
      "Secure payment integration (Using Paystack) ",
      "Simple registration for student and vendors" ,
      "Responsive design on  all devices "
    ],
    technologies: [
      "React Native for mobile app",
      "PHP backend",
      "Paystack payment integration"
    ],
    additionalImages: [eatsnow1, eatsnow2, eatsnow3]
  },
  {
    id: "gotelafrica",
    title: "GotelAfrica Website (Internhip)",
    description: "Redesigned company website improving UX and engagement",
    image: gotelafricaImage,
    tags: ["Web Development", "UI/UX"],
    link: "https://africa-intern.netlify.app",
    longDescription: `A complete redesign of GotelAfrica's web presence, focusing on improved user experience and increased customer engagement.`,
    features: [
      "Responsive design for all devices",
      "Optimized user journey",
      "Interactive service showcase",
      "Integrated contact forms"
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "FontAwesome"
    ],
    additionalImages: [gotelafrica1, gotelafrica2, gotelafrica3]
  },
  {
    id: "farmtofirm",
    title: "Savory Kitchen",
    description: "Connecting farmers directly with businesses through an innovative platform",
    image: farmtofirmImage,
    tags: ["Web Development", "E-commerce"],
    link: "https://savoury-res.tiiny.site",
    longDescription: `This website a demo restaurant landing page of a fictious kitchen in Abuja!.`,
    features: [
      "Interior display of the restaurant",
      "Menue listings with high-quality images",
      "Reservation Section for customers",
      "Responive"
    ],
    technologies: [
      "HTML",
      "CSS",
    ],
    additionalImages: [farmtofirm1, farmtofirm2, farmtofirm3]
  },
  {
    id: "brandingwebsite",
    title: "Flight Booking App (Gymnasium Course Project)",
    description: "Helping businesses establish a strong and lasting brand identity",
    image: brandingImage,
    tags: ["UX Design", "Flight Booking" ,"Mobile App Design"],
    link: "https://drive.google.com/file/d/1x6WLk9hToI5Rw2uvV8CDP5_KL9pHiDyE/view?usp=drive_link",
    longDescription: `Jet is a mobile app for flight booking, after observing the users on other flight booking application, this the OVERALL NOTES 
    
Five User Goals 

1. Goal: to be able to book a flight at their convenience 
2. Goal: to be able to remember the name of the application
3. Goal: to be able to see flight fees in their local currencies
4. Goal: to be able to use the application in a simplified format
5. Goal: the application should not be overcrowded with information that are not related to booking a flight

Five User Problems 

1. Problem: the complexity of the flight booking application
2. Problem: currencies dollars instead of their local currency
3. Problem: unable to see available flights
 4. Problem: navigating through the application to book a flight
5. Problem: the application how is to  complex for new users
 `,
    features: [
      "Short and simple name for the app",
      "Currency change pop-up setting",
      "See available flights easily",
      "See flights in different price category (Cheap , Fastest , Best Value) "
    ],
    technologies: [
      "FigJam",
      "Figma",
      "Pen and paper for low fidelity sketch"
    ],
    additionalImages: [branding1, branding2, branding3]
  }
];
