import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowLayoutRouting } from './flow-layout.routing';
import { PieceBuilderComponent } from './page/flow-builder/piece-builder.component';
import { FlowBuilderHeaderComponent } from './page/flow-builder/flow-builder-header/flow-builder-header.component';
import { FlowItemComponent } from './page/flow-builder/flow-item-tree/flow-item/flow-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlowRightSidebarComponent } from './page/flow-builder/flow-right-sidebar/flow-right-sidebar.component';
import { FlowBuilderTabsComponent } from './page/flow-builder/flow-builder-tabs/flow-builder-tabs.component';

import { CommonLayoutModule } from '../common-layout/common-layout.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatExpansionModule } from '@angular/material/expansion';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ChevronDropdownMenuComponent } from './components/chevron-dropdown-menu/chevron-dropdown-menu.component';
import { FlowBuilderTabComponent } from './page/flow-builder/flow-builder-tabs/flow-builder-tab/flow-builder-tab.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlowItemTreeComponent } from './page/flow-builder/flow-item-tree/flow-item-tree.component';
import { SimpleLineConnectionComponent } from './page/flow-builder/flow-item-tree/flow-item/flow-item-connection/simple-line-connection/simple-line-connection.component';
import { LoopLineConnectionComponent } from './page/flow-builder/flow-item-tree/flow-item/flow-item-connection/loop-line-connection/loop-line-connection.component';
import { StepResultComponent } from './page/flow-builder/flow-left-sidebar/run-details/steps-results-list/step-result.component';
import { SelectedStepResultComponent } from './page/flow-builder/flow-left-sidebar/run-details/selected-step-result/selected-step-result.component';
import { IterationAccordionComponent } from './page/flow-builder/flow-left-sidebar/run-details/steps-results-list/iteration-accordion/iteration-accordion.component';
import { NewEditPieceSidebarComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/new-edit-piece-sidebar.component';
import { StepTypeSidebarComponent } from './page/flow-builder/flow-right-sidebar/step-type-sidebar/step-type-sidebar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StepTypItemComponent } from './page/flow-builder/flow-right-sidebar/step-type-sidebar/step-type-item/step-type-item.component';
import { StepTypeListComponent } from './page/flow-builder/flow-right-sidebar/step-type-sidebar/step-type-list/step-type-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PieceSettingsComponent } from './page/flow-builder/flow-left-sidebar/piece-settings/piece-settings.component';
import { StoreModule } from '@ngrx/store';
import { pieceReducer } from './store/reducer/piece.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PieceEffects } from './store/effect/piece.effects';
import { flowsReducer } from './store/reducer/flows.reducer';
import { FlowsEffects } from './store/effect/flow.effects';
import { viewModeReducer } from './store/reducer/view-mode.reducer';
import { CreateNewFlowModalComponent } from './page/flow-builder/flow-right-sidebar/create-new-flow-modal/create-new-flow-modal.component';
import { AddNpmPackageModalComponent } from './page/flow-builder/code-editor/add-npm-package-modal/add-npm-package-modal.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { VariableSidebarComponent } from './page/flow-builder/flow-left-sidebar/configs-sidebar/configs-sidebar.component';

import { ViewModeEffects } from './store/effect/viewMode.effects';
import { HttpClientModule } from '@angular/common/http';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlowItemConnectionComponent } from './page/flow-builder/flow-item-tree/flow-item/flow-item-connection/flow-item-connection.component';
import { FlowItemContentComponent } from './page/flow-builder/flow-item-tree/flow-item/flow-item-content/flow-item-content.component';
import { RunDetailsComponent } from './page/flow-builder/flow-left-sidebar/run-details/run-details.component';
import { TestFlowModalComponent } from './components/test-flow-modal/test-flow-modal.component';
import { FlowLeftSidebarComponent } from './page/flow-builder/flow-left-sidebar/flow-left-sidebar.component';
import { TestRunBarComponent } from './page/flow-builder/test-run-bar/test-run-bar.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import { CodeEditorComponent } from './page/flow-builder/code-editor/code-editor.component';
import { CollectionVersionSidebarComponent } from './page/flow-builder/flow-right-sidebar/collection-version-sidebar/collection-version-sidebar.component';
import { TestCodeModalComponent } from './page/flow-builder/code-editor/test-code-modal/test-code-modal.component';
import { FlowVersionSidebarComponent } from './page/flow-builder/flow-right-sidebar/flow-version-sidebar/flow-version-sidebar.component';
import { flowItemsDetailsReducer } from './store/reducer/flow-items-details.reducer';
import { FlowItemsDetailsEffects } from './store/effect/flow-items-details.effects';
import { EditStepAccordionComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/edit-step-accodion.component';
import { DescribeFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/describe-form/describe-form.component';
import { CodeStepInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/code-step-input-form/code-step-input-form.component';
import { StorageStepInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/storage-step-input-form/storage-step-input-form.component';
import { LoopStepInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/loop-step-input-form/loop-step-input-form.component';
import { ResponseStepInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/response-step-input-form/response-step-input-form.component';
import { ScheduleTriggerInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/schedule-trigger-input-form/schedule-trigger-input-form.component';
import { EventTriggerInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/event-trigger-input-form/event-trigger-input-form.component';
import { RemoteFlowInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/remote-flow-input-form/remote-flow-input-form.component';
import { ConfigCardComponent } from './page/flow-builder/flow-left-sidebar/configs-sidebar/config-card/config-card.component';
import { VariableListComponent } from './page/flow-builder/flow-left-sidebar/configs-sidebar/configs-list/configs-list.component';
import { CreateEditConfigModalComponent } from './page/flow-builder/flow-left-sidebar/create-or-edit-config-modal/create-or-edit-config-modal.component';
import { DefaultConfigTypeSettingsComponent } from './page/flow-builder/flow-left-sidebar/create-or-edit-config-modal/default-config-type-settings/default-config-type-settings.component';
import { DropdownConfigSettingsComponent } from './page/flow-builder/flow-left-sidebar/create-or-edit-config-modal/dropdown-config-settings/dropdown-config-settings.component';
import { OAuth2ConfigSettingsComponent } from './page/flow-builder/flow-left-sidebar/create-or-edit-config-modal/o-auth2-config-settings/o-auth2-config-settings.component';
import { StaticDropDownOptionsComponent } from './page/flow-builder/flow-left-sidebar/create-or-edit-config-modal/dropdown-config-settings/static-drop-down-options/static-drop-down-options.component';
import { ComponentInputFormComponent } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/component-input-form/component-input-form.component';
import { ConnectorAuthConfigsFinder } from './page/flow-builder/flow-right-sidebar/new-edit-piece-sidebar/edit-step-accordion/input-forms/remote-flow-input-form/connector-auth-config-finder.pipe';
import { NewAuthenticationModalComponent } from './page/flow-builder/flow-right-sidebar/new-authentication-modal/new-authentication-modal.component';
import { EmbedModalComponent } from './page/flow-builder/flow-builder-header/embed-modal/embed-modal.component';
import { PublishPopoverComponent } from './page/flow-builder/flow-builder-header/publish-popover/publish-popover.component';
import { TrackFocusDirective } from './page/flow-builder/flow-left-sidebar/run-details/steps-results-list/track-focus.directive';
import { CenterMatMenuDirective } from './components/chevron-dropdown-menu/center-mat-menu.directive';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild(FlowLayoutRouting),
		FormsModule,
		ReactiveFormsModule,
		MatSidenavModule,
		CommonLayoutModule,
		CodemirrorModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule,
		DragDropModule,
		ModalModule.forRoot(),
		TimepickerModule.forRoot(),
		AngularSvgIconModule.forRoot(),
		EffectsModule.forFeature([PieceEffects, FlowsEffects, ViewModeEffects, FlowItemsDetailsEffects]),
		StoreModule.forFeature('builderState', {
			pieceState: pieceReducer,
			flowsState: flowsReducer,
			viewMode: viewModeReducer,
			flowItemsDetailsState: flowItemsDetailsReducer,
		}),
		TabsModule,
		FontAwesomeModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		TooltipModule,
		MonacoEditorModule,
	],
	providers: [BsModalService],
	declarations: [
		PieceBuilderComponent,
		FlowBuilderHeaderComponent,
		FlowItemComponent,
		ChevronDropdownMenuComponent,
		FlowRightSidebarComponent,
		FlowBuilderTabsComponent,
		FlowBuilderTabComponent,
		FlowItemTreeComponent,
		FlowItemConnectionComponent,
		FlowItemContentComponent,
		FlowLeftSidebarComponent,
		VariableListComponent,
		TestFlowModalComponent,
		RunDetailsComponent,
		TestRunBarComponent,
		SidebarHeaderComponent,
		FlowVersionSidebarComponent,
		CodeEditorComponent,
		TestCodeModalComponent,
		CollectionVersionSidebarComponent,
		NewEditPieceSidebarComponent,
		StepTypItemComponent,
		StepTypeListComponent,
		StepTypeSidebarComponent,
		PieceSettingsComponent,
		CreateEditConfigModalComponent,
		CreateNewFlowModalComponent,
		AddNpmPackageModalComponent,
		VariableSidebarComponent,
		StepResultComponent,
		SimpleLineConnectionComponent,
		LoopLineConnectionComponent,
		SelectedStepResultComponent,
		IterationAccordionComponent,
		EditStepAccordionComponent,
		DescribeFormComponent,
		ResponseStepInputFormComponent,
		LoopStepInputFormComponent,
		StorageStepInputFormComponent,
		CodeStepInputFormComponent,
		ScheduleTriggerInputFormComponent,
		EventTriggerInputFormComponent,
		ConfigCardComponent,
		RemoteFlowInputFormComponent,
		DefaultConfigTypeSettingsComponent,
		DropdownConfigSettingsComponent,
		OAuth2ConfigSettingsComponent,
		StaticDropDownOptionsComponent,
		ComponentInputFormComponent,
		ConnectorAuthConfigsFinder,
		NewAuthenticationModalComponent,
		PublishPopoverComponent,
		EmbedModalComponent,
		TrackFocusDirective,
		CenterMatMenuDirective,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [FlowBuilderHeaderComponent],
})
export class FlowLayoutModule {}
