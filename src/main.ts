import { bootstrapApplication } from '@angular/platform-browser';
import { TeamComponent } from './app/teams/teams.component';  // Ensure this path is correct
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(TeamComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
