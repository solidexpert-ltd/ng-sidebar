import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarContainer } from './sidebar-container.component';
import { Sidebar } from './sidebar.component';
import { CloseSidebar } from './close.directive';

@NgModule({
  imports: [CommonModule, SidebarContainer, Sidebar, CloseSidebar],
  exports: [SidebarContainer, Sidebar, CloseSidebar]
})
export class SidebarModule {
  static forRoot(): ModuleWithProviders<SidebarModule> {
    return {
      ngModule: SidebarModule
    };
  }
}
