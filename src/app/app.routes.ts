import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { TrackComponent } from './track/track.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { UniverstiygalleryComponent } from './universtiygallery/universtiygallery.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StaffhomepageComponent } from './staffhomepage/staffhomepage.component';
import { AboutdepartmentComponent } from './aboutdepartment/aboutdepartment.component';
import { DepartmenttoppersComponent } from './departmenttoppers/departmenttoppers.component';
import { AttendanceentryComponent } from './attendanceentry/attendanceentry.component';
import { MarksEntryComponent } from './marks-entry/marks-entry.component';
import { StudentspageComponent } from './studentspage/studentspage.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    {
        component: RegistrationComponent,
        path: 'myreg'

    },
    {
        component: TrackComponent,
        path: "trackcomp"
    },
    {
        component: ContactusComponent,
        path: 'Contact Us'
    },
    {
        component: LoginComponent,
        path: "login"
    },
    {
        component: UniverstiygalleryComponent,
        path: "Gallery"
    },
    {
        component: HomeComponent,
        path: "Home"
    },
    {
        component: AboutusComponent,
        path: "About US"
    },
    {
        component: StaffhomepageComponent,
        path: "Staffhomepage"
    },
    {
        component: AboutdepartmentComponent,
        path: "AboutDepartment"
    },
    {
        component: DepartmenttoppersComponent,
        path: "Departmenttoppers"

    },
    {
        component: AttendanceentryComponent,
        path: "Attendance Entry"
    },
    {
        component: MarksEntryComponent,
        path: "Marks Entry"

    },
    {
        path: '', redirectTo: 'Home', pathMatch: 'full'
    },
    {
        component:StudentspageComponent,
        path: "StudenthomePage"

    },{
        component: AdminComponent,
        path:"Admin Page"
    }

];
